import React from "react";
import logo from "./logo.svg";
import "./App.css";
import VongLap from "./Vòng Lặp/VongLap";
import DataBinding from "./DataBinding/DataBinding";
import Event from "./DataBinding/Event";
import DemoIf from "./CauTrucDieuKhien_ReRender/DemoIf";
import State from "./State_ReRender/State";
import BaiTapChonXe from "./BaiTapChonXe/BaiTapChonXe";
import DemoVongLap from "./CauTrucLap/DemoVongLap";
import BaiTapVongLap from "./CauTrucDieuKhien_ReRender/BaiTapVongLap";

function App() {
  return (
    <div className="App">
      {/* <DataBinding /> */}
      {/* <Event/> */}
      {/* <DemoIf/> */}
      {/* <State/> */}
      {/* <BaiTapChonXe/> */}
      {/* <DemoVongLap/> */}
      <BaiTapVongLap/>
    </div>
  );
}

export default App;
