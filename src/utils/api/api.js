import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.jielv.com.cn' // 设置基本URL
  // timeout: 50000 // 设置请求超时时间
})

// 请求拦截器
api.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // 例如，可以在请求头中添加认证信息
    // config.headers.Authorization = `Bearer ${token}`;
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器
api.interceptors.response.use(
  (response) => {
    // 对响应数据做些什么
    return response.data
  },
  (error) => {
    // 对响应错误做些什么
    return Promise.reject(error)
  }
)

// 封装 GET 请求
export const get = async (url, params = {}) => {
  try {
    const response = await api.get(url, { params })
    return response
  } catch (error) {
    throw error
  }
}

// 封装 POST 请求
export const post = async (url, data = {}) => {
  try {
    const response = await api.post(url, data)
    return response
  } catch (error) {
    throw error
  }
}

// 其他类型的请求可按需封装
// export const put = async (url, data = {}) => {
//   // ...
// };

// export const del = async (url) => {
//   // ...
// };

export default api
