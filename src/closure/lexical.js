//Variable global
const myGlobal = 0;

//Vamos a crear una función que dentro tiene otra función
function myFunction(){
    const myNumber = 1;
    console.log(myGlobal);

    function parent(){ //función interna y aquí ya estamos creando un closure
        const inner = 2;
        console.log(myNumber,myGlobal);

        function child(){
            console.log(inner,myNumber,myGlobal);
        }

        return child();
    }

    return parent();
}

myFunction();