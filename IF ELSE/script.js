function compareTriplets(a, b){
  let alice = 0
  let bob = 0

  for(let index = 0; index < a.length; index++){
    if(a[index] > b[index]){
      alice++
    }else if(a[index] < b[index]){
      bob++
    }
  }
  return [alice, bob]
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
