import { request } from "../request";

/*
必选参数 : id : 歌单 id
可选参数 : s : 歌单最近的 s 个收藏者,默认为8 
调用例子 : /playlist/detail?id=24381616
*/
function getPlayList(id, s = null) {
  return request({
    url: "/playlist/detail",
    params: {
      id, s
    }
  })
}

export { getPlayList }