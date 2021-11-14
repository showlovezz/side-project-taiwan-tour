import Axios from 'axios'
import jsSHA from 'jssha'

import { AppID, AppKey } from '../../apiKey'

function getAuthorizationHeader() {
  const GMTString = new Date().toGMTString()
  // eslint-disable-next-line new-cap
  const ShaObj = new jsSHA('SHA-1', 'TEXT')
  ShaObj.setHMACKey(AppKey, 'TEXT')
  ShaObj.update(`x-date: ${GMTString}`)
  const HMAC = ShaObj.getHMAC('B64')
  // eslint-disable-next-line no-useless-escape
  const Authorization = `hmac username=\"${AppID}\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"${HMAC}\"`
  return { Authorization, 'X-Date': GMTString }
}

export const fetchTours = (city, count) => {
  console.log(city, count)
  if (!city || !count) return Promise.reject(new Error('miss_options'))

  return Axios.get(
    `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?$top=${count}&$format=JSON`,
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

// export const fetchActivities = (count) => {
//   if (!count) return Promise.reject(new Error('miss_options'))

//   return Axios.get(
//     `https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$top=${count}&$format=JSON`,
//     { headers: getAuthorizationHeader() },
//   )
//     .then((response) => {
//       const { data } = response
//       if (!data) {
//         return Promise.reject(new Error('Fetch Error'))
//       }

//       return data
//     })
//     .catch((error) => {
//       return Promise.reject(new Error(error))
//     })
// }

// export const fetchRestaurants = (count) => {
//   if (!count) return Promise.reject(new Error('miss_options'))

//   return Axios.get(
//     `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$top=${count}&$format=JSON`,
//     { headers: getAuthorizationHeader() },
//   )
//     .then((response) => {
//       const { data } = response
//       if (!data) {
//         return Promise.reject(new Error('Fetch Error'))
//       }

//       return data
//     })
//     .catch((error) => {
//       return Promise.reject(new Error(error))
//     })
// }

// export const fetchHotels = (count) => {
//   if (!count) return Promise.reject(new Error('miss_options'))

//   return Axios.get(
//     `https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?$top=${count}&$format=JSON`,
//     { headers: getAuthorizationHeader() },
//   )
//     .then((response) => {
//       const { data } = response
//       if (!data) {
//         return Promise.reject(new Error('Fetch Error'))
//       }

//       return data
//     })
//     .catch((error) => {
//       return Promise.reject(new Error(error))
//     })
// }
