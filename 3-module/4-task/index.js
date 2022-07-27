function showSalary(users, age) {
  let result = ''
  let arr = users.filter( item => item.age <= age).map((item) => {return `${item.name}, ${item.balance}`} ).join('\n')
  return arr
}