
https://www.codewars.com/users/RFeldman84/badges/large

//           /// print string without 1st or last letter function
//console.log()
// // console.log("----print string without 1st or last letter-------")
// // function removeChar(str){
// //   let st8str= ""
// //   for(i=1; i < str.length -1; i++){
// //     st8str+=str[i]
// //   }
// //   console.log(st8str)
// //   return st8str
// // };
// // removeChar("Why did I do all this?")

// // function removeChar(str) {
// //   console.log(`this is a 2 character string example: ${str}`)
// //   return str.slice(1, -1);
// // }
// //   console.log(`this the answer = ${removeChar("NO")} empty string`) 
// /////

//                       //////////////////////

// //console.log("-------Remove anchor from UR---------")
// //////////////////// ---Remove anchor from URL--/////////////////


// // Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// // Examples
// // // returns 'www.codewars.com'
// // removeUrlAnchor('www.codewars.com#about')

// // // returns 'www.codewars.com?page=1' 
// // removeUrlAnchor('www.codewars.com?page=1') 

// // function removeUrlAnchor(url){
// // if(url.indexOf("#")===-1){
// //   return url
// // } else {
// //   return url.slice(0,url.indexOf("#"))
// // }

// // }

// // function removeUrlAnchor(url){
// // return url.indexOf("#")===-1 ? url : url.slice(0,url.indexOf("#"))
// // }

// // function removeUrlAnchor(url){
// //   let array = url.split('#');
// //   console.log(array);
// //   console.log(`new array created using split: ${array}`);
// //   console.log(`first element: ${array[0]}`);
// //   console.log(`second element: ${array[1]}`);
// // }

// // removeUrlAnchor('www.codewars.com#about')


// // function removeUrlAnchor(url){
// //   return url.split('#')[0];
// // }


// // let numbers = "hdgu,3,4,zdfvfzdbf,6,7";

// // function splitAndJoin(aString){
// //   let splitted = aString.split(",");
// //   console.log(`splitted string:`);
// //   console.log(splitted);
// //   let joined = splitted.join(" + "); // or, if you want to have a big string all together: let joined = splitted.join("");
// //   console.log(`joined array: ${joined}`);
// // }

// // splitAndJoin(numbers);

// // let newArray = numbers.split(',')
// // console.log(newArray);
// // console.log(newArray[0]); //same as console.log(numbers.split(',')[0]);
// // console.log(newArray[1]);
// // console.log(newArray[2]);
// // console.log(newArray[3]);

//                         ///////////////////

// // console.log("-------ex's & ohs---------")
// // ///////////////////ex's & ohs////////////////////////
// // // ex's & ohs
// // // Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// // // how to work if number or other data type is entered?? 

// // //realized I dont need to join them  to get the right length
// function XO(str) {
//   let ex = str.toLowerCase().split("o").length
//   let oh = str.toLowerCase().split("x").length
//   return ex===oh || "" ? true : false
// } 

// // function XO(str) {
// //   let ex = str.toLowerCase().split("o");
// //   let oh = str.toLowerCase().split("x");
// //   console.log(` `);
// //   console.log(`-------------`);
// //   console.log(str);
// //   console.log(`ex:`);
// //   console.log(oh);
// //   console.log(`ex length: ${oh.length}`);
// //   console.log(`oh:`);
// //   console.log(ex);
// //   console.log(`oh length: ${ex.length}`);

// //   // return ex.length===oh.length ? true : false;
// // return str ? ex.length===oh.length : ex.length!==oh.length;
// // //   return ex.length===oh.length ? true : false;
// // // } 

function XO(str) {
  let ex = str.toLowerCase().split("o").length
  let oh = str.toLowerCase().split("x").length
  return ex===oh ? true : false
} 





// function XO(str) {
  
//   let ex = str.toLowerCase().split("o").length
//   let oh = str.toLowerCase().split("x").length
 
//   if(ex===oh) {
//     return true;
//   }else {
//     return false;
//   }
//  } 


// function XO(str) {
//   return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
// }

// function XO(str) {
//   //return str ? str.match(/x/gi).length === str.match(/o/gi).length : "no string"
//   return  str.match(/x/gi).length === str.match(/o/gi).length ? true : false
// }
// XO("")
// console.log(XO("")+ " - true")

