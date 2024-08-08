import { configureStore } from '@reduxjs/toolkit';
import { StoreSchema } from './StoreSchema';

function createReduxStore(initialState?: StoreSchema) {
  return configureStore<StoreSchema>({
    reducer: {},
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}

export default createReduxStore;
