function shout(text) {
  let shouty-text = text.toUpperCase() + '!!!'
  return shouty-text
}

console.log(shout('hello world'))
let message = shout('hello web programmers')
console.log(message)

fucntion f_to_c(f) {
  let celsius = (f - 32) * 5 / 9
  if (decimalPlaces) {
    return celsius.toFixed(decimalPlaces)
  } else {
    return celsius
  }
  return celsius.toFixed(2)
}

let todayTemp = 75
todayCelsius = f_to_c(todayTemp, 2)
console.log(todayCelsius)
