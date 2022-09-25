let user = {username: 'Grant', password: 'p@ssw0rd'}

for (let name in user) {
  console.log(name, user[name])
}

console.log(user.username)
console.log(user['username'])

console.log(user.password)
console.log(user['password'])

let whatProperty = 'password'
console.log(user[whatProperty])

let usernameProperty = 'username'
console.log(user[usernameProperty])

user.password = 'password'
console.log(user)

user['password'] = 'PaSsWoRd'
console.log(user)

user.email = 'grant.loh@mpls.edu'
console.log(user)
console.log(user.email)
