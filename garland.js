garland('programmer') //0
garland('ceramic') //1
garland('onion') //2
garland('alfalfa') //4
garland('hotshots') //4
garland('abracadabra') //4
garland('couscous')

function garland(word){
  var count = 0
  var check = word.indexof(word[0])
  //var half = Math.ceil(word.length/2)

  if (check<1) return 0
  else if(check === word.length-1) return 1
else if(word[4]== word[check+4]) 
else if(word[3]== word[check+3])
else if(word[2]== word[check+2])
  else if(word[1]== word[check+1])


}
