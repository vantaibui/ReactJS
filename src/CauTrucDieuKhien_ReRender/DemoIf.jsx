import React, { Component } from "react";

export default class DemoIf extends Component {
  isLogin = false;
  userName = "";
  // Cách 1: dùng phương thức kết hợp if để xác định nội dung render ra giao diện
  //   renderContent = () => {
  //     if (this.isLogin) {
  //       //isLogin === true => đã đăng nhập
  //       this.userName = "ReactJS";
  //       return (
  //         <div>
  //           Hello {this.userName} <button className='btn btn-danger'>Logout</button>
  //         </div>
  //       );
  //     }
  //     return (
  //       <div>
  //         <button className="btn btn-primary">Login</button>
  //       </div>
  //     );
  //   };

  render() {
    return (
      <div>
        {/* Cách 1 */}
        {/* {this.renderContent()} */}

        {/* Cách 2: làm trức tiếp trong render */}
        {this.isLogin === true ? (
          <div>
            Hello {this.userName}{" "}
            <button className="btn btn-danger">Logout</button>
          </div>
        ) : (
          <button className="btn btn-success">Login</button>
        )}
      </div>
    );
  }
}
