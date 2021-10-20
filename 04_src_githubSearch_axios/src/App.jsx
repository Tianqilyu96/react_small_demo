import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";

export default class App extends Component {
  state = { users: [], isFirst: true, isLoading: false, err: "" };

  // saveusers = (users) => {
  //   this.setState({ users });
  //   console.log(users);
  // };
  setAppState=(stateObj)=>{
    this.setState(stateObj);
  }

  render() {
    return (
      <div className="container">
        <Search setAppState={this.setAppState} />
        <List {...this.state} />
      </div>
    );
  }
}
