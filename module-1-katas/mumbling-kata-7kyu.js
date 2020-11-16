https://www.codewars.com/users/RFeldman84/badges/large
https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
// This time no story, no theory. The examples below show you how to write function accum:
// The parameter of accum is a string which includes only letters from a..z and A..Z.


////1
function accum(s) {
  return s.toLowerCase().split("").map((el,i)=> (el.toUpperCase()+ el.repeat(i))).join("-")
}

////2
// function accum(s) {
//   s = s.toLowerCase()
//   let newS = ""
//   for(i=0;i<s.length;i++){
//     newS += s[i].toUpperCase() 
//     for(j=0;j<i;j++){
//       newS += s[i] 
//     }
//     newS += "-"
//   }
//   return newS.slice(0,-1)
// }

// Examples:

console.log(accum("abcd"))// -> "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")) //-> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("twAt")) // -> "T-Ww-Aaa-Tttt"

console.log(accum("ZpglnRxqenU"))// "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");