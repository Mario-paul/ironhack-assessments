function findUnique(wordsArr) {
if(wordsArr.length == 0){
  return false
} 
  for(let word of wordsArr){
   if(wordsArr.indexOf(word) === wordsArr.lastIndexOf(word)){
return word     
   }
  }
  //let wordFound = wordsArr.find((eachWord) => wordsArr.indexOf(eachWord) === wordsArr.lastIndexOf(eachWord))
//return wordFound 
}
