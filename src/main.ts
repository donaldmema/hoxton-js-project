import "./style.css";

let state = {
  landlord: [],
  normalUser: [],
  user: {
    id: "",
    password: "",
    type: "",
  },
  properties: [
    {
      id: "",
      location: "",
      pricePerNight: "",
      image: "",
      availableDates: [],
    },
  ],
};

function renderHeader() {
  let mainEl = document.querySelector("#app");
  if (mainEl === null) return;

  let headerEl = document.createElement("header");
  headerEl.className = "header";
  let h1El = document.createElement("h1");
  h1El.textContent = "Looking.com";

  mainEl.append(headerEl, h1El)
}
