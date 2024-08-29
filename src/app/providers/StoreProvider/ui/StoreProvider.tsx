import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
    children: ReactNode,
    initialStore?: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

const StoreProvider = ({ children, initialStore, asyncReducers }: StoreProviderProps) => {
  const store = createReduxStore(
      initialStore as StateSchema,
      asyncReducers as ReducersMapObject<StateSchema>,
  );

  return (
    <Provider store={store}>{children}</Provider>
  );
};

export default StoreProvider;
