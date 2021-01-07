import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// 导入封装的 routes 二级路由配置， 导入Switch
import routes from "../../router/home/homeTwoRouter";
import MySwitch from "../../router/MySwitch";

// css样式
import "./css/Home.css";

export default class HomeA extends Component {
  render() {
    return (
      <div>
        {/* 头部 */}
        <header className="header">
          <h1>网易云音乐</h1>
        </header>
        {/* 标签栏 */}
        <div className="tabbar">
          <ul>
            <li>
              <NavLink to="/home/recsong">推荐歌曲</NavLink>
            </li>
            <li>
              <NavLink to="/home/hotsong">热歌榜</NavLink>
            </li>
            <li>
              <NavLink to="/home/search">搜索</NavLink>
            </li>
          </ul>
        </div>
        {/* 二级路由- 使用自己封装的router(写法跟vue类似) */}
        <div className="two-router">
          <MySwitch routes={routes}></MySwitch>
        </div>
      </div>
    );
  }
}
