function truncate(str, maxlength) {
  if (str && maxlength && str.length <= maxlength)
    return str
  else if (str && maxlength && str.length > maxlength)
    return str.slice(0, maxlength-1) + '…'
  else
    return 'данные не корректны'
}
