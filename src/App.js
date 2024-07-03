import './App.css'; // Ensure this file includes the CSS to handle body styles and other base styles
import Section1 from './components/sections/Section1';
import TrustedBy from './components/TrustedBy';
import Section2 from './components/sections/Section2';
import YouTubeEmbeded from './components/YouTubeEmbeded';
import Section3 from './components/sections/Section3';
import Section4 from './components/sections/Section4';
import Section6 from './components/sections/Section6';
import Section5 from './components/sections/Section5';
import Section7 from './components/sections/Section7';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <div>
        <h1 className='px-36 text-blue-500 font-extrabold text-5xl transform translate-y-6 '>
          downwork
        </h1>
      </div>
      <hr className='relative translate-y-14 ' />
      <div className='bg-neutral-950 px-36 py-24'>
        <Section1 />
        <TrustedBy />
        
        {/* Container for Section2 and YouTubeEmbeded */}
        <div className="flex flex-col md:flex-row items-start md:space-x-4">
          <div className="md:w-2/3 w-full">
            <Section2 />
          </div>
          
          <div className="md:w-1/3 w-full mt-4 md:mt-0">
            <YouTubeEmbeded classname={'flex justify-center items-center w-full'} ytLink={`https://www.youtube.com/embed/EE-xtCF3T94`} />
          </div>
        </div>
        <br />
        <Section3 />
        <Section4 />
        <Section5 />
        <br />
        <br />
        <br />
        <Section6 />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Section7 />
      </div>
    </div>
  );
}

export default App;
