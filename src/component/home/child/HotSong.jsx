import React, { Component } from "react";

// 热歌榜（歌单详情 公共组件）
import PlayList from "../../playlist/PlayList";

export default class HotSong extends Component {
  render() {
    return (
      <div>
        <PlayList />
      </div>
    );
  }
}
