import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import About from './components/About'
import BookDetails from './components/BookDetails/BookDetails'
import Books from './components/Books/Books'
import Home from './components/Home/Home'
import './index.css'

const router = createBrowserRouter ([
{
    path: '/',
    element: <App></App>,
    children: [
        {
            path: '/',
            element: <About></About>
        },
        {
            path: '/home',
            element: <Home></Home>
        },
        {
            path: 'books',
            element: <Books></Books>,
            loader: () => fetch('https://api.itbook.store/1.0/new')
        },
        {
            path: 'book/:bookId',
            element: <BookDetails></BookDetails>,
            loader: ({params}) =>  fetch(`https://api.itbook.store/1.0/books/${params.bookId}`)

        }
        
    ]  
}



])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}></RouterProvider>)
