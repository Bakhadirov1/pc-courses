function nav() {
    let x = document.getElementsByClassName('nav')[0]
    if (x.style.display === "inherit") {
        x.style.display = "none"
    } else {
        x.style.display = "inherit"
    }
}
