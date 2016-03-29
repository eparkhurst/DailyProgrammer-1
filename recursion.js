
function solve(endNum){
  function recursion(array, index){
    if(index == endNum+1) return array
    else if(index % 3 ==0 && index % 5 == 0) array.push('fizbuzz')
    else if(index % 3 ==0) array.push('fiz')
    else if(index % 5 == 0) array.push('buzz')
    else array.push(index)
    return recursion(array, index + 1)
  }
  return recursion([], 1)
}

console.log(solve(20));
