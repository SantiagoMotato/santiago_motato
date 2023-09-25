let numSumar = document.getElementById("numSumar");
let numRestar = document.getElementById("numRestar");
let numView = document.getElementById("numView");

numRestar.addEventListener("click", function() {
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux);
});

numSumar.addEventListener("click", function() {
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux);
    if (auxInt < 10){
        auxInt++;
        console.log(auxInt);
        document.getElementById("numView").innerHTML = auxInt.toString();
    }
});

numRestar.addEventListener("click", function() {
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux);
    if(auxInt > 0){
        auxInt--;
        alert("Solo puedes realizar 10 compras!");

        //console.log(auxInt);  
        document.getElementById("numView").innerHTML = auxInt.toString();

    }
});


   /*  let auxInt = parseInt(aux) + 1;
    console.log(auxInt);
    document.getElementById("numView").innerHTML = auxInt.toString(); */

