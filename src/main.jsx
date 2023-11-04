import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from './components/Layout/Main';
import Home from './components/Home/Home';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider  router={router}></RouterProvider>
  </React.StrictMode>,
)