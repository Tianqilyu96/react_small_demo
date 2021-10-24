import React, { Component } from "react";
import Detail from "./Detail";
import { Link, Route } from "react-router-dom";

export default class Message extends Component {
  state = {
    messageArr: [
      { id: "01", title: "message001" },
      { id: "02", title: "message002" },
      { id: "03", title: "message003" },
    ],
  };
  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {messageArr.map((el) => {
            return (
              <li key={el.id}>
                  {/* 向路由组件传递params参数 */}
                <Link to={`/home/message/detail/${el.id}/${el.title}`}>
                  {el.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <hr />
        {/* 声明接收params参数-detail可以收到 */}
        <Route path="/home/message/detail/:id/:title" component={Detail} />
      </div>
    );
  }
}
