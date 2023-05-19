const form = document.querySelector("form")!;
const address = document.getElementById("address")! as HTMLInputElement;

const searchAddressHandler = (event: Event) => {
  event.preventDefault();
  const enteredAddress = address.value;

  // send to Google Maps Api
};

form.addEventListener("submit", searchAddressHandler);
