import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MyNavLink from "./components/MyNavLink";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            {/* 原生html中用 <a>跳转不同页面 */}
            {/* <div className="list-group">
            <a className="list-group-item active" href="./about.html">About</a>
            <a className="list-group-item" href="./home.html">Home</a>
          </div> */}

            {/* React中用路由链接切换组件--Link/NavLink 改变path-不刷新页面*/}
            {/* Navlink 中的activeClassName 可以设置点击的样式 */}
            {/* 封装Navlink使代码简洁 */}
            {/* about 仍然可以显示, 因为模糊匹配 */}
            <MyNavLink to="/home">Home</MyNavLink>
            <MyNavLink to="/about/a/b">About</MyNavLink>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 当path改变 component也改变，路由组件要放到pages*/}
                {/* 三个props history/location/match */}
                {/* Switch组件让route只匹配一次path，如果有同路径的components只会显示第一个，提高了效率 */}
                {/* set exact match exact/ exact={true}*/}
                {/* Redirect 放在最后，如果都匹配不上则去redirect里的默认path */}
                <Switch>
                  <Route path="/about" component={About} />
                  <Route exact={true} path="/home" component={Home} />
                  <Redirect to="/home" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
