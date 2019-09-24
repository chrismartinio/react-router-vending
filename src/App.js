import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Chips from './Chips';
import Airpods from './Airpods';
import Ipads from './Ipads';
import VendingMachine from './VendingMachine'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" render={() => <VendingMachine />} />
        <Route exact path="/chips" render={() => <Chips />} />
        <Route exact path="/airpods" render={() => <Airpods />} />
        <Route exact path="/ipads" render={() => <Ipads />} />
      </BrowserRouter>

    </div>

  );
}

export default App;
