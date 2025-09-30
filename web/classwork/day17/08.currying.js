function mailSender(to,sub,body) {
    console.log(`mail sent to${to} with subject ${subject} and body ${body}`);
}
mailSender(`abc@mail.com','hello`);

//currying approach - when an argument isn't available,we wait for it to arrive

function mailSender(to) {
    return function (sub) {
        return function (body) {
            console.log(`mail sent to ${to} with subject ${sub} and body ${body}`);
        };
    };
}
mailSender("abc@gmail.com")("sub") ("hi"); // here mailSender is an HOF