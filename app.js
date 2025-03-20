let menuIcon = document.querySelector(".nav__left__menu-logo");
let sidebar = document.querySelector(".sidebar");
let container = document.querySelector(".container");
let categories = document.querySelector(".categories");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
    categories.classList.toggle("large-categories");
}