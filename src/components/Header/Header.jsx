import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex items-center justify-between'>
            <div><h1 className='text-3xl font-bold'>The Next Page</h1></div>
            <div className='mr-7 flex justify-evenly gap-7'>
               <Link to="/">Home</Link>
               <Link to="/about">About</Link>
               <Link to="/books">Books</Link>
            </div>
        </nav>
    );
};

export default Header;