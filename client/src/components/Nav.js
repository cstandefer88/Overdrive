import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">
            Overdrive Challenge
          </a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/product">Inventory</a></li>
            <li><a href="/product/new">Add New Item</a></li>
            <li><a href="/product/calculator">Profit Calculator</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
