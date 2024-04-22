import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

const Subscribe = () => {
  return (
    <div className='flex flex-col gap-12 md:gap-24 md:flex-row md:mt-32 mt-96'>
      <div className='md:ml-12 md:w-96'>
        <div className='ml-8'>
          <p className='text-lg mb-2 text-indigo-900 text-3xl font-bold'>Easy</p>
          <p className='text-lg mb-4 text-blue-600 text-3xl font-bold'>ahead</p>
          <p className='text-lg mb-1 text-1xl'>We take the work out of connecting with others so you can accomplish more.</p>
          <div className="flex items-center mt-6">
            <a href="#">
              <img src="https://i.imghippo.com/files/Y3Wmd1713190338.png" alt="Apps" className='h-10 mb-6' />
            </a>
          </div>
          <div className="flex justify-center md:justify-start">
            <SocialIcon url="www.twitter.com" bgColor="white" fgColor="black" />
            <SocialIcon url="www.facebook.com" bgColor="white" fgColor="black" />
            <SocialIcon url="www.instagram.com" bgColor="white" fgColor="black" />
            <SocialIcon url="www.linkedin.com" bgColor="white" fgColor="black" />
            <SocialIcon url="www.youtube.com" bgColor="white" fgColor="black" />
          </div>
        </div>
      </div>
      <div className='md:w-1/2 md:ml-20'>
        <div className='grid grid-cols-1 gap-12 p-6 md:grid-cols-3 md:p-0'>
          <div>
            <p className='font-bold mb-6 text-indigo-900 text-xl'>About</p>
            <p className='mb-4 text-gray-700'>About Calendly</p>
            <p className='mb-4 text-gray-700'>Contact Sales</p>
            <p className='mb-4 text-gray-700'>Newsroom</p>
            <p className='mb-4 text-gray-700'>Careers</p>
            <p className='mb-8 text-gray-700'>Security</p>
            <p className='font-bold mb-6 text-indigo-900 text-xl'>Support</p>
            <p className='mb-4 text-gray-700'>Help Centre</p>
            <p className='mb-4 text-gray-700'>Video Tutorials</p>
          </div>
          <div>
            <p className='font-bold mb-6 text-indigo-900 text-xl'>Solutions</p>
            <p className='mb-4 text-gray-700'>Customer Success</p>
            <p className='mb-4 text-gray-700'>Sales</p>
            <p className='mb-4 text-gray-700'>Recruiting</p>
            <p className='mb-4 text-gray-700'>Information Technology</p>
            <p className='mb-8 text-gray-700'>Marketing</p>
            <p className='font-bold mb-6 text-indigo-900 text-xl'>Add-Ons</p>
            <p className='mb-4 text-gray-700'>Download for Chrome</p>
            <p className='mb-4 text-gray-700'>Download for Firefox</p>
          </div>
          <div>
            <p className='font-bold mb-6 text-indigo-900 text-xl'>Popular Features</p>
            <p className='mb-4 text-gray-700'>Embed Calendly</p>
            <p className='mb-4 text-gray-700'>Availability</p>
            <p className='mb-4 text-gray-700'>Sending Notifications</p>
            <p className='mb-16 text-gray-700'>Using Calendly mobile</p>
            <p className='font-bold mb-8 text-indigo-900 text-xl'>Developers</p>
            <p className='mb-4 text-gray-700'>Developer Tools</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
