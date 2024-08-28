import { Suspense, useEffect } from 'react';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { classNames } from 'shared/lib';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <Suspense fallback="">
      <div className={classNames('app', {}, [])}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
}

export default App;
