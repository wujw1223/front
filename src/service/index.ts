import WjwRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

export default new WjwRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})
