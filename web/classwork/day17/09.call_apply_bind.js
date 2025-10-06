let obj1 = {
  name: "harsh",
  age: 22,
  print: function (city, country) {
    console.log(
      `name is ${this.name} and age is ${this.age} and city is ${city} and country is ${country}`
    );
  },
};
obj1.print();

//function borrowing
let obj2 = {
  name: "Dhruv",
  age: 19,
};

//call method - extra args can be passed using comma

// obj1.print.call(obj2, "jhunjhunu", "India");

// apply method - extra args can be passed using array
obj1.print.apply(obj2, ["jaipur", "india"]);
