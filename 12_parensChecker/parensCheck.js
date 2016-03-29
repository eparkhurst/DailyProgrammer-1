var test1 ="()(((())))"
var test2 ="())))("
var test3 =")("


function parenCheck(input){
  var left = 0
  var right = 0
  for (var i = 0; i < input.length; i++) {
    if (input[i]==="(") left +=1;
    else if (input[i]===")") right +=1;
  }
  if (right === left)return true
  else return false
}

console.log(parenCheck(test1));
console.log(parenCheck(test2));
console.log(parenCheck(test3));
