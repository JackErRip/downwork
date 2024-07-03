import React, { useState, useEffect } from 'react';

function Section7() {
  const [showSecondSection, setShowSecondSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      // Change to the second section when scrolled more than the window height
      if (scrollPosition > windowHeight / 2) {
        setShowSecondSection(true);
      } else {
        setShowSecondSection(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-neutral-950 flex flex-col items-center overflow-hidden">
      <h1 className="text-zinc-50 font-extrabold text-5xl mb-10">
        Enterprise solutions to scale a winning talent strategy
      </h1>

      <div className="relative w-full h-screen">
        {/* First Section */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${showSecondSection ? 'opacity-0' : 'opacity-100'} flex flex-col md:flex-row items-center justify-center`}
        >
          <img
            src={`${process.env.PUBLIC_URL}/Section7 Background.png`}
            alt="Section 7"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute top-1/4 left-1/4 bg-neutral-900 bg-opacity-75 p-6 rounded-xl shadow-md text-white max-w-sm">
            <h2 className="text-xl font-extrabold mb-4">Track talent end-to-end</h2>
            <p className="text-sm mb-4">
              Do it all in one place, from shortlisting top candidates to project management to collaboration tools.
            </p>
            <h2 className="text-xl font-extrabold mb-4">Work with talent you trust</h2>
            <p className="text-sm mb-4">
              Bring in talent you already know and manage their experience through one platform.
            </p>
            <h2 className="text-xl font-extrabold mb-4">Secure compliance and work protection</h2>
            <p className="text-sm">
              Use our global classification services to protect your business from legal risks.
            </p>
            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded">Contact us</button>
          </div>
        </div>

        {/* Second Section */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${showSecondSection ? 'opacity-100' : 'opacity-0'} flex flex-col md:flex-row items-center justify-center`}
        >
          <img
            src={`${process.env.PUBLIC_URL}/Section7 Background Inverted.png`}
            alt="Section 7 Inverted"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute top-1/4 right-1/4 bg-neutral-900 bg-opacity-75 p-6 rounded-xl shadow-md text-white max-w-sm">
            <h2 className="text-xl font-extrabold mb-4">Governance and controls</h2>
            <p className="text-sm mb-4">
              Create contracts and onboarding flows and use reporting tools that fit your needs and scale your business.
            </p>
            <h2 className="text-xl font-extrabold mb-4">Payroll and staffing</h2>
            <p className="text-sm mb-4">
              Pay your distributed team with Upwork Payroll so you can focus on growing your business instead of time-consuming admin.
            </p>
            <h2 className="text-xl font-extrabold mb-4">Safety and security</h2>
            <p className="text-sm">
              Engage, onboard, and manage your hybrid team worry-free with our compliant talent marketplace.
            </p>
            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded">Contact us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section7;
