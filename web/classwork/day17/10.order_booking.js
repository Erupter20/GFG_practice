function orderBooking(register) {
  console.log(`registered`);
  return function (login) {
    console.log(`logged in`);
    return function (home) {
      console.log(`welcome to home!`);
      return function (search) {
        console.log(`search for product`);
        return function (selectProduct) {
          console.log(`Product selected`);
          return function (addToCart) {
            console.log(`Product added to cart`);
            return function (proceedToCheckout) {
              console.log(`Proceeding to checkout`);
              return function (paymentGateway) {
                console.log(`waiting for payment`);
                return function (orderConfirmation) {
                  console.log(`order successful`);
                  return function (orderSuccess) {
                    console.log(`email received`);
                  };
                };
              };
            };
          };
        };
      };
    };
  };
}
function timeout() {
  setTimeout(() => {
    console.log("delayed");
  }, 2000);
  return timeout;
}
orderBooking("registered")("logged in")("home")("search")("selectProduct")(
  "addToCart"
)("proceedToCheckout")("paymentGateway")("orderConfirmation")("orderSuccess");
