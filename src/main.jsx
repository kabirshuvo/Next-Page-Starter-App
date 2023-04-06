import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import About from './components/About'
import Home from './components/Header/Home/Home'
import './index.css'

const router = createBrowserRouter ([
{
    path: '/',
    element: <App></App>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/about',
            element: <About></About>
        },
    ]  
}



])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}></RouterProvider>)
