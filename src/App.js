import React, { useState, useEffect} from 'react'; 
import './App.css';
import ReceivingInterface from './components/receivingInterface';
import DesktopFishTesting from './components/desktopInterface';




const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? <ReceivingInterface /> : <DesktopFishTesting />}
    </div>
  );
};


export default App;
