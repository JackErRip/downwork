import React from 'react';

function Section1() {
  return (
    <div className="flex flex-col md:flex-row bg-neutral-900 min-h-screen">
      <div className='md:w-1/2 md:pr-8'>
        <h1 className='text-zinc-50 font-extrabold text-left text-3xl md:text-5xl mb-4 md:mb-8'>
          Bring the top 1% of Upwork talent to your business, your way
        </h1>
        <p className='text-zinc-50 text-lg mb-4 md:mb-8'>
          Fill the skill gaps on your team with talent specialists or
          <br />build your own dream team of experts with our full-
          <br />service, customizable Enterprise platform.
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        
        <button className='bg-blue-500 hover:bg-yellow-500 text-white font-bold py-4 px-6 rounded-full'>
          Contact Us
        </button>
      </div>

      <div className="md:w-1/2 relative">
        <img
          src="Old man using laptop.png"
          alt="old man"
          className="w-full h-auto object-cover max-w-[800px] max-h-[800px] md:max-w-[600px] md:max-h-[600px] lg:max-w-[600px] lg:max-h-[400px] xl:max-w-[400px] xl:max-h-[300px] portrait:max-w-[400px] portrait:max-h-[300px] landscape:max-w-[800px] landscape:max-h-[700px]"
        />
      </div>

      

    </div>
  );
}

export default Section1;
