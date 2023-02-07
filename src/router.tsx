import { createBrowserRouter, Navigate } from 'react-router-dom';
import Root from './page/root';
import Home from './page/logout/home';
import Main from './page/login/main';
const Router = () => {
  const logoutRouter = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '',
          element: <Home />,
        },
      ],
    },
  ]);

  const loginRouter = createBrowserRouter([
    {
      path: '/',
      element: true ? <Root /> : <Navigate to="/login" />,
      children: [
        {
          path: '',
          element: <Main />,
        },
      ],
    },
  ]);

  return { loginRouter, logoutRouter };
};

export default Router;
