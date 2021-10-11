import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import "./App.css";

//定义及暴露组件app组件
export default class App extends Component {
  //Initialise state
  state = {
    todos: [
      { id: 1, name: "Coding", done: true },
      { id: 2, name: "Have Fun", done: true },
      { id: 3, name: "Sleeping", done: false },
    ],
  };
  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header />
          <List todos={todos}/>
          <Footer />
        </div>
      </div>
    );
  }
}
