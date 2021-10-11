import React, { Component } from "react";
import './index.css'

export default class Header extends Component {
  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="Write Your Task Here, Press Enter :)" />
      </div>
    );
  }
}
