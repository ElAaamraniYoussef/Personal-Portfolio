import { BrowserRouter } from 'react-router-dom';
import './styles/tailwind.css'; // Adjust to the path where you added Tailwind styles

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0  bg-[#150830]'>
        <div className='bg-hero-pattern bg-cover   bg-no-repeat bg-center'>
           <Navbar />
                  <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
      
        <div className="relative z-0 ">
        <Contact />
        <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
