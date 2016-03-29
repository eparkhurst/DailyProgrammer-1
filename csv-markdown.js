var csv = "First,Last,Address\nAnnamarie,Romaguera,9446 Schroeder Squares\nSebastian,Hessel,114 Frederic Centers\nMarlon,Hahn,307 Bradtke Grove\nDuane,Schowalter,10771 Keaton Knoll\nLaurence,Schuster,610 Odell Point"


function convert(str){
  var len1 = 0
  var len2 = 0
  var len3 = 0
  var arr1 = str.split('\n')
  var arr2 = []
  console.log(arr1)
  for (var i = 0; i < arr1.length; i++) {
    arr2[i]= arr1[i].split(',')
  }
  for (var i = 0; i < arr2.length; i++) {
    for (var j = 0; j < arr2[i].length; j++) {
      if (j==0 && arr2[i][j].length>len1) len1 = arr2[i][j].length
      else if(j==1 && arr2[i][j].length>len2) len2 = arr2[i][j].length
      else if(j==2 && arr2[i][j].length>len3) len3 = arr2[i][j].length
    }
    for (var j = 0; j < arr2[i].length; j++) {
      arr2[i][1] = addSpace(arr2[1][j],len1)
      addSpace(arr2[2][j],len1)
      addSpace(arr2[2][j],len1)
    }
  }
  console.log(len1+' '+len2+ ' '+ len3);
  console.log(arr2);
}

convert(csv);


function addSpace(input, len){
  while(input.length<len)input=input+' '
  return input
}
