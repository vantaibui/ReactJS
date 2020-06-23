import React, { Component } from "react";

class DataBinding extends Component {
  hoTen = "Bui Van Tai";
  lop = "DH17DTC";
  tuoi = "21";

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Class</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.hoTen}</td>
              <td>{this.lop}</td>
              <td>{this.tuoi}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default DataBinding;
