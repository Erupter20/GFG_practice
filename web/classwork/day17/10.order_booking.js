function orderBooking(register) {
  console.log(`registered`);
  return function (login) {
    console.log(`logged in`);
    setTimeout(() => {
      console.log("delayed");
    }, 2000);
    return function (home) {
      console.log(`welcome to home!`);
      setTimeout(() => {
        console.log("delayed");
      }, 2000);
      return function (search) {
        console.log(`search for product`);
        return function (selectProduct) {
          console.log(`Product selected`);
          setTimeout(() => {
            console.log("delayed");
          }, 2000);
          return function (addToCart) {
            console.log(`Product added to cart`);
            setTimeout(() => {
              console.log("delayed");
            }, 2000);
            return function (proceedToCheckout) {
              console.log(`Proceeding to checkout`);
              setTimeout(() => {
                console.log("delayed");
              }, 2000);
              return function (paymentGateway) {
                console.log(`waiting for payment`);
                setTimeout(() => {
                  console.log("delayed");
                }, 2000);
                return function (orderConfirmation) {
                  console.log(`order successful`);
                  setTimeout(() => {
                    console.log("delayed");
                  }, 2000);
                  return function (orderSuccess) {
                    console.log(`email received`);
                    setTimeout(() => {
                      console.log("delayed");
                    }, 2000);
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

// Call with actual values (strings here)
orderBooking("registered")("logged in")("home")("search")("selectProduct")(
  "addToCart"
)("proceedToCheckout")("paymentGateway")("orderConfirmation")("orderSuccess");
