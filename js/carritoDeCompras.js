let numSumar = document.getElementById("numSumar");
let numRestar = document.getElementById("numRestar");
let numView = document.getElementById("numView");
let cantProdutos = document.getElementById("cantProductos")
let valorUnitario = 2550000;
let eliminarCarrito = document.getElementById("eliminarBtn");
let guardarParaMasTarde = document.getElementById("guardarParaMasTardeBtn");


let valorUnitarioProductoStr = new Intl.NumberFormat('de-DE').format(valorUnitario);

document.getElementById("valorUnitarioProducto").innerHTML = valorUnitarioProductoStr;


eliminarBtn.addEventListener("click", function() {
    let valorFinal = 0;
    let auxInt = 0;
    let cantProductosReset = 0;

    if(auxInt == 1){
        let valorFinal = 0;
    document.getElementById("subTotal").innerHTML = valorFinal.toString(); 
    }else if(auxInt > 1){
        let valorFinal = 0;
        document.getElementById("subTotal").innerHTML = valorFinal.toString(); 
    }

    document.getElementById("cantProductos").innerHTML = cantProductosReset.toString();
    document.getElementById("subTotal").innerHTML = valorFinal.toString(); 
    document.getElementById("numView").innerHTML = auxInt.toString();

});


numSumar.addEventListener("click", function() {
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux);
    //let price = 2550000;
    
    if (auxInt < 10){
        auxInt++;


        if(auxInt == 1){
            let valorFinal = valorUnitario;
        document.getElementById("subTotal").innerHTML = valorFinal.toString(); 
        }else if(auxInt > 1){
            let valorFinal = valorUnitario * auxInt;
            document.getElementById("subTotal").innerHTML = valorFinal.toString(); 
        }

        document.getElementById("numView").innerHTML = auxInt.toString();
       /*  document.getElementById("cantProductos").innerHTML = auxInt.toString();*/
        //document.getElementById("subTotal").innerHTML = valorFinal.toString(); 

        if(auxInt == 1){
            document.getElementById("cantProductos").innerHTML = auxInt.toString() + " producto";
        }else if(auxInt==0 || auxInt>1){
            document.getElementById("cantProductos").innerHTML = auxInt.toString() + " productos";
        }

        let auxSubtotal = auxInt * valorUnitario;
        let auxSubtotalStr = new Intl.NumberFormat('de-DE').format(auxSubtotal);
        document.getElementById("subTotal").innerHTML = auxSubtotalStr;
        
    }else{
        alert("Solo puedes realizar 10 compras!");
    }


});

numRestar.addEventListener("click", function() {
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux);

    if(auxInt > 0){
        auxInt--;
        if(auxInt == 1){
            let valorFinal = valorUnitario;
            document.getElementById("subTotal").innerHTML = valorFinal.toString(); 
        }
        else if(auxInt < 10){
            let valorFinal = valorUnitario * auxInt;
            document.getElementById("subTotal").innerHTML = valorFinal.toString(); 
        }

        document.getElementById("numView").innerHTML = auxInt.toString();
        /* document.getElementById("cantProductos").innerHTML = auxInt.toString();
        document.getElementById("subTotal").innerHTML = valorFinal.toString(); */
        if(auxInt == 1){
            document.getElementById("cantProductos").innerHTML = auxInt.toString() + " producto";
        }else if(auxInt==0 || auxInt<10){
            document.getElementById("cantProductos").innerHTML = auxInt.toString() + " productos";
        }


        let auxSubtotal = auxInt * valorUnitario;
        let auxSubtotalStr = new Intl.NumberFormat('de-DE').format(auxSubtotal);
        document.getElementById("subTotal").innerHTML = auxSubtotalStr;


    }else{
        alert("Atención! Debes realizar alguna compra!");
    }
});

guardarParaMasTardeBtn.addEventListener("click", function(){
    alert("Tu producto ha sido guardado en tu lista de deseos!!!");
})




