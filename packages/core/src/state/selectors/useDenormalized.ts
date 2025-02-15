import { State } from '@rest-hooks/core/types';
import { ReadShape, ParamsFromShape } from '@rest-hooks/core/endpoint/index';
import { DenormalizeNullable } from '@rest-hooks/endpoint';
import { Schema } from '@rest-hooks/endpoint';
import { useMemo } from 'react';
import useController from '@rest-hooks/core/react-integration/hooks/useController';
import shapeToEndpoint from '@rest-hooks/core/endpoint/adapter';
import type { ExpiryStatus } from '@rest-hooks/endpoint';

/**
 * @deprecated use https://resthooks.io/docs/api/Controller#getResponse directly instead
 *
 * Selects the denormalized form from `state` cache.
 *
 * If `result` is not found, will attempt to generate it naturally
 * using params and schema. This increases cache hit rate for many
 * detail shapes.
 *
 * @returns [denormalizedValue, ready]
 */
export default function useDenormalized<
  Shape extends Pick<
    ReadShape<Schema | undefined, any>,
    'getFetchKey' | 'schema' | 'options'
  >,
>(
  shape: Shape,
  params: ParamsFromShape<Shape> | null,
  state: State<any>,
  /** @deprecated */
  denormalizeCache?: any,
): {
  data: DenormalizeNullable<Shape['schema']>;
  expiryStatus: ExpiryStatus;
  expiresAt: number;
} {
  const controller = useController();

  const endpoint = useMemo(() => {
    return shapeToEndpoint(shape);
    // we currently don't support shape changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const key = params !== null ? endpoint.key(params) : '';
  const cacheResults = params && state.results[key];

  // Compute denormalized value
  return useMemo(() => {
    return controller.getResponse(endpoint, params, state) as {
      data: DenormalizeNullable<Shape['schema']>;
      expiryStatus: ExpiryStatus;
      expiresAt: number;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    cacheResults,
    state.indexes,
    state.entities,
    state.entityMeta,
    key,
    cacheResults,
  ]);
}
