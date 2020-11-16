////~~~~Moving Zeros To The End~~~~/////
//https://www.codewars.com/kata/52597aa56021e91c93000cb0


// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

const moveZeros = arr => arr.filter(i => i !==0).concat(arr.filter(i => i ===0))

//// OR ///
// const moveZeros = function (arr) {
//   let nonZeros = []
//   let zeros = []
//   for(i=0;i<arr.length; i++){
//     if(arr[i] !== 0  )nonZeros.push(arr[i])
//     if(arr[i]===0  ) zeros.push(arr[i]) 
//   }
//  return nonZeros.concat(zeros)
// }

let arry = [false,[],{},1,0,1,2,0,1,"3","a"]

console.log(moveZeros(arry)) // [false,[],{},1,1,2,1,'3','a',0,0]

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) // returns[false,1,1,2,1,3,"a",0,0]

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1])) // [1,2,1,1,3,1,0,0,0,0]


