import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;
// Main page✅ > Search Results Page > Sign Up Page > Sign in window

type Property = {
  id: number;
  propertyName: string;
  location: string;
  image: string;
  price: number;
  availableDates: [];
  owner: string | "";
};

type State = {
  properties: Property[];
  page: "home" | "search" | "signUp";
  modal: "signIn" | "";
  user: null | {};
  locationSearch: string;
  stayingPeriod: string;
};

let state: State = {
  page: "home",
  user: null,
  modal: "",
  properties: [],
  locationSearch: "",
  stayingPeriod: "",
};

window.state = state;

function getProperties() {
  if (state.locationSearch === "") return;
  fetch(`http://localhost:3005/properties`)
    .then((response) => response.json())
    .then((properties: Property[]) => {
      state.properties = properties.filter((properties) =>
        properties.location
          .toLowerCase()
          .includes(state.locationSearch.toLowerCase())
      );
      state.page = "search";
      render();
    });
}

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
    headerLoginBtn.addEventListener("click", function () {
      state.modal = "signIn";
      render();
    });

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
  renterSectionSearchBtn.addEventListener("click", function () {
    state.locationSearch = renterSectionSearchInput.value;
    getProperties();
  });

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
function renderSearchPage() {
  let searchPageMainEl = document.createElement("main");
  searchPageMainEl.className = "search-page__main";

  let sidebarDivEl = document.createElement("div");
  sidebarDivEl.className = "search-page__sidebar-div";

  let sidebarFilterSection = document.createElement("aside");
  sidebarFilterSection.className = "sidebar-filter-section";

  let searchOptionsBox = document.createElement("div");
  searchOptionsBox.className = "search-options-box";

  let searchFormEl = document.createElement("form");
  searchFormEl.className = "search-form";
  searchFormEl.addEventListener("submit", function (e) {
    e.preventDefault();
    state.locationSearch = searchInputField.value;
    state.stayingPeriod = searchFormStayingPeriod.value;
    getProperties();
  });

  let searchFormTitleEl = document.createElement("h2");
  searchFormTitleEl.textContent = "Search";

  let searchFormLocationEl = document.createElement("label");
  searchFormLocationEl.innerHTML = `Location name:
             <input
               type="text"
               placeholder="Where are you going?"
               name="location"
               required /> `;
  let searchInputField = searchFormLocationEl.querySelector("input")!;
  searchInputField.value = state.locationSearch;

  let searchFormDateEl = document.createElement("label");
  searchFormDateEl.innerHTML = `Check-in month:
  <select name="month" id="month" required>
    <option value="">Select</option>
    <option value="January">January</option>
    <option value="February">February</option>
    <option value="March">March</option>
    <option value="April">April</option>
    <option value="May">May</option>
    <option value="June">June</option>
    <option value="July">July</option>
    <option value="August">August</option>
    <option value="September">September</option>
    <option value="October">October</option>
    <option value="November">November</option>
    <option value="December">December</option>
  </select>`;

  let searchFormStayingPeriodEl = document.createElement("label");
  searchFormStayingPeriodEl.innerHTML = `Period of staying:
  <select name="staying-period" id="staying-period" required>
    <option value="">Select</option>
    <option value="1">1 month</option>
    <option value="2">2 months</option>
    <option value="3">3 months</option>
    <option value="4">4 months</option>
    <option value="5">5 months</option>
    <option value="6">6 months</option>
    <option value="7">7 months</option>
    <option value="8">8 months</option>
    <option value="9">9 months</option>
    <option value="10">10 months</option>
    <option value="11">11 months</option>
    <option value="12">12 months</option>
  </select>`;

  let searchFormStayingPeriod =
    searchFormStayingPeriodEl.querySelector<HTMLSelectElement>(
      "#staying-period"
    )!;

  let searchFormBtn = document.createElement("button");
  searchFormBtn.type = "submit";
  searchFormBtn.textContent = "SEARCH";

  searchFormEl.append(
    searchFormTitleEl,
    searchFormLocationEl,
    searchFormDateEl,
    searchFormStayingPeriodEl,
    searchFormBtn
  );

  searchOptionsBox.append(searchFormEl);

  let filterOptionsBox = document.createElement("div");
  filterOptionsBox.className = "filter-options-box";

  let filterOptionsTitleEl = document.createElement("h2");
  filterOptionsTitleEl.textContent = "Filter by:";

  let filterOptionsHrEl = document.createElement("hr");

  let filterOptionsItemTitleEl = document.createElement("h3");
  filterOptionsItemTitleEl.textContent = "Your Budget (per month)";

  let filterBudgetBtnsEl = document.createElement("div");
  filterBudgetBtnsEl.className = "filter-budget-btns";

  let filterBudgetOption1El = document.createElement("label");
  filterBudgetOption1El.htmlFor = "budgetChoice1";
  filterBudgetOption1El.innerHTML = `<input
  type="radio"
  id="budgetChoice1"
  name="budget"
  value="150"
/>
€0 - €150`;

  let filterBudgetOption2El = document.createElement("label");
  filterBudgetOption2El.htmlFor = "budgetChoice2";
  filterBudgetOption2El.innerHTML = `
  <input
                  type="radio"
                  id="budgetChoice2"
                  name="budget"
                  value="250"
                />
                €150 - €250`;

  let filterBudgetOption3El = document.createElement("label");
  filterBudgetOption3El.htmlFor = "budgetChoice3";
  filterBudgetOption3El.innerHTML = `<input
  type="radio"
  id="budgetChoice3"
  name="budget"
  value="350"
/>
€250 - €350`;

  let filterBudgetOption4El = document.createElement("label");
  filterBudgetOption4El.htmlFor = "budgetChoice4";
  filterBudgetOption4El.innerHTML = `<input
  type="radio"
  id="budgetChoice4"
  name="budget"
  value="100000"
  checked
/>
Show all`;

  filterBudgetBtnsEl.append(
    filterBudgetOption1El,
    filterBudgetOption2El,
    filterBudgetOption3El,
    filterBudgetOption4El
  );

  filterOptionsBox.append(
    filterOptionsTitleEl,
    filterOptionsHrEl,
    filterOptionsItemTitleEl,
    filterBudgetBtnsEl
  );

  sidebarFilterSection.append(searchOptionsBox, filterOptionsBox);
  sidebarDivEl.append(sidebarFilterSection);

  let propertiesListSection = document.createElement("section");
  propertiesListSection.className = "properties-list-section";

  let propertiesListHeading = document.createElement("div");
  propertiesListHeading.className = "properties-list-heading";

  let propertiesListHeadingH2El = document.createElement("h2");
  propertiesListHeadingH2El.textContent = `${state.locationSearch}: ${state.properties.length} properties found`;

  let propertiesListHeadingSortingEl = document.createElement("select");
  propertiesListHeadingSortingEl.name = "sorting";
  propertiesListHeadingSortingEl.id = "sorting";
  propertiesListHeadingSortingEl.required = true;
  propertiesListHeadingSortingEl.innerHTML = `<option value="">Sort by: Default</option>
  <option value="price-incremental">
    Sort by: Price(lowest first)
  </option>
  <option value="price-decremental">
    Sort by: Price(highest first)
  </option>
  <option value="alphabetical">Sort by: Alphabetical Order</option>`;

  propertiesListHeading.append(
    propertiesListHeadingH2El,
    propertiesListHeadingSortingEl
  );

  let propertiesListItems = document.createElement("div");
  propertiesListItems.className = "properties-list-items";
  console.log(state.properties);
  for (let property of state.properties) {
    let propertyItemCard = document.createElement("div");
    propertyItemCard.className = "property-item-card";

    let propertyItemCardImg = document.createElement("img");
    propertyItemCardImg.src = property.image;
    propertyItemCardImg.alt = "property image";

    let propertyItemCardInfo = document.createElement("div");
    propertyItemCardInfo.className = "property-item-card__info";

    let propertyItemUpperCardInfo = document.createElement("div");
    propertyItemUpperCardInfo.className = "card__info__upper";

    let propertyItemUpperCardInfoTitle = document.createElement("h3");
    propertyItemUpperCardInfoTitle.textContent = property.propertyName;

    let propertyItemUpperCardInfoLocation = document.createElement("p");
    propertyItemUpperCardInfoLocation.innerHTML = `<span>Location: </span> ${property.location}`;

    propertyItemUpperCardInfo.append(
      propertyItemUpperCardInfoTitle,
      propertyItemUpperCardInfoLocation
    );

    let propertyItemBottomCardInfo = document.createElement("div");
    propertyItemBottomCardInfo.className = "card__info__bottom";

    let propertyItemBottomCardInfoPeriod = document.createElement("p");
    propertyItemBottomCardInfoPeriod.className = "months-to-pay";
    propertyItemBottomCardInfoPeriod.textContent = `${state.stayingPeriod} months`;

    let propertyItemBottomCardInfoPrice = document.createElement("p");
    propertyItemBottomCardInfoPrice.textContent = `€${
      property.price * Number(state.stayingPeriod)
    } Total`;

    let propertyItemBottomCardInfoBtn = document.createElement("button");
    propertyItemBottomCardInfoBtn.textContent = "Make reservation >";

    propertyItemBottomCardInfo.append(
      propertyItemBottomCardInfoPeriod,
      propertyItemBottomCardInfoPrice,
      propertyItemBottomCardInfoBtn
    );

    propertyItemCardInfo.append(
      propertyItemUpperCardInfo,
      propertyItemBottomCardInfo
    );

    propertyItemCard.append(propertyItemCardImg, propertyItemCardInfo);

    propertiesListItems.append(propertyItemCard);
  }

  propertiesListSection.append(propertiesListHeading, propertiesListItems);

  searchPageMainEl.append(sidebarDivEl, propertiesListSection);

  app.append(searchPageMainEl);
}

