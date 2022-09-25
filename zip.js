function isMinnesotaZip(code) {
  if (code >= 55001 && code <= 56763)
  return true
  else {
    return false
  }
}

console.log(isMinnesotaZip(55403))

function validGpa(gpa) {
  if (gpa >= 0 && gpa <= 4) {
    return true
  }
  else {
    return false
  }
}

function cityStateAddress(city, state) {
  let address = `${city}, ${state.toUpperCase()}`
  return address
}

console.log(cityStateAddress('Minneapolis', 'mn'))


let className = 'Web programming'
let classCode = '2560'
let department = 'ITEC'

console.log(`This class is ${department} ${classCode} ${className}`)
