let menuHamburguer = document.getElementById("menuHamburguer");
let mainMenu = document.getElementById("mainMenu");

menuHamburguer.addEventListener("click", function() {
        mainMenu.classList.add("menu-media-hidden");
        mainMenu.classList.remove("menu-media-visible");
        
});

/* 
mainMenu.classList.add("menu-media-hidden");
mainMenu.classList.remove("menu-media-visible"); */