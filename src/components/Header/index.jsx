import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    return <div></div>;
  }
}

//使普通组件拥有router组件的props
export default withRouter(Header);
