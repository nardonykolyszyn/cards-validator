import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link 
  } from 'react-router-dom';
import './App.css';

function App() {
  return(
    <Router>
    <div className="App">
      <h1>Initial page</h1>
    </div>
  </Router>
  );
}

export default App;

