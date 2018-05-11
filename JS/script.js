function QuestionMarks(str) {
  var matchedString = str.match(/^\d/?{3}/)
     if (!matchedString) return false;
    for (var i = 0; i < this.matchedString.length; i++)
    for(let j = i+1; j < this.matchedString.length; j++) {
          if(Number(matchedString[i])+ Number(matchedString[j]) === 10) {
            if(matchedString.slice(i+1,j).split('?').length - 1 === 3) {
                return true;
            }
        } else {
          return false
}

console.log(QuestionsMarks("arrb6???4xxbl5???eee5"))
console.time()
