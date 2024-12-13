//imports
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//imports - css
import './index.css'
//imports - pages
import App from './App.tsx'
import Home from './Pages/Home.tsx';
import Error from './Pages/Error.tsx';
import Profile from './Pages/Profile.tsx';

//Router definition

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <Profile />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
