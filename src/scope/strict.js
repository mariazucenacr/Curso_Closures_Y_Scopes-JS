//STRICT MODE
//Mucho mejor control de la asignación de las variables y algunos componenetes
//para que se cumpla los estandares 

'use strict';//Si no lo usamos no saldra error
//--Solo hemos asignado sin declarar la variable con ello saldra error porque 
//estamos en el modo estricto
pi=3.1416;
console.log(pi);

//En este ejemplo también saldra error, porque no se declaro la variable correctamente
function myFunction(){
    'use strict'; //Si no lo usamos no saldra error
    return pi = 3.1416;
}
console.log(myFunction());