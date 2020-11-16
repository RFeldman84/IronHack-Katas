https://www.codewars.com/users/RFeldman84/badges/large

https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

// KATA Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// console.log("~~evens or odds expression~~")

const even_or_odd = n => n%2==0 ? "Even": "Odd" 


//  console.log("~~~~~evens or odds 1 ternary~~~~~")
function even_or_odd(number) {
  return number %2==0 ? "Even" : "Odd"
  }

  //console.log("~~~~~~evens or odds 2 if's~~~~~~~~~")
  // function even_or_odd(number) {
  //   if(number%2==0) return ("Even") 
  //   if (number%2!==0) return ("Odd") 
  //   } 
  
  //  console.log("~~~~~evens or odds 3 longhand~~~~~")
// function even_or_odd(number) {
//   if(number%2==0){
//     return "Even"
//   } else {
//     return "Odd" 
//   }
// }


  // console.log(even_or_odd(2)) // "Even")
  // console.log(even_or_odd(0))// "Even")
  // console.log(even_or_odd(7))// "Odd")
  // console.log(even_or_odd(1))// "Odd")
  // console.log(even_or_odd(-1))// "Odd")