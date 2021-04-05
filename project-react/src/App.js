import React from 'react';
import Design from './components/Design';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
   

function App() {

  
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Design/>
        {/* <Switch>
          <Route exact path="/" component={Design}/>
          <Route exact path="/Contact" component={Contact}/>
        </Switch> */}
      </div>
    </Router>
  );
}

// const Home = () => (
//   <Design/>
// );

export default App;
