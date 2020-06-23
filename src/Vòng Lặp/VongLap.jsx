import React, { Component } from "react";
import { Alert } from "bootstrap-4-react";

export default class VongLap extends Component {
  listProducts = [
    {
      id: 1,
      imageProduct: "./images/BMW-HP4.jpg",
      nameProduct: "Cá Mập",
      price: "$55000",
    },
    {
      id: 2,
      imageProduct: "./images/Kawasaki-H2.jpg",
      nameProduct: "Bóng Ma Tốc Độ",
      price: "$70000",
    },
    {
      id: 3,
      imageProduct: "./images/KTM-1209.jpg",
      nameProduct: "Dế Con",
      price: "$40000",
    },
    {
      id: 4,
      imageProduct: "./images/Yamaha-R1.jpg",
      nameProduct: "Cá Trê",
      price: "$45000",
    },
  ];
  state = {
    product: {
      id: this.listProducts[0].id,
      imageProduct: this.listProducts[0].imageProduct,
      nameProduct: this.listProducts[0].nameProduct,
      price: this.listProducts[0].price,
    },
  };

  changeProduct = (newProduct) => {
    this.setState({
      product: newProduct,
    });
  };
  renderProduct = () => {
    return (
      <div className="col-sm-4 card bg-primary text-white">
        <img
          className="card-img-top"
          src={this.state.product.imageProduct}
          alt
        />
        <div className="card-body">
          <h4 className="card-title">{this.state.product.nameProduct}</h4>
          <p className="card-text">{this.state.product.price}</p>
        </div>
      </div>
    );
  };
  render() {
    return <div className="container">{this.renderProduct()}</div>;
  }
}
