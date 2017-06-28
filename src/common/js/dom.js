// 为元素添加类名
export function addClass(el, className) {
  // 先判断一下元素是否含有需要添加的类名，有则直接 return
  if(hasClass(el, className)) {
    return
  }
  // 把该元素含有的类名以空格分割
  let newClass = el.className.split(' ')
  // 把需要的类名 push 进来
  newClass.push(className)
  // 最后以空格拼接
  el.className = newClass.join(' ')
}

// 判断是否有要查看的 className，有则返回true，否则返回 false
export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')

  return reg.test(el.className)
}

export function getData(el, name, val) {
  const prefix = 'data-'
  name = prefix + name
  if(val) {
    return el.setAttribute(name, val)
  } else {
    return el.getAttribute(name)
  }
}
