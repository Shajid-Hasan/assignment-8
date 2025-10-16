import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './Pages/Home.jsx';
import Apps from './Pages/Apps.jsx';
import Installation from './Pages/Installation.jsx';
import RootLayout from './Components/Layouts/RootLayout.jsx';
import AppDetails from './Components/AppDetails.jsx';
import NotFound from './Pages/AppNotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/home',
        Component: Home,
      },
      {
        path: '/apps',
        Component: Apps,
      },
      {
        path: '/installation',
        Component: Installation,
      },
      {
        path: '/app/:id',
        Component: AppDetails,
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
