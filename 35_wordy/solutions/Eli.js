
function wordy(string){
  function add(a,b){
    return parseInt(a)+parseInt(b)
  }
  function subtract(a,b){
    return a-b
  }
  var ans =0
  var opperator
  var arr = []
  var array = string.split(" ")
  for (var i = 0; i < array.length; i++) {
    if(array[i]==="plus") opperator = add;
    else if (parseInt(array[i]) != NaN) arr.push(array[i])
  }
  console.log(opperator(arr[0],arr[1]));
  ans = opperator(arr[0],arr[1]);
  return ans


}
//wordy("1 plus 2")


module.exports = wordy;
