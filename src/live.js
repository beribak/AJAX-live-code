
const country = document.querySelector("#country");
const postal = document.querySelector("#postal");
const form = document.querySelector("#form");


const country_name = document.querySelector("#country_name");
const place = document.querySelector("#place");
const lat = document.querySelector("#lat");
const lng = document.querySelector("#lng");

console.log(country.value) //postal.value

form.addEventListener("submit", (event) => {
    event.preventDefault();

    fetch(`https://api.zippopotam.us/${country.value}/${postal.value}`)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        country_name.innerText = data.country;
        place.innerText = data.places[0]["place name"];
        lng.innerText = data.places[0].longitude;
        lat.innerText = data.places[0].latitude;
    });

    postal.value = "";
    country.value = "";
});