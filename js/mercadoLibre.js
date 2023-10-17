
let inputBusqueda = document.getElementById("inputBusqueda");
class Automovil{
    constructor(marca, modelo,precio,imagen){
        this.marca = marca;
        this.modelo = modelo;
        this.imagen = imagen;
        this.precio = precio
    }
};
let auto1 = new Automovil("Pagani","Huayra",150000000,"img/pagani_Negro.jfif");

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
    let marca = this.document.createElement("label");
    boxInfo.appendChild(marca);
    let txtNodeMarca = document.createTextNode(auto1.marca + " " + auto1.modelo);
    marca.appendChild(txtNodeMarca);
    marca.setAttribute("class","marca");
    /* precio */
    let precio = this.document.createElement("label");
    boxInfo.appendChild(precio);
    /* let textNodePrecio =this.document.createTextNode(auto1.precio); */
    let precioStr = Intl.NumberFormat("de-DE").format(auto1.precio);
    let textNodePrecio = this.document.createTextNode("$" + precioStr);
    precio.appendChild(textNodePrecio);
    precio.setAttribute("class","precio");

});