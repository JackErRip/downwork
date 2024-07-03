import React from 'react';

function Section2() {
  return (
    <div className='bg-neutral-900 p-4'>
      <div className='flex flex-col'>
        <h1 className='text-4xl font-extrabold text-start text-zinc-50 py-4'>
          How it works
        </h1>
        <ol className='list-decimal pl-8 text-zinc-50 text-xl space-y-6'>
          <li>Tell us about your project and the skills you're looking for.</li>
          <li>Instantly browse qualified talent with proven track records.</li>
          <li>Hire quickly and securely with our customizable tools.</li>
        </ol>
      </div>
    </div>
  );
}

export default Section2;
