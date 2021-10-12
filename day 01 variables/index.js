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
let myObj = {
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