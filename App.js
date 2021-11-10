import React from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import Main from './Views/Main';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Main />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
