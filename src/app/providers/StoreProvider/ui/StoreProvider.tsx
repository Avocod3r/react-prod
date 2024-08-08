import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider';
import { StoreSchema } from '../config/StoreSchema';

interface StoreProviderProps {
    children: ReactNode,
    initialStore?: StoreSchema
}

const StoreProvider = ({ children, initialStore }: StoreProviderProps) => {
  const store = createReduxStore(initialStore);

  return (
    <Provider store={store}>{children}</Provider>
  );
};

export default StoreProvider;
