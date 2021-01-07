
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
export {
  GetPersonalized,GetRecNewsong
}