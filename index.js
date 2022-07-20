let booking = {
    locations: [],
    todos: [],
    price: [],
    selectedLocations: null,
    selectedPrice: null,
    modal: null,
    user: null,
    search: null,

    currentIntervalId: null,
    imageIndex: 0
}

function signIn(email, password) {
    return fetch(`http://localhost:3000/users/${email}`)
        .then(function (resp) {
            return resp.json()
        })
        .then(function (user) {
            if (user.password === password) {
                state.user = user
                alert('Welcome')
                render()
            } else {
                alert('Wrong email/password. Please try again.')
            }
        })
}

function signUp(firstName, lastName, email, password) {
    fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            id: email,
            password: password
        })
    })
}


function getCitiesFromServerToLocations() {
    return fetchLocations().then(function (city) {
        booking.places = city
        render()
    })
}

function filterPaceFromLocations() {
    let placeToDisplay = booking.locations.filter(place =>
        place.name.toLowerCase().includes(booking.search)
    )

    return locationsToDisplay
}

function renderHeader() {
    const headerEl = document.createElement('header')
    headerEl.setAttribute('class', 'header-section')

    const pageNameEl = document.createElement('h1')
    pageNameEl.setAttribute('class', 'logo-header-section')
    pageNameEl.textContent = 'Looking.com'
    pageNameEl.addEventListener('click', function () {
        booking.tab = null
        booking.selectedPlace = null
        render()
    })

    const headerBtns = document.createElement("ul")
    ulHeaderLeft.setAttribute("class", "left-ul-header")

    
    const headerButtonEl = document.createElement("ul")
    headerButtonEl.setAttribute("class", "headers-button")

    const liSignInButton = document.createElement("li")
    const signInButtonEl = document.createElement("button")
    searchButtonEl.addEventListener('click', function () {
        booking.modal = 'sign-in'
        render()
    })

   

    
    liButtonEl.append(signInButtonEl)

    headerButtonEl.append(liSignInButton, liButtonEl)

    

    //

    const liSignUpButton = document.createElement("li")
    const signUpButtonEl = document.createElement("button")
    singUpButtonEl.addEventListener('click', function () {
        booking.modal = 'sign-up'
        render()
    })

   
    liSignUpButton.append(signUpButtonEl)

    headerButtonEl.append(liSignUpButton, liButtonEl)

    


    const menu_btn = document.createElement("button")
    menu_btn.setAttribute("class", "hamburger")
    const barMenuEl = document.createElement("div")
    barMenuEl.setAttribute("class", "bar")

    menu_btn.append(barMenuEl)
    headerEl.append(menu_btn)
    document.body.append(headerEl)

    menu_btn.addEventListener("click", function () {
        menu_btn.classList.toggle('is-active')
        navMenuEl.classList.toggle('is-active')
    })
}


//CREATING SIGN IN FORM
function renderSignIn() {
    const modalWrapperEl = document.createElement('div')
    modalWrapperEl.setAttribute('class', 'modal-wrapper')
    modalWrapperEl.addEventListener('click', function () {
        booking.modal = ''
        render()
    })

    const modalEl = document.createElement('div')
    modalEl.setAttribute('class', 'modal')
    modalEl.addEventListener('click', function (event) {
        event.stopPropagation()
    })

    const closeModalBtn = document.createElement('button')
    closeModalBtn.setAttribute('class', 'modal__close-btn')
    closeModalBtn.textContent = 'X'
    closeModalBtn.addEventListener('click', function () {
        booking.modal = ''
        render()
    })

    const titleEl = document.createElement('h2')
    titleEl.setAttribute('class', 'search-title')
    titleEl.textContent = 'Sign in'

    const profileFormEl = document.createElement("form")
    profileFormEl.setAttribute("class", "profile-form")
    profileFormEl.addEventListener('submit', function (event) {
        event.preventDefault()

        signIn(emailInputEl.value, passwordInputEl.value)

        booking.modal = ''

        render()
    })

    const emailLabelEl = document.createElement("label")
    emailLabelEl.setAttribute("for", "user-email")
    emailLabelEl.textContent = "Email"

    const emailInputEl = document.createElement("input")
    emailInputEl.setAttribute('placeholder', 'Enter your email...')
    emailInputEl.setAttribute('name', 'email')
    emailInputEl.setAttribute("type", "email")
    emailInputEl.setAttribute("id", "user-email")

    const passwordLabelEl = document.createElement("label")
    passwordLabelEl.setAttribute("for", "user-password")
    passwordLabelEl.textContent = "Password"

    const passwordInputEl = document.createElement("input")
    passwordInputEl.setAttribute('placeholder', 'Enter your password...')
    passwordInputEl.setAttribute('name', 'password')
    passwordInputEl.setAttribute("type", "password")
    passwordInputEl.setAttribute("id", "user-password")

    const signInButtonEl = document.createElement("button")
    signInButtonEl.setAttribute("class", "signin-button")
    signInButtonEl.setAttribute("type", "submit")
    signInButtonEl.textContent = "Sign In"


    profileFormEl.append(emailLabelEl, emailInputEl, passwordLabelEl, passwordInputEl, signInButtonEl)
    modalEl.append(closeModalBtn, titleEl, profileFormEl)
    modalWrapperEl.append(modalEl)

    document.body.append(modalWrapperEl)
}

