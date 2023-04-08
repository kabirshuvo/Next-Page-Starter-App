import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';

const Books = () => {
    const {books} = useLoaderData()
    return (
        <div>
            <h1>Books are here {books.length}</h1>
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