function outer() {
    let value = 10;

    function inner() {
        console.log(value);
    }
    return inner;
}

let res = outer();
console.log(res);
