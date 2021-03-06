import React, { Component } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import "./App.css";

//定义及暴露组件app组件
export default class App extends Component {
  //Initialise state
  //状态在哪里，操作状态的方法就在哪里
  state = {
    todos: [
      { id: "1", name: "Coding", done: true },
      { id: "2", name: "Have Fun", done: true },
      { id: "3", name: "Sleeping", done: false },
    ],
  };
  //父组件数据传给子组件-直接将state中的数据通过props传到子组件
  //子组件数据传给父组件-定义一个arrow function，然后通过props传给子组件，子组建可以调用这个function，因为this指向父组件

  //add one todo
  addTodo = (name) => {
    let { todos } = this.state;
    let todo = { id: nanoid(), name: name, done: false };
    console.log(todo);
    todos.push(todo);

    this.setState({ todos });
  };

  //add checked function, pass it to item
  checkTodo = (id, checked) => {
    const { todos } = this.state;
    let newTodos = todos.map((el) => {
      if (el.id === id) {
        return { ...el, done: checked };
      } else {
        return el;
      }
    });
    this.setState({ todos: newTodos });
  };

  //delete single todo
  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((el) => {
      return el.id !== id;
    });
    this.setState({ todos: newTodos });
  };

  //delete finished items
  deleteFinished = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((el) => {
      return el.done !== true;
    });
    this.setState({ todos: newTodos });
  };

  //check all items
  checkAll = (flag) => {
    const { todos } = this.state;
    const newTodos = todos.map((el) => {
      return { ...el, done: flag };
    });
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            checkTodo={this.checkTodo}
            deleteTodo={this.deleteTodo}
            todos={todos}
          />
          <Footer todos={todos} deleteFinished={this.deleteFinished} checkAll={this.checkAll} />
        </div>
      </div>
    );
  }
}
