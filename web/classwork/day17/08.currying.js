// function mailSender(to, sub, body) {
//   console.log(`mail sent to${to} with subject ${subject} and body ${body}`);
// }
// mailSender(`abc@mail.com','hello`);
// if an argment is misssing,, it still runs with undefined, it messes the UI. this is normal paradigm of programming

//currying approach - when an argument isn't available,we wait for it to arrive

function mailSender(to) {
  return function (sub) {
    return function (body) {
      console.log(`mail sent ${to} with subject ${sub} and body ${body}`);
    };
  };
}

return mailSender("abc@gmail.com")("hello")("mail");

// if an argument goes missing, the funciton won't run
