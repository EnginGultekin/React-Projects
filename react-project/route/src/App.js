import './App.css';
import {
  BrowserRouter as Router,   // Her zaman BrowserRouter yazmamak için as Router kullanılmıştır
  Switch,
  Route,
  Link
} from "react-router-dom";

//Pages
import Home from './components/home'
import Users from './components/users'
import User from './components/user';
import About from './components/about'


function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            {/* Homu  başta yazarsak eşlesştiği için o sayfadan çıkamaz ama genede 
            başta kullanmak istersek ' exact ' kelimesiyle bu sorunu çözebiliriz */}
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/users" component={Users} />
            <Route path="/user/:id" component={User} />
            {/* <Route path="/" component={Home} /> */}

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
