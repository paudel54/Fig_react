import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/hero/Hero';
import Background from "./assets/img/background.png"
function App() {
  // State management for navbar
  const [navMob, setNavMob] = useState(false);
  return (
    <div className="App">
      <div className='w-screen h-screen bg-hero-pattern  bg-[length:100%_80%] bg-no-repeat' >
        <Header setNavMob={setNavMob} />
        <Hero />
      </div>
    </div >
  );
}

export default App;
