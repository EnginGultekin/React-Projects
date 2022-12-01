import './App.css';
import { useState, useMemo, useCallback } from 'react'
import Header from './components/header';

function App() {

  const [num, setNum] = useState(0)
  const [text, setText] = useState("")

  const increment = useCallback(() => {
    setNum((prevState) => prevState + 1)
  }, [])


  return (
    <div className="App">

      <Header increment={increment} />
      <hr />
      <h1>{num}</h1>
      <br />
      <br />
      <input value={text} onChange={({ target }) => setText(target.value)} />
    </div>
  );
}


export default App;






/*  1.Çalışma

import './App.css';
import { useState, useMemo } from 'react'
import Header from './components/header';

function App() {

  const [num, setNum] = useState(0)

  // kullanım şekli olarak useEffect gibidir
  const data = useMemo(() => {
    return { name: "Luganhan" }
  }, [])


  return (
    <div className="App">

      <Header data={data} number={num < 5 ? 0 : num} />
      <hr />
      <h1>{num}</h1>

      <button onClick={() => setNum(num + 1)}>İncrease</button>

    </div>
  );
}


export default App;

*/
