import React, { Component } from "react";
import welcome from "./index.module.css";

export default class Welcome extends Component {
  render() {
    return (
      <div className={welcome.title}>It is another component, welcome!</div>
    );
  }
}
