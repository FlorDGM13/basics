//------------------------------CUANTOS ELEMENTOS TIENE UNA ARRAY--------------------------
//length
const colores = ["morado", "rojo", "azul", "amarillo", "naranja"];
//const numeroDeColores = colores.length;
console.log(` En la lista de colores tenemos: ${colores.length} elementos`); //manera simplificada
//------------------------- ELIMINAR EL PRIMER ELEMENTO DEL ARRAY-----------------------------------
//shift
//colores.shift();
//console.log(colores);
//------------------------- ELIMINAR EL ULTIMO ELEMENTO DEL ARRAY-------------------------------
//pop
//colores.pop();
//console.log(colores);
//console.log(` En la lista de colores tenemos: ${colores.length} elementos`);
//---------------------------DEVUELVA ELEMENTOS QUE CUMPLAN UNA CONDICION----------------------
//BUSQUEDA
//filter
//const colorbusqueda = colores.filter((e) => e == 'rosa');
//console.log(colorbusqueda);

const colorbusqueda = colores.filter((e) => e.length >=5);
console.log(colorbusqueda);
//-------------------------------JOIN------------------

console.log(colores.join('*'));

//-------------ordenar lista------
//sort
console.log(colores.sort());
//-----------conociendo la posicion---------
//indexOf

console.log(`azul esta en la posicion: ${colores.indexOf('azul ')}`);
//---------unificar listas-----
//concat

const nuevoarray =["manzana", "arroz"];
console.log(colores.concat(nuevoarray))