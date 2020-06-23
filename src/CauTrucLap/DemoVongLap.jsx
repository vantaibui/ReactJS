import React, { Component } from "react";

export default class DemoVongLap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangSanPham: [
        { maSP: 1, tenSP: "Iphone XI", gia: "5220" },
        { maSP: 2, tenSP: "Iphone X", gia: "5220" },
        { maSP: 3, tenSP: "Iphone SE", gia: "5220" },
        { maSP: 4, tenSP: "Realme 5 pro", gia: "3200" },
        { maSP: 5, tenSP: "Realme 6i", gia: "6620" },
      ],
    };
  }

  renderSanPham = () => {
    // let contentTable = "";
    let contentTable = [];
    for (let i = 0; i < this.state.mangSanPham.length; i++) {
      const sanPham = this.state.mangSanPham[i];
      //   contentTable += `<tr><td>${sanPham.maSP}</td><td>${sanPham.tenSP}</td><td>${sanPham.gia}</td></tr>`;
      contentTable.push(
        <tr key={i}>
          <td>{sanPham.maSP}</td>
          <td>{sanPham.tenSP}</td>
          <td>{sanPham.gia}</td>
        </tr>
      );
    }
    console.log(contentTable);
    return contentTable;
  };
  renderSPMap = () => {
    return this.state.mangSanPham.map((sp, index) => {
      return (
        <tr key={index}>
          <td>{sp.maSP}</td>
          <td>{sp.tenSP}</td>
          <td>{sp.gia}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Mã sản phẩm</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>
            <h3>Vòng lặp for</h3>
            {this.renderSanPham()}
            <h3>Vòng lặp map</h3>
            {this.renderSPMap()}
          </tbody>
        </table>
      </div>
    );
  }
}
