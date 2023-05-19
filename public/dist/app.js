"use strict";
const form = document.querySelector("form");
const address = document.getElementById("address");
const searchAddressHandler = (event) => {
    event.preventDefault();
    const enteredAddress = address.value;
    // send to Google Maps Api
};
form.addEventListener("submit", searchAddressHandler);
