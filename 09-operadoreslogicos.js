//-----------------OPERADORES DE COMPARACION--------------
const ciudadesDisponibles =["mexico", "corea", "nueva zelanda", "brasil", "usa"];
const ciudadDestino = "mexico";

//IF
if(ciudadesDisponibles.indexOf(ciudadDestino) >= 0){
    console.log("PASAJE DISPONIBLE PARA VENTA");
}
else{
    console.log("ciudad no disponible");
}

//condiciones
// AND = && - SE DEBE CUMPLIR LAS 2 CONDICIONES
// OR = || - SE DEBE CUMPLIR UNA
// NOT = ! - NO SE CUMPLE NINGUNA

const edadPasajero = 19;
console.log(`VERIFICANDO PASAJES PARA ${ciudadDestino}`);
if((ciudadesDisponibles.indexOf(ciudadDestino) > -1) && edadPasajero >= 18){
    console.log(`PASAJE DISPONIBLE`);
}
else{
    console.log(`PASAJE NO DISPONIBLE`);
}