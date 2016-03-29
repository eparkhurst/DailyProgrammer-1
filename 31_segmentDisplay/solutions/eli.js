
function print(num){
  arr= num.toString().split('');
  var ln1=''
  var ln2=''
  var ln3=''
  for (var i = 0; i < arr.length; i++) {
    var obj={}
    if(arr[i]==1) obj = one
    else if (arr[i]==2) obj = two
    else if (arr[i]==3) obj = three
    else if (arr[i]==4) obj = four
    else if (arr[i]==5) obj = five
    else if (arr[i]==6) obj = six
    else if (arr[i]==7) obj = seven
    else if (arr[i]==8) obj = eight
    else if (arr[i]==9) obj = nine
    else if (arr[i]==0) obj = zero
    ln1 += obj.ln1
    ln2 += obj.ln2
    ln3 += obj.ln3
  }
  console.log(ln1);
  console.log(ln2);
  console.log(ln3);
}


var one={
  ln1:"   ",
  ln2:"  |",
  ln3:"  |"
}
var two={
  ln1:" _ ",
  ln2:" _|",
  ln3:"|_ "
}
var three={
  ln1:" _ ",
  ln2:" _|",
  ln3:" _|"
}
var four={
  ln1:"   ",
  ln2:"|_|",
  ln3:"  |"
}
var five={
  ln1:" _ ",
  ln2:"|_ ",
  ln3:" _|"
}
var six={
  ln1:" _ ",
  ln2:"|_ ",
  ln3:"|_|"
}
var seven={
  ln1:" _ ",
  ln2:"  |",
  ln3:"  |"
}
var eight={
  ln1:" _ ",
  ln2:"|_|",
  ln3:"|_|"
}
var nine={
  ln1:" _ ",
  ln2:"|_|",
  ln3:"  |"
}
var zero={
  ln1:" _ ",
  ln2:"| |",
  ln3:"|_|"
}

print(1234567890)
