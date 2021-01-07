import React, { Component } from "react";
// 页面数据  网络请求
import { GetPersonalized, GetRecNewsong } from "../../../network/home/home";

export default class RecSong extends Component {
  // 请求推荐歌单数据
  async componentDidMount() {
    let rec = await GetPersonalized({ limit: 6 });
    let newSong = await GetRecNewsong({ limit: 10 });
    this.setState({
      recList: rec.result,
      recNewSong: newSong.result,
    });
  }
  // 状态
  state = {
    // 推荐歌单
    recList: [],
    // 最新音乐
    recNewSong: [],
  };
  // 业务逻辑
  // 点击进入对应的音乐专辑 播放列表
  goPlay(i) {
    // 根据指定专辑 id 信息 跳转到 播放列表页
    this.props.history.push({
      pathname: "/playlist",
      search: "?id=" + i,
    });
  }
  // 渲染
  render() {
    return (
      <div id="recommend">
        <div className="rec-song">
          <h2>推荐歌单</h2>
          <div className="rec-list">
            {this.state.recList.map((item) => {
              return (
                // 点击进入指定 id 歌曲专辑
                <div
                  key={item.id}
                  className="rec-item"
                  onClick={() => this.goPlay(item.id)}
                >
                  <img src={item.picUrl} alt="" />
                  <p>{item.name} </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="new-song">
          <h2>最新音乐</h2>
          <ul>
            {this.state.recNewSong.map((item) => {
              return (
                <li key={item.id}>
                  <div className="song-name">
                    <div className="title">{item.song.name}</div>
                    <div className="artists">
                      <i></i>
                      {/* 循环遍历 作者 */}
                      {item.song.artists.map((artists, i) => {
                        let str = " / ";
                        // 如果是最后一位作者 或者是 第一位作者 则不添加 /
                        if (i === item.song.artists.length - 1) {
                          str = "";
                        }
                        return (
                          <span key={artists.id}>
                            {artists.name}
                            {str}
                          </span>
                        );
                      })}
                      <span> - {item.song.album.name}</span>
                    </div>
                  </div>
                  <div className="paly">
                    <button>放</button>
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
