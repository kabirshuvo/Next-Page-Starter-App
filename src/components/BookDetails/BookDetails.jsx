import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const book = useLoaderData();
    const {authors, desc, image, language, pages, price, publisher, rating, subtitle, title, url, year  } = book;
    return (
        <div>
            <h3 className='text-3xl font-bold'>{title}</h3>
            <p>{authors}</p>
            <img src={image} alt="" />
            <h5 className='text-1xl font-semibold'>{subtitle}</h5>
            <p>Language: <span>{language}</span> Pages: <span>{pages}</span></p>
            <p>{price}</p>
            <p>Publisher: {publisher} Rattings: {rating}</p>
            <p>{desc}|| {year}</p>
            <a href={url}>
            <button>Buy Now </button></a>
        </div>
    );
};

export default BookDetails;