//Ejercicio2: Alcancia
//Vamos a pasarle lo que quiero ahorrar y crear la logica correcta

//creamos una funcion con un parametro de monedas
// function moneyBox(coins){
//     let saveCoins = 0;
//     saveCoins +=coins;
//     console.log(`MoneyBox: $${saveCoins}`);
// }
// moneyBox(5);
// moneyBox(5);
//Esta funcion no guarda el dinero solo muestra

function moneyBox(){
    let saveCoins =0;
    //vamos a crear una closure, donde si le vamos a pasar el argumento
    // y luego vamos a implementar la logica
    function countCoins(coins){
     saveCoins += coins;
     console.log(`MoneyBox: $${saveCoins}`);   
    }
    return countCoins;
}

const myMoneyBox=moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);
