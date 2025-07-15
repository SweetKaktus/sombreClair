let theme = "clair"

let btnTheme = document.querySelector("button")

btnTheme.addEventListener("click", () => {
    let lightTheme = document.getElementById("lightTheme")
    let darkTheme = document.getElementById("darkTheme")
    if (theme === "clair") {
        theme = "sombre"
        lightTheme.disabled = true
        darkTheme.disabled = false
    } else if (theme === "sombre") {
        theme = "clair"
        lightTheme.disabled = false
        darkTheme.disabled = true
    }
    
})