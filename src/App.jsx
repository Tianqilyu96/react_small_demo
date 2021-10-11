import React, { Component } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import "./App.css";

//定义及暴露组件app组件
export default class App extends Component {
  //Initialise state
  state = {
    todos: [
      { id: '1', name: "Coding", done: true },
      { id: '2', name: "Have Fun", done: true },
      { id: '3', name: "Sleeping", done: false },
    ],
  };
  //父组件数据传给子组件-直接将state中的数据通过props传到子组件
  //子组件数据传给父组件-定义一个arrow function，然后通过props传给子组件，子组建可以调用这个function，因为this指向父组件

  //add one todo
  addTodo = (name) => {
    let { todos } = this.state;
    let todo = { id: nanoid(), name: name, done: false };
    console.log(todo)
    todos.push(todo);

    this.setState({ todos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} />
          <Footer />
        </div>
      </div>
    );
  }
}
