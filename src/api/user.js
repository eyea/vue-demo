import { baseApi } from './utils'

const userApi = baseApi(`rap2`)

export function postUserInfoVerify (data) {
  return userApi.post(`/login`, data)
}

export function getUserInfo (userId) {
  return userApi.get(`/baseInfo?userId=${userId}`)
}
