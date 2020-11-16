https://www.codewars.com/users/RFeldman84/badges/large
https://www.codewars.com/kata/51f2b4448cadf20ed0000386
// //////////////////// ---Remove anchor from URL--/////////////////


// // Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// // Examples
// // // returns 'www.codewars.com'
// // removeUrlAnchor('www.codewars.com#about')

// // // returns 'www.codewars.com?page=1' 
// // removeUrlAnchor('www.codewars.com?page=1') 


//// 1
function removeUrlAnchor(url){
  if(url.indexOf("#")===-1){
    return url
  } else {
    return url.slice(0,url.indexOf("#"))
  }

}

// //// 2
// function removeUrlAnchor(url){
//   return url.indexOf("#")===-1 ? url : url.slice(0,url.indexOf("#"))
// }

////3
// function removeUrlAnchor(url){
//   return url.split('#')[0];
// }



console.log(removeUrlAnchor('www.codewars.com#about'))
console.log(removeUrlAnchor('www.codewars.com?page=1'))
