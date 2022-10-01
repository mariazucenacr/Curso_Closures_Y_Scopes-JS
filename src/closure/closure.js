//Practicando Closures
//Ejercicio1: Saludo
function greeting(){
    let username = 'Azucena';

    function displayUsername(){//Mostrar el username
        return `Hello ${username}`;
    } 

    return displayUsername();
}

const g = greeting();
console.log(g);
console.log(g());