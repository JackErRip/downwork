import './App.css';
import Section1 from './components/sections/Section1';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 aspect-w-16 aspect-h-9">
      <div>
        <h1 className='px-36 text-blue-500 font-extrabold text-5xl transform translate-y-6'>
          downwork
        </h1>
      </div>
      <hr className='transform translate-y-14' />
      <div className='bg-neutral-950 px-36 transform translate-y-28'>
        <Section1 />
      </div>
    </div>
  );
}

export default App;
