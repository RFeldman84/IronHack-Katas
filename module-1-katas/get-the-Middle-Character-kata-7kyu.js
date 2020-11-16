//Get the Middle Character
//https://www.codewars.com/kata/56747fd5cb988479af000028

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Output
// The middle character(s) of the word represented as a string.


const getMiddle = str => str.length/2 === Math.ceil(str.length/2) ? `${str[str.length/2-1]}${str[str.length/2]}`: str[str.length/2 - 0.5]



getMiddle("test") //should return "es"

getMiddle("testing") //should return "t"

getMiddle("middle") //should return "dd"

getMiddle("A") //should return "A"