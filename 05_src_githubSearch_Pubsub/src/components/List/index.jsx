import React, { Component } from "react";
import PubSub from "pubsub-js";
import Card from "../Card";
import "./index.css";

export default class List extends Component {
  state = { users: [], isFirst: true, isLoading: false, err: "" };

  //初始化subscribe
  componentDidMount() {
    this.token = PubSub.subscribe("State Data", (msg, stateObj) => {
      this.setState(stateObj);
    });
  }

  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }

  render() {
    const { users, isLoading, isFirst, err } = this.state;
    return (
      <div className="row">
        {isFirst ? (
          <h2>Welcome to the Website</h2>
        ) : isLoading ? (
          <h2>Loading......</h2>
        ) : err ? (
          <h2 style={{ color: "red" }}>{err.message}</h2>
        ) : (
          users.map((user) => {
            const { login, avatar_url, html_url, id } = user;
            return (
              <Card
                key={id}
                login={login}
                avatar={avatar_url}
                html={html_url}
              />
            );
          })
        )}
      </div>
    );
  }
}