function renderSignModal() {
  let wrapperEl = document.createElement("div");
  wrapperEl.className = "modal-wrapper";

  let containerEl = document.createElement("div");
  containerEl.className = "modal-container";

  let closeButton = document.createElement("button");
  closeButton.textContent = "X";
  closeButton.className = "modal-close-button";
  closeButton.addEventListener("click", function () {
    state.modal = "";
    render();
  });

  let titleEl = document.createElement("h2");
  titleEl.textContent = "Sign In";

  let formEl = document.createElement("form");
  formEl.addEventListener("submit", function (event) {
    event.preventDefault();

    state.modal = "";
    render();
  });

  let emailEl = document.createElement("input");
  emailEl.type = "email";
  emailEl.placeholder = "Enter your email";
  emailEl.required = true;

  let passwordEl = document.createElement("input");
  passwordEl.type = "password";
  passwordEl.placeholder = "Enter your password";
  passwordEl.required = true;

  formEl.append(emailEl, passwordEl);
  containerEl.append(closeButton, titleEl, formEl);
  wrapperEl.append(containerEl);
  app.append(wrapperEl);
}

function renderFooter() {
  let footerEl = document.createElement("footer");
  footerEl.className = "footer";

  let sidebarEl = document.createElement("aside");
  sidebarEl.className = "footer__sidebar";

  let sidebarDescEl = document.createElement("div");
  sidebarDescEl.className = "footer__sidebar__text";

  let sidebarTextPEl = document.createElement("h2");
  sidebarTextPEl.textContent = "Looking.com";

  let sidebarText1PEl = document.createElement("h3");
  sidebarText1PEl.textContent = "In good hands with us!";

  sidebarDescEl.append(sidebarTextPEl, sidebarText1PEl);

  let sidebarSocialsEl = document.createElement("div");
  sidebarSocialsEl.className = "footer__sidebar__socials";

  let sidebarText2PEl = document.createElement("h4");
  sidebarText2PEl.textContent = "Stay connected";

  sidebarSocialsEl.append(sidebarText2PEl);

  let socialsContainer = document.createElement("div");
  socialsContainer.className = "socials-container";

  let socialsLink1 = document.createElement("a");
  socialsLink1.href = `https://www.facebook.com/`;
  socialsLink1.target = "_blank";
  socialsLink1.innerHTML = `<img
  src="./src/assets/images/facebook-logo.png"
  alt="facebook logo"
/>`;

  let socialsLink2 = document.createElement("a");
  socialsLink2.href = `https://www.instagram.com/`;
  socialsLink2.target = "_blank";
  socialsLink2.innerHTML = `<img
  src="./src/assets/images/instagram-logo.png"
  alt="instagram logo"
/>`;

  let socialsLink3 = document.createElement("a");
  socialsLink3.href = `https://www.twitter.com/`;
  socialsLink3.target = "_blank";
  socialsLink3.innerHTML = `<img
  src="./src/assets/images/twitter-logo.png"
  alt="twitter logo"
/>`;

  let socialsLink4 = document.createElement("a");
  socialsLink4.href = `https://www.youtube.com/`;
  socialsLink4.target = "_blank";
  socialsLink4.innerHTML = `<img
  src="./src/assets/images/youtube-logo.png"
  alt="youtube logo"
/>`;

  socialsContainer.append(
    socialsLink1,
    socialsLink2,
    socialsLink3,
    socialsLink4
  );

  sidebarSocialsEl.append(sidebarText2PEl, socialsContainer);

  sidebarEl.append(sidebarDescEl, sidebarSocialsEl);

  let footerNavigationContainer = document.createElement("div");
  footerNavigationContainer.className = "footer__navigation-container";

  let footerNavMenuSection = document.createElement("div");
  footerNavMenuSection.className = "footer__nav-menus-section";

  let footerNavMenuDiv1 = document.createElement("div");
  footerNavMenuDiv1.className = "footer__nav-menu";

  let explore = document.createElement("h3");
  explore.textContent = "Explore";

  let footerNavMenu1 = document.createElement("nav");

  let footerUl1 = document.createElement("ul");

  let footerLink1 = document.createElement("a");
  footerLink1.href = "";
  footerLink1.innerHTML = "<li>Home</li>";

  let footerLink2 = document.createElement("a");
  footerLink2.href = "";
  footerLink2.innerHTML = "<li>Services</li>";

  footerUl1.append(footerLink1, footerLink2);
  footerNavMenu1.append(footerUl1);
  footerNavMenuDiv1.append(explore, footerNavMenu1);

  let footerNavMenuDiv2 = document.createElement("div");
  footerNavMenuDiv2.className = "footer__nav-menu";

  let aboutUs = document.createElement("h3");
  aboutUs.textContent = "About Us";

  let footerNavMenu2 = document.createElement("nav");

  let footerUl2 = document.createElement("ul");

  let footerLink3 = document.createElement("a");
  footerLink3.href = "";
  footerLink3.innerHTML = "<li>Careers</li>";

  let footerLink4 = document.createElement("a");
  footerLink4.href = "";
  footerLink4.innerHTML = "<li>Company</li>";

  footerUl2.append(footerLink3, footerLink4);
  footerNavMenu2.append(footerUl2);
  footerNavMenuDiv2.append(aboutUs, footerNavMenu2);

  let footerNavMenuDiv3 = document.createElement("div");
  footerNavMenuDiv3.className = "footer__nav-menu";

  let helpCenter = document.createElement("h3");
  helpCenter.textContent = "Help Center";

  let footerNavMenu3 = document.createElement("nav");

  let footerUl3 = document.createElement("ul");

  let footerLink5 = document.createElement("a");
  footerLink5.href = "";
  footerLink5.innerHTML = "<li>Support</li>";

  let footerLink6 = document.createElement("a");
  footerLink6.href = "";
  footerLink6.innerHTML = "<li>Contact Us</li>";

  footerUl3.append(footerLink5, footerLink6);
  footerNavMenu3.append(footerUl3);
  footerNavMenuDiv3.append(helpCenter, footerNavMenu3);

  footerNavMenuSection.append(
    footerNavMenuDiv1,
    footerNavMenuDiv2,
    footerNavMenuDiv3
  );

  let footerBottomNotesDiv = document.createElement("div");
  footerBottomNotesDiv.className = "footer__bottom-notes";

  let legalNotesNav = document.createElement("nav");
  legalNotesNav.className = "legal-notes";

  let legalNotesUl = document.createElement("ul");
  legalNotesUl.className = "legal-notes__items";

  let legalNoteAEl1 = document.createElement("a");
  legalNoteAEl1.href = "";
  legalNoteAEl1.innerHTML = "<li>Terms of Use</li>";

  let legalNoteAEl2 = document.createElement("a");
  legalNoteAEl2.href = "";
  legalNoteAEl2.innerHTML = "<li>Privacy</li>";

  let legalNoteAEl3 = document.createElement("a");
  legalNoteAEl3.href = "";
  legalNoteAEl3.innerHTML = "<li>Cookies</li>";

  let legalNoteAEl4 = document.createElement("a");
  legalNoteAEl4.href = "";
  legalNoteAEl4.innerHTML = "<li>Refund Policy</li>";

  let legalNoteAEl5 = document.createElement("a");
  legalNoteAEl5.href = "";
  legalNoteAEl5.innerHTML = "<li>FAQ</li>";

  let copyrightPEl = document.createElement("p");
  copyrightPEl.textContent = "© 2022 Looking.com LLC. All rights reserved.";

  legalNotesUl.append(
    legalNoteAEl1,
    legalNoteAEl2,
    legalNoteAEl3,
    legalNoteAEl4,
    legalNoteAEl5
  );
  legalNotesNav.append(legalNotesUl);
  footerBottomNotesDiv.append(legalNotesNav, copyrightPEl);

  footerNavigationContainer.append(footerNavMenuSection, footerBottomNotesDiv);

  footerEl.append(sidebarEl, footerNavigationContainer);

  app.append(footerEl);
}

function render() {
  if (app === null) return;
  app.textContent = "";

  renderHeader();

  if (state.page === "home") renderMainPage();
  if (state.page === "search") renderSearchPage();
  if (state.page === "signUp") renderSignUpPage();

  if (state.modal === "signIn") renderSignModal();

  renderFooter();
}

render();
