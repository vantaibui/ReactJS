import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageMotorcycle: "./images/BMW-HP4.jpg",
      nameMotorcycle: "BMW",
    };
  }
  changeMotorCycle = (Motorcycle) => {
    let imageSource,
      nameSource = "";
    switch (Motorcycle) {
      case "bmw":
        {
          imageSource = "./images/BMW-HP4.jpg";
          nameSource = "BMW";
        }
        break;
      case "kawasaki":
        {
          imageSource = "./images/Kawasaki-H2.jpg";
          nameSource = "Kawasaki";
        }
        break;
      case "ktm":
        {
          imageSource = "./images/KTM-1290.jpg";
          nameSource = "KTM";
        }
        break;
      case "yamaha":
        {
          imageSource = "./images/Yamaha-R1.jpg";
          nameSource = "Yamaha";
        }
        break;
    }
    //    console.log(imageSource);

    this.setState({
      imageMotorcycle: imageSource,
      nameMotorcycle: nameSource,
    });
  };
  renderCar = () => {
    return (
      <div className="p-0 card bg-primary text-white">
        <img
        style={{width: '100%', height: '500px'}}
          className="card-img-top"
          src={this.state.imageMotorcycle}
          alt="sbk"
        />
        <div className="card-body text-center">
          <h4 className="card-title">{this.state.nameMotorcycle}</h4>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">{this.renderCar()}</div>
            <div className="col-sm-4">
              <button
                className="btn btn-primary m-2"
                onClick={() => {
                  this.changeMotorCycle("bmw");
                }}
              >
                MotorCycle HP4
              </button>
              <br />
              <button
                className="btn btn-success m-2"
                onClick={() => {
                  this.changeMotorCycle("kawasaki");
                }}
              >
                MotorCycle H2
              </button>
              <br />
              <button
                className="btn btn-secondary m-2"
                onClick={() => {
                  this.changeMotorCycle("ktm");
                }}
              >
                MotorCycle DUKE1209
              </button>
              <br />
              <button
                className="btn btn-warning m-2"
                onClick={() => {
                  this.changeMotorCycle("yamaha");
                }}
              >
                MotorCycle R1M
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
