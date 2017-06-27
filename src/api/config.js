/**
 * 一些常用指令参数
 */

// 发送请求的一些默认参数
export const commonParams = {
  g_tk: 5381,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp'
}

export const options = {
  param: 'jsonpCallback'
}

// 判断返回的值是否请求成功，成功为0
export const ERR_OK = 0
