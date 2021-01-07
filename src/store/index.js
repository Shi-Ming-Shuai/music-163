
// 1. 导入 创建仓库
import { createStore } from "redux";

// 2. 定义初始状态
const initialState = {
  name: "初始名称",
  age: 0
}

//3. 定义纯函数 修改state
function reducer(state = initialState, action) {
  // 判断 触发的action 
  switch (action.type) {
    case "CHANGE_NAME":
      // 返回状态， 将状态结构，然后修改状态(修改的属性 会将state中的属性覆盖)
      return {
        ...state,
        name: action.params
      }
    case "CHANGE_AGE":
      return {
        ...state,
        age: action.params
      }
    // 重要 一定要写，如果没修修改 直接将stat返回出去
    default:
      return state
  }
}

// 4.使用cerateState 创建仓库, 传入纯函数（处理）
const store = createStore(reducer);

// 5.导出仓库
export default store;