import request from '@/utils/request'

export function login (username, password) {
  const userinfo = {
    username: username,
    password: password
  }
  return request({
    url: '/api/oauth/auth',
    method: 'get',
    params: userinfo
  })
}

export function getInfo (token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout () {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
