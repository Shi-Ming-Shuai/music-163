// 无状态组件
import { Switch, Route, Redirect } from "react-router-dom";

// 封装的 Switch  （根据routes里的配置 渲染 Route标签）
const MySwitch = (props) => {
  return (
    <Switch>
      {props.routes.map((item, i) => {
        // 判断是否配置了重定向  exact: 精确匹配
        if (item.redireact) {
          return (
            <Redirect
              key={i}
              from={item.path}
              exact
              to={item.redireact}
            ></Redirect>
          );
        } else {
          return (
            <Route key={i} path={item.path} component={item.component}></Route>
          );
        }
      })}
    </Switch>
  );
};

export default MySwitch;
