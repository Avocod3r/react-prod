import { useEffect, useMemo } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';

export type ReducersList = {
    [key in StateSchemaKey]?: Reducer
}

type ReducerListEntry = [StateSchemaKey, Reducer]

interface useReducerManagerProps {
    reducers: ReducersList,
    removeAfterUnmount?: boolean
}

export const useReducerManager = ({
  reducers,
  removeAfterUnmount = true,
}: useReducerManagerProps) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  const dependencyReducers = JSON.stringify(reducers);

  // eslint-disable-next-line
  const memoizedReducers = useMemo(() => reducers, [dependencyReducers]);

  useEffect(() => {
    if (!store.reducerManager) {
      console.error('Reducer manager is not defined in the store');
      return undefined;
    }
    Object.entries(memoizedReducers).forEach(([key, reducer]:ReducerListEntry) => {
      store.reducerManager.add(key, reducer);
      dispatch({ type: `@INIT ${key} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(memoizedReducers).forEach(([key]:ReducerListEntry) => {
          store.reducerManager.remove(key);
          dispatch({ type: `@DESTROY ${key} reducer` });
        });
      }
    };
  }, [memoizedReducers, removeAfterUnmount, dispatch, store.reducerManager]);
};
