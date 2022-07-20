function ucFirst(str) {
  if (str) {
    return str.split('')[0].toUpperCase()+str.slice(1)
  }
  return ""
}
