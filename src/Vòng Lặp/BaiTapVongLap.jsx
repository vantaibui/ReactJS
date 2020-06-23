import React, { Component } from "react";
import Data from "../Data/Data.json";

export default class BaiTapVongLap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: Data,
    };
  }
  renderProduct = () => {
    return this.state.listProduct.map((product, index) => {
      return (
        <div className="col-sm-3 m-1 p-0 card" key={index}>
          <img style={{width: '100%', height: '400px'}} className="card-img-top" src={product.hinhAnh} alt={product.maPhim} />
          <div className="card-body">
            <h4 className="card-title">{product.tenPhim}</h4>
            <p className="card-text">{product.moTa.length > 100 ? product.moTa.substr(0, 10) + "..." : product.moTa}</p>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="container p-0">
          <div className="row m-0">{this.renderProduct()}</div>
        </div>
      </div>
    );
  }
}
