import React, { Component } from "react";

// 热歌榜（歌单详情 公共组件）
import PlayList from "../../playlist/PlayList";

export default class HotSong extends Component {
  // 热歌榜接口地址：/playlist/detail?id=3778678
  render() {
    let id = 3778678;
    return (
      <div>
        {/* 将请求的id传递过去 */}
        <PlayList id={id} isHot={true} />
      </div>
    );
  }
}
