import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig';

const AppRouter = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {routeConfig.map(({ path, element, ...props }) => (
        <Route
          key={path}
          path={path}
          element={(
            <div className="page">
              {element}
            </div>
          )}
          {...props}
        />
      ))}
    </Routes>
  </Suspense>
);

export default AppRouter;
