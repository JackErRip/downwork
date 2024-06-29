import React from 'react';

function Section1() {
  return (
    <div className='flex flex-col md:flex-row bg-neutral-950'>
      <div className='md:w-1/2'>
        <h1 className='text-zinc-50 font-extrabold text-left text-5xl p-4 md:text-6xl'>
          Bring the top 1% of Upwork talent to your business, your way
        </h1>
        <p className='text-zinc-50 text-lg p-4'>
          Fill the skill gaps on your team with talent specialists or
          <br />build your own dream team of experts with our full-
          <br />service, customizable Enterprise platform.
        </p>
        <button className='bg-blue-500 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full mx-4 md:mx-0 mt-60'>
          Contact Us
        </button>
      </div>
      
      <div className='md:w-1/2  relative'>
        <img
            src='Old man using laptop.png'
            alt='old man'
            className='absolute inset-0 w-full h-full max-w-[1100px] max-h-[1000px]'
        />
        <h3 className='text-zinc-50 text-lg font-extrabold absolute bottom-0 -left-96 ml-1 mb-4 md:-ml-16 md:-mb-36'>
          TRUSTED BY
        </h3>
        <img
          src='Microsoft.png'
          alt='microsoft'
          className='absolute bottom-4 -left-72 mr-16 mb-4 md:mr-96 md:-mb-40 w-full h-full max-w-[140px] max-h-[30px]'
        />
        <img
          src='AutomatticLogo.png'
          alt='Automattic'
          className='absolute bottom-4 -left-24 mr-16 mb-4 md:mr-96 md:-mb-40 w-full h-full max-w-[250px] max-h-[25px]'
        />
        <img
          src='Bissell.png'
          alt='Bissell'
          className='absolute bottom-2 left-48  mr-16 mb-4 md:mr-96 md:-mb-40 w-full h-full max-w-[60px] max-h-[40px]'
        />
      </div>
    </div>
  );
}

export default Section1;
