import React, { Component } from "react";

// 返回上一级
import GoBack from "../common/GoBack";

export default class PlayList extends Component {
  render() {
    return (
      <div>
        <GoBack />
        <h2>歌曲详情-播放列表</h2>
        <p>歌曲专辑id : {this.props.location.search}</p>
      </div>
    );
  }
}
