import './App.css';

import { useEffect, useState } from 'react';
import { init, subscribe } from './socketApi'
import Palette from './component/Palette';

function App() {

  const [activeColor, setActiveColor] = useState("#282c34")

  useEffect(() => {
    init();
    subscribe((color) => {
      setActiveColor(color)
    });
  }, [])

  return (
    <div className="App" style={{ backgroundColor: activeColor }}>
      <Palette activeColor={activeColor} />
      <h1>{activeColor}</h1>
    </div>
  );
}

export default App;
