import axios from 'axios'

// 方式4
export function request(config) {
  // 1.创建instance实例
  const instance = axios.create({
    // baseURL:'http://123.207.32.32:8000',
  
    timeout:5000
  })
  // 2.拦截器
  // 2.1请求拦截
    // 对instance实例进行拦截
    instance.interceptors.request.use(
      config => {   
        // console.log(config);
        
        //请求拦截的作用:
        // 1. 比如config中一些信息不符合服务器的要求,则可在实例中进行配置
        // 2. 比如每次发送网络请求时,希望有个转动的小圆圈,就那个正在加载请求的图标
        // 3. 某些网络请求需要携带某些特殊的信息,比如登录需要携带token,就可以在请求体这里判断下,有没有,如果没有,就跳到登录页
        return config;
      },
      err =>{
        console.log(err);
      }
    )
  // 2.2响应拦截
    instance.interceptors.response.use(
      res => {
        // console.log(res);
        return res;
      },
      err =>{
        // console.log(err);
      }
    )
  
  // 3.发送真正的网络请求
    return instance(config)    
}
