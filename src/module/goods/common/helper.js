export default {
  // ajax请求方法
  ajax (obj, api, options, callback) {
    // 第三个参数可以是回调
    if (options instanceof Function) {
      callback = options
      options = {}
    } else {
      options = options instanceof Object ? options : {}
    }
    // 变量是字符串，则执行get请求
    if (api && typeof (api) === 'string') {
      obj.$http.get(api, options).then((response) => {
        this.isCallback(callback, response)
      })
    // 变量是数组，执行post请求
    } else if (api && api instanceof Array) {
      obj.$http.post(api[0], options).then((response) => {
        this.isCallback(callback, response)
      })
    }
  },
  // 判断是否为回调方法
  isCallback (callback, arg) {
    if (callback instanceof Function) {
      callback(arg)
    }
  }
}
