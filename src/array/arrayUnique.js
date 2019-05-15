/**
 * 普通数组去重
 * @param {array} arr 去重的数组
 * @example unique2([1,2,2,3,4,3,4,7]) => [1, 2, 3, 4, 7]
 */
const unique = (arr) => arr.filter((element,index,array)=>array.indexOf(element) === index)
module.exports = unique
