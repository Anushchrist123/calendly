import React from 'react';

const Grid = () => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1'>
      <div className='ml-20 mt-12 mx-auto my-auto'>
        <img src="https://i.imghippo.com/files/6Ht9I1712827661.png" alt="Calendly Logo"/>
      </div>
      <div className="flex flex-col justify-center mx-20">
        <p className="text-gray-600 text-lg mb-4">WHAT'S NEW</p>
        <h3 className='text-4xl font-extrabold text-gray-800 dark:text-white mb-8'>Welcome to the Time Economy</h3>
        <p className='text-xl'>Our most precious resource is time - and the next decade will be defined by how we manage it. </p>
        <div className='flex'>
        <p className='mt-16 font-bold'>Read the article </p>
        <a href='#'><span className='text-white bg-black h-9 w-9 rounded-full flex justify-center items-center mt-14 ml-5'><span className='text-xs'>&#129122;</span></span></a>
        </div>
      </div>
    </div>
  );
}

export default Grid;
