import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

if (process.env.NODE_ENV == 'development') {
  // 做了代理处理接口服务器的跨域问题
  axios.defaults.baseURL = '/development' 
}
else if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = '/production'       
}

axios.defaults.timeout = 10000

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    // if (!(process.env.NODE_ENV == 'production')) {
    //   console.log('响应拦截器：')
    //   console.log(response)
    // }
    if (response.status === 200) {
      // 请求状态码为200，但接口状态码不为0或者其他正常响应码时可以在这里做一层过滤
      switch (response.data?.code) {
        case '00000':
          // 有需要可以使用resetType(response)将所有字段类型全部转成string。
          // return resetType(response)
          return response
        default:
          // 这里可以放个全局的提示替换控制台输出
          console.log(response.data?.message || '请求错误')
          return Promise.reject(response)
      }
    } else {
      return Promise.reject(response)
    }
  },
  // 服务器状态码不是200的情况
  (error: AxiosError<any>) => {
    if (error.response?.status) {
      switch (error.response.status) {
        case 401:
          break
        case 403:
          break
        case 404:
          break;
        case 500:
          break
        default:
      }
      return Promise.reject(error.response)
    }
  }
)

export const get = (url: string, params: any) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {params:params})
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}

export const post = (url: string, params: any) => {
  return new Promise((resolve, reject) => {
    // 从会话缓存中获取token
    // params.token = JSON.parse(sessionStorage.getItem('token') || '')
    axios
      .post(url, JSON.stringify(params))
      .then(
        (res) => {
          resolve(res.data)
        },
        (err) => {
          reject(err)
        }
      )
      .catch((err) => {
        reject(err.data)
      })
  })
}

// 将后端传过来的数据全部转化为字符串类型，包括数字，数组，对象
const resetType = (data: any) => {
  if (typeof data === 'string') return data
  else if (typeof data === 'boolean') return data
  else if (typeof data === 'number') return data.toString()
  else if (data instanceof Array) {
    for (let item of data) {
      item = resetType(item)
    }
    return data
  } else if (data instanceof Object) {
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        data[key] = resetType(data[key])
      }
    }
    return data
  } else return data
}