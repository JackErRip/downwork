import React from 'react';
import YouTubeEmbeded from '../YouTubeEmbeded';

function Section5() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-violet-700 rounded-lg p-6 space-y-6 md:space-y-0 md:space-x-10">
      <div className="flex-1">
        <h1 className="text-zinc-50 font-extrabold text-4xl mb-4">
          Get ahead with AI
        </h1>
        <h2 className="text-zinc-50 font-medium text-2xl mb-6">
          Partner with independent talent on Upwork to help AI work for your business
        </h2>
        <div className="space-y-4">
          <p className="text-zinc-50 text-sm font-normal">
            Build a custom chatbot
          </p>
          <p className="text-zinc-50 text-sm font-normal">
            Label your training data
          </p>
          <p className="text-zinc-50 text-sm font-normal">
            Develop your own AI model
          </p>
          <p className="text-zinc-50 text-sm font-normal">
            And more with our Expert-Vetted Talent
          </p>
        </div>
      </div>
      <div className="flex-1 max-w-full md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <YouTubeEmbeded classname="w-full h-auto" ytLink="https://www.youtube.com/embed/GtL1huin9EE" />
      </div>
    </div>
  );
}

export default Section5;
