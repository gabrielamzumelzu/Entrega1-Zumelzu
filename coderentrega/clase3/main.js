let pasajeros = "Maria Molina";
const hotel = "Sierras House";
console.log(pasajeros);
console.log(hotel);

let myArray= [];
myarray= [1,2,3,];
myArray= ["Maria","llegada","costo"];
console.log(myArray);
console.log(myArray[0]);

function bienvenidos(){
    console.log("Bienvenidos al Sierras House")
} 
bienvenidos()

const habGrande = 500;
const habMediana= 380;
const habSimple = 150;
let reserva = prompt("Ingrese a nombre de quién es la reserva");
console.log("Los pasajeros son: "+ reserva);
let identificacion = parseInt(prompt("Ingrese su dni"));
console.log("Su numero de dni es: "+identificacion);
let habitacion =parseInt(prompt("Ingrese la cantidad de habitaciones que desea: "));
if (habitacion >= 4){
    console.log("El costo de la reserva es de $500 por noche");
}else if(habitacion >= 2){
    console.log("El costo de la reserva es de $380 por noche");

}else if(habitacion = 1){
    console.log("El costo de la reserva es de $150");
}
while (habitacion==4){
    console.log("Se aplica 10 % descuento");
    break;
}





