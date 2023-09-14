import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
function App() {
  // State management for navbar
  const [navMob, setNavMob] = useState(false);
  return (
    <div className="App">
      <div className='w-screen h-screen bg-purple-700'>
        <Header setNavMob={setNavMob} />
      </div>
    </div>
  );
}

export default App;
