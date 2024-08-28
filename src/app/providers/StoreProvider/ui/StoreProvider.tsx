import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from '../config/StoreSchema';

interface StoreProviderProps {
    children: ReactNode,
    initialStore?: DeepPartial<StoreSchema>
}

const StoreProvider = ({ children, initialStore }: StoreProviderProps) => {
  const store = createReduxStore(initialStore as StoreSchema);

  return (
    <Provider store={store}>{children}</Provider>
  );
};

export default StoreProvider;
