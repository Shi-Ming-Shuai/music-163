import React, { Component } from "react";

// 热歌榜（歌单详情 公共组件）
import PlayList from "component/playlist/PlayList";
// qs 解析 传递的参数
import qs from "query-string";

export default class Detail extends Component {
  render() {
    // 将传递过来的 参数 解析，发送给子组件
    let query = this.props.location.search.slice(1);
    let qsw = qs.parse(query);
    let id = Number(qsw.id);
    return (
      <div>
        <PlayList id={id} />
      </div>
    );
  }
}
