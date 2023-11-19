import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import KonasPage from './konas/Index';
import './test.css';
import Gallery from './konas/Gallery';

const router = createBrowserRouter([
  {
    path: '/',
    element: <KonasPage />
  },
  {
    path: '/gallery',
    element: <Gallery />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
