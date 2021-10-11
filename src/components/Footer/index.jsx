import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

export default class Footer extends Component {
  //add props validation
  static propTypes = {
    todos: PropTypes.array.isRequired,
    deleteFinished: PropTypes.func.isRequired,
  };

  //handle delete finished action
  handleDelete = () => {
    if (window.confirm("Delete all finished items?")) {
      this.props.deleteFinished();
    }
  };

  render() {
    const { todos } = this.props;

    let conpleteNum = todos.filter((el) => {
      return el.done === true;
    }).length;

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" />
        </label>
        <span>
          <span>Completed {conpleteNum}</span> / {todos.length}
        </span>
        <button className="btn btn-danger" onClick={() => this.handleDelete()}>
          Deleted Finished
        </button>
      </div>
    );
  }
}
