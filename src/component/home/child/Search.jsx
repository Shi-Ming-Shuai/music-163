import React, { Component } from "react";
// 搜索接口  热门搜索
import { GetHotSearch, Search } from "network/home/home";

export default class Hot extends Component {
  // 网络请求
  async componentDidMount() {
    let hotList = await GetHotSearch();
    this.setState({
      hotSearch: hotList.result.hots,
    });
  }
  // 业务逻辑 搜索框发生改变 搜索对应内容
  async searchSong(e) {
    let keywords = e.target.value;
    //判断输入框搜索是否为空 如果搜索框清空 则展示 热门搜索
    if (keywords !== "") {
      this.setState({
        searchVal: keywords,
        // 不展示热门搜索 -展示搜索列表
        isShowHot: false,
        isReset: true,
      });
    } else {
      this.setState({
        searchVal: keywords,
        // true 展示热门搜索 false 展示搜索列表
        isShowHot: true,
        isReset: false,
      });
    }
    // 触发搜索请求     // 如果搜索框为空 则不会请求
    let res = await Search(keywords);
    if (res.code === 200 && res.result.songs) {
      this.setState({
        searchList: res.result.songs.splice(0, 6),
      });
    }
  }
  // 点击热门歌曲  输入框内容改变
  async changeSearch(val) {
    this.setState({
      // 不展示热门搜索 -展示搜索列表
      isShowHot: false,
      searchVal: val,
      isReset: true,
    });
    // 触发搜索请求
    let res = await Search(val);
    if (res.code === 200) {
      this.setState({
        searchList: res.result.songs.splice(0, 6),
      });
    }
  }
  // 点击 X 清空输入框内容
  clearSearch() {
    this.setState({
      searchVal: "",
      isShowHot: true,
    });
  }
  state = {
    searchVal: "",
    searchList: [],
    hotSearch: [],
    isShowHot: true,
    isReset: false,
  };
  render() {
    // 搜索展示 搜索列表-不搜索展示热门搜索
    let SearchDom = "";
    if (this.state.isShowHot) {
      SearchDom = (
        <div className="hot-search">
          <h2>热门搜索</h2>
          <ul>
            {this.state.hotSearch.map((item, i) => {
              return (
                <li key={i} onClick={() => this.changeSearch(item.first)}>
                  <span>{item.first}</span>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      SearchDom = (
        <div className="search-list">
          <ul>
            <li className="keywords">
              <h2>搜索:"{this.state.searchVal}"</h2>
            </li>
            {this.state.searchList.map((item, i) => {
              return (
                <li key={i}>
                  <i className="iconfont icon-sousuo"></i>
                  <span>{item.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
    return (
      <div className="search">
        <div className="search-ipt">
          <i className="iconfont icon-sousuo"></i>
          <input
            onChange={(e) => this.searchSong(e)}
            value={this.state.searchVal}
            type="text"
            placeholder="搜索歌曲、歌手、专辑"
          />
          {/* r 代表 this */}
          {(function (r) {
            if (r.state.isReset) {
              return (
                <i
                  className="iconfont icon-quxiao"
                  onClick={() => r.clearSearch()}
                ></i>
              );
            }
          })(this)}
        </div>
        {SearchDom}
      </div>
    );
  }
}
