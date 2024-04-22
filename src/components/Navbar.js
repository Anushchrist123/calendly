// Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white-1000 py-8 font-bold px-24">
    <div className="max-w-full mx-auto px-4 flex justify-between items-center md:flex-row flex-col">
      {/* Logo on the left */}
      <div className="flex items-center">
        <a href="#">
          <img src="https://i.imghippo.com/files/9IdtM1712822512.png" alt="Calendly Logo"className='h-10' />
        </a>
      </div>

      
      {/* Centered options */}
      <div className="flex justify-center  flex-col md:flex-row gap-5 text-lg">
        <a href="#" className="text-black mr-4">Individuals</a>
        <a href="#" className="text-black mr-4">Teams</a>
        <a href="#" className="text-black mr-4">Enterprise</a>
        <div className="relative inline-block" >
          <button className="text-black mr-4 font-bold">Product</button>
          <div className="absolute hidden bg-gray-800 text-black text-sm rounded-md py-2 mt-1 w-32">
            {/* Dropdown content */}
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Features</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Integrations</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Plugins</a>
          </div>
        </div>
        <a href="#" className="text-black mr-4">Pricing</a>
        <div className="relative inline-block">
          <button className="text-black mr-4 font-bold">Resources<span className='gap-4'></span></button>
          <div className="absolute hidden bg-gray-800 text-white text-sm rounded-md py-2 mt-1 w-32">
            {/* Dropdown content */}
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Documentation</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Community</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Support</a>
          </div>
        </div>
      </div>
      
      {/* Login and Sign Up buttons on the right */}
      <div className="flex items-center flex-col md:flex-row">
        <a href="#" className="text-black mr-4">Log In</a>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-3xl font-semibold">Sign up free</button>
      </div>
    </div>
  </nav>
  
  );
}

export default Navbar;
