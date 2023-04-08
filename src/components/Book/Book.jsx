import React from 'react';

const Book = ({book}) => {
    console.log(book);
    const {title, image, isbn13, price, subtitle, url} = book;
    return (
<div>
            
    <h3>{title} </h3>
    <img src={image} alt="The Book Title" />
    <h5>{subtitle}</h5>

    <p>Price: <span>{price}</span> isbn13: <span>{isbn13}</span></p>

    <button>Read Me</button>

</div>
    );
};

export default Book;