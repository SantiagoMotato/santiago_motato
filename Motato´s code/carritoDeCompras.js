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
    let price = 2550000;
    
    if (auxInt < 10){
        auxInt++;
        //console.log(auxInt);
        let valorFinal = auxInt * price;

        document.getElementById("numView").innerHTML = auxInt.toString();
       /*  document.getElementById("cantProductos").innerHTML = auxInt.toString();
        document.getElementById("subTotal").innerHTML = valorFinal.toString(); */

        if(auxInt == 1){
            document.getElementById("cantProductos").innerHTML = auxInt.toString() + " producto";
        }else if(auxInt==0 || auxInt>1){
            document.getElementById("cantProductos").innerHTML = auxInt.toString() + " productos";
        }

        if(price)



    }else{
        alert("Solo puedes realizar 10 compras!");
    }


});

numRestar.addEventListener("click", function() {
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux);
    let price = 2550000;

    if(auxInt > 0){
        auxInt--;

        let valorFinal = price-auxInt;

        document.getElementById("numView").innerHTML = auxInt.toString();
        /* document.getElementById("cantProductos").innerHTML = auxInt.toString();
        document.getElementById("subTotal").innerHTML = valorFinal.toString(); */
        if(auxInt == 1){
            document.getElementById("cantProductos").innerHTML = auxInt.toString() + " producto";
        }else if(auxInt==0 || auxInt<10){
            document.getElementById("cantProductos").innerHTML = auxInt.toString() + " productos";
        }

    }else{
        alert("Debes elegir uno o más productos!");
    }
});


   /*  let auxInt = parseInt(aux) + 1;
    console.log(auxInt);
    document.getElementById("numView").innerHTML = auxInt.toString(); */

