import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import About from './components/About'
import Home from './components/Home/Home'
import './index.css'
import Books from './components/Books/Books'

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
            path: 'books',
            element: <Books></Books>
        },
        {
            path: '/about',
            element: <About></About>
        },
    ]  
}



])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}></RouterProvider>)
