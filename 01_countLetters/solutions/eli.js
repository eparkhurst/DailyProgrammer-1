
function countLetters(string){
  var lString = string.toLowerCase().replace(/[^a-z]/g, "");
  var obj ={};
  for (var i = 0; i < lString.length; i++) {
    if(obj[lString[i]]==undefined) obj[lString[i]] = 1;
    else obj[lString[i]]= obj[lString[i]]+1
  }
  return obj;
}

console.log(countLetters("The quick brown fox jumps over the lazy dog and the sleeping cat early in the day."));
