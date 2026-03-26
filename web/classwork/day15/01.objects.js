// let response = {
//     status:300,
//     data:{
//         name:"Harsh",
//         age: 22
//     }
// }

//practice
// let response = {
//   status: 300,
//   header: { type: "json", version: 1.1 },
//   body: {
//     name: "harsh",
//     age: 22,
//     isEmployeed: false,
//     address: { street: "123 st", city: "NYC", state: "NY" },
//     footer: { type: "json", version: 1.1 },
//   },
// };

// let { status } = response;
// console.log(status); // ✅ 300

// console.log(isEmployeed);

function sum(a, b) {
  return a + b;
}

// defining a sum function
function sum(...args) {
  // 3 dot operater - used for (multiple arg handling/ api)
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

let res = sum(2, 4, 6, 7, 8, 9, 6, 7, 8, 778);
console.log(res);
