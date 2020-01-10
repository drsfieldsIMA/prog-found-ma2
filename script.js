// *************************************************************************************
//question 1-
var mypet= ["cat", "cow", "dog"];
console.log(mypet.length);
// *************************************************************************************
// 1st Answer - 3                                             {fields-shaun}-pf-MA2.js:4 
// *************************************************************************************
//question 2
// The Convention for indexing Arrays is the first entry, i_1, starts at 0 then the second entry would have index i_2=i_1+1=1 and so on.  
//console.log(mypet(i_2))=console.log(mypet(1))
console.log(mypet[1]);
// *************************************************************************************
// 1st Answer - 3                                             {fields-shaun}-pf-MA2.js:4 
// *************************************************************************************
//question 3-
mypet.push("sheep");
console.log(mypet[3]);
// *************************************************************************************
//question 4-
console.log(mypet.length);
// *************************************************************************************
//question 5-	Create an object called catObject with 3 properties: name, colour, age. Add appropriate values (and type of values) for each of these properties.
var catObject = {
    name: "tabby",
    colour: "black",
    age: 9
}

//question 6
console.log(catObject.age)
// *************************************************************************************
//question 7.	Take the value of catObject (the {} part) and place it inside an array called catArray.
var blankarray = [];
console.log(blankarray.length)
var catarray =[{catObject}];
console.log(catarray.length)
var catarray_b =[{name: "tabby",
colour: "black",
age: 9}];
console.log(catarray_b.length)
// *************************************************************************************
//question 8.	Loop through Catarray and console log each property of each objetc inside ( there will be only 1 object inside).
for(var i = 0; i < catarray.length; i++) {
    console.log(catarray[i]);
}             
// *************************************************************************************
//question 9. Create a function called logtoConsole. The function should accept 1 argument. 
function logtoConsole(Joseph)
{ 
    console.log("the argument passed into the function logtoConsole is " + Joseph);
}    
logtoConsole("donkey");