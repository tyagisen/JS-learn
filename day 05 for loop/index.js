let furniture = ['Table','bench','bed','chair','T-table']
let myText=""
for (let f=0; f<furniture.length; f++){
    myText+=furniture[f]+" "
}
console.log(myText)

let i=0;
let len = furniture.length
for(; i<len; i+=2){
    console.log("The value we get during execution is "+i)
}

let myObj = {
    name: 'anjan',
    age: 24,
    location: 'itahari'
}
for (let x in myObj){
    // console.log(x)
    // console.log(myObj[x])
    // console.log(myObj.x) 
    console.log(myObj[x])
}

let arr = [2,'samir', 'monday', 12]

for (let x in arr){
    console.log(x)
}


for (let x = 0; x<arr.length;){
    console.log(arr[x]);
    x++;
}


let myObj1 = {
    fname: 'imtityaz',
    lname:'Alam',
    age : 24,
    location : 'kuyet'
};

// for the object created. for in loop

for (let x in myObj1){
    console.log(myObj1[x]);
}

// use of for each loop
myFur = ['chair', 'bed', 'Table', 'airphone', 'washing Machine']
let newText = "";

myFur.forEach(myFunction);
function myFunction(value, index, array){
    newText +=value+ " ";
}
console.log(newText)


myList = newText.split(" ")
console.log(myList);


let myNewArr = {}

myNewArr['fname'] = 'Tyagi'

// for (let x= 1; x <10; x+=2){
//     myNewArr[]
// }


// break and continue

for (let i = 0; i<12; i++){
    if(i=7){
        continue;
    }
    if(i=9){
        break;
    }
    else{
        console.log(i)
    }
}





// for of is only applicable in array, strings but not object.

// methods in array shift, unShift, push, pop




// don't understand one

// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//   txt += value;
// }

// let myArr = []



// let a = 100;
// let a = 'tyagi';//we get an error if we redeclear the with same identifier
console.log(a)

let b = 100;
b= 'Tyagi'