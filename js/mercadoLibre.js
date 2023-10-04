
let inputBusqueda = document.getElementById("inputBusqueda");

class Automovil{
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
}

let auto1 = new Automovil("Pagani","Huayra");

alert(auto1.marca + " " +auto1.modelo);

inputBusqueda.addEventListener("keydown", function(){
    let mainContent = document.getElementById("mainContent");
    let boxProducto = document.createElement("div");
    mainContent.appenChild(boxProducto);
    }
);