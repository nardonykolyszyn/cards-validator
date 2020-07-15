import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';

import modules from './modules';
import './App.css';
import Header from './modules/Header';

function App() {
    return(
      <Router>
      <Header />
      <div className="App">
  
        <Switch>
          {modules.map(module => (
            <Route {...module.routeProps} key={module.name} />
          ))}
        </Switch>
  
        
      </div>
      </Router>
    );
}

export default App;

