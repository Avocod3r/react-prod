import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';
import { StoreSchema } from './StoreSchema';

function createReduxStore(initialState?: StoreSchema) {
  const rootReducers: ReducersMapObject<StoreSchema> = {
    user: userReducer,
    login: loginReducer,
  };
  return configureStore<StoreSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}

export default createReduxStore;
