 let rightArrow = document.getElementById("leftArrow");
 let skylineVisible = document.getElementById("skylineVisible");

 rightArrow.addEventListener("click", function() {
    skylineVisible.classList.remove("img-skyline"); 
    paganiVisbile.classList.add("img-pagani"); 
 });