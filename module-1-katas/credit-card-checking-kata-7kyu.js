// ************************************************************************************
//Credit card issuer checking
//https://www.codewars.com/kata/5701e43f86306a615c001868
// Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.
// Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

// | Card Type  | Begins With          | Number Length |
// |------------|----------------------|---------------|
// | AMEX       | 34 or 37             | 15            |
// | Discover   | 6011                 | 16            |
// | Mastercard | 51, 52, 53, 54 or 55 | 16            |
// | VISA       | 4                    | 13 or 16      |


//************************************************************************************



function getIssuer(number) {
  number = number.toString()
  if(number.length === 16 && number[0] == 5 && number[1] >=1 && number[1] <=5) return "Mastercard"
  if(number.length === 15 && number[0] == 3 && number[1] ==4 || number[1] ==7) return "AMEX"
  if((number.length === 13 || number.length === 16 ) && number[0] == 4) return "VISA"
  if(number.length === 16 && number.substr(0,4) == 6011) return "Discover"
  else return "Unknown"
}