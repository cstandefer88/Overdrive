import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Nav from './Nav';
const Inventory = () => <h2>Inventory</h2>;
const ItemNew = () => <h2>Add Item</h2>;
const ItemEdit = () => <h2>Edit Item</h2>;
const Calculator = () => <h2>Calculator</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchProduct();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Nav />
            <Route exact path="/" component={Landing} />
            <Route exact path="/product" component={Inventory} />
            <Route path="/product/new" component={ItemNew} />
            <Route path="/product/edit" component={ItemEdit} />
            <Route path="/product/calculator" component={Calculator} />
          </div>
        </BrowserRouter>
      </div>
      );
  };
}


export default connect(null, actions)(App);