//CREATING SIGN UP FORM 
function renderSignUp() {
    const modalWrapperEl = document.createElement('div')
    modalWrapperEl.setAttribute('class', 'modal-wrapper')
    modalWrapperEl.addEventListener('click', function () {
        booking.modal = ''
        render()
    })

    const modalEl = document.createElement('div')
    modalEl.setAttribute('class', 'modal')
    modalEl.addEventListener('click', function (event) {
        event.stopPropagation()
    })

    const closeModalBtn = document.createElement('button')
    closeModalBtn.setAttribute('class', 'modal__close-btn')
    closeModalBtn.textContent = 'X'
    closeModalBtn.addEventListener('click', function () {
        booking.modal = ''
        render()
    })

    const titleEl = document.createElement("h2")
    titleEl.setAttribute("class", "search-title")
    titleEl.textContent = "Sign Up"

    const profileFormEl = document.createElement("form")
    profileFormEl.setAttribute("class", "profile-form")
    // signUp(firstName, lastName, email, password)
    profileFormEl.addEventListener('submit', function (event) {
        event.preventDefault()

        signUp(firstNameInputEl.value, lastNameInputEl.value, emailInputEl.value, passwordInputEl.value)

        booking.modal = ''

        render()
    })

    const firstNameLabelEl = document.createElement("label")
    firstNameLabelEl.setAttribute("for", "user-firstName")
    firstNameLabelEl.textContent = 'First name'

    const firstNameInputEl = document.createElement('input')
    firstNameInputEl.setAttribute('type', 'text')
    firstNameInputEl.setAttribute('id', 'user-firstName')

    const lastNameLabelEl = document.createElement('label')
    lastNameLabelEl.setAttribute('for', 'user-lastName')
    lastNameLabelEl.textContent = 'Last name'

    const lastNameInputEl = document.createElement('input')
    lastNameInputEl.setAttribute('type', 'text')
    lastNameInputEl.setAttribute('id', 'user-lastName')

    const emailLabelEl = document.createElement('label')
    emailLabelEl.setAttribute('for', 'user-email')
    emailLabelEl.textContent = 'Email'

    const emailInputEl = document.createElement('input')
    emailInputEl.setAttribute('type', 'email')
    emailInputEl.setAttribute('id', 'user-email')


    const passwordLabelEl = document.createElement('label')
    passwordLabelEl.setAttribute('for', 'user-password')
    passwordLabelEl.textContent = 'Password'

    const passwordInputEl = document.createElement('input')
    passwordInputEl.setAttribute('type', 'password')
    passwordInputEl.setAttribute('id', 'user-password')

    const buttonEl = document.createElement('button')
    buttonEl.setAttribute('class', 'signin-button')
    buttonEl.setAttribute('type', 'submit')
    buttonEl.textContent = 'Sign Up'

    const signUpEl = document.createElement('a')
    signUpEl.setAttribute('class', 'signup-link')
    signUpEl.setAttribute('href', '#')
    signUpEl.textContent = 'Sign In'
    signUpEl.addEventListener('click', function () {
        booking.modal = 'sign-up'
        render()
    })

    profileFormEl.append(firstNameLabelEl, firstNameInputEl, lastNameLabelEl, lastNameInputEl, emailLabelEl, emailInputEl, passwordLabelEl, passwordInputEl, buttonEl)
    modalEl.append(closeModalBtn, titleEl, profileFormEl, signUpEl)
    modalWrapperEl.append(modalEl)

    document.body.append(modalWrapperEl)
}