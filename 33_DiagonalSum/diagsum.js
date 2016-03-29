
function getDiagSum(input){
  var normalSum = 0;
  //var reverseSum = 0;
  var length = input.length;
  for (var i = 0; i < length; i++) {
      normalSum += input[i][i];
    //  reverseSum += input[i][length-1-i]
  }
  return normalSum
}

function getReverse(input){
  var reverseSum = 0;
  var length = input.length;
  for (var i = 0; i < length; i++) {
      reverseSum += input[i][length-1-i]
  }
  return reverseSum
}


module.exports.run = getDiagSum;
module.exports.getReverse = getReverse;
// getDiagSum(entry);
