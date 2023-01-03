import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkMode from '../../../DarkMode/DarkMode';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <nav className="bg-white text-black dark:bg-gray-800 dark:text-white flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to='/' className="font-semibold text-xl tracking-tight text-black dark:text-white">Sarwar Hossain</Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded dark:text-teal-500 text-black border-teal-400  hover:border-white" onClick={toggleNavbar}>
          <svg  className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto${isCollapsed ? '' : ' block'}`}>
        <div className="text-sm lg:flex-grow">
          <Link to='/' className="block mt-4 lg:inline-block lg:mt-0 dark:text-teal-500 text-black  mr-4">Home</Link>
          <Link
            to='/ask-me' className="block mt-4 lg:inline-block lg:mt-0 dark:text-teal-500 text-black  mr-4">Ask-Me</Link>
                  
                  <DarkMode></DarkMode>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
