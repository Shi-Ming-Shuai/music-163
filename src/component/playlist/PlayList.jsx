import React, { Component } from "react";

// 返回上一级
import GoBack from "../common/GoBack";

// 热歌榜接口地址：/playlist/detail?id=3778678
// import {} from ""
export default class PlayList extends Component {
  componentDidMount() {
    // 判断展示的页面
    if (this.props.history) {
    } else {
      // 如果没有路由信息 那么就是热歌榜 页面（请求热歌榜数据）
    }
  }
  state = {
    list: [],
  };
  render() {
    return (
      <div>
        <GoBack />
        <h2>歌曲详情-播放列表</h2>
        <p>歌曲专辑id : </p>
      </div>
    );
  }
}
