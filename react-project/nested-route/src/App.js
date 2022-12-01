import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink  // Link ve NavLink aynı şey tek fark NavLinke style verebiliyor olmamızdır 
} from "react-router-dom";


// import Pages
import Home from './components/home'
import About from './components/about'
import Users from './components/users'
import Error404 from './components/error404'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav style={{paddingTop: 50}}>
            <ul>
              <li>
                <NavLink to="/" exact activeClassName='active'>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName='active'>About</NavLink>
              </li>
              <li>
                <NavLink to="/users" activeClassName='active'>Users</NavLink>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/users" component={Users} />
            <Route path="*" component={Error404} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
