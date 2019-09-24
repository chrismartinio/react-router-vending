import React from "react";
import './Chips.css';
import { Link } from 'react-router-dom';

class Chips extends React.PureComponent {
  render() {
    return (
      <div>Chips
      <Link to="/">Home</Link>
      </div>
    )
  }
}

export default Chips;