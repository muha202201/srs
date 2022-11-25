let scrollpos = window.scrollY
const logo = document.getElementById("logo-container")
const back = document.getElementById("navbar")
const color = "red"
logo.style.display = "none"
window.addEventListener('scroll', function () {
       if (window.scrollY > 300) {
        logo.style.display = "block"
    } 
    if (window.scrollY > 170) {
        back.classList.add("sticky-menu");
        back.style.background = "white"
        back.style.overflow = "hidden"
        logo.style.overflow = "hidden"
        logo.classList.add("sticky-logo");
        logo.style.opacity = 1

    }
    else {
        logo.style.display = "none"
        back.style.background = "none"
        logo.style.opacity = "none"
        back.classList.remove("sticky-menu");

    }
});



        
