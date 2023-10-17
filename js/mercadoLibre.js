
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

        /*
        this.direccion = direccion; */
    }
};
let auto1 = new Automovil("Pagani","Huayra",150000000,"img/pagani_Negro.jfif","2011 · ",24500," · Italia");

//alert(auto1.marca + " " +auto1.modelo);

/* inputBusqueda.addEventListener("keydown", function(event){ */
window.addEventListener("load", function(event){
    /* if(event.key=="Enter"){ */
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
    imgAuto.setAttribute("src",auto1.imagen);
    imgAuto.setAttribute("class","img-auto");

    /* Caja para la informacion */
    let boxInfo = document.createElement("div");
    boxProducto.appendChild(boxInfo);
    boxInfo.setAttribute("class","box-info");
  /*   } */
    let marca = document.createElement("label");
    boxInfo.appendChild(marca);
    let txtNodeMarca = document.createTextNode(auto1.marca + " " + auto1.modelo);
    marca.appendChild(txtNodeMarca);
    marca.setAttribute("class","marca");
    /* precio */
    let precio = document.createElement("label");
    boxInfo.appendChild(precio);
    /* let textNodePrecio =this.document.createTextNode(auto1.precio); */
    let precioStr = Intl.NumberFormat("de-DE").format(auto1.precio);
    let textNodePrecio = this.document.createTextNode("$" + precioStr);
    precio.appendChild(textNodePrecio);
    precio.setAttribute("class","precio");

    /* Año */
    let año = document.createElement("label");
    boxInfo.appendChild(año);
    let textNodeAño = this.document.createTextNode(auto1.año);
    año.appendChild(textNodeAño);
    año.setAttribute("class","año");

    /* Kilemtraje */
    let kilometraje = document.createElement("label");
    boxInfo.appendChild(kilometraje);
    let kilometrajeStr = Intl.NumberFormat("de-DE").format(auto1.kilometraje);
    let textNodeKilometraje = this.document.createTextNode(kilometrajeStr + "km");
    año.appendChild(textNodeKilometraje);
    año.setAttribute("class","kilometraje");

    /* Direccion */
    let direccion = document.createElement("label");
    boxInfo.appendChild(direccion);
    let textNodeDireccion = this.document.createTextNode(auto1.direccion);
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