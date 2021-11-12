import Axios from 'axios'

import { getAuthorizationHeader } from '../../components/utilities'

// Case 1：兩個都沒值 無腦尋找全部 API

// Case 2：兩個都有值 特定值尋找全部 API

// Case 3：有 city City API

// Case 4：有關鍵字 關鍵字 API

export const fetchAllRestaurants = () => {
  return Axios.get(
    'https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$format=JSON',
    { headers: getAuthorizationHeader() },
  )
    .then((response) => {
      const { data } = response
      if (!data) {
        return Promise.reject(new Error('Fetch Error'))
      }

      return data
    })
    .catch((error) => {
      return Promise.reject(new Error(error))
    })
}

export const fetchKeyWordWithCityRestaurants = (keyWord, city) => {
  if (!keyWord || !city) return Promise.reject(new Error('miss_options'))

  return Axios.get(
    `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/${city}?$format=JSON&$filter=contains(Name, '${keyWord}')`,
    { headers: getAuthorizationHeader() },
  )
    .then((response) => {
      const { data } = response
      if (!data) {
        return Promise.reject(new Error('Fetch Error'))
      }

      return data
    })
    .catch((error) => {
      return Promise.reject(new Error(error))
    })
}

export const fetchCityRestaurants = (city) => {
  if (!city) return Promise.reject(new Error('miss_options'))

  return Axios.get(
    `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/${city}?&$format=JSON`,
    { headers: getAuthorizationHeader() },
  )
    .then((response) => {
      const { data } = response
      if (!data) {
        return Promise.reject(new Error('Fetch Error'))
      }

      return data
    })
    .catch((error) => {
      return Promise.reject(new Error(error))
    })
}

export const fetchKeyWordRestaurants = (keyWord) => {
  if (!keyWord) return Promise.reject(new Error('miss_options'))

  return Axios.get(
    `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/?&$format=JSON&$filter=contains(Name, '${keyWord}') or contains(Description, '${keyWord}')`,
    { headers: getAuthorizationHeader() },
  )
    .then((response) => {
      const { data } = response
      if (!data) {
        return Promise.reject(new Error('Fetch Error'))
      }

      return data
    })
    .catch((error) => {
      return Promise.reject(new Error(error))
    })
}
