import axios from 'axios'
const request = axios.create({
  // 基础路径
  baseURL: 'http://liufusong.top:8080',
  timeout: 10000
})

export default request
