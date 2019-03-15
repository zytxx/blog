import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = 'http://localhost:3000'

const addArticleUrl = 'sapi/articles/add'
const loginUrl = 'sapi/user/login'
const upFileUrl = 'sapi/file/upfile'
const config = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}
export function addArticle (param) {
  return axios.post(addArticleUrl, param).then((resp) => {
    return Promise.resolve(resp.data)
  })
}
export function login (param) {
  return axios.post(loginUrl, param).then((resp) => {
    return Promise.resolve(resp.data)
  })
}
export function upPicture (param) {
  return axios.post(upFileUrl, param, config).then((resp) => {
    return Promise.resolve(resp.data)
  })
}
