import fs from "fs";

// writing a file
fs.writeFileSync("test.pdf", "hello world");

//append

fs.appendFileSync("test.pdf", "\nwho are you?");

//read
const data = fs.readFileSync("test.pdf", "utf-8");
// delete
// console.log(data);
// fs.unlinkSync("test.pdf");

fs.writeFile("abc.pdf", "hi", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file created");
  }
});

// Async
fs.writeFile("test.pdf", "hello world");

//append
fs.appendFile("test.pdf", "\nThos is async append", (err) => {
  if (err) console.log(err);
  else console.log("Async: appended text");
});

//read
const Data = fs.readFile("test.pdf", "utf-8", (err, content) => {
  if (err) console.log(err);
  else console.log("ASYNC READ:", content);
});

// delete
// console.log(data);
// fs.unlink("test.pdf");

fs.writeFile("abc.pdf", "hi", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file created");
  }
});
