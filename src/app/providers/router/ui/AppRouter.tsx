import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig';
import PageLoader from 'widgets/PageLoader/PageLoader';

const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
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
