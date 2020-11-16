https://www.codewars.com/users/RFeldman84/badges/large
https://www.codewars.com/kata/525f50e3b73515a6db000b83

////////phone number/////////
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

//1
// function createPhoneNumber(numbers){
//   return numArr = ["(",...numbers.splice(0,3),") ", ...numbers.splice(0,3), "-", ...numbers.splice(0,4)].join("")
  
//  }

// 2
// function createPhoneNumber(numbers){
//   num1 = numbers.splice(0,3)
//   num1.unshift("(")
//   num1.push(")")
//   num2 = numbers.splice(0,3)
//   num2.unshift(" ")
//   num2.push("-")
//   num3 = numbers.splice(0,4)
//   return numArr = [...num1, ...num2, ...num3].join("")
// }

// //// 3
// function createPhoneNumber(numbers){
//   return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
// }

// ////4
// function createPhoneNumber(numbers){
//   numbers = numbers.join("")
//   return "("+numbers.slice(0,3)+")"+" "+numbers.slice(3,6)+"-"+numbers.slice(6)
// }

// ////5
// function createPhoneNumber(numbers){
//   return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
// }

// ////6
// function createPhoneNumber(numbers){
//   return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
// }





console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))// "(123) 456-7890");
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))// "(111) 111-1111");
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))//"(123) 456-7890");









