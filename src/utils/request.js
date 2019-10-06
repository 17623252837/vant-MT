import axios from 'axios'

//api请求地址
const baseUrl =  'http://119.3.15.101';
const basePort = '9090';
const base = baseUrl + ':' + basePort;

export function get(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: base,
    timeout: 5000,
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}

export function post(config) {
  const instance = axios.create({
    baseURL: base,
    timeout: 5000,
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}
