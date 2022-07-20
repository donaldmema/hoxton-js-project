import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;
// Main page > Search Results Page > Sign Up Page > Sign in window

let state = {
  page: "home",
  user: null,
  properties: [
    {
      id: 1,
      location: "Tirana",
      pricePerNight: 15.99,
      image: "image.jpg",
      availableDates: ["27/07/2022", "28/07/2022", "29/07/2022"],
    },
  ],
};

function renderHeader() {
  let headerEl = document.createElement("header");
  headerEl.className = "header";

  let headerTitleEl = document.createElement("h1");
  headerTitleEl.textContent = "Looking.com";

  if (state.user === null) {
    let headerLoginSection = document.createElement("div");
    headerLoginSection.className = "header-btns";

    let headerLoginBtn = document.createElement("button");
    headerLoginBtn.className = "sign-btn";
    headerLoginBtn.textContent = "SIGN IN";

    let headerSignUpBtn = document.createElement("button");
    headerSignUpBtn.className = "sign-btn";
    headerSignUpBtn.textContent = "SIGN UP";

    headerLoginSection.append(headerLoginBtn, headerSignUpBtn);
    headerEl.append(headerTitleEl, headerLoginSection);
    app.append(headerEl);
  } else {
    let headerUserSection = document.createElement("div");
    headerUserSection.className = "header-account";

    let headerUserImg = document.createElement("img");
    headerUserImg.src = "./src/assets/images/user.png";
    headerUserImg.alt = "profile pic";
    headerUserImg.width = 30;

    let headerUserName = document.createElement("p");
    headerUserName.textContent = "state.user.name";

    let headerLogoutBtn = document.createElement("button");
    headerLogoutBtn.className = "sign-btn";
    headerLogoutBtn.textContent = "LOGOUT";

    headerUserSection.append(headerUserImg, headerUserName, headerLogoutBtn);
    headerEl.append(headerTitleEl, headerUserSection);
    app.append(headerEl);
  }
}

renderHeader();

function renderMainPage() {
  let mainEl = document.createElement("main");
  mainEl.className = "main";

  let renterSection = document.createElement("section");
  renterSection.className = "landing-page__renter-section";

  let renterSectionPEl = document.createElement("p");
  renterSectionPEl.textContent = "Find Your Perfect Match®";

  let renterSectionH2El = document.createElement("h2");
  renterSectionH2El.textContent = "Find the right place for you today!";

  let renterSectionSearch = document.createElement("div");
  renterSectionSearch.className = "renter-section__search-btn";

  let renterSectionSearchInput = document.createElement("input");
  renterSectionSearchInput.type = "search";
  renterSectionSearchInput.placeholder = "Search by City";

  let renterSectionSearchBtn = document.createElement("button");
  renterSectionSearchBtn.textContent = "SEARCH";

  renterSectionSearch.append(renterSectionSearchInput, renterSectionSearchBtn);
  renterSection.append(
    renterSectionPEl,
    renterSectionH2El,
    renterSectionSearch
  );

  let landlordSection = document.createElement("section");
  landlordSection.className = "landing-page__landlord-section";

  let landlordSectionPEl = document.createElement("p");
  landlordSectionPEl.textContent = "Let Your Properties Profit For You®";

  let landlordSectionH2El = document.createElement("h2");
  landlordSectionH2El.textContent = "List your properties for Free!";

  let landlordSectionBtn = document.createElement("button");
  landlordSectionBtn.textContent = "List your property";

  landlordSection.append(
    landlordSectionPEl,
    landlordSectionH2El,
    landlordSectionBtn
  );

  let descriptionSection = document.createElement("section");
  descriptionSection.className = "landing-page__description-section";

  let descriptionSectionH3El = document.createElement("h3");
  descriptionSectionH3El.textContent = "Why use Looking.com?";

  let featuresDiv = document.createElement("div");
  featuresDiv.className = "features";

  let featureCard = document.createElement("article");
  featureCard.className = "feature-card";

  let featureCardImg = document.createElement("img");
  featureCardImg.src = "./src/assets/images/identity-feature.png";
  featureCardImg.alt = "";

  let cardTitle = document.createElement("h4");
  cardTitle.textContent = "Verified identities";

  let cardDescription = document.createElement("p");
  cardDescription.textContent =
    "Users can verify identity through multiple sources so you can search with confidence! Our proprietary fraud detection tool helps keep out the spam.️";

  featureCard.append(featureCardImg, cardTitle, cardDescription);

  let featureCard1 = document.createElement("article");
  featureCard1.className = "feature-card";

  let featureCardImg1 = document.createElement("img");
  featureCardImg1.src = "./src/assets/images/match-feature.png";
  featureCardImg1.alt = "";

  let cardTitle1 = document.createElement("h4");
  cardTitle1.textContent = "A perfect match";

  let cardDescription1 = document.createElement("p");
  cardDescription1.textContent =
    "Create your personal profile and get started in minutes! Get specific with things like pet preferences, room features, neighborhood details, and more.";

  featureCard1.append(featureCardImg1, cardTitle1, cardDescription1);

  let featureCard2 = document.createElement("article");
  featureCard2.className = "feature-card";

  let featureCardImg2 = document.createElement("img");
  featureCardImg2.src = "./src/assets/images/third-feature.png";
  featureCardImg2.alt = "";

  let cardTitle2 = document.createElement("h4");
  cardTitle2.textContent = "Great for landlords";

  let cardDescription2 = document.createElement("p");
  cardDescription2.textContent =
    " Keep track of your properties all in one place. Just list your properties and let the app do the rest and notify you for potential renters. Also enjoy the built-in profit tracker feature.";

  featureCard2.append(featureCardImg2, cardTitle2, cardDescription2);

  featuresDiv.append(featureCard, featureCard1, featureCard2);

  descriptionSection.append(descriptionSectionH3El, featuresDiv);

  mainEl.append(renterSection, landlordSection, descriptionSection);

  app.append(mainEl);
}

renderMainPage();
