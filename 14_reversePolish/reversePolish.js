


function calcRPN(string){
  var arr = string.split(' ')
  console.log(arr)
  var newArr =[]
  for (var i = 0; i < arr.length; i++) {
    if(parseInt(arr[i]) === /0-9/){
      newArr.push(arr[i])
    }else
    newArr
  }
  //console.log(newArr)
}

calcRPN('5 1 2 + 4 × + 3 −');
