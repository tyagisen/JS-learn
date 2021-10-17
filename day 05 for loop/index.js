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
    'name': 'anjan',
    'age': 24,
    'location': 'itahari'
}
for (let x in myObj){
    console.log(x)
    // console.log(myObj[x])
}



// don't understand one

// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//   txt += value;
// }

// let myArr = []