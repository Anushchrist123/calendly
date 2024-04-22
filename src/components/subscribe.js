import React from 'react';

const Subscribe = () => {
  return (
    
    <div className="bg-cover bg-center mt-16 " style={{backgroundImage: "url('https://i.imghippo.com/files/X2m6T1712944675.jpg')", height: "65vh"}}>
     <div className='grid md:grid-cols-2 grid-cols-1 mb-32'>
        <div className='flex flex-col justify-center text-white ml-20' style={{height: "65vh"}}>
          <p className='text-lg mb-6'>STAY UPDATED</p>
          <p className='text-6xl font-semibold mb-8 mr-60'>Subscribe to the newsletter</p>
          <p className='text-xl mr-36'>Submit your email, and once a month we'll send you our best time-saving articles, videos and other resources.</p>
        </div>
        
        <div class="flex items-center justify-center ">
        <div class="bg-white p-10 rounded shadow-md w-4/6 md:h-80">
        <form>
          <div class="mb-5 gap-7 flex md:flex-wrap sm:flex-nowrap  flex-wrap lg:flex-nowrap">
                <div> 
                  <label for="firstName" class="block mb-2 text-sm font-medium text-gray-600 font-bold">First Name</label>
                  <input type="text" id="firstName" placeholder="First name" class="w-24 md:w-48 px-3 py-3 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300 text-sm"></input>
                </div>
                <div class="mb-5">
                  <label for="lastName" class="block mb-2 text-sm font-medium text-gray-600 font-bold ">Last Name</label>
                  <input type="text" id="lastName" placeholder="Last name" class="w-24 md:w-48 px-3 py-3 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300 text-sm"></input>
                </div>
          </div>
          <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-600 font-bold">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email address" class="w-full px-3 py-3 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300 text-sm"></input>
          </div>
          <button type="submit" class="w-full h-12 py-2 px-4 bg-blue-500 hover:bg-blue-700 rounded-full c text-white text-sm">Submit</button>
        </form>
      </div>
    </div>

     </div>
    </div>
  );
}

export default Subscribe;
