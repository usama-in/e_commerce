// src/routes.js
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from './Root'; // The main layout component with Outlet
import Home from './pages/Home';
import Contact from './pages/Contact';
import Bags from './categories/Bags';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Main layout component with Outlet
    children: [
      { path: "", element: <Home /> }, // Default route
      { path: "category/bags", element: <Bags /> },
      { path: "contact", element: <Contact /> },
    ],
  },

]);

export default router;
