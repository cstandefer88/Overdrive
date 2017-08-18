import React, { Component } from 'react';

class Calculator extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <h3 className="center-align">Profit Calculator</h3>
        </div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input id="sku" type="text" className="validate" />
                <label for="sku">SKU</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="name" type="text" className="validate" />
                <label for="name">Item Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="product-cost" type="text" className="validate" />
                <label for="product-cost">Product Cost</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="expected-freight" type="text" className="validate" />
                <label for="expected-freight">Expected Freight</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="landed-cost" type="text" className="validate" />
                <label for="landed-cost">Landed Cost</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="selling-fee" type="text" className="validate" />
                <label for="selling-fee">Selling Fee</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="total-cost" type="text" className="validate" />
                <label for="total-cost">Total Cost</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="price" type="text" className="validate" />
                <label for="price">Price</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="profit" type="text" className="validate" />
                <label for="profit">Profit</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="profit-margin" type="text" className="validate" />
                <label for="profit-margin">Profit Margin</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Calculator;
