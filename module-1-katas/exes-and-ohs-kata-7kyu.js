https://www.codewars.com/users/RFeldman84/badges/large
https://www.codewars.com/kata/55908aad6620c066bc00002a
// // ///////////////////ex's & ohs////////////////////////
// // // ex's & ohs
// // // Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

////1
// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }

////2
// function XO(str) {
//   let ex = str.toLowerCase().split("o").length
//   let oh = str.toLowerCase().split("x").length
//   return ex===oh || "" ? true : false
// } 

////3
// function XO(str) {
//   let ex = str.toLowerCase().split("o").length
//   let oh = str.toLowerCase().split("x").length
//   return ex===oh ? true : false
// } 

////4
// function XO(str) {
// return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length
// }




console.log(XO("")) // true

console.log(XO("ooxx")) //=> true
console.log(XO("ooxx")) //true