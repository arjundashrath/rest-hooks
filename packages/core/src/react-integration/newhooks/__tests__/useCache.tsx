import {
  CoolerArticleResource,
  PaginatedArticleResource,
  InvalidIfStaleArticleResource,
  GetNoEntities,
} from '__tests__/new';
import React, { useEffect } from 'react';

// relative imports to avoid circular dependency in tsconfig references
import { makeRenderRestHook, makeCacheProvider } from '../../../../../test';
import useCache from '../useCache';
import { articlesPages, payload, nested } from '../test-fixtures';

describe('useCache()', () => {
  let renderRestHook: ReturnType<typeof makeRenderRestHook>;
  beforeEach(() => {
    renderRestHook = makeRenderRestHook(makeCacheProvider);
  });

  it('should be null with empty state', () => {
    const { result } = renderRestHook(() => {
      return useCache(CoolerArticleResource.detail(), payload);
    }, {});
    // @ts-expect-error
    result.current?.doesnotexist;
    expect(result.current).toBe(undefined);
  });

  it('should read with no params Endpoint', async () => {
    const List = CoolerArticleResource.list().extend({
      fetch() {
        return CoolerArticleResource.list()({});
      },
    });
    const { result } = renderRestHook(
      () => {
        return useCache(List);
      },
      { initialFixtures: [{ endpoint: List, args: [], response: nested }] },
    );
    expect(result.current?.length).toEqual(nested.length);

    // @ts-expect-error
    () => useCache(List, 5);
    // @ts-expect-error
    () => useCache(List, {});
    // @ts-expect-error
    () => useCache(List, '5');
  });

  it('should read with id params Endpoint', async () => {
    const Detail = CoolerArticleResource.detail().extend({
      fetch(id: number) {
        return CoolerArticleResource.detail()({ id });
      },
    });
    const { result } = renderRestHook(
      () => {
        return useCache(Detail, 5);
      },
      { initialFixtures: [{ endpoint: Detail, args: [5], response: payload }] },
    );
    expect(result.current).toEqual(CoolerArticleResource.fromJS(payload));

    // @ts-expect-error
    () => useCache(Detail);
    // @ts-expect-error
    () => useCache(Detail, 5, 10);
    // @ts-expect-error
    () => useCache(Detail, {});
    // @ts-expect-error
    () => useCache(Detail, '5');
  });

  it('should return undefined in entities slots when results are not found', async () => {
    const userId = '5';
    const { result } = renderRestHook(() => {
      return useCache(GetNoEntities, { userId });
    });
    expect(result.current).toEqual({ firstThing: '', someItems: undefined });
  });

  it('should select singles', () => {
    const results = [
      {
        request: CoolerArticleResource.detail(),
        params: payload,
        result: payload,
      },
    ];
    const { result } = renderRestHook(
      () => {
        return useCache(CoolerArticleResource.detail(), payload);
      },
      { results },
    );

    expect(result.current).toBeTruthy();
    expect(result.current?.title).toBe(payload.title);
  });

  it('should not select when results are stale and invalidIfStale is true', () => {
    const realDate = global.Date.now;
    Date.now = jest.fn(() => 999999999);
    const results = [
      {
        request: InvalidIfStaleArticleResource.detail(),
        params: payload,
        result: payload,
      },
    ];
    const { result, rerender } = renderRestHook(
      props => {
        return useCache(InvalidIfStaleArticleResource.detail(), props);
      },
      { results, initialProps: { id: payload.id } },
    );

    expect(result.current).toBeDefined();
    Date.now = jest.fn(() => 999999999 * 3);

    rerender({ id: payload.id * 2 });
    expect(result.current).toBeUndefined();
    rerender({ id: payload.id });
    expect(result.current).toBeUndefined();

    global.Date.now = realDate;
  });

  it('should select paginated results', () => {
    const results = [
      {
        request: PaginatedArticleResource.list(),
        params: {},
        result: articlesPages,
      },
    ];
    const { result } = renderRestHook(
      () => {
        return useCache(PaginatedArticleResource.list(), {});
      },
      { results },
    );
    expect(result.current).toBeDefined();
    if (!result.current) return;
    expect(result.current.results).toBeDefined();
    if (!result.current.results) return;
    expect(result.current.results.length).toBe(articlesPages.results.length);
    expect(result.current.results[0]).toBeInstanceOf(PaginatedArticleResource);
    expect(result.current.results).toMatchSnapshot();
  });

  it('should return identical value no matter how many re-renders', () => {
    const results = [
      {
        request: PaginatedArticleResource.list(),
        params: {},
        result: articlesPages,
      },
    ];
    const track = jest.fn();

    const { rerender } = renderRestHook(
      () => {
        const articles = useCache(PaginatedArticleResource.list(), {});
        useEffect(track, [articles]);
      },
      { results },
    );

    expect(track.mock.calls.length).toBe(1);
    for (let i = 0; i < 2; ++i) {
      rerender();
    }
    expect(track.mock.calls.length).toBe(1);
  });

  describe('Nested with defaults', () => {
    it('should send defaults with nothing in state', () => {
      const defaults = { prevPage: '', nextPage: '', results: undefined };
      const { result } = renderRestHook(
        () => {
          return useCache(PaginatedArticleResource.list(), {});
        },
        { results: [] },
      );
      expect(result.current).toEqual(defaults);
    });

    it('should find results', () => {
      const results = [
        {
          request: PaginatedArticleResource.list(),
          params: {},
          result: articlesPages,
        },
      ];
      const { result } = renderRestHook(
        () => {
          return useCache(PaginatedArticleResource.list(), {});
        },
        { results },
      );
      expect(result.current).toBeTruthy();
      expect(result.current.nextPage).toBe(articlesPages.nextPage);
      expect(result.current.prevPage).toBe(articlesPages.prevPage);
      expect(result.current.results).toEqual(
        articlesPages.results.map(article =>
          PaginatedArticleResource.fromJS(article),
        ),
      );
    });

    it('should return identical value no matter how many re-renders', () => {
      const results = [
        {
          request: PaginatedArticleResource.list(),
          params: {},
          result: articlesPages,
        },
      ];
      const track = jest.fn();

      const { rerender } = renderRestHook(
        () => {
          useEffect(track, [results]);
          return useCache(PaginatedArticleResource.list(), {});
        },
        { results },
      );

      expect(track.mock.calls.length).toBe(1);
      for (let i = 0; i < 2; ++i) {
        rerender();
      }
      expect(track.mock.calls.length).toBe(1);
    });
  });
});
