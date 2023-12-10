/* let calificacion1 = document.getElementById("Calificacion1");
let calificacion2 = document.getElementById("Calificacion2");
let calificacion3 = document.getElementById("Calificacion3");
let calificacion4 = document.getElementById("Calificacion4");
let calificacion5 = document.getElementById("Calificacion5");

let btnGraficar = document.getElementById("btnGraficar");

btnGraficar.addEventListener("click", function(){
    let sumaCalificacion = (Number(calificacion1.value) + Number(calificacion2.value) + 
                            Number(calificacion3.value) + Number(calificacion4.value) +  Number(calificacion5.value )); */

    /* Teniendo en cuenta los valores individiales, hallar el promedio de cada calificacion */
    /* let promedio1Estrella = (Number(calificacion1.value)*100) /sumaCalificacion;
    console.log(promedio1Estrella);

    let promedio2Estrella = (Number(calificacion2.value)*100) /sumaCalificacion;
    console.log(promedio2Estrella);

    let promedio3Estrella = (Number(calificacion3.value)*100) /sumaCalificacion;
    console.log(promedio3Estrella);

    let promedio4Estrella = (Number(calificacion4.value)*100) /sumaCalificacion;
    console.log(promedio4Estrella);

    let promedio5Estrella = (Number(calificacion5.value)*100) /sumaCalificacion;
    console.log(promedio5Estrella);

    
});
 */

let calificacion1 = document.getElementById("Calificacion1");
let calificacion2 = document.getElementById("Calificacion2");
let calificacion3 = document.getElementById("Calificacion3");
let calificacion4 = document.getElementById("Calificacion4");
let calificacion5 = document.getElementById("Calificacion5");

let btnGraficar = document.getElementById("btnGraficar");
let barraProgreso = document.getElementById("barraProgreso");
let porcentajeSpan = document.getElementById("porcentaje");

btnGraficar.addEventListener("click", function () {
    let sumaCalificacion =
        Number(calificacion1.value) +
        Number(calificacion2.value) +
        Number(calificacion3.value) +
        Number(calificacion4.value) +
        Number(calificacion5.value);

    if (sumaCalificacion > 0) {
        // Calcular el promedio total de 5 estrellas
        let promedioTotal = sumaCalificacion / 5;

        // Ajustar el valor de la barra de progreso al rango de 0 a 5
        let valorProgreso = Math.min(promedioTotal, 5);
        barraProgreso.value = valorProgreso;

        let porcentaje = ((valorProgreso / 5) * 100).toFixed(2).replace(/\.00$/, '');
        porcentajeSpan.textContent = `${porcentaje}%`;

        console.log("Promedio Total:", promedioTotal);
    } else {
        console.log("La suma de las calificaciones es cero. No se puede calcular el promedio.");
    }
});


