import Cookies from 'js-cookie'
const TokenKey = 'Admin-Token'
export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function getToken (token) {
  return Cookies.get(TokenKey)
}

export function removeToken (token) {
  return Cookies.remove(TokenKey)
}
