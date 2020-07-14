import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link 
  } from 'react-router-dom';

import modules from './modules';
import './App.css';

function App() {
  return(
    <Router>
    <div className="App">
      <h1>Initial page</h1>
      
      {modules.map(module => (
                  <li key={module.name}>
                    <Link to={module.routeProps.path} onClick={() => console.log('s')}>{module.name}</Link>
                  </li>
              ))}


  {modules.map(module => (
      <Route {...module.routeProps} key={module.name} />
      ))}

      
    </div>
  </Router>
  );
}

export default App;

