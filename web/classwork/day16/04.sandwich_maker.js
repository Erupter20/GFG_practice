function getBread(next) {
  setTimeout(() => {
    console.log("get bread");
    next();
  }, 1000);
}

function addButter(next) {
  setTimeout(() => {
    console.log("get butter");
    next();
  }, 1000);
}

function grillSandwich(next) {
  setTimeout(() => {
    console.log("Grilled the Sandwich");
    next();
  }, 1000);
}

function serve() {
  setTimeout(() => {
    console.log("Sandwich Served");
  }, 1000);
}

getBread(() => {
  addButter(() => {
    grillSandwich(() => {
      serve();
    });
  });
});
