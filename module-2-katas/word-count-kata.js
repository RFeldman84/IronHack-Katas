// https://www.codewars.com/kata/570cc83df616a85944001315

//Word Count KATA  8kyu

// Can you realize a function that returns word count from a given string?

// You have to ensure that spaces in string is a whitespace for real.

// What we want and finish of work:

// countWords("Hello"); // returns 1 as int
// countWords("Hello, World!") // returns 2
// countWords("No results for search term `s`") // returns 6
// countWords(" Hello") // returns 1
// // ... and so on
// What kind of tests we got for your code:

// Function have to count words, but not spaces, so be sure that it does right.
// Empty string has no words.
// String with spaces around should be trimmed.
// Non-whitespace (ex. breakspace, unicode chars) should be assumed as delimiter
// Be sure that words with chars like -, ', ` are counted right.



const countWords = str => str.split(/\s+/g).filter(x => x).length

// const countWords = str =>  str.trim().replace(/\s+/g, ' ').split(" ").join("") === "" ? 0 : str.trim().replace(/\s+/g, ' ').split(" ").length



// function countWords(str){
//   str = str.trim();
//   if(str===""){
//     return str.length
//   } else {
//     return str.split(" ").join(" ").replace(/\s/g," +").replace(/\+ /g,"").split(" ").length
//   }
// }








countWords("Hello")//, 1);
countWords("Hello, World!")//, 2);
countWords("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")//, 19);
countWords("")//, 0);
countWords("With! Symbol@ #Around! (Every) %Word$")//, 5);
countWords("Dear   Victoria, I love  to press   space button.")//, 8);


//it("should work with spaces around string", function() {
countWords(" Arthur ")//, 1);
countWords(" David"),// 1);
countWords("Nelson ")//, 1);
countWords("  Hello Gomer  ")//, 2);
countWords("  Hello     Bart  ")//, 2);


//it("should work with non-whitespace (ex. breakspace) chars", function() {
countWords("﻿Hello﻿World ")//, 2);
countWords("Hello﻿World")//, 2);