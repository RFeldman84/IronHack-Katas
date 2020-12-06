// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

//Century From Year KATA

// Introduction
// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

// Task :
// Given a year, return the century it is in.




const century = year => Math.ceil(year/100)







// function century(year) {
//   let yrToStr = year.toString()
//   return !year || typeof year != "number" ? "enter year in numbers" : Number(yrToStr[yrToStr.length -1]) > 0||Number(yrToStr[yrToStr.length -2]) > 0 ? parseInt(year/100) + 1 : parseInt(year/100)

// }


centuryFromYear(1705)  //returns (18)
centuryFromYear(1900)  //returns (19)
centuryFromYear(1601)  //returns (17)
centuryFromYear(2000)  //returns (20)


century(89) //, 1, 'Testing for year 89');