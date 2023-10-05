import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom'

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  // we can output string and number
  // we can't output boolean and object
  const link = "https://www.google.com";

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
