const btnBurg = document.querySelector(".burguer")
const menu = document.querySelector(".menu")
const fechar = document.querySelector(".fechar")

btnBurg.addEventListener("click", () => {
    menu.style.display =  "block"

})

fechar.addEventListener("click", () => {
    menu.style.display =  "none"

})