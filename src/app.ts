import axios from "axios";

declare let L: any;

const form = document.querySelector("form")!;
const address = document.getElementById("address")! as HTMLInputElement;

type NeshanGeolocationType = {
  location: {
    x: number;
    y: number;
  };
  status: "OK" | any;
};

let myMap = new L.Map("map", {
  key: "web.bf9252fbcec34f3ca66b7541d0a82946",
  maptype: "dreamy",
  poi: true,
  traffic: false,
  center: [35.699739, 51.338097],
  zoom: 14,
});

const marker = L.marker([35.699739, 51.338097]).addTo(myMap);

const searchAddressHandler = (event: Event) => {
  event.preventDefault();
  const enteredAddress = address.value;

  const params = {
    headers: {
      "Api-Key": "service.3309103089e44ad68c1a9773969a6955",
    },
  };

  axios
    .get<NeshanGeolocationType>(
      `https://api.neshan.org/v4/geocoding?address=${enteredAddress}`,
      params
    )
    .then((res) => {
      if (res.data.status === "OK") {
        const lat = res.data.location.y;
        const lng = res.data.location.x;
        //update marker location to address
        marker.setLatLng([lat, lng]);
        marker.bindPopup(enteredAddress).openPopup();
        //set map center to address
        myMap.flyTo([lat, lng], 15);
      } else {
        throw new Error("Nothing Found");
      }
    })
    .catch((err) => console.log(err));
};

form.addEventListener("submit", searchAddressHandler);
