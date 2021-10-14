/*
String and its methods. 
if the function is inside object or with object it's method.
*/

// ways to know type
let sentence = "This is a first sentence";
console.log(typeof(sentence));

// before epistrophe is used for string backslash (\) is used 

let intro = '  It\'s me Tyagi Sen from Inaruwa Sunsari ';
console.log(intro);


// we get the value in index 6.
console.log(sentence[6]);

// include method used to know if it in the variable.

console.log(intro.includes('me'));
console.log(intro.includes('is'));


// startsWith method.
console.log();
console.log(intro.startsWith('It'));

// endsWith method
console.log();

console.log(intro.endsWith('Sunsari'));

// indexOf method to know the index from where inaruwa starts

console.log(intro.indexOf('Inaruwa'));


// replace
console.log(intro.replace('Inaruwa', 'Gadhi'));



// trim method. It is used to remove extra spaces in start and end part of the string sentence
console.log(intro.trim());

// It has trimLeft and trimRight to remove left and right part

// split method. It is used to separate at the place we want
introduction = intro.trim();
console.log(introduction.split('i'));

// template literals. This does show takes all the sentences althogh the line is break

let myName = `The
process of
preparing is`;
let age = '100 years'


// Using template literals we can use $ symbol to get values

console.log(`${myName} ${age}`);

