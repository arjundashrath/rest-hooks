import { useCallback, useRef } from 'react';
import { ReadShape, ParamsFromShape } from '@rest-hooks/core/endpoint';
import { Schema } from '@rest-hooks/endpoint';

import useInvalidateDispatcher from './useInvalidateDispatcher';

/** Invalidate a certain item within the cache */
export default function useInvalidator<Shape extends ReadShape<any, any>>(
  fetchShape: Shape,
): (params: ParamsFromShape<Shape> | null) => void {
  const dispatch = useInvalidateDispatcher();
  const fetchShapeRef = useRef(fetchShape);
  fetchShapeRef.current = fetchShape;

  const invalidateDispatcher = useCallback(
    (params: any) => {
      if (!params) return;
      dispatch(fetchShapeRef.current, params);
    },
    [dispatch],
  );

  return invalidateDispatcher;
}