//*--Hosting en variables declaradas con var--*
//El resultado seria undefined
console.log(nameOfDog);
var nameOfDog = 'Elmo';
//Asi es como lo toma el Hoisting
var nameOfDog = undefined;
console.log(nameOfDog);
nameOfDog='elmo';


//*--Hosting en scope de bloque--*
nameOfDog();
function nameOfDog(){
    console.log(`El mejor perrito es ${elmo}`);
}
var elmo = 'Elmito'; //este elemento se elevo con el hosting
//Asi es como lo toma el Hoisting
var elmo;
function nameOfDog(){
    console.log(`El mejor perrito es ${elmo}`);
}
nameOfDog();
var elmo = 'Elmito'; 


//*--Hosting en funciones--*
nameOfDog();
function nameOfDog(){
    console.log(`El mejor perrito es ${elmo}`);
}
var elmo = 'Elmito'; 