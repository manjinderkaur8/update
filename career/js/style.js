// Changing Svg position according to window width
const svg = document.querySelector("svg")

window.addEventListener("resize",function (event){
    const windowWidth = event.target.innerWidth
    const difference = 1214 - windowWidth

    if(windowWidth > 0){
        svg.style.top = "calc( -100% + " + (difference/3) + "px )";
    }
})

// adding cross icon onclick in navbar
const navBartoggler = document.querySelector(".navbar-toggler")
const navIcon = document.querySelector(".navbar-toggler-icon")

navBartoggler.addEventListener('click',function(){
    // if(navIcon.classList.contains("navbar-toggler-icon")){
    //     navIcon.s("class","")

    // }
    // else{
    //     navIcon.setAttribute("class","navbar-toggler-icon")
    // }
    navIcon.classList.toggle("navbar-toggler-icon")
    navIcon.classList.toggle("fa-solid")
    navIcon.classList.toggle("fa-xmark")
})
// code end
