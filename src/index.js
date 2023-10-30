import React from 'react';
import ReactDOM from 'react-dom/client';
// import "./Components/EnergyMall.css";
import App from '../src/Components/App';
import AboutPage from '../src/Pages/AboutPage';
import ServicesPage from '../src/Pages/ServicesPage';
import ContactPage from '../src/Pages/ContactPage';
import NoPage from '../src/Pages/NoPage';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "about",
    element: <AboutPage />,
  },

  {
    path: "services",
    element: <ServicesPage />,
  },

  {
    path: "contact",
    element: <ContactPage />,
  },

  {
    path: "*",
    element: <NoPage />,
  },
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
