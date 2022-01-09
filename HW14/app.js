function myFunction(x) {
  x.classList.toggle("change");
}

const container = document.querySelector(".container");
const nav = document.querySelector(".header-nav");

container.addEventListener('click', () =>{
  nav.classList.toggle("container");
  if (nav.classList.contains("container")){
    nav.style.left = "0%"
  }else{
    nav.style.left = "-100%"
  }  
})

nav.addEventListener("click",(e) =>{
  if (e.target.classList.contains("link")){
    nav.style.left = "-100%"
  }
})
