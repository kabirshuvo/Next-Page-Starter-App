import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';

const Books = () => {
    const {books} = useLoaderData()
    return (
        <div className='grid md:grid-cols-2 '>
            
            {
                books.map(book => <Book
                key={book.isbn13}
                book={book}
                
                ></Book>)
            }
        </div>
    );
};

export default Books;