// XO("ooxx") //=> true
// console.log(XO("ooxx")+ " - true")

// XO("xooxx") //=> false
// console.log(XO("xooxx")+ " - false")

// XO("ooxXm") //=> true
// console.log(XO("ooxXm")+ " - true")

// XO("zpzpzpp") //=> true // when no 'x' and 'o' is present should return true
// console.log(XO("zpzpzpp")+ " - true")

// XO("zzoo") //=> false
// console.log(XO("zzoo")+ " - false")

// XO("oOXxXoXoO")
// console.log(XO("oOXxXoXoO")+ " - false") // false --> o-5 x-4 prints false

//  XO("OxooXxox")
// console.log(XO("OxooXxox")+ " - true") //true -> true both 4



  

  // function XO(str) {
  
  //     let ex = str.toLowerCase().split("o").join('').length
  //     let oh = str.toLowerCase().split("x").join('').length
  
  //     if(ex===oh) {
  //       return true;
  //     }else {
  //       return false;
  //     }
  //    } 

// XO("")
// console.log(XO("")+ " - true")

// XO("ooxx") //=> true
// console.log(XO("ooxx")+ " - true")

// ['','',X,'','x']

// return str ? ex===oh : ex!==oh



// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }

                      ////////////////////////////////////
////////////////////////////////WORD COUNT////////////////////////////////
           //console.log("--------WORD COUNT---------")           
     //SPLIT JOIN
// Can you realize a function that returns word count from a given string?

// You have to ensure that spaces in string is a whitespace for real.

// What we want and finish of work:



// What kind of tests we got for your code:

// Function have to count words, but not spaces, so be sure that it does right.
// Empty string has no words.
// String with spaces around should be trimmed.
// // Non-whitespace (ex. breakspace, unicode chars) should be assumed as delimiter
// // Be sure that words with chars like -, ', ` are counted right.
// function countWords(str){
//   str = str.trim();
//   if(str===""){
//     return str.length
//   } else {
//     return str.split(" ").join(" ").replace(/\s/g," +").replace(/\+ /g,"").split(" ").length
//   }
// }
// console.log(countWords("Hello")); // returns 1 as int
// console.log(countWords("Hello, World!") )// returns 2
// console.log(countWords("No results for search term `s`") )// returns 6
// console.log(countWords(" Hello")) // returns 1
// console.log(countWords(""))

    

            /////////sumTwoSmallestNumbers//////////
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.
// if (a.toLowerCase() < b.toLowerCase()) return -1;
//     if (a.toLowerCase() > b.toLowerCase()) return 1;
//     return 0;

// function sumTwoSmallestNumbers(numbers) {  
//   numbers.sort((a,b)=> a-b)
//   return numbers[0]+numbers[1]
  
// }



// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])) // 13 , "Sum should be 13");
//     console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))// 6 , "Sum should be 6");
//     console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]))// 10 , "Sum should be 10");
//     console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]))// 24 , "Sum should be 24");
//     console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4])) //16 , "Sum should be 16");



    // sorting stuff in arrays (array method)

// let sorted = [5,3,2,6].sort((a,b) => a-b)
// // let sorted = [5,3,2,6].sort(function(a,b){return a-b}) // longhand version
// console.log(sorted)


// // 1. does it modify the original array?
// // const arrayOfNumbers = [1,3,2,7,4]
// // console.log(arrayOfNumbers)
// // const newarrNum = [...arrayOfNumbers]
// // console.log(arrayOfNumbers)
// // newarrNum.sort((a,b) => a-b)
// //  console.log(newarrNum)
// // console.log(arrayOfNumbers)
// // let arrayOfN = ["blah"] //cannot do this
// // arrayOfN = ["blah"] //cannot do this


// // 2. how to sort it backwards?
// const arrayOfNumbers = [1,3,2,7,4]
// console.log(arrayOfNumbers)
// const newarrNum = [...arrayOfNumbers]
// console.log(arrayOfNumbers)
// newarrNum.sort((a,b) => b-a)
//  console.log(newarrNum)
// console.log(arrayOfNumbers)
// // 3. does it read multidigit mumbers correctly? (test numbers and strings)
// let arrayOfNumbers2 = [11,3,2,7,4].sort((a,b) => a-b)
// let arrayOfWords2 = ["11","3","2","7","4"].sort((a,b) => a-b)
// console.log(arrayOfNumbers2)
// console.log(arrayOfWords2)

