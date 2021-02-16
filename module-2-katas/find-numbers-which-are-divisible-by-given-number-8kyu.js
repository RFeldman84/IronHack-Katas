/*
**********************************************************************************
KATA- Find numbers which are divisible by given number 8kyu
https://www.codewars.com/kata/55edaba99da3a9c84000003b

Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example
divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
*************************************************************************************
*/

// MY ANSWER
const divisibleBy = (n,d) => n.filter(e => e%d === 0)



//Top Answer
const divisibleBy = (numbers, divisor) =>
numbers.filter(e => e !== e%divisor);

