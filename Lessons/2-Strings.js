console.log("Hello"+3) //Converts integer to strings
//imagine i had to calculate a cost of 10 pens, 5rs each with proper formating like dollar sign 
console.log("$"+10*5) 
/*however if you are performing long calculations, USE BRACKETS!! cause js adds from left-->right and it will look like the this '$' + 50 + 20 == '$5020' if the */

//Creating a very basic bill info
console.log("Items("+( 1 + 1 )+"):      $"+(( 2095 + 800 ) / 100)) //a bit difficult

//USING BACKTICKS i.e template stings `` used to directly insert into the strings using a dollar sign with curly brackets ${} isme plus sign use nhi krna padta strings ko concatenate krne k liye
console.log(`Items(${1 + 1}):      $${( 2095 + 800 ) / 100}`) // a bit easier

