import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";

export default class App extends Component {
  state = { users: [] };

  saveusers = (users) => {
    this.setState({ users });
    console.log(users)
  };

  render() {
    return (
      <div className="container">
        <Search saveUsers={this.saveusers} />
        <List users={this.state.users}/>
      </div>
    );
  }
}
