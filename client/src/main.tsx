/*//imports
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//imports - css
import './index.css'
//imports - pages
import App from './App.tsx'
import Home from './pages/Home.tsx';
import Error from './pages/Error.tsx';
import Profile from './pages/Profile.tsx';
import RecsPage from './pages/Recs.tsx';

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
        path: '/Profile',
        element: <Profile />,
      },
      {
        path: '/Recs',
        element: <RecsPage />
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
) */


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
