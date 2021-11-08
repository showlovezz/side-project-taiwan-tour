// @ts-check
import jsSHA from 'jssha'

import { AppID, AppKey } from '../apiKey'

/**
 * Ellipsis Description
 * @param {string} str
 * @returns {string}
 */
export const ellipsisDescription = (str) => {
  if (typeof str !== 'string') String(str)

  return str.length > 35 ? `${str.substr(0, 43)} ...` : str
}

/**
 * Ellipsis Name
 * @param {string} str
 * @returns {string}
 */
export const ellipsisName = (str) => {
  if (typeof str !== 'string') String(str)

  return str.length > 20 ? `${str.substr(0, 30)} ...` : str
}

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
 * Validation AppID & AppKey
 * @returns {{Authorization: string, 'X-Date': string} }
 */
export const getAuthorizationHeader = () => {
  // TODO
  // @ts-ignore
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
