function camelize(str) {
  let arr = str.split('')
  for (let i = 0; i<arr.length; i +=1) {
    if (arr[i] == '-') {
      if (arr[i+1]) {
        arr[i+1] = arr[i+1].toUpperCase()
        delete arr[i]
      }
      else {
        delete arr[i]
      }  
    }
  }
  return arr.join('')
}