import axios from 'axios'
const request = axios.create({
  // 基础路径
  baseURL: 'http://liufusong.top:8080',
  timeout: 10000
})

// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    config.headers.Authorization = localStorage.getItem('HAOKE_USER')
    // console.log(config);
    // 必须要return config 不然程序就出不去了 这一步相当于放行
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
export default request
