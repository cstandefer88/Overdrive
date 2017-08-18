import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Nav from './Nav';
import Landing from './Landing';
import Inventory from './Inventory';
import ItemNew from './ItemNew';
import ItemEdit from './ItemEdit';
import Calculator from './Calculator';

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
