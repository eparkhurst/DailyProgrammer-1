var matrix = [[1, 64, 23],
              [22, 50, 2]];

var matrix1 = [[44, 23],
               [21, 10],
               [9, 28],
               [85, 16],
               [33, 18]];

var matrix2 = [[29,62,8], [12,60, 31], [99,79,12]];

function mCount(arr){
  var height = arr.length
  var width = arr[0].length
  console.log(height+'x'+width);
}

function rotate(arr){
  var newArr=[]
  for (var i = arr.length-1; i >=0 ; i--) {
    for (var j = 0; j < arr[i].length; j++) {
      if(i == arr.length-1){
        newArr.push([arr[i][j]])
      }else {
        newArr[j].push(arr[i][j])
      }
    }
  }
  return newArr;
}

// mCount(matrix);
// console.log(rotate(matrix));
// mCount(matrix1);
// console.log(rotate(matrix1));
mCount(matrix2);
console.log(rotate(matrix2));
