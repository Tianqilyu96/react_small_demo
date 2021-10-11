import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "../Item";
import "./index.css";

export default class List extends Component {

  //add props validation 
  static propTypes = {
    checkTodo : PropTypes.func.isRequired,
    todos : PropTypes.array.isRequired
  }

  render() {
    const { checkTodo, todos } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((todo) => {
          return <Item key={todo.id} {...todo} checkTodo={checkTodo} />;
        })}
      </ul>
    );
  }
}
