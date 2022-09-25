let birds = ['Owl', 'Robin', 'Eagle']
console.log(birds)

birds.forEach( function(bird: string, index: number){
  console.log(index, bird)
})

for (let x = 0 ; x < birds.length ; x++) {
  let bird = birds[x]
  console.log(x, bird)
}
