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

  //handle the checkbox checking action
  handleCheck = (event) => {
    this.props.checkAll(event.target.checked);
  };

  render() {
    const { todos } = this.props;

    let completeNum = todos.filter((el) => {
      return el.done === true;
    }).length;

    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            onChange={(event) => {
              this.handleCheck(event);
            }}
            checked={completeNum === todos.length}
          />
        </label>
        <span>
          <span>Completed {completeNum}</span> / {todos.length}
        </span>
        <button className="btn btn-danger" onClick={() => this.handleDelete()}>
          Deleted Finished
        </button>
      </div>
    );
  }
}
