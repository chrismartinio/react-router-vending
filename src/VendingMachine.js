import React from "react";
import Chips from './Chips';
import Airpods from './Airpods';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

class VendingMachine extends React.PureComponent {
  render() {
    return (
      <div className="container">


        Vending machine

        <Link exact to="/chips">Chips</Link>
        <Link exact to="/Airpods">Airpods</Link>
        <Link exact to="/Ipads">Ipads</Link>



      </div>

    )
  }
}

export default VendingMachine;