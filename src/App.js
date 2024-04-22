// App.js

import React from 'react';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Grid from './components/Grid';
import Grid2 from './components/Grid2';
import Subscribe from './components/subscribe';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <Navbar />
      <center><h1 className="text-5xl font-extrabold mt-24 mb-14">The Calendly Blog</h1></center>
      <Navbar2/>
      <Grid/>
      <Grid2/>
      <Subscribe/>
      <Footer/>

    </div>
   
    
  );
}

export default App;
