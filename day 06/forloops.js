
let myobj = {
    'name': 'Tyagi',
    'age': 23,
    'location': 'Aurabani'
};
let myArr = ['samir', 19, 'Duhabi'];


console.log(myArr[0]);

for (let i=0; i<myArr.length; i++){
    console.log(myArr[i]);
}
for(let i = 10; i>-5; i--){
    console.log(i);
}

for(let a = 1; a=myArr.length+1; a++){
    console.log(myArr[a]);
}

// loops are often used working with arrays.

let myText = "";
const furniture = ['desk', 'bench', 'Table', 'chair', 'bed'];
for (let f = 0; f<furniture.length; f++){
    myText += furniture[f]
}
console.log(myText)