// // 4. does it account for lowercase vs. uppercase?
// let arrayOfWords = ["blah", "customer", "zebra", "arrow"];
// arrayOfWords.sort()
// console.log(arrayOfWords)

// let arrayOfWords3 = ["bLAh","CUstomer", "CUStomer", "Zebra", "arrow"]
// arrayOfWords3.sort(function(a, b) {
//     if (a.toLowerCase() < b.toLowerCase()) return -1;
//     if (a.toLowerCase() > b.toLowerCase()) return 1;
//     return 0;
//   })


//  console.log(arrayOfWords3)
// // 5.test it without parameters
// let arrayOfNumbers1000 = [11,3,2,7,4].sort()

                      //SORT
        //console.log("-------- Sort and Star---------")     
     
// You will be given an vector of string(s). You must sort it alphabetically (case-sensitive!!) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

//You should not remove or add elements from/to the array.

// console.log("--the right way, but he kata was stupid not me!---")
// function twoSort(s) {
//     s.sort((a,b) => {
//       if (a.toLowerCase() < b.toLowerCase()) return -1;
//       if (a.toLowerCase() > b.toLowerCase()) return 1;
//       return 0;
//     });

//     return s[0].split("").join("***")
// }

// function twoSort(s) {
//   s.sort()
// console.log(s) 
//   return s[0].split("").join("***")
// }

//console.log(twoSort(["Steem","Factom","Waves","BTC","ProofOfStake","Dogecoin","Bitcoin","DarkCoin","Ethereum","Dash"]))    
// console.log(twoSort(["Bitcoin", "take", "oVer", "the", "World", "maybe", "who", "knows", "perhaps"]))
// console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])) // --> 'b***i***t***c***o***i***n' );
// console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])) // -->'a***r***e');

// console.log("----kata anwer thats actually wrong way-----")
// function twoSort(s) {
//   return s.sort()[0].split("").join("***")
// }


// console.log(twoSort(["Steem","Factom","Waves","BTC","proofOfStake","Dogecoin","Bitcoin","DarkCoin","Ethereum","dash"]) )   

//console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])) // --> 'b***i***t***c***o***i***n' );
//console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])) // -->'a***r***e');

              //console.log("-------- phone number---------")   
                    ////////phone number/////////
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// function createPhoneNumber(numbers){
//   return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))// "(123) 456-7890");
// console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))// "(111) 111-1111");
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))//"(123) 456-7890");

// let numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// function createPhoneNumber(numbers){
//  num1 = numbers.splice(0,3)
//  num1.unshift("(")
//  num1.push(")")
//  //num1Str = num1.join("")
// console.log(numbers)
//  num2 = numbers.splice(0,3)
//  num2.unshift(" ")
//  num2.push("-")
//  //num2Str = num2.join("")
//  console.log(numbers)
//  num3 = numbers.splice(0,4)
//  //num3Str = num3.join("")
//  console.log(numbers)
//  numArr = [...num1, ...num2, ...num3]
 
//  console.log(numArr)
// return numArr.join("")

// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // "(123) 456-7890")

                        //// array SPLICE & SPREAD 'em
// function createPhoneNumber(numbers){
//  num1 = numbers.splice(0,3) 
//  num1.unshift("(")
//  num1.push(")")
//  num2 = numbers.splice(0,3)
//  num2.unshift(" ")
//  num2.push("-")
//  num3 = numbers.splice(0,4)

//  return numArr = [...num1, ...num2, ...num3].join("")
 
// }
////ONE LINE showoff
// function createPhoneNumber(numbers){
//   return numArr = ["(",...numbers.splice(0,3),") ", ...numbers.splice(0,3), "-", ...numbers.splice(0,4)].join("")
  
//  }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // "(123) 456-7890")
/// others explain
// function createPhoneNumber(numbers){
//   return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
// }

              /////using string methods
//  function createPhoneNumber(numbers){
//   numbers = numbers.join("")
//   return "("+numbers.slice(0,3)+")"+" "+numbers.slice(3,6)+"-"+numbers.slice(6)
// }
        
