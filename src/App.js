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
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-neutral-900">
      <div>
        <Navbar />
      </div>
      
      <div className='bg-neutral-900 px-36 py-24'>    
        <br />
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
