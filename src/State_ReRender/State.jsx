import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);
    // thuộc tính có sẵn của component
    this.state = {
      isLogin: false,
      userName: "",
    };
  }

  login = () => {
    // this.state.isLogin = true;
    // this.state.userName = "ReactJS"
    // console.log(this.state);

    this.setState(
      {
        isLogin: true,
        userName: "ReactJS",
      },
      () => {
        console.log(this.state);
      }
    );
  };
  logout = () => {
    this.setState(
      {
        isLogin: false,
        userName: "",
      },
      () => {
        console.log(this.state);
      }
    );
  };
  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.isLogin === true ? (
          <div>
            Hello {this.userName}
            <button className="btn btn-primary" onClick={()=>{this.logout()}}>Logout</button>
          </div>
        ) : (
          <div>
            <button
              className="btn btn-success"
              onClick={() => {
                this.login();
              }}
            >
              Login
            </button>
          </div>
        )}
      </div>
    );
  }
}
