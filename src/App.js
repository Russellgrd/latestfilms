import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SearchFilms from './components/SearchFilms';




function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Switch>
            <Route path="/searchfilms">
              <SearchFilms />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;