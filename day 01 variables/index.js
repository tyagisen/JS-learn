let firstName = "tyagi";
var surName = "sen";
const pi = 3.1415;
// var and let can be reassigned
firstName = "samir";
surName = "aparichit";
// pi = 3 this line will show an error as identifier is const. value cannt be reassigned.
console.log(pi);
console.log(firstName+"");
console.log(surName);

/*
Object creation in JS. All Array are object but all object arenot array.
*/
console.log();
console.log();
myObj = {
    firstName: "Im",
    age : 23,
    phone: 879328998493
};
console.log(typeof(myObj));
console.log(myObj);

// ways to access data of object

console.log(myObj.firstName);
console.log(myObj['phone']);
console.log();

// ways to manupulate data from the object.

myObj.firstName = "bhuwan";
console.log(myObj.firstName);
console.log(myObj['firstName']);

// variables are the container for storing data.
var x = 5;
var y= 10;
var z = x+y;
// here x,y, z are the variables

// variables should have unique names. they are called identifier.

// the equal sign is assignment operator not an "equal to" operator.


// js can hold many kinds of data 

console.log(1+"ram");

var myValue = 100;
var value = "this is me";

console.log(typeof(myValue));
console.log(typeof(value))

console.log(myValue+" "+ value)


// declearing js variables

var carName; //This is declearing variable. creating variable with assigning value is declearing variable
console.log(carName); //here after declearing it doesnot have any values so it has undefined value.

//after declearing variable we can assign value to the variable withou calling var keyword.

carName = "Dukati"
console.log(carName)

document.getElementById("demo").innerHTML= carName;


document.getElementById("demo").innerHTML = value;


// The good practise is to keep variable at the beginning of a script.


// variables can also be declared in one statement.
//start the statement with var keyword and separate the variable with comma.


var myInfo = 'tyagi', age=12, city = 'itahari';

// or it can be written like

var myInfo = 'tyagi',
age=12,
city='itahari';

// the reason string and number concatenate is when one var is string then it also treats other values to string
var a= "5"+9+7+8
console.log(a)


// javascript dollor sign
// a letter (a-z or A-Z)
// dollor sign
// an underscore

