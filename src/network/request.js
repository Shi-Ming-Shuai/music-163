import axios from 'axios'
// import store from "../store"
//导出自己封装的方法

export function request(config) {
  //创建axios实例
  const instance = axios.create({
    // /api 启动代理（跨域）   路径重写 api : ''
    baseURL: '/api',
    timeout: 5000,
    // // 设置请求头，附加管理员 的用户信息  token
    // headers: {
    //   // 如果store.state.userInfo 存在（说明登录了） 那么配置请求头token   如果userInfo不存在 那么提交请求头的信息为 空 ''
    //   Authorization: store.state.userInfo ? store.state.userInfo.token : ''
    // }
  })
  //axios拦截器
  //1.请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, error => {
    console.log('错误' + error)
  })
  //2. 响应拦截
  instance.interceptors.response.use(resolve => {
    // 将结果 中的data 返回出去，省的外边在使用.data取数据
    return resolve.data
  }, error => {
    console.log('失败' + error);

  })

  //把实例传递出去
  return instance(config)
}