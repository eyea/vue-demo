import axios from 'axios'

// 服务添加可以在这里引入 单出一个配置文件
// mock平台账号 boring@123.com
const rap2 = `http://rap2api.taobao.org/app/mock/234372` // vue-demo的仓库地址id 234372 所有接口在这下面

function getBaseUrl (apiRoot) {
  // 不同服务的映射
  if (~apiRoot.indexOf('rap2')) {
    return apiRoot.replace('rap2', rap2)
  }
  return apiRoot
}

export function baseApi(apiRoot = '/') {
  let obj = {}
  const url = getBaseUrl(apiRoot)

  obj = axios.create({
    baseURL: url,
    timeout: 10000
  })

  // 拦截器
  obj.interceptors.request.use(config => {
    return config
  }, err => {
    return Promise.reject(err)
  })

  obj.interceptors.response.use(res => {
    return res.data
  }, err => {
    let error
    function netError () {
      error = new Error('网络错误，请检查网络设置')
    }

    if (err.message === 'Network Error' || ~(err.message || '').indexOf('timeout')) {
      netError()
      return Promise.reject(error)
    }

    const { status, data = {} } = err.response || {}

    if (+status === 401) {
      location.href = './login.html'
    } else {
      let error = data.message ? new Error(data.message) : err
      if (~error.message.indexOf('timeout')) {
        netError()
      }
      return Promise.reject(error)
    }
  })

  return obj
}