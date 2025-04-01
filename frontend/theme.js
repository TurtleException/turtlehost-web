let theme = "turtle"

function rotateTheme() {
    switch (theme) {
        case "turtle":    theme = "butterfly"; break;
        case "butterfly": theme = "turtle";    break;
    }

    const path = "themes/" + theme + "/";

    document.getElementById("theme-style-color")
        .setAttribute("href", path + "colors.css")

    document.getElementById("theme-style-favicon")
        .setAttribute("href", path + "favicon.ico")

    document.getElementById("theme-style-logo")
        .setAttribute("src", path + "logo.png")
}
