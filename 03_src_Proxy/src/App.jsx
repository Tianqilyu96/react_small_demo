import axios from "axios";
import React, { Component } from "react";

export default class App extends Component {
  getStudentData = () => {
    axios
      .get("http://localhost:3000/api1/students")
      .then((response) => {
        console.log("Success", response.data);
      })
      .catch((error) => console.log("Error!", error));
  };

  getCarData = () => {
    axios
      .get("http://localhost:3000/api2/cars")
      .then((response) => {
        console.log("Success", response.data);
      })
      .catch((error) => console.log("Error!", error));
  };

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>Get Students</button>
        <button onClick={this.getCarData}>Get Car</button>
      </div>
    );
  }
}
