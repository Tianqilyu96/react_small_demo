import React, { Component } from "react";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";

//定义及暴露组件app组件
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    );
  }
}
