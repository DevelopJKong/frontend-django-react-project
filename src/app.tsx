import { RouterProvider } from 'react-router-dom';
import Router from './router';

function App() {
  const { loginRouter, logoutRouter } = Router();
  return (
    <>
      <RouterProvider router={true ? loginRouter : logoutRouter} />
    </>
  );
}

export default App;
