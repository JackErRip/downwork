import React from 'react';

function Section4() {
  return (
    <div className="flex justify-center items-center bg-neutral-900 min-h-screen p-4">
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-4 md:space-y-0 w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl">
        
        {/* First Image and Text */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
          <img
            src="Section 4 first.png"
            alt="s4 first"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          <div className="mt-4 md:mt-6">
            <h2 className="text-zinc-50 text-lg md:text-xl xl:text-2xl font-extrabold text-center md:text-left">
              Staff a highly-skilled team, hired with intention
            </h2>
            <p className="text-zinc-50 text-sm md:text-xs xl:text-sm font-normal mt-2 text-center md:text-left">
              Connect with Expert-Vetted talent, prescreened for experience on the latest technologies like OpenAI platform.
            </p>
          </div>
        </div>
        
        {/* Second Image and Text */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
          <img
            src="Section 4 second.png"
            alt="s4 second"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          <div className="mt-4 md:mt-6">
            <h2 className="text-zinc-50 text-lg md:text-xl xl:text-2xl font-extrabold text-center md:text-left">
              Scout and hire talent in days, not months
            </h2>
            <p className="text-zinc-50 text-sm md:text-xs xl:text-sm font-normal mt-2 text-center md:text-left">
              Leverage our sourcing experts to create a custom talent solution that expedites your hiring and your results.
            </p>
          </div>
        </div>

        {/* Third Image and Text */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
          <img
            src="Section 4 third.png"
            alt="s4 third"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          <div className="mt-4 md:mt-6">
            <h2 className="text-zinc-50 text-lg md:text-xl xl:text-2xl font-extrabold text-center md:text-left">
              Reach the best, wherever they work, however they work
            </h2>
            <p className="text-zinc-50 text-sm md:text-xs xl:text-sm font-normal mt-2 text-center md:text-left">
              Source, manage, and pay your hybrid team with the ease and flexibility important to attract top talent.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Section4;
