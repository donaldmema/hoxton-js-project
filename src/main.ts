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
