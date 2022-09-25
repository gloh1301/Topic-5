let user = {
  name: 'Grant',
  password: 'p@ssw0rd',
  email: 'grant.loh@mpls.edu',
  roles: ['programmer', 'developer'],
  contact: {
    office: '#3560',
    phone: '6121234567'
  }
}

user.salary = 12345678
user.roles.push('server admin')
user.contact.location = 'Minneapolis'

console.log(user)
