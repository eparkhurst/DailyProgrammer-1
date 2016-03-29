arr1 =[[1, 0, 0, 0],

          [0, 1, 0, 0],

          [0, 0, 1, 0],

          [0, 0, 0, 1]]
arr2 = [[2, 5, 1, 3, 9],

          [4, 1, 3, 0, 8],

          [1, 0, 9, 7, 6],

          [1, 7, 7, 3, 0],

          [3, 3, 8, 2, 4]]

function diagonalSum(input){
  var sum =0
  for (var i = 0; i < input.length; i++) {
    var arr = input[i]
    sum += arr[i]
  }
  return sum
}

console.log(diagonalSum(arr1));
console.log(diagonalSum(arr2));
