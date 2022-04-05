import axios from 'axios'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000
})

service.interceptors.response.use(res => {
  return res.data
})

export default service
