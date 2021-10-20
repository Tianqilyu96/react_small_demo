import React, { Component } from "react";
import Card from "../Card";
import './index.css'

export default class List extends Component {
  render() {
    return (
      <div className="row">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}
