import React, { Component } from 'react';

class ItemEdit extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <h3 className="center-align">Edit Inventory Item</h3>
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
          </form>
          <button className="btn waves-effect waves-light" type="submit" name="action">
          Submit Changes
          </button>
        </div>
      </div>
    );
  }
}

export default ItemEdit;
