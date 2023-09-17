import { useEffect, useState } from 'react';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Header from './components/Header/Header';
import Hero from './components/hero/Hero';
import Features from './pages/Features';
import Process from './pages/Process';
import Brands from "./pages/Brands";
import Start from './pages/Start';
import Footer from './pages/Footer';
import NavMobile from './components/nav/NavMobile';

function App() {
  // State management for navbar
  const [navMobile, setNavMobile] = useState(false);
  // initialize aos on render
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  }
  );
  return (
    <div className='overflow-hidden'>
      <div className='w-screen h-3/5 lg:h-screen bg-hero-pattern bg-[length:100%_75%]  lg:bg-[length:100%_80%] bg-no-repeat -mb-[1rem]  lg:mb-[10rem]' >
        <Header setNavMobile={setNavMobile} />
        <Hero />
        {/* Navigation onto mobile version */}
        {/* toggle effect to show and hide the card icons */}
        <div className={`${navMobile ? 'right-0' : '-right-full'} fixed z-10 top-0 h-full transition-all duration-200`}>
          <NavMobile setNavMobile={setNavMobile} />
        </div>
      </div>
      <Features />
      <Process />
      <Brands />
      <Start />
      <Footer />
    </div >
  );
}

export default App;
