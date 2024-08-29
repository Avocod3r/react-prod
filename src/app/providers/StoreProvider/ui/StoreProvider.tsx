import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
    children: ReactNode,
    initialStore?: DeepPartial<StateSchema>
}

const StoreProvider = ({ children, initialStore }: StoreProviderProps) => {
  const store = createReduxStore(initialStore as StateSchema);

  return (
    <Provider store={store}>{children}</Provider>
  );
};

export default StoreProvider;
