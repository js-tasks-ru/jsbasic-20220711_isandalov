function showSalary(users, age) {
  let result = ''
  let arr = users.filter(item => item.age <= age)
  for (let key of arr) {    
    result += `${key.name}, ${key.balance}\n`
  }
  return result.slice(0, -1)
}
