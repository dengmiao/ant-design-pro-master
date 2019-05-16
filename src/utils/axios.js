// 新增请求工具类
import { axios } from 'axios'

const TIMEOUT = 1 * 60 * 1000

axios.defaults.timeout = TIMEOUT
axios.defaults.baseURL = 'http://localhost:7777/corgi'

export default async function request (options) {
  let response
  try {
    response = await axios(options)
    return response
  } catch (err) {
    return response
  }
}
