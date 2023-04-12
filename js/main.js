let menuHamburguer = document.querySelector(".menu-hamburguer");
let mainMenu = document.getElementById("mainMenu");

menuHamburguer.addEventListener("click", function() {
        if(mainMenu.classList.contains("menu-media-hidden")){
        mainMenu.classList.add("menu-media-visible");
        mainMenu.classList.remove("menu-media-hidden");
        }
});

/* menuHamburguer.addEventListener("click", function() {
        mainMenu.classList.add("menu-media-visible");
        mainMenu.classList.remove("menu-media-hidden");
        
}); */

/* 
mainMenu.classList.add("menu-media-hidden");
mainMenu.classList.remove("menu-media-visible"); 
*/