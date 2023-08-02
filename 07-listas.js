//ARRAYS O ARREGLOS
//PERMITE GESTIONAR LISTAS

//declaracion de array
const ciudadesDisponibles = new Array("BOGOTA", "LIMA", "SANTIAGO");
console.log(ciudadesDisponibles);

//definicion de un alista abreviada

const paisesDispo = new Array("colombia","peru","chile");
console.log(paisesDispo);

//------------------------------------------COMANDO PUSH----------------------------------------

const mascotas = ["gato"]
console.log(mascotas);

mascotas.push('perro');
console.log(mascotas);

//----------------------------------------INSERTAR AL INICIO-----------------------------
//unshift
const plantas =["yerbabuena","cilantro", "amarrillo", "azul", "morado"];
//plantas.unshift('epasote');
console.log(plantas);
//------------------------------------------MOSTAR 1RA PSOCION---------------------------------
console.log(plantas[0]);
//-----------------------------------QUITAR ELEMENOS Y AGREGAR--------------------------------
//SPLICE
plantas.splice(2,3, 'naranja', 'mango');
console.log(plantas);






