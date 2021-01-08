import React, { Component } from "react";

// 歌单详情 请求
import { getPlayList } from "network/playlist/playlist";
// 当前页面样式
import "./PlayList.css";

export default class PlayList extends Component {
  // props.isHot 判断是否为热门页面
  async componentDidMount() {
    // 接收两个参数 id ，【s】
    let res = await getPlayList(this.props.id);
    this.setState({
      // 图片展示
      coverImgUrl: res.playlist.coverImgUrl,
      songList: res.playlist.tracks.splice(0, 15),
    });
  }
  // 页面加载 元素展示处理
  // 歌曲编号  <ul> li 中的 .song-id
  songId(i) {
    // 判断是否前三名 如果是前三 则排行榜编号为红色
    let color = i < 3 ? "#df3436" : "#999999";
    //编号 小于10 则补0 (i 就是编号)
    if (i < 9) {
      return (
        <div className="song-id" style={{ color }}>
          0{i + 1}
        </div>
      );
    } else {
      return (
        <div className="song-id" style={{ color }}>
          {i + 1}
        </div>
      );
    }
  }
  state = {
    list: [],
    songList: [],
  };
  render() {
    return (
      <div id="playlist">
        {/* 头部图片 */}
        <div className="head">
          <div className="header-img">更新日期:021.07</div>
        </div>
        <div className="song-list">
          <ul>
            {this.state.songList.map((item, i) => {
              return (
                <li key={item.id}>
                  {/* ID编号处理 */}
                  {this.songId(i)}
                  <div className="song-name">
                    <div className="title">{item.name}</div>
                    <div className="artists">
                      <i></i>
                      {/* 循环遍历 作者 */}
                      {item.ar.map((ar, i) => {
                        let str = " / ";
                        // 如果是最后一位作者 或者是 第一位作者 则不添加 /
                        if (i === item.ar.length - 1) {
                          str = "";
                        }
                        return (
                          <span key={ar.id}>
                            {ar.name}
                            {str}
                          </span>
                        );
                      })}
                      <span> - {item.al.name}</span>
                    </div>
                  </div>
                  <div className="paly">
                    <button>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
