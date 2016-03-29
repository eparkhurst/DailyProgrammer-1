

function runGame(input){
  function checkNum(currentNum, outString){
    if(currentNum == 1)console.log(outString)
    else if (currentNum != Math.floor(currentNum)) {
      return null
    }
    else{
    checkNum(currentNum / 3, outString+ currentNum + " / 3 \n") ||
    checkNum(currentNum - 1, outString+ currentNum + " - 1 \n");
    }
  }
  checkNum(input, '')
}

runGame(7)


// while(currentNum !=1){
//   if (currentNum %3===0) {
//     outString = outString + currentNum+' / 3';
//     currentNum = currentNum/3
//   }
//   else if ((currentNum +1)%3){
//     outString = outString + currentNum+' + 1';
//     currentNum = currentNum + 1
//   }
//   else{
//     outString = outString + currentNum+' - 1';
//     currentNum = currentNum -1
//   }
// }
