import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;
// Main page > Search Results Page > Sign Up Page > Sign in window

type property = {
  id: number;
  propertyName: string;
  location: string;
  image: string;
  price: number;
  availableDates: [];
};

type State = {
  propreties: property[];
  page: "home" | "search" | "signUp";
  modal: "signIn" | "";
  user: "landlord" | "renter" | null;
};

let state: State = {
  page: "home",
  user: null,
  modal: "",
  propreties: [
    {
      id: 1,
      propertyName: "John's Guesthouse",
      location: "Tirana",
      image: "image.jpg",
      price: 15.99,
      availableDates: [],
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
    headerLoginBtn.addEventListener("click", function () {
        state.modal = "signIn"
        render()
      })

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

  formEl.append(emailEl, passwordEl)
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
  sidebarDescEl.className = "footer__sedebar__text";

  let sidebarTextPEl = document.createElement("h2");
  sidebarTextPEl.textContent = "Looking.com";

  let sidebarText1PEl = document.createElement("h3");
  sidebarText1PEl.textContent = "In good hands with us!";

  let sidebarSocialsEl = document.createElement("div");
  sidebarSocialsEl.className = "footer__sidebar__socials";

  let sidebarText2PEl = document.createElement("h4");
  sidebarText2PEl.textContent = "Stay connected";

  let socialsContainer = document.createElement("div");
  socialsContainer.className = "socials-container";

  let socialsLink = document.createElement("a");
  socialsLink.setAttribute("https://www.facebook.com/", "#");

  let socialsImg = document.createElement("img");
  socialsImg.src = "./src/assets/images/facebook-logo.png";

  let socialsLink1 = document.createElement("a");
  socialsLink1.setAttribute("https://www.instagram.com/", "#");

  let socialsImg1 = document.createElement("img");
  socialsImg1.src = "./src/assets/images/instagram-logo.png";

  let socialsLink2 = document.createElement("a");
  socialsLink2.setAttribute("https://www.twitter.com/", "#");

  let socialsImg2 = document.createElement("img");
  socialsImg2.src = "./src/assets/images/twitter-logo.png";

  let socialsLink3 = document.createElement("a");
  socialsLink3.setAttribute("https://www.youtube.com/", "#");

  let socialsImg3 = document.createElement("img");
  socialsImg3.src = "./src/assets/images/youtube-logo.png";

  let footerNavigationContainer = document.createElement("div");
  footerNavigationContainer.className = "footer__navigation-container";

  let footerNavMenuSection = document.createElement("div");
  footerNavMenuSection.className = "footer__nav-menus-section";

  let footerNavMenu = document.createElement("div");
  footerNavMenu.className = "footer__nav-menu";

  let explore = document.createElement("h3");
  explore.textContent = "Explore";

  let footerUl1 = document.createElement("ul");
  footerUl1.className = "ul";

  let footerLink1 = document.createElement("a");
  footerLink1.setAttribute("#", "Home");

  let footerLink2 = document.createElement("a");
  footerLink2.setAttribute("#", "Services");

  let footerNavMenuu = document.createElement("div");
  footerNavMenuu.className = "footer__nav-menu";

  let help = document.createElement("h3");
  help.textContent = "Help Center";
}

//<footer class="footer">

//           <div class="footer__nav-menu">
//             <h3>Help Center</h3>
//             <nav>
//               <ul>
//                 <a href=""><li>Support</li></a>
//                 <a href=""><li>Contact Us</li></a>
//               </ul>
//             </nav>
//           </div>
//         </div>
//         <div class="footer__bottom-notes">
//           <nav class="legal-notes">
//             <ul class="legal-notes__items">
//               <a href=""><li>Terms Of Use</li></a>
//               <a href=""><li>Privacy</li></a>
//               <a href=""><li>Cookies</li></a>
//               <a href=""><li>Refund Policy</li></a>
//               <a href=""><li>FAQ</li></a>
//             </ul>
//           </nav>
//           <p>&copy; 2022 Looking.com LLC. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>

function render() {
  if (app === null) return;
  app.textContent = "";

  renderHeader();

  if (state.page === "home") renderMainPage();
  if (state.page === "search") renderSearchPage(app);
  if (state.page === "signUp") renderSignUpPage(app);

  if (state.modal === "signIn") renderSignModal();
}

render();
