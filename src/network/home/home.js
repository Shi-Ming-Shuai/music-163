
// 导入封装的 axios
import { request } from "../request";

// 获取推荐歌单 /personalized   limit: 取出数量 , 默认为 30 (不支持 offset)
function GetPersonalized(params) {
  return request({
    url: "/personalized",
    params
  })
}
//页面:最新音乐 获取推荐新音乐 /personalized/newsong limit: 取出数量 , 默认为 10 (不支持 offset)
function GetRecNewsong(params) {
  return request({
    url: "/personalized/newsong",
    params
  })
}
// 热门搜索列表
function GetHotSearch() {
  return request({
    url: "/search/hot"
  })
}
// 搜索歌曲  （关键字 ?keyword=名称）
function Search(keywords) {
  return request({
    url: "/search",
    params: {
      keywords
    }
  })
}
export {
  GetPersonalized, GetRecNewsong, GetHotSearch,Search
}