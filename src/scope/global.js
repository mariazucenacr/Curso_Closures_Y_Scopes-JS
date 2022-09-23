//VARIABLES
var a; //declarar variables
var b = 'b'; //declarando y asignando
b = 'bb'; //re-asignacion
var a = 'aa'; //re-declaración

//GLOBAL SCOPE
//Este dice que cualquier variable que se encuentre en el documento pasan a ser variables 
//globales; es decir que podemos acceder a ellas según sea necesario y se puedan instanciar
// o llamar en diferentes bloques de código
var fruit = 'Apple'; //Esta es nuestra variable global
//Crearemos una función que pueda leer la variable global que creamos
function bestFruit (){
    console.log(fruit);
}
//Ejecutamos nuestra función
bestFruit();
//Con esto tenemos claro que las variables que se asignen a la parte superior del documento
// o en el documento en si sin estar dentro de un bloque de código son variables globales

//-Otro ejemplo de variable global, hay que tener cuidado al declarar la variable
