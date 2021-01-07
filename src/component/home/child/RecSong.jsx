import React, { Component } from "react";
// 查询参数 qs
import qs from "query-string";

export default class RecSong extends Component {
  // 推荐数据
  state = {
    recList: [
      {
        id: 1,
        img:
          "http://p2.music.126.net/R771DyRTmfsBc8UEaaebmw==/109951165561151596.jpg?imageView=1&type=webp&thumbnail=369x0",
        title: "摇滚致幻剂，人间造梦机",
      },
      {
        id: 2,
        img:
          "http://p2.music.126.net/slYPbjzL6uGMM14QX3oBVA==/109951165608817452.jpg?imageView=1&type=webp&thumbnail=369x0",
        title: "★新年限定歌单★ 用音乐向2021 Say Hi！",
      },
      {
        id: 3,
        img:
          "http://p1.music.126.net/evuHH8Wjhl5DJOXaCFOMVA==/109951165545747317.jpg?imageView=1&type=webp&thumbnail=246x0",
        title:"最后一个月里，最想完成的一件事是什么？",
      },
      {
        id: 4,
        img:
          "http://p2.music.126.net/slYPbjzL6uGMM14QX3oBVA==/109951165608817452.jpg?imageView=1&type=webp&thumbnail=369x0",
        title: "★新年限定歌单★ 用音乐向2021 Say Hi！",
      },
      {
        id: 5,
        img:
          "http://p2.music.126.net/R771DyRTmfsBc8UEaaebmw==/109951165561151596.jpg?imageView=1&type=webp&thumbnail=369x0",
        title: "摇滚致幻剂，人间造梦机",
      },
      {
        id: 6,
        img:
          "http://p2.music.126.net/slYPbjzL6uGMM14QX3oBVA==/109951165608817452.jpg?imageView=1&type=webp&thumbnail=369x0",
        title: "★新年限定歌单★ 用音乐向2021 Say Hi！",
      },
    ],
  };
  // 业务逻辑
  // 点击进入对应的音乐专辑 播放列表
  goPlay(i) {
    // 删除图片信息 和标题信息  只保留 id
    delete i.img;
    delete i.title;
    const str = qs.stringify(i);
    // 根据指定专辑 id 信息 跳转到 播放列表页
    this.props.history.push({
      pathname: "/playlist",
      search: str,
    });
    // this.props.history.push("/playlist?" + str);
  }
  // 渲染
  render() {
    return (
      <div className="rec-song">
        <h2>推荐歌单</h2>
        <div className="rec-list">
          {this.state.recList.map((item) => {
            return (
              // 点击进入指定 id 歌曲专辑
              <div
                key={item.id}
                className="rec-item"
                onClick={() => this.goPlay(item)}
              >
                <img src={item.img} alt="" />
                <p>{item.title} </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
