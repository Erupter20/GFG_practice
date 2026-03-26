// try to guess the output

// let a = 10;

// const b = 20;

// function a() {
//     console.log(a);
//     let c = 30;
//     console.log(c);
// }
// a();
// console.log(a);

// var c =40;

// output will be an error : a syntax cause a is defined as a var and used as a function 
// 10
// 30
// 10

let a = 10;

const b = 20;

function print() {
    console.log(a);
    let c = 30;
    console.log(c);
}
print();
console.log(a);

var c =40;

