import React, { Component } from "react";
import Data from "../Data/Data.json";

var moment = require("moment");
moment().format();

export default class BaiTapVongLap extends Component {
  state = {
    mangPhim: Data,
  };

  renderFilm = () => {
    return this.state.mangPhim.map((phim, index) => {
      return (
        <div className="col-sm-4 mb-2">
          <div className="card">
            <img
              style={{ width: "100%", height: "600px" }}
              className="card-img-top"
              src={phim.hinhAnh}
              alt={phim.maPhim}
            />
            <div className="card-body">
              <h4 className="card-title">{phim.tenPhim}</h4>
              <p className="card-text">
                {moment(phim.ngayKhoiChieu).format("MMM Do YY")}
              </p>
              <p>
                {phim.moTa.length > 50
                  ? phim.moTa.substr(0, 50) + "..."
                  : phim.moTa}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    console.log(this.state.mangPhim);
    return (
      <div>
        <div className="container-fluid">
          <div className="row">{this.renderFilm()}</div>
        </div>
      </div>
    );
  }
}
