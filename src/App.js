import './App.css'; // Make sure this includes the CSS file where the html, body styles are applied
import Section1 from './components/sections/Section1';
import TrustedBy from './components/TrustedBy';
import Section2 from './components/sections/Section2';
import Section3 from './components/sections/Section3';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <div>
        <h1 className='px-36 text-blue-500 font-extrabold text-5xl transform translate-y-6'>
          downwork
        </h1>
      </div>
      <hr className='relative translate-y-14' />
      <div className='bg-neutral-950 px-36 py-24 '>
        <Section1 />
        <TrustedBy />
        <Section2 />
        <Section3 />
      </div>
    </div>
  );
}

export default App;
