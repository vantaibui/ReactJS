import React, { Component } from "react";

export default class Event extends Component {
  // Phương thức xử lý cho nút click
  handlehShowMessage = () => {
    alert("Hello React Event");
  };
  // Truyền tham số
  handlehShowMessageParam = (message) => {
    alert(message);
  };

  render() {
    let message = "Hello Parameter";
    return (
      <div>
        <div className="container">
          <button
            className="btn btn-success m-5"
            onClick={this.handlehShowMessage}
          >
            Show message
          </button>
          {/* Truyền có tham số */}
          <button
            className="btn btn-success m-5"
            onClick={this.handlehShowMessageParam.bind(this, message)}
          >
            Show message Parameter
          </button>

          {/* Arrow function */}
          <button
            className="btn btn-success m-5"
            onClick={() => {
              this.handlehShowMessageParam(message);
            }}
          >
            Show message Parameter
          </button>
        </div>
      </div>
    );
  }
}
