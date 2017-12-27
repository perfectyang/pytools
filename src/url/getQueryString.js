// 获取导航栏参数值
const getQueryString = (name) => {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  let param = '?' + window.location.href.split('?')[1]
  let r = param.substr(1).match(reg)
  if (r !== null) {
    return unescape(r[2])
  }
  return null
}

module.exports = getQueryString
