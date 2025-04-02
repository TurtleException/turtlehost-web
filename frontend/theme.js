let theme = localStorage.getItem("theme")
if (theme == null || theme === "null")
    theme = "turtle"
setTheme(theme)

function rotateTheme() {
    switch (theme) {
        case "turtle":    theme = "butterfly"; break;
        case "butterfly": theme = "turtle";    break;
    }

    setTheme(theme)
}

function setTheme(theme) {
    const path = "themes/" + theme + "/"

    document.getElementById("theme-style-color")
        .setAttribute("href", path + "colors.css")

    document.getElementById("theme-style-favicon")
        .setAttribute("href", path + "favicon.ico")

    document.getElementById("theme-style-logo")
        .setAttribute("src", path + "logo.png")

    localStorage.setItem("theme", theme)
}