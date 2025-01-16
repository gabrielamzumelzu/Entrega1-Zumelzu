
    
let articulos = "libros";
const autor = "Bert Hellinger";
console.log(articulos);
console.log(autor);

let myArray = [];
myArray = [1,2,3]; 
myArray=["cuadernos","lápices","libros"];
console.log(myArray)
console.log(myArray[2])

let producto1=parseInt(prompt("Ingrese el valor del producto que desea"));
console.log("El costo del producto es: "+producto1); 
let producto2=parseInt((prompt("Desea otro producto ingrese su valor?")));
console.log("El segundo producto cuesta: "+ producto2);
let producto = 1;
do{
    document.write(producto + " ");
    producto++;
}while (producto<=0);

function valorTotal(producto1,producto2){
    return producto1 + producto2;
}
console.log(`El precio total es ${valorTotal(producto1,producto2)}`);

    if (valorTotal(producto1,producto2)>=250){
    console.log("Se lleva gratis un set de tintas");
    }else if(valorTotal(producto1,producto2)>=150){
    console.log("Tiene gratis un anotador");
    }else {
    console.log("Se le agradece la compra");
    }
