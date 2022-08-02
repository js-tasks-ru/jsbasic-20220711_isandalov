function makeFriendsList(friends) {
  let stringFio = friends.map( (item) => {return `<li>${[item.firstName]} ${[item.lastName]}</li>`} ).join('\n')
  let ul = document.createElement('ul')
  ul.innerHTML = stringFio
  return ul  
}
