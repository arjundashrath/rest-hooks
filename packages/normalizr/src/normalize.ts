import type {
  NormalizeNullable,
  NormalizedSchema,
  Schema,
  NormalizedIndex,
} from '@rest-hooks/normalizr/types';
import { DELETED } from '@rest-hooks/normalizr/special';
import { normalize as arrayNormalize } from '@rest-hooks/normalizr/schemas/Array';
import { normalize as objectNormalize } from '@rest-hooks/normalizr/schemas/Object';
import { isEntity } from '@rest-hooks/normalizr/entities/Entity';

const visit = (
  value: any,
  parent: any,
  key: any,
  schema: any,
  addEntity: any,
  visitedEntities: any,
) => {
  if (!value || !schema) {
    return value;
  }

  if (schema.normalize && typeof schema.normalize === 'function') {
    if (typeof value !== 'object') return value;
    return schema.normalize(
      value,
      parent,
      key,
      visit,
      addEntity,
      visitedEntities,
    );
  }

  // serializable
  if (typeof schema === 'function') {
    return new schema(value);
  }

  if (typeof value !== 'object' || typeof schema !== 'object') return value;

  const method = Array.isArray(schema) ? arrayNormalize : objectNormalize;
  return method(schema, value, parent, key, visit, addEntity, visitedEntities);
};

const addEntities =
  (
    entities: Record<string, any>,
    indexes: Record<string, any>,
    existingEntities: Record<string, any>,
    existingIndexes: Record<string, any>,
    entityMeta: {
      [entityKey: string]: {
        [pk: string]: {
          date: number;
          expiresAt: number;
        };
      };
    },
    meta: { expiresAt: number; date: number },
  ) =>
  (schema: any, processedEntity: any, id: any) => {
    const schemaKey = schema.key;
    if (!(schemaKey in entities)) {
      entities[schemaKey] = {};
      existingEntities[schemaKey] = { ...existingEntities[schemaKey] };
      entityMeta[schemaKey] = { ...entityMeta[schemaKey] };
    }

    const existingEntity = entities[schemaKey][id];
    if (existingEntity) {
      // TODO: maybe have distinct merge function for this case
      entities[schemaKey][id] = schema.merge(
        existingEntity,
        processedEntity,
        entityMeta[schemaKey][id],
        meta,
      );
    } else {
      // TODO: eventually assume this exists and don't check for conditional. probably early 2022
      const entityExpiresAt = schema.expiresAt
        ? schema.expiresAt(meta, processedEntity)
        : meta.expiresAt;

      const inStoreEntity = existingEntities[schemaKey][id];
      // this case we already have this entity in store
      if (inStoreEntity) {
        const inStoreMeta = entityMeta[schemaKey][id];
        const incomingMeta = meta;
        // if either of these is undefined, it resolves to 'false' which
        // means we fallback to 'newer' (processedEntity) takes priority
        const preferExisting = entityMeta[schemaKey][id]?.date > meta.date;
        if (typeof processedEntity !== typeof inStoreEntity) {
          entities[schemaKey][id] = preferExisting
            ? inStoreEntity
            : processedEntity;
        } else {
          // second argument takes priority over first
          entities[schemaKey][id] = preferExisting
            ? schema.merge(
                processedEntity,
                inStoreEntity,
                incomingMeta,
                inStoreMeta,
              )
            : schema.merge(
                inStoreEntity,
                processedEntity,
                inStoreMeta,
                incomingMeta,
              );
        }

        entityMeta[schemaKey][id] =
          entityMeta[schemaKey][id]?.expiresAt >= entityExpiresAt
            ? entityMeta[schemaKey][id]
            : { expiresAt: entityExpiresAt, date: meta.date };
      } else {
        entities[schemaKey][id] = processedEntity;
        entityMeta[schemaKey][id] = {
          expiresAt: entityExpiresAt,
          date: meta.date,
        };
      }
    }

    // update index
    if (Array.isArray(schema.indexes)) {
      const entity = entities[schemaKey][id];
      if (!(schemaKey in indexes)) {
        indexes[schemaKey] = {};
        existingIndexes[schemaKey] = { ...existingIndexes[schemaKey] };
      }
      for (const index of schema.indexes) {
        if (!(index in indexes[schemaKey])) {
          existingIndexes[schemaKey][index] = indexes[schemaKey][index] = {};
        }
        const indexMap = indexes[schemaKey][index];
        if (existingEntity) {
          delete indexMap[existingEntity[index]];
        }
        // entity already in cache but the index changed
        if (
          existingEntities[schemaKey] &&
          existingEntities[schemaKey][id] &&
          existingEntities[schemaKey][id][index] !== entity[index]
        ) {
          indexMap[existingEntities[schemaKey][id][index]] = DELETED;
        }
        if (index in entity) {
          indexMap[entity[index]] = id;
        } /* istanbul ignore next */ else if (
          // eslint-disable-next-line no-undef
          process.env.NODE_ENV !== 'production'
        ) {
          console.warn(`Index not found in entity. Indexes must be top-level members of your entity.
Index: ${index}
Entity: ${JSON.stringify(entity, undefined, 2)}`);
        }
      }
    }
    // set this after index updates so we know what indexes to remove from
    existingEntities[schemaKey][id] = entities[schemaKey][id];
  };

