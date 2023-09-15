import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/hero/Hero';
import Features from './pages/Features';
import Process from './pages/Process';
import Brands from "./pages/Brands";
import Start from './pages/Start';
import Footer from './pages/Footer';

function App() {
  // State management for navbar
  const [navMob, setNavMob] = useState(false);
  return (
    <div className="App">
      <div className='w-screen h-screen bg-hero-pattern  bg-[length:100%_80%] bg-no-repeat mb-[10rem]' >
        <Header setNavMob={setNavMob} />
        <Hero />
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
