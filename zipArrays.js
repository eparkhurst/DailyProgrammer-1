

function zip(arr1,arr2){
  var newArr=[]
  var length = 0
  if(arr1.length < arr2.length) length = arr2.length
  else length = arr1.length
  for (var i = 0; i < length; i++) {
    if(arr1[i])newArr.push(arr1[i])
    if(arr2[i])newArr.push(arr2[i])
  }
  return newArr;
}

console.log(zip([1,2,3,7,8,9], [4,5,6]))
