function getMinMax(str) {
  let arr = str.split(' ').filter(item => isFinite(item) == true).map(Number)
  let max = arr[0]
  let min = arr[0]
  for (let i = 0; i < arr.length; i +=1) {    
    if (max < arr[i]) {
      max = arr[i]
    }
    if (min > arr[i])  {
      min = arr[i]
    }
  }
  let obj = {min: min,
             max: max}
  return obj
}
