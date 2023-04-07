import { BugAntIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className='flex items-center justify-around'>
            <div className='flex px-4 gap-7 items-center'>
                
            <BugAntIcon className="h-6 w-6 text-purple-700" />
                <h1 className='text-3xl font-bold text-purple-500 tracking-widest'>The Next Page</h1></div>
            <div className='mr-7 flex justify-evenly gap-7 font-bold'>
                {/* className={({isActive}) => isActive ? 'text-purple-500' : '' } */}
               <NavLink to="/" >Home</NavLink>
               <NavLink to="/about">About</NavLink>
               <NavLink to="/books"  >Books</NavLink>
            </div>
        </nav>
    );
};

export default Header;