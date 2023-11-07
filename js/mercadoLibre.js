
let inputBusqueda = document.getElementById("inputBusqueda");
class Automovil{
    constructor(marca, modelo,precio,imagen,año,kilometraje,direccion){
        this.marca = marca;
        this.modelo = modelo;
        this.imagen = imagen;
        this.precio = precio
        this.año = año;
        this.kilometraje = kilometraje;
        this.direccion = direccion;
    }
};

let perro = new Automovil("Pagani","Huayra",150000000,"img/pagani_Negro.jfif","2011 · ",0," · Italia");
let auto2 = new Automovil("Koenigsseg","Agera",15000000,"img/koenisgssegGray.jpg","2018 · ",0," · Suecia");
let auto3 = new Automovil("Ferrari","F8",248000,"img/ferrariRed.jpg","2023 · ",0," · Italia");
let nissanSkyline = new Automovil("Nissan Skyline","GTR R 4",131824,"img/nissanSkilineGTR_R34.jpg","2002 · ",0," · Japon");

/* Funcion para cargar el vehiculo */
cargarVehiculo(perro);
cargarVehiculo(auto2);
cargarVehiculo(auto3);
cargarVehiculo(nissanSkyline);

window.addEventListener("keydown", function(event){
    mainContent.innerHTML="";
    let busqueda = this.document.getElementById("inputBusqueda").value;
    if(event.key == "Enter"){
        mainContent.innerHTML = "";
        let inputUser = busqueda.toLowerCase();
        if(inputUser == "pagani"){
            cargarVehiculo(auto2);
            cargarVehiculo(auto3);
        }else if(inputUser == "koenisgssegg"){
            cargarVehiculo(perro);
            cargarVehiculo(nissanSkyline);
        }
    }
});

/* Funcion con parametro */
function cargarVehiculo(auto){
    window.addEventListener("keydown", function(event){
    
        let mainContent = document.getElementById("mainContent");
    
        /* Caja para el producto */
        let boxProducto = document.createElement("div");
        mainContent.appendChild(boxProducto);
        boxProducto.setAttribute("class","box-producto");
    
        /* Caja para la imagen */
        let boxImg = document.createElement("div");
        boxProducto.appendChild(boxImg);
        boxImg.setAttribute("class","box-img");
        let imgAuto = document.createElement("img");
        boxImg.appendChild(imgAuto);
        imgAuto.setAttribute("src",auto.imagen);
        imgAuto.setAttribute("class","img-auto");
    
        /* Caja para la informacion */
        let boxInfo = document.createElement("div");
        boxProducto.appendChild(boxInfo);
        boxInfo.setAttribute("class","box-info");
    
        let marca = document.createElement("label");
        boxInfo.appendChild(marca);
        let txtNodeMarca = document.createTextNode(auto.marca + " " + auto.modelo);
        marca.appendChild(txtNodeMarca);
        marca.setAttribute("class","marca");
    
        /* precio */
        let precio = document.createElement("label");
        boxInfo.appendChild(precio);
        /* let textNodePrecio =this.document.createTextNode(auto1.precio); */
        let precioStr = Intl.NumberFormat("de-DE").format(auto.precio);
        let textNodePrecio = this.document.createTextNode("$" + precioStr);
        precio.appendChild(textNodePrecio);
        precio.setAttribute("class","precio");
    
        /* Año */
        let año = document.createElement("label");
        boxInfo.appendChild(año);
        let textNodeAño = this.document.createTextNode(auto.año);
        año.appendChild(textNodeAño);
        año.setAttribute("class","año");
    
        /* Kilemtraje */
        let kilometraje = document.createElement("label");
        boxInfo.appendChild(kilometraje);
        let kilometrajeStr = Intl.NumberFormat("de-DE").format(auto.kilometraje);
        let textNodeKilometraje = this.document.createTextNode(kilometrajeStr + "km");
        año.appendChild(textNodeKilometraje);
        año.setAttribute("class","kilometraje");
    
        /* Direccion */
        let direccion = document.createElement("label");
        boxInfo.appendChild(direccion);
        let textNodeDireccion = this.document.createTextNode(auto.direccion);
        año.appendChild(textNodeDireccion);
        año.setAttribute("class","direccion");
    
    
        /* Incono corazon*/
        let boxCorazon = document.createElement("div");
        boxImg.appendChild(boxCorazon);
        let inconoCorazon = this.document.createElement("i");
        boxCorazon.appendChild(inconoCorazon);
        boxCorazon.setAttribute("class","box-corazon");
        inconoCorazon.setAttribute("class","icono-corazon fa-regular fa-heart");
    
        /* Linea divisora */
        let lineaDiv = document.createElement("div");
        boxProducto.appendChild(lineaDiv);
        lineaDiv.setAttribute("class","linea-div");
    
    });
}
