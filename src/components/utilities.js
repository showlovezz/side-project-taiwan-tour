import jsSHA from 'jssha'

/**
 * Ellipsis Img
 * @param {string} imgValue
 * @returns {string}
 */
export const ellipsisImg = (imgValue) => {
  if (!imgValue) return 'https://fakeimg.pl/414x233/'

  return imgValue
}

/**
 * Ellipsis Name
 * @param {string} str
 * @returns {string}
 */
export const ellipsisName = (str = '詳見官網') => {
  if (typeof str !== 'string') String(str)

  return str.length > 18 ? `${str.substr(0, 13)} ...` : str
}

/**
 * Ellipsis Description
 * @param {string} str
 * @returns {string}
 */
export const ellipsisDescription = (str = '詳見官網') => {
  if (typeof str !== 'string') String(str)

  return str.length > 35 ? `${str.substr(0, 43)} ...` : str
}

/**
 * Ellipsis Location
 * @param {string} str
 * @returns {string}
 */
export const ellipsisLocation = (str = '詳見官網') => {
  if (typeof str !== 'string') String(str)

  return str.length > 20 ? `${str.substr(0, 20)} ...` : str
}

/**
 * Validation AppID & AppKey
 * @returns {{Authorization: string, 'X-Date': string} }
 */
export const getAuthorizationHeader = () => {
  // TODO
  const AppID = process.env.REACT_APP_APPID
  const AppKey = process.env.REACT_APP_APPKEY
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
