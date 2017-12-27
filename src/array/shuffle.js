// 数组随机
const shuffle = (arr) => {
  let length = arr.length
  let temp
  let random
  while (length !== 0) {
    random = Math.floor(Math.random() * length)
    length--
    temp = arr[length]
    arr[length] = arr[random]
    arr[random] = temp
  }
  return arr
}
module.exports = shuffle;
