function array() {
  var newArray = {}
  newArray.length = 0
  newArray.push = function (value) {
    newArray[newArray.length] = value
    newArray.length ++
  }
  newArray.pop = function () {
    var temp = newArray[newArray.length-1]
    newArray[newArray.length-1] = null
    newArray.length --
    return temp
  }
  return newArray
}

var arr = array()
arr.push(1)
console.log(arr.length) // -> 1
arr.push(10)
console.log(arr.length) // -> 2
console.log(arr[0]) // -> 1
console.log(arr[1]) // -> 10
console.log(arr.pop()) // -> 10
console.log(arr.length) // -> 1
console.log(arr.pop()) // -> 1
console.log(arr.length) // -> 0