//         console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // "(123) 456-7890")

                ////REGULAR EXPRESSIONS (not mine)
// function createPhoneNumber(numbers){
//   return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
// }

      //////joining arrays as arrays and single index, ...spread operator///
//             console.log("--joining arrays as arrays and single index, ...spread operator--")

// let a1= [1,2,3]
// let a2 =[4,5,6]
// let a3 =[1,2,3]  //--> [1,2,3,4,5,6,1,2,3]

// // let combineArrays = [...a1, ...a2, ...a3, 23, "hey" ]
// // console.log(combineArrays)

// let arr1= [a1,a2,a3]

// let arr2 = [] 
// arr2.push(a1,a2,a3)

// console.log(arr1)  //-->  [[1,2,3],[4,5,6][1,2,3]]
// console.log(arr2) //SAME!!!


        /////SPREAD OPERATOR... keep original array copy if not MAP/////
        //console.log('---- using SPREAD OPERATOR... to keep original array copy----')
   // 1. does it modify the original array? YES
// const arrayOfNumbers = [1,3,2,7,4]

// console.log(arrayOfNumbers)
// const newarrNum = [...arrayOfNumbers]
// // console.log(arrayOfNumbers)

// // let arrayOfN = ["blah"] //cannot do this
// // arrayOfN = ["blah"] //cannot do this
      
               ////CONST!////
//console.log('---CONST---')
////const primitive
// const stringConst //= "groceries👅🇧🇷"
// stringConst = 1 //--> throw error
//const stringConst; ---> cant use to declare undefined
//console.log(stringConst) 

    ////const  ARRAY
// const arrayOfNumbers = [1,3,2,7,4]
// console.log(arrayOfNumbers)
// // const arr2D2 = arrayOfNumbers // entangles the values
// // quantum entanglement
// const arr2D2 = [...arrayOfNumbers]
// console.log(`arrayOfNumbers: ${arrayOfNumbers}`)
// console.log(`arr2D2: ${arr2D2}`)
// arrayOfNumbers.push(3)
// console.log(`arrayOfNumbers: ${arrayOfNumbers}`)
// console.log(`arr2D2: ${arr2D2}`)
// console.log(arrayOfNumbers)

                      ///////Mumbling KATA//////////
// console.log('------Mumbling kata 1--------')

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


// console.log(accum("abcd"))// -> "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")) //-> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt") -> "C-Ww-Aaa-Tttt")

///////////////////////notes///

//   let s = "cwAt" 
//   s = s.toLowerCase()
//   let newS = ""
//   for(i=0;i<s.length;i++){
  //     //console.log(`MAMA loop : ${s[i]}`)
  //   newS += s[i].toUpperCase() 
  
  //   for(j=0;j<i;j++){
    //  //console.log(`...inner loop : ${s[i]}`)
    //  newS += s[i] 
    //   }
    
    // // if(i!==s.length-1){
      //   // newS += "-"
      // // }
      
      // newS += "-"
      
      // }
      //console.log(newS.slice(0,-1)) 
  ///////////////////////////////////////////

      console.log('------Mumbling kata 2 MAP!--------')
      
  function accum(s) {
    return s.toLowerCase().split("").map((el,i)=> (el.toUpperCase()+ el.repeat(i))).join("-")
  }
 
      console.log(accum("abcd"))// -> "A-Bb-Ccc-Dddd"
      // console.log(accum("RqaEzty")) //-> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
      //console.log(accum("twAt")) // -> "T-Ww-Aaa-Tttt"
      
      // console.log(accum("ZpglnRxqenU"))// "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
// 	console.log(accum("NyffsGeyylB"))// "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
// 	console.log(accum("MjtkuBovqrU"))// "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
// 	console.log(accum("EvidjUnokmM"))// "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
// 	console.log(accum("HbideVbxncC"))// "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");



/////KATA ARRAY MATH THINGER - Easy mathematical callback////
//map
//callback with call back

//console.log("-----Easy mathematical callback ------")
// 1) Array [4, 8, 2, 7, 5] after processing with function

// var myArray = [4, 8, 2, 7, 5];
// myArray = processArray(myArray,function (a) {
//   return a * 2;
// });
// will be [ 8, 16, 4, 14, 10 ].

