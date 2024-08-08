import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { StoreSchema } from './StoreSchema';

function createReduxStore(initialState?: StoreSchema) {
  const rootReducers: ReducersMapObject<StoreSchema> = {
    user: userReducer,
  };
  return configureStore<StoreSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}

export default createReduxStore;
