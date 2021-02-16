/* 
************************************************************************************************
KATA - Unique In Order 8kyu
https://www.codewars.com/kata/54e6533c92449cc251001667

Implement the function unique_in_order which takes as argument a sequence 
and returns a list of items without any elements with the same value next to each other 
and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
**************************************************************************************
*/
// MY ANSWERS
// filter //
const uniqueInOrder = itr => typeof itr == "string" ? itr.split("").filter((e,i) => e != itr[i+ 1] ) : itr.filter((e,i) => e!= itr[i + 1])
//or 
const uniqueInOrder = itr => [...itr].filter((e,i) => e != itr[i+1] ) 

// loop
const uniqueInOrder= (itr) => {
  let arr =[]
  for(i=0;i<itr.length;i++)
  if(itr[i] != itr[i+1])
  arr.push(itr[i])
  return arr
}



//Top Answer
function uniqueInOrder(it) {
  var result = []
  var last
  
  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push(last = it[i])
    }
  }
  
  return result
}