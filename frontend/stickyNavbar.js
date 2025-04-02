window.onscroll = function () { hideBrandHeaderOnScroll() }

const header = document.getElementById("header")
const navbar = document.getElementById("nav")

const offset = navbar.offsetTop

function hideBrandHeaderOnScroll() {
    if (window.scrollY >= offset) {
        header.style.top = "-" + offset + "px"
    } else {
        header.style.top = null
    }
}