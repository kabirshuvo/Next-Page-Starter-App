import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {title, image, isbn13, price, subtitle, url} = book;
    return (
<div className='flex flex-col justify-center items-center '>
            
    <h3 className='text-3xl font-bold'>{title} </h3>
    <img src={image} alt="The Book Title" />
    <h5>{subtitle}</h5>

    <p>Price: <span>{price}</span> isbn13: <span>{isbn13}</span></p>

    <button>Read Me</button>
    <Link to={`/book/${isbn13}`}>View Details</Link>
    <Link to={`/book/${isbn13}`}>View Details</Link>
</div>
    );
};

export default Book;