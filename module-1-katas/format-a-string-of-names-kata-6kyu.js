//https://www.codewars.com/users/RFeldman84/badges/large  6kyu!

//Format a string of names like 'Bart, Lisa & Maggie'.   
//https://www.codewars.com/kata/53368a47e38700bd8300030d


// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.


function list(names){
  names = names.map(e => e.name)
   if(names.length <= 1)return names.join()
   if(names.length === 2)return names.join(` & `)
   if(names.length > 2){
     let last = ` & ${names.pop()}`
     return  names.join(", ") + last
   }
}



cl(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'},  {name: 'Bart'} ])
// // returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// // returns 'Bart'

list([])
// // returns ''




cl(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}])) // 'Bart, Lisa, Maggie, Homer & Marge',

list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]) // 'Bart, Lisa & Maggie',

list([{name: 'Bart'},{name: 'Lisa'}]) //'Bart & Lisa', 

list([{name: 'Bart'}]) //, 'Bart'

list([])) // ''
