import React, { Component } from "react";

// 使用高阶组件 wiht Router 高阶组件 可以让路由组件 页面组成部分的小组件也保持父组件的路由信息
import { withRouter } from "react-router-dom";

class GoBack extends Component {
  render() {
    console.log(this);
    return (
      <div>
        {/* 返回上一级 */}
        <button onClick={() => this.props.history.goBack()}>返回上一级</button>
      </div>
    );
  }
}

// 使这个组件 拥有 父组件的路由信息
export default withRouter(GoBack);
