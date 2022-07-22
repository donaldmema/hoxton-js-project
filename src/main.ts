import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;
// Main page✅ > Search Results Page > Sign Up Page > Sign in window

type property = {
  id: number;
  propertyName: string;
  location: string;
  image: string;
  price: number;
  availableDates: [];
  owner: string | "";
};

type user = {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  type: "landlord" | "renter";
};

type State = {
  properties: property[];
  page: "home" | "search" | "signUp";
  modal: "signIn" | "";
  user: null | {};
};

let state: State = {
  page: "home",
  user: null,
  modal: "",
  properties: [
    {
      id: 1,
      propertyName: "John's Guesthouse",
      location: "Tirana",
      image: "image.jpg",
      price: 15.99,
      availableDates: [],
      owner: "BradAKlima@armyspy.com",
    },
  ],
};

function signUp({ firstName, lastName, phone, email, password, type }) {
  fetch("http://localhost:3010/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ firstName, lastName, phone, email, password, type }),
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    });
}

function signIn({ email, password }) {
  fetch("http://localhost:3010/users")
    .then((resp) => resp.json())
    .then((users) => {
      let match = users.find((user) => user.email === email);
      if (match && match.password === password) {
        state.user = match;
        state.modal = "";
        render();
      } else {
        alert("Invalid username/password");
      }
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
    headerLoginBtn.textContent = "Sign In";
    headerLoginBtn.addEventListener("click", function () {
      state.modal = "signIn";
      render();
    });

    let headerSignUpBtn = document.createElement("button");
    headerSignUpBtn.className = "sign-btn";
    headerSignUpBtn.textContent = "Sign Up";
    headerSignUpBtn.addEventListener("click", function () {
      state.page = "signUp";
      render();
    });

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
    headerUserName.textContent = state.user.firstName;

    let headerLogoutBtn = document.createElement("button");
    headerLogoutBtn.className = "sign-btn";
    headerLogoutBtn.textContent = "LOGOUT";
    headerLogoutBtn.addEventListener('click', function () {
      state.user = null
      render ()
    })

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

function renderSignUpPage() {
  let formEl = document.createElement("form");
  formEl.addEventListener("submit", function (event) {
    event.preventDefault();
    const checkedRadioInput = document.querySelector(
      'input[name="radio-input"]:checked'
    );
    const type = checkedRadioInput.value;
    signUp({
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      phone: phoneNrInput.value,
      email: inputEl.value,
      password: inputPass.value,
      type: type,
    });
  });

  let singUpContainer = document.createElement("div");
  singUpContainer.id = "signup";
  singUpContainer.className = "form-container";

  let titleSignUp = document.createElement("h2");
  titleSignUp.className = "header-title-signUp";
  titleSignUp.textContent = "Sign Up";

  let hrEl1 = document.createElement("hr");

  let emailEl = document.createElement("div");
  emailEl.id = "email";
  emailEl.className = "form-group";

  let labelEl = document.createElement("label");
  labelEl.innerHTML = "email-input";
  labelEl.textContent = "Enter Your Email";

  let inputEl = document.createElement("input");
  inputEl.id = "email-input";
  inputEl.className = "form-control";
  inputEl.type = "text";

  emailEl.append(labelEl, inputEl);

  let emailVerification = document.createElement("div");
  emailVerification.id = "email-verification";
  emailVerification.className = "form-group";

  let labelEl1 = document.createElement("label");
  labelEl1.innerHTML = "email-verification";
  labelEl1.textContent = "Confirm Your Email";

  let inputEl1 = document.createElement("input");
  inputEl1.id = "email-verification";
  inputEl1.className = "form-control";
  inputEl1.type = "text";

  emailVerification.append(labelEl1, inputEl1);

  let passEl = document.createElement("div");
  passEl.id = "password";
  passEl.className = "form-group";

  let requirementsP = document.createElement("p");
  requirementsP.className = "password-requirements";
  requirementsP.textContent =
    "Password cannot contain spaces. Password must be at least 8 characteres. It must contain at least 1 digit, 1 lower-case letter and 1 upper-case letter. You can use the following symbols: !, @, #, $, &.";

  let labelPass = document.createElement("label");
  labelPass.innerHTML = "password-input";
  labelPass.textContent = "Create A Password";

  let inputPass = document.createElement("input");
  inputPass.id = "password-input";
  inputPass.className = "form-control";
  inputPass.type = "password";

  passEl.append(labelPass, inputPass, requirementsP);

  let passVerification = document.createElement("div");
  passVerification.id = "password-verification";
  passVerification.className = "form-group";

  let labelPass2 = document.createElement("label");
  labelPass2.innerHTML = "password-verification";
  labelPass2.textContent = "Confirm Your Password";

  let inputPass2 = document.createElement("input");
  inputPass2.id = "password-verification";
  inputPass2.className = "form-control";
  inputPass2.type = "password";

  passVerification.append(labelPass2, inputPass2);

  let firstName = document.createElement("div");
  firstName.className = "form-group";
  firstName.id = "first-name";

  let firstNameLabel = document.createElement("label");
  firstNameLabel.innerHTML = "firstName-input";
  firstNameLabel.textContent = "What Is Your Name?";

  let firstNameInput = document.createElement("input");
  firstNameInput.id = "firstName-input";
  firstNameInput.className = "form-control";
  firstNameInput.type = "text";

  firstName.append(firstNameLabel, firstNameInput);

  let lastName = document.createElement("div");
  lastName.className = "form-group";
  lastName.id = "last-name";

  let lastNameLabel = document.createElement("label");
  lastNameLabel.innerHTML = "lastName-input";
  lastNameLabel.textContent = "What Is Your Last Name?";

  let lastNameInput = document.createElement("input");
  lastNameInput.id = "lastName-input";
  lastNameInput.className = "form-control";
  lastNameInput.type = "text";

  lastName.append(lastNameLabel, lastNameInput);

  let phoneNr = document.createElement("div");
  phoneNr.className = "form-group";
  phoneNr.id = "phone-nr";

  let phoneNrLabel = document.createElement("label");
  phoneNrLabel.innerHTML = "phoneNr-input";
  phoneNrLabel.textContent = "Add Your Phone Nr.";

  let phoneNrInput = document.createElement("input");
  phoneNrInput.id = "phoneNr-input";
  phoneNrInput.className = "form-control";
  phoneNrInput.type = "text";

  phoneNr.append(phoneNrLabel, phoneNrInput);

  let ownerType = document.createElement("div");
  ownerType.className = "form-group";
  ownerType.id = "owner-type";

  let landlordLabel = document.createElement("label");
  landlordLabel.innerHTML = "landlord-input";
  landlordLabel.textContent = "Landlord";

  let landlordInput = document.createElement("input");
  landlordInput.id = "landlord-input";
  landlordInput.name = "radio-input";
  landlordInput.className = "radio-input";
  landlordInput.type = "radio";
  landlordInput.value = "landlord";

  let renterLabel = document.createElement("label");
  renterLabel.innerHTML = "renter-input";
  renterLabel.textContent = "Renter";

  let renterInput = document.createElement("input");
  renterInput.id = "renter-input";
  renterInput.name = "radio-input";
  renterInput.className = "radio-input";
  renterInput.type = "radio";
  renterInput.value = "renter";

  ownerType.append(landlordLabel, landlordInput, renterLabel, renterInput);

  let nextBtn = document.createElement("button");
  nextBtn.id = "next-button";
  nextBtn.type = "submit";
  nextBtn.classList.add("btn", "btn-primary");
  nextBtn.textContent = "Next";

  singUpContainer.append(
    titleSignUp,
    hrEl1,
    firstName,
    lastName,
    phoneNr,
    emailEl,
    emailVerification,
    passEl,
    passVerification,
    ownerType,
    nextBtn
  );
  formEl.append(singUpContainer);
  app.append(formEl);
}

function renderSignModal() {
  let wrapperEl = document.createElement("div");
  wrapperEl.className = "modal-wrapper";

  let containerDiv = document.createElement("div");
  containerDiv.className = "form-container";
  containerDiv.id = "login";

  let closeButton = document.createElement("button");
  closeButton.textContent = "X";
  closeButton.className = "modal-close-button";
  closeButton.addEventListener("click", function () {
    state.modal = "";
    render();
  });

  let titleEl = document.createElement("h2");
  titleEl.className = "header-title";
  titleEl.textContent = "Sign In";

  let hrEl = document.createElement("hr");

  let formEl = document.createElement("form");
  formEl.addEventListener("submit", function (event) {
    event.preventDefault();

    signIn({ email: inputEl.value, password: inputEl2.value });
  });

  let emailEl = document.createElement("div");
  emailEl.id = "email";
  emailEl.className = "form-group";

  let labelEl = document.createElement("label");
  labelEl.innerHTML = "email-input";
  labelEl.textContent = "Enter Your Email";

  let inputEl = document.createElement("input");
  inputEl.id = "emai-input";
  inputEl.className = "form-control";
  inputEl.type = "text";

  emailEl.append(labelEl, inputEl);

  let passEl = document.createElement("div");
  passEl.id = "password";
  passEl.className = "form-group";

  let labelEl2 = document.createElement("label");
  labelEl2.innerHTML = "password-input";
  labelEl2.textContent = "Enter Your Password";

  let inputEl2 = document.createElement("input");
  inputEl2.id = "password-input";
  inputEl2.className = "form-control";
  inputEl2.type = "password";

  passEl.append(labelEl2, inputEl2);

  let nextBtn = document.createElement("button");
  nextBtn.id = "next-button";
  nextBtn.classList.add("btn", "btn-primary");
  nextBtn.textContent = "Next";

  formEl.append(emailEl, passEl, nextBtn);
  containerDiv.append(closeButton, titleEl, hrEl, formEl);
  wrapperEl.append(containerDiv);
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
