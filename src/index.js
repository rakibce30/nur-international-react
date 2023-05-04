import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './component/Home/Home';
import About from './component/About/About';
import Error from './component/Error/Error';
import HajjPage from './component/HajjPage/HajjPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('./DB/db.json')
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/hajj',
        element: <HajjPage></HajjPage>
      }
    ]
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
