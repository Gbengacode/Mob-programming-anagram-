module.exports = function (str1, str2) {
  let cleanStr1 = str1.replace(/[^a-z0-9+]+/gi, '').trim().toLowerCase()
  let cleanStr2 = str2.replace(/[^a-z0-9+]+/gi, '').trim().toLowerCase()
  return cleanStr1.length == cleanStr2.length

}
