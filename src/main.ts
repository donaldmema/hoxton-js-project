import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;
// Main page > Search Results Page > Sign Up Page > Sign in window

let state = {
  page: "home",
  user: null,
  properties: [
    {
      id: 1,
      propertyName: "John's Guesthouse",
      location: "Tirana",
      image: "image.jpg",
      price: 15.99,
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
}

// <main class="main">
//         <section class="landing-page__renter-section">
//         </section>
//         <section class="landing-page__landlord-section">
//         </section>
//         <section class="landing-page__description-section">
//           <h3>Why use Looking.com?</h3>
//           <div class="features">
//             <article class="feature-card">
//               <img src="./src/assets/images/identity-feature.png" alt="" />
//               <h4>Verified identities</h4>
//               <p>
//                 Users can verify identity through multiple sources so you can
//                 search with confidence! Our proprietary fraud detection tool
//                 helps keep out the spam.️
//               </p>
//             </article>
//             <article class="feature-card">
//               <img src="./src/assets/images/match-feature.png" alt="" />
//               <h4>A perfect match</h4>
//               <p>
//                 Create your personal profile and get started in minutes! Get
//                 specific with things like pet preferences, room features,
//                 neighborhood details, and more.
//               </p>
//             </article>
//             <article class="feature-card">
//               <img src="./src/assets/images/third-feature.png" alt="" />
//               <h4>Great for landlords</h4>
//               <p>
//                 Keep track of your properties all in one place. Just list your
//                 properties and let the app do the rest and notify you for
//                 potential renters. Also enjoy the built-in profit tracker
//                 feature.
//               </p>
//             </article>
//           </div>
//         </section>
//       </main>

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

  let socialsLink1 = document.createElement("a")
  socialsLink1.setAttribute("https://www.instagram.com/", "#")

 let socialsImg1 = document.createElement("img")
  socialsImg1.src = "./src/assets/images/instagram-logo.png"
 
}

//<footer class="footer">
//       <aside class="footer__sidebar">
//         <div class="footer__sidebar__text">
//           <h2>Looking.com</h2>
//           <h3>In good hands with us!</h3>
//         </div>

//         <div class="footer__sidebar__socials">
//          <h4>Stay connected</h4>
//
//           <div class="socials-container">
//             <a href="https://www.facebook.com/" target="_blank">
//               <img
//                 src="./src/assets/images/facebook-logo.png"
//                 alt="facebook logo"
//               />
//             </a>
//
//             <a href="https://www.instagram.com/" target="_blank">
//                <img
//                  src="./src/assets/images/instagram-logo.png"
//                  alt="instagram logo"
//               />
//              </a>

//              <a href="https://www.twitter.com/" target="_blank">
//                <img
//                  src="./src/assets/images/twitter-logo.png"
//                  alt="twitter logo"
//                />
//              </a>
//
//             <a href="https://www.youtube.com/" target="_blank">
//                <img
//                  src="./src/assets/images/youtube-logo.png"
//                  alt="youtube logo"
//                />
//              </a>
//            </div>
//         </div>
//        </aside>
//
//        <div class="footer__navigation-container">
//         <div class="footer__nav-menus-section">
//           <div class="footer__nav-menu">
//              <h3>Explore</h3>
//              <nav>
//                <ul>
//                  <a href="#"><li>Home</li></a>
//                  <a href="#"><li>Services</li></a>
//                </ul>
//              </nav>
//            </div>

//           <div class="footer__nav-menu">
//              <h3>About Us</h3>
//         <nav>
//               <ul>
//                 <a href=""><li>Careers</li></a>
//                 <a href=""><li>Company</li></a>
//               </ul>
//             </nav>
//           </div>

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
