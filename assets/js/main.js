/*=============== MOBILE MENU ===============*/
const navbarMenuElement = document.getElementById("nav-menu")
const navbarToggleButton = document.getElementById("nav-toggle")
const navbarCloseButton = document.getElementById("nav-close")

// ------ Show Menu
// when clicked on btn, add classname to the menu element to show it
if (navbarToggleButton) {
    navbarToggleButton.addEventListener("click", () => {
        navbarMenuElement.classList.add("show-menu")
    })
}

// remove classname from the menu element
const hideMenu = () => {
    navbarMenuElement.classList.remove("show-menu")
}

// check if contains class name, returns boolean
const isMenuVisible = () => {
    return navbarMenuElement.classList.contains("show-menu")
}

// check if the click is inside the menu or on the toggle button, returns boolean
const isClickInsideMenuOrToggle = (event) => {
    return event.target.closest("#nav-menu") || event.target.closest("#nav-toggle")
}

// ------ Hide Menu
// when clicked on btn, remove classname from the menu element to hide it
if (navbarCloseButton) {
    navbarCloseButton.addEventListener("click", () => {
        hideMenu()
    })
}

// when is clicked on document, first check if conditions are filled, if true, hide the menu
document.addEventListener("click", (event) => {
    // if menu is visible and if is not clicked inside the menu
    if (isMenuVisible() && !isClickInsideMenuOrToggle(event)) {
        hideMenu()
    }
})

/*=============== REMOVE MENU MOBILE AFTER CLICKED LINK ===============*/
const navbarLinks = document.querySelectorAll(".nav__link")

const linkAction = () => {
    const navbarMenuElement = document.getElementById("nav-menu")
    // click each nav__link to remove the show-menu class
    navbarMenuElement.classList.remove("show-menu")
}

navbarLinks.forEach((link) => {
    link.addEventListener("click", linkAction)
})

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById("header")
    this.scrollY >= 50 ? header.classList.add("blur-header") : header.classList.remove("blur-header")
}

window.addEventListener("scroll", blurHeader)

/*=============== EMAIL JS ===============*/
const contactFormElement = document.getElementById("contact-form")
const contactMessage = document.getElementById("contact-message")

const sendEmail = (e) => {
    e.preventDefault()

    // service id - template id - #form - public key
    emailjs.sendForm("service_p3uckrg", "template_hlu6ji6", "#contact-form", "pCkDVTswV007nuzR0").then(
        () => {
            // show sent message
            contactMessage.textContent = "Message sent successfully"
            // remove message after sending
            setTimeout(() => {
                contactMessage.textContent = ""
            }, 5000)
            setTimeout(() => {
                contactFormElement.reset()
            }, 3000)
        },
        () => {
            // show error message
            contactMessage.textContent = "Message not send (service error)"
        }
    )
}
contactFormElement.addEventListener("submit", sendEmail)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up")
    // when scroll is higher than 350vh, add the show-scroll class to the header tag
    this.scrollY >= 350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const allSections = document.querySelectorAll("section[id]")
const activateMenuLink = () => {
    const scrollY = window.scrollY

    allSections.forEach((currentSection) => {
        const currentSectionHeight = currentSection.offsetHeight
        const currentSectionTop = currentSection.offsetTop - 58
        const currentSectionId = currentSection.getAttribute("id")
        const sectionsClass = document.querySelector(`.nav__menu a[href*='${currentSectionId}']`)

        if (scrollY > currentSectionTop && scrollY < currentSectionTop + currentSectionHeight) {
            sectionsClass.classList.add("active-link")
        } else {
            sectionsClass.classList.remove("active-link")
        }
    })
}
window.addEventListener("scroll", activateMenuLink)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 400,
})
scrollReveal.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
scrollReveal.reveal(`.home__image`, { origin: "bottom" })
scrollReveal.reveal(`.about__data, .skills__data`, { origin: "left" })
scrollReveal.reveal(`.about__image, .skills__content`, { origin: "right" })
scrollReveal.reveal(`.services__card, .projects__card`, { interval: 100 })
