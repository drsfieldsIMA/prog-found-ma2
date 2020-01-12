// *************************************************************************************
//Question 1-
var mypet= ["cat", "cow", "dog"];
console.log(mypet.length);
// 1st Answer - 3                                             script.js:4 
//*************************************************************************************
//Question 2
// The Convention for indexing Arrays is the first entry, i_1, starts at 0 then the second entry would have index i_2=i_1+1=1 and so on.  
//console.log(mypet(i_2))=console.log(mypet(1))
console.log(mypet[1]);
// 2nd Answer - cow                                             script.js:10
// *************************************************************************************
//question 3-
mypet.push("sheep");
console.log(mypet[3]);
// 3rd Answer - sheep                                         script.js:15
// *************************************************************************************
//Question 4-
console.log(mypet.length);
// 4rd Answer - 4                                             script.js:19
// *************************************************************************************
//Question 5-	Create an object called catObject with 3 properties: name, colour, age. Add appropriate values (and type of values) for each of these properties.
var catObject = {
    name: "tabby",
    colour: "black",
    age: 9
}
//   NO console.log is executed !! I am just declaring the array catObject
// *************************************************************************************
//question 6
console.log(catObject.age)
// 6th Answer - 9                                             script.js:31
// *************************************************************************************
//Question 7.	Take the value of catObject (the {} part) and place it inside an array called catArray.
//var blankarray = [];
//console.log(blankarray.length)
var catarray =[{catObject}];
console.log(catarray.length)
// 7th Answer - 1                                             script.js:38
// *************************************************************************************
//Question 8.	Loop through Catarray and console log each property of each objetc inside ( there will be only 1 object inside).
for(var i = 0; i < catarray.length; i++) {
    console.log(catarray[i]);
}             
// 8th Answer -  ObjectcatObject: {name: "tabby", colour: "black", age: 9}__proto__: Object
//                                                                        script.js:43
// *************************************************************************************
//Question 9. Create a function called logtoConsole. The function should accept 1 argument.
function logtoConsole(Joseph)
{ 
    console.log("the argument passed into the function logtoConsole is " + Joseph);
}    
//*************************************************************************************
//Question 10. Call the logToConsole function and pass in the value "donkey".
logtoConsole("donkey");
// 10th Answer - the argument passed into the function logtoConsole is donkey
// *************************************************************************************