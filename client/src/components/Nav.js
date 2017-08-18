import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">
            Overdrive Challenge
          </a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#">Inventory</a></li>
            <li><a href="#">Add New Item</a></li>
            <li><a href="#">Profit Calculator</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
