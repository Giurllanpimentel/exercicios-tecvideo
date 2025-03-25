function simpleArraySum(ar){
  let soma = 0
  for(let index = 0; index < ar.length; index++){
    soma = soma + ar[index]
  }
  return soma
}

console.log(simpleArraySum([5, 8, 10]));

