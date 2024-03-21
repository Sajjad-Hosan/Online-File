import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/blog',
        element: <div className='p-10 border-2 border-gray-700 rounded-2xl font-mono text-3xl'>Please Make a Component for use this Element Path!</div>
      },
      {
        path: '/about',
        element: <div className='p-10 border-2 border-gray-700 rounded-2xl font-mono text-3xl'>Please Make a Component for use this Element Path!</div>
      },
      {
        path: '/contact',
        element: <div className='p-10 border-2 border-gray-700 rounded-2xl font-mono text-3xl'>Please Make a Component for use this Element Path!</div>
      },
      {
        path: '/profile',
        element: <div className='p-10 border-2 border-gray-700 rounded-2xl font-mono text-3xl'>Please Make a Component for use this Element Path!</div>
      },
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
