let numSumar = document.getElementById("numSumar");
let numRestar = document.getElementById("numRestar");
let numView = document.getElementById("numView");

/* numRestar.addEventListener("click", function() {
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux);
}); */

//let price = 0;


numSumar.addEventListener("click", function() {
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux);


    
    if (auxInt < 10){
        auxInt++;
        //console.log(auxInt);
        let valorFinal = auxInt * 2550000;
        console.log(valorFinal);

        document.getElementById("numView").innerHTML = auxInt.toString();
        document.getElementById("cantProductos").innerHTML = auxInt.toString();
        document.getElementById("subTotal").innerHTML = valorFinal.toString();
    }else{
        alert("Solo puedes realizar 10 compras!");
    }


});

numRestar.addEventListener("click", function() {
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux);
    if(auxInt > 0){
        auxInt--;
        //alert("Solo puedes realizar 10 compras!");

        //console.log(auxInt);  

        let valorFinal = 2550000 - (auxInt-1);
        console.log(valorFinal);

        document.getElementById("numView").innerHTML = auxInt.toString();
        document.getElementById("cantProductos").innerHTML = auxInt.toString();
        document.getElementById("subTotal").innerHTML = valorFinal.toString();

    }else{
        alert("Debes elegir uno o más productos!");
    }
});


   /*  let auxInt = parseInt(aux) + 1;
    console.log(auxInt);
    document.getElementById("numView").innerHTML = auxInt.toString(); */