// 2) Array [7, 8, 9, 1, 2] after processing with function

// var myArray = [7, 8, 9, 1, 2];
// myArray = processArray(myArray, function (a) {
//   return a + 5;
// });
// will be [ 12, 13, 14, 6, 7 ].
       



// KATA Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
//console.log("~~~~~~evens or odds 1~~~~~~~~~")
// function even_or_odd(number) {
//   if(number%2==0) return ("Even") 
//   if (number%2!==0) return ("Odd") 
 
//   } 
 //  console.log("~~~~~evens or odds 2 ternary~~~~~")
// function even_or_odd(number) {
// return number %2==0 ? "Even" : "Odd"
// }

// console.log(even_or_odd(2)) // "Even")
// console.log(even_or_odd(0))// "Even")
// console.log(even_or_odd(7))// "Odd")
// console.log(even_or_odd(1))// "Odd")

//////////fizz buzz
//     console.log("~~~~~~~fizz buzz 1~~~~~~")
// for (var i = 1; i < 101; i++) {
//   if (i % 15 == 0) console.log("FizzBuzz")
//   else if (i % 3 == 0) console.log("Fizz");
//   else if (i % 5 == 0) console.log("Buzz");
//   else console.log(i);
// }


////////////// kata - rock paper scissor CALL BACK FUNCTION
//console.log("~~~~~~~~~kata: rock paper scissors~~~~~~~~~~~")
// FUNCTION TO COMPLETE
// const rps = (p1, p2) => {
//      //code here
// }

// //function getMsg (n){
// // return `Player ${n} won!`
// //}
//is same as fat arrow functions...
const getMsg = (n) => `Player ${n} won!`
const rps = (p1, p2) => { 
  if (p1 == p2) return  "Draw!"
  if(p1=='rock' && p2 =='scissors' ||p1=='scissors' && p2 =='paper'|| p1 == 'paper' && p2 == 'rock') return getMsg(1) 
  if (p1=='scissors'&& p2=='rock'||p1=='paper'&& p2=='scissors'||p1 == 'rock'&& p2 =='paper') return getMsg(2) 
   
  }

                              // Ternary
           //  console.log("~~~~~~~~~kata: rock paper scissors~~~~~~~~")                   
// const getMsg = (n) => `Player ${n} won!`
// const rps = (p1, p2) => { 
//   if (p1 == p2) return  "Draw!" 
// return p1=='rock' && p2 =='scissors' || p1=='scissors' && p2 =='paper'|| p1 == 'paper' && p2 == 'rock' ?  getMsg(1) : getMsg(2) :
//}


// console.log(rps('scissors','paper'))// Player 1 won!
// console.log(rps('scissors','rock'))// Player 2 won!
// console.log(rps('paper','paper')) // Draw!


////////// KATA: Opposites Attract //////
//console.log("~~~~~~~~~kata: Opposites Attract~~~~~~~~") 
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
  console.log("~~~~~~~~~~~~~~kata: Opposites Attractternary~~~~~~~~~~~~~~~~")
 // full FUNCTION
  function lovefunc(flower1, flower2){
  return flower1%2 != flower2 % 2
}
      // full  wy †he fuck did i do this
// function lovefunc(flower1, flower2){ 
// if(flower1%2==0 && flower2%2!=0  || flower2%2==0 && flower1%2!=0) return true
// if(flower1%flower2!=1 || flower1!= 0&& flower2!=0  ) return false
// }

   // TERNARY
// function lovefunc(flower1, flower2){
//   return flower1 %2 != flower2 %2 ? true : false
// }
              // FAT ARROW FUNCTION**
//let lovefunc = (flower1, flower2) => flower1%2 != flower2 %2

// console.log(`${lovefunc(1,4)} -should be TRUE`) // true
// console.log(`${lovefunc(2,2)} -should be FALSE`) //false
// console.log(`${lovefunc(0,1)} -should be TRUE`) // true
// console.log(`${lovefunc(0,0)} -should be FALSE`) // false
// console.log(`${lovefunc(1,0)} -should be TRUE`) //true
// console.log(`${lovefunc(660,902)} -should be false`)
// console.log(`${lovefunc(111,361)} -should be false`)
// console.log(`${lovefunc(760,645)} -should be true`)

