"use client";

//pass your public key from tap's dashboard
var tap = Tapjsli("pk_test_iaSJGrZTxCmyA8d0X6LDvetU");

var elements = tap.elements({});
var style = {
  base: {
    color: "#535353",
    lineHeight: "18px",
    fontFamily: "sans-serif",
    fontSmoothing: "antialiased",
    fontSize: "16px",
    "::placeholder": {
      color: "rgba(0, 0, 0, 0.26)",
      fontSize: "15px",
    },
  },
  invalid: {
    color: "red",
  },
};
// input labels/placeholders
var labels = {
  cardNumber: "Card Number",
  expirationDate: "MM/YY",
  cvv: "CVV",
  cardHolder: "Card Holder Name",
};
//payment options
var paymentOptions = {
  currencyCode: ["KWD", "USD", "SAR"],
  labels: labels,
  TextDirection: "ltr",
};
//create element, pass style and payment options
var card = elements.create("card", { style: style }, paymentOptions);
//mount element
card.mount("#element-container");
//card change event listener
card.addEventListener("change", function (event) {
  if (event.BIN) {
    console.log(event.BIN);
  }
  if (event.loaded) {
    console.log("UI loaded :" + event.loaded);
    console.log("current currency is :" + card.getCurrency());
  }
  var displayError = document.getElementById("error-handler");
  if (event.error) {
    displayError.textContent = event.error.message;
  } else {
    displayError.textContent = "";
  }
});

// Handle form submission
var form = document.getElementById("form-container");
let token;
form.addEventListener("submit", function (event) {
  event.preventDefault();

  tap.createToken(card).then(function (result) {
    console.log(result);
    if (result.error) {
      // Inform the user if there was an error
      var errorElement = document.getElementById("error-handler");
      errorElement.textContent = result.error.message;
    } else {
      // Send the token to your server
      var errorElement = document.getElementById("success");
      errorElement.style.display = "block";
      var tokenElement = document.getElementById("token");
      tokenElement.textContent = result.id;
      token = result.id;
      console.log(result.id);
      localStorage.setItem("tap-card-token", token);
      fetch("/");
      window.location.href = "http://localhost:3000/tap";
    }
  });
});
