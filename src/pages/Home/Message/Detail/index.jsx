import React, { Component } from "react";

const seedData = [
  { id: "01", content: "xxxxxxx0001" },
  { id: "02", content: "xxxxxxx0002" },
  { id: "03", content: "xxxxxxx0003" },
];

export default class Detail extends Component {
  render() {
    //   接收params参数
    const { id, title } = this.props.match.params;
    let findObj = seedData.find((el) => {
      return el.id === id;
    });
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT: {findObj.content}</li>
      </ul>
    );
  }
}