function expectedSchemaType(schema: Schema) {
  return ['object', 'function'].includes(typeof schema)
    ? 'object'
    : typeof schema;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const normalize = <
  S extends Schema = Schema,
  E extends Record<string, Record<string, any> | undefined> = Record<
    string,
    Record<string, any>
  >,
  R = NormalizeNullable<S>,
>(
  input: any,
  schema?: S,
  existingEntities: Readonly<E> = {} as any,
  existingIndexes: Readonly<NormalizedIndex> = {},
  existingEntityMeta: {
    readonly [entityKey: string]: {
      readonly [pk: string]: {
        readonly date: number;
        readonly expiresAt: number;
      };
    };
  } = {},
  meta: { expiresAt: number; date: number } = {
    date: Date.now(),
    expiresAt: Infinity,
  },
): NormalizedSchema<E, R> => {
  // no schema means we don't process at all
  if (schema === undefined)
    return {
      entities: existingEntities,
      indexes: existingIndexes,
      result: input,
      entityMeta: existingEntityMeta,
    };

  const schemaType = expectedSchemaType(schema);
  if (
    input === null ||
    (typeof input !== schemaType &&
      !((schema as any).key !== undefined && typeof input === 'string'))
  ) {
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      const parseWorks = (input: string) => {
        try {
          return typeof JSON.parse(input) !== 'string';
        } catch (e) {
          return false;
        }
      };
      if (typeof input === 'string' && parseWorks(input)) {
        throw new Error(`Normalizing a string, but this does match schema.

Parsing this input string as JSON worked. This likely indicates fetch function did not parse
the JSON. By default, this only happens if "content-type" header includes "json".
See https://resthooks.io/docs/guides/custom-networking for more information

  Schema: ${JSON.stringify(schema, undefined, 2)}
  Input: "${input}"`);
      } else {
        throw new Error(
          `Unexpected input given to normalize. Expected type to be "${schemaType}", found "${
            input === null ? 'null' : typeof input
          }".

          Schema: ${JSON.stringify(schema, undefined, 2)}
          Input: "${input}"`,
        );
      }
    } else {
      throw new Error(
        `Unexpected input given to normalize. Expected type to be "${schemaType}", found "${
          input === null ? 'null' : typeof input
        }".`,
      );
    }
  }

  const newEntities: E = {} as any;
  const newIndexes: NormalizedIndex = {} as any;
  const entities: E = { ...existingEntities } as any;
  const indexes: NormalizedIndex = { ...existingIndexes };
  const entityMeta: any = { ...existingEntityMeta };
  const addEntity = addEntities(
    newEntities,
    newIndexes,
    entities,
    indexes,
    entityMeta,
    meta,
  );
  const visitedEntities = {};

  const result = visit(
    input,
    input,
    undefined,
    schema,
    addEntity,
    visitedEntities,
  );
  return { entities, indexes, result, entityMeta };
};
