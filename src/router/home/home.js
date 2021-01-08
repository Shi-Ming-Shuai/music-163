
// 导入首页展示页面组件
import Home from "component/home/Home"
import Detail from "component/common/Detail"

// 配置路由信息
const routes = [
  {
    path: "/",
    redireact: "/home/recsong"
  },
  {
    path: "/home",
    component: Home
  },
  // query  查询参数
  {
    path: "/playlist",
    component: Detail
  },
  // {
  //   path: "/search",
  //   component: Search
  // },
]
// 导出路由信息
export default routes