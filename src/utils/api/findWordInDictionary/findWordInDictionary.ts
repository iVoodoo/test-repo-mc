import { AxiosRequestConfig } from 'axios'

import { apiRequest } from '../api'

export const findWordInDictionary = async (word: string) => {
  const config: AxiosRequestConfig = {
    url: word,
    method: 'GET'
  }

  const request = await apiRequest(config)
  return request
}
