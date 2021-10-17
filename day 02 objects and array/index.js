/*
Array and object. and function

*/

// object has name:value pairs
//name:value pair are called properties in js object.
let myobj = {
    district: 'Sunsari',
    wardNumber: 6, 
    country: 'Nepal'

};
// accessing object 
console.log(myobj['wardNumber']);

// adding name and value in object
myobj['aakash']= 'Naming';
console.log(myobj);




// array
let myarr = [1,3,4,6,7, 'samir'];
// accessing array
console.log(myarr[1]);
myarr[2]= 19;
console.log(myarr);


// function
function sum(){
    console.log('Hello world')
}
sum() //invoking sum function


function subs(firstNum, secondNum){//here is the parameter
    z = firstNum-secondNum;
    console.log(z);
};
subs(20, 2) //Invoking subs function. here is argument.


function returnFunc(firstInp, secondInp){ //Here is the parameter
    actualVal = firstInp*secondInp;
    return actualVal; //It returns to function
};
console.log(returnFunc(2,4)); //invoking values and printing the value. 2 and 4 is argument.
console.log(returnFunc(9, 7));