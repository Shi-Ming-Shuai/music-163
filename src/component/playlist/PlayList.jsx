import React, { Component } from "react";
// 第三方中间件  时间戳转换
import moment from "moment";
// 歌单详情 请求
import { getPlayList } from "network/playlist/playlist";
// 当前页面样式
import "./PlayList.css";

export default class PlayList extends Component {
  // props.isHot 判断是否为热门页面
  async componentDidMount() {
    if (this.props.isHot) {
      this.setState({
        tipL: "热歌榜",
      });
    }
    // 接收两个参数 id ，【s】
    let res = await getPlayList(this.props.id);
    console.log(res);
    console.log(res.playlist.tracks);
    this.setState({
      // 图片展示
      coverImgUrl: res.playlist.coverImgUrl,
      name: res.playlist.name,
      songList: res.playlist.tracks.slice(0, 15),
      // 使用时间戳转换工具 处理时间戳
      updateTime: moment(res.playlist.updateTime).format("MM月DD日"),
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
    tipL: "歌单列表",
    coverImgUrl: "",
    updateTime: null,
    name: "",
  };
  render() {
    // 因为歌单列表 和 热歌榜 头部内容不一样，所以根据页面 渲染头部
    let head = "";
    if (this.state.tipL === "歌单列表") {
      head = (
        <div>
          <div className="head">
            <div
              className="head-img"
              style={{
                background:
                  "url(" + this.state.coverImgUrl + ") no-repeat 70%/140%",
              }}
            ></div>
            <div className="cover-title">
              <div className="cover-img">
                <img src={this.state.coverImgUrl} alt="" />
                <span>歌单</span>
              </div>
              <div className="cover-content">
                <h2>{this.state.name}</h2>
              </div>
            </div>
          </div>
          <div className="navbar">歌单列表</div>
        </div>
      );
    } else if (this.state.tipL === "热歌榜") {
      head = (
        // 头部图片  更新时间
        <div className="head">
          <div className="header-img">
            <div className="hot-icon"></div>
            <div className="hot-time">更新日期:{this.state.updateTime}</div>
          </div>
        </div>
      );
    }
    return (
      <div id="playlist">
        {/* 头部标题  -图片 更新时间 */}
        {head}
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
                    {/* 偷了个懒 直接引到网易云了 */}
                    <a
                      href={"https://y.music.163.com/m/song?id=" + item.id}
                    ></a>
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
