//Declaramos
var firstName; //Por defecto se le asigna Undefined
firstName='Azucena'; //Le asignamos un valor
console.log(firstName);

//REASIGNAR Y REDECLARAR

//--VAR
var lastName='Hwang'; //Aqui declaramos/asignamos
lastName='Calderon'; //Aqui reasignamos un valor
console.log(lastName);

var secondName='Jin'; //Aqui declaramos/asignamos
var secondName='Feli'; //redeclaramos
console.log(secondName);

//--LET
let fruit ='Apple'; //declara y asigna
fruit = 'Kiwi'; //reasignamos

//let fruit ='Banana'; //NO SE PUEDE REDECLARAR
console.log(fruit);

//--CONST
const animal='dog'; //se declara y se asigna
//animal ='cat'; //NO SE PUEDE REASIGNAR
//const animal ='snake'; //NO SE PUEDE REDECLARAR
console.log(animal);

//Array
//Sobre el arreglo si se puede hacer los metodos de Arrays
const vehiculo =[];
vehiculo.push("tesla");
console.log(vehiculo);
vehiculo.pop();
console.log(vehiculo);

const array = ["manzana", "pera"] // declaración y asignación ✅
array[0] = "piña" // Cambio de valor en un elemento del array 
console.log(array) // [ 'piña', 'pera' ]
const array = [1,2,3] // SyntaxError: Identifier 'array' has already been declared.


