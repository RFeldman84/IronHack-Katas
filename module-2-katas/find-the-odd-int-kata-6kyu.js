//************************************************************************************
//Find the odd int
//https://www.codewars.com/kata/54da5a58ea159efa38000836

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.


//************************************************************************************

// my answer
function findOdd(a) {
  a.sort((a,b)=> a-b)
  let count =  a.lastIndexOf(a[0]) + 1
  return count %2 !== 0 ? a[0] : findOdd(a.splice(count))
  }


  // best  top answer
  const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

  // ^ XOR didn't know