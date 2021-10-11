import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  state = { mouse: false };
  //查看鼠标是否移入item
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };

  //如果改变checkbox就会调用app中的checkTodo改变app中的state
  handleCheck = (id) => {
    return (event) => {
      this.props.checkTodo(id, event.target.checked);
    };
  };

  //delete the todo item, No currying
  handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      this.props.deleteTodo(id);
    }
  };

  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        style={{ backgroundColor: mouse ? "lightgray" : "lightblue" }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          onClick={() => {
            this.handleDelete(id);
          }}
          style={{ display: mouse ? "inline-flex" : "none" }}
        >
          Delete
        </button>
      </li>
    );
  }
}
