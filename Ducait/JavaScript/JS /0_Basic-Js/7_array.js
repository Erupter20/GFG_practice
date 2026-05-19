// ARRAY IN JAVASCRIPT:
// In JavaScript, an array is a data structure that allows you to store multiple values in a single variable. It is a container that holds an ordered collection of elements, which can  be of any data type, such as numbers, strings, objects, or even other arrays.
// How to create array [] we can seperate elements using ,
// array indexing will starts with 0
// total number of elements - start with 1

// let language = ["JavaScript", "Python", "Java", "C++", 1234, true, ["A", "B"]]
// we can access elements using array[index]
// console.log(language[1])
// console.log(language)
// accessing nested array element - arr[nested array index][element index]
// console.log(language[6][1])

// length of an array - arr.length
// console.log(language.length); // 7

// Array Methods:
// let programming_language = ["JavaScript", "Python", "TypeScript", "Java", "PHP"];
// programming_language.push("C++"); // insert in last index
// programming_language.unshift("C++"); // insert in 0th index
// programming_language.pop(); // remove from last index
// programming_language.pop();
// programming_language.shift(); // remove from 0th index
// programming_language.splice(2, 1); // remove specific element - (indexing,number of element(s))
// programming_language.splice(2, 0, "C++"); // insert element in specific index, (index,0,"element")
// programming_language.splice(1, 1, "C++"); // update element, (index,1,"updatedElement")
// console.log(programming_language);

// let frameworks = ["Django", "Spring", "Fast API"];
// let database = ["SQL", "NoSql"]
// merge/copy/concat/add two or more array - concat() - this method will not update the original array, return new array
// let mergedArr = programming_language.concat(frameworks, database)
// console.log(mergedArr)

// access first element
// console.log(programming_language[0])
// access last element: using length keyword
// 5 - 1 = 4
// arr[4]
// console.log(programming_language[programming_language.length - 1])

// join() - array to string, this method will not update the original array,
// let programming_language = ["JavaScript", "Python", "TypeScript", "Java", "PHP"];
// let arrToStr = programming_language.join(", ")
// console.log(arrToStr)
// split() - string to array
// let lang = "JavaScript";
// let strToArr = lang.split(" "); // ['JavaScript']
// let strToArr = lang.split("");
// console.log(strToArr);

// indexOf(): find index of element
// let programming_language = ["JavaScript", "Python", "TypeScript", "Java", "PHP"];
// let index = programming_language.indexOf("Java")
// console.log(index)

// includes(): check element exist in array
// let programming_language = ["JavaScript", "Python", "TypeScript", "Java", "PHP"];
// let exists = programming_language.includes("C++")
// console.log(exists)


// slice(): copy part of array
// let arr = [12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
// 14, 16, 18, 20, 22, 24, 26,
// 18,20,22,24
// let newArr = arr.slice(1, 8) // starting index, index of from where to remove
// let newArr = arr.slice(3, 7)
// console.log(newArr)

// reverse()
// let rvrs = arr.reverse()
// console.log(rvrs)

// given array
// let arr = [1, 2, 3, 4, 5]
// // res = [2,4,6,8,10]
// // [1,4,9,16,25]
// let res = [];
// for (let i = 0; i < arr.length; i++) {
//     res.push(arr[i] * 2)
// }
// console.log(res)

// given array: slice, return new array
// let arr = [11, 23, 45, 34, 89, 90, 56, 12, 30]
// // [45, 34, 89, 90, 56,]
// let newArr = arr.slice(2, 7); // indexing,
// console.log(newArr)
