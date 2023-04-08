import { Bars3BottomRightIcon, BugAntIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    return (
<nav className="bg-purple-700 py-4">
<div className="container mx-auto flex items-center justify-between">
                
    <BugAntIcon className="h-6 w-6 text-white" />
    <h1 className="text-lg font-bold ml-2 text-white tracking-widest">The Next Page</h1>

    <div className="md:flex hidden">
                {/* className={({isActive}) => isActive ? 'text-purple-500' : '' } */}
               <NavLink to="/" className="text-white font-bold mx-4 hover:text-gray-300"  >Home</NavLink>
               <NavLink to="/about" className="text-white font-bold mx-4 hover:text-gray-300" >About</NavLink>
               <NavLink to="/books" className="text-white font-bold mx-4 hover:text-purple-300" >Books</NavLink>
    </div>

    <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="outline-none mobile-menu-button">
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <Bars3BottomRightIcon className="h-6 w-6 text-white" />
            )}
        </button>
    </div>
</div> 

    <div className={`${isMenuOpen ? '' : 'hidden'} mobile-menu md:hidden`}>
        <NavLink to="/" className="block text-center py-2 px-4 text-white font-bold hover:bg-gray-400" >Home</NavLink>
        <NavLink to="/about" className="block text-center py-2 px-4 text-white font-bold hover:bg-gray-400" >About</NavLink>
        <NavLink to="/books" className="block text-center py-2 px-4 text-white font-bold hover:bg-gray-400" >Books</NavLink>
    </div>

</nav>
    );
};

export default Header;