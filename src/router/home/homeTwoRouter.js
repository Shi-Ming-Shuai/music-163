
// home 二级路由
import RecSong from "../../component/home/child/RecSong";
import HotSong from "../../component/home/child/HotSong";
import Search from "../../component/home/child/Search";

const routes = [
  { path: "/home/recsong", component: RecSong },
  { path: "/home/hotsong", component: HotSong },
  { path: "/home/search", component: Search },
]

export default routes;