import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

export default class Header extends Component {
  //add props validation
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  //bind event handler
  handleKeyUp = (event) => {
    const { keyCode, target } = event;
    if (keyCode !== 13) return;
    //if press enter, call addTodo function
    //if content is empaty, alert
    if (target.value.trim() === "") {
      alert("Content can not be empaty!");
      return;
    }
    this.props.addTodo(target.value);
    target.value = "";
  };

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="Write Your Task Here, Press Enter :)"
        />
      </div>
    );
  }
}
