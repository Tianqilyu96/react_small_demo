import React, { Component } from "react";
import Card from "../Card";
import './index.css'

export default class List extends Component {
  render() {
    return (
      <div className="row">
        {this.props.users.map(user=>{
          const{login,avatar_url,html_url,id} = user
          return <Card key={id} login={login} avatar={avatar_url} html={html_url}/>
        })}
      </div>
    );
  }
}
