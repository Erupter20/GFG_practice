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

function grillSandwhich(next) {
  setTimeout(() => {
    console.log("Grilled the Sandwhich");
    next();
  }, 1000);
}

function serve() {
  setTimeout(() => {
    console.log("Sandwhich Served");
  }, 1000);
}

getBread(() => {
  addButter(() => {
    grillSandwhich(() => {
      serve();
    });
  });
});
