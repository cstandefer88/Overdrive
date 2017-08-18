import React, { Component } from 'react';

class Inventory extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <h3 className="center-align">Inventory</h3>
        </div>
        <table className="striped">
          <thead>
            <tr>
                <th>SKU</th>
                <th>Name</th>
                <th>Cost</th>
                <th>Freight</th>
                <th>Action</th>
                <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1234717128</td>
              <td>Widget 1</td>
              <td>$27.85</td>
              <td>$3.99</td>
              <td><a>Edit</a></td>
              <td><a>Delete</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Inventory;
