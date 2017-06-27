import originJSONP from 'jsonp'

// 封装的 jsonp 函数
export default function jsonp(url, data, options) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  
  return new Promise((resolve, reject) => {
    originJSONP(url, options, (err, data) => {
      if(!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

// url 拼接函数
function param(data) {
  let url = ''
  for(let k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }

  return url ? url.substring(1) : ''
}
