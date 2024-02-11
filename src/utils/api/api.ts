import axios, { AxiosRequestConfig } from 'axios'

import { apiBaseUrl } from './apiData'

const api = axios.create({
  baseURL: apiBaseUrl
})

export const apiRequest = async (config: AxiosRequestConfig) => {
  try {
    const response = await api(config)
    return response.data
  } catch (e) {
    const error = e.response.data
    throw error
  }
}
