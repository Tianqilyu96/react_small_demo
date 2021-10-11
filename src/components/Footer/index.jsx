import React, { Component } from "react";
import './index.css'

export default class Footer extends Component {
  render() {
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" />
        </label>
        <span>
          <span>Completed 0</span> / 2
        </span>
        <button className="btn btn-danger">Deleted Finished</button>
      </div>
    );
  }
}
