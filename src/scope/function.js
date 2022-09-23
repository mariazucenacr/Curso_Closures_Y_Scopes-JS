//FUNCTION SCOPE
function greeting(){
    let username = 'Ana';
    console.log(username);

    if(username==='Ana'){
        console.log(`Hello ${username}!`);
    }
}

greeting();
//No podemos acceder a esta variable por fuera NO ES POSIBLE
console.log(username);