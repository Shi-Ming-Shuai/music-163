
// 导入首页展示页面组件
import Home from "../../component/home/Home"
import PlayList from "../../component/playlist/PlayList"

// 配置路由信息
const routes = [
  {
    path: "/home",
    component: Home
  },
  // query  查询参数
  {
    path: "/playlist",
    component: PlayList
  },
  // {
  //   path: "/search",
  //   component: Search
  // },
  {
    path: "/",
    redireact: "/home"
  }
]
// 导出路由信息
export default routes