import axios, { AxiosRequestConfig } from 'axios'
import { AxiosInstance, CreateAxiosDefaults } from 'axios'

class WjwRequest {
  instance: AxiosInstance
  constructor(config: CreateAxiosDefaults) {
    this.instance = axios.create(config)
  }
  request(config: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data.data.banner)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

export default WjwRequest
