import './App.css';
import Container from './Components/Container';
import { WheatherProvider } from './Context/WheatherContext'
import { CityProvider } from './Context/CityContext'

function App() {
  return (
    <div className="app">
      <CityProvider>
        <WheatherProvider>
          <Container />
        </WheatherProvider>
      </CityProvider>
    </div>
  );
}

export default App;
