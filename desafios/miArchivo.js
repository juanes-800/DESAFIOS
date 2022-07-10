// se desea realizar un algoritmo donde el usuario puda  ingresa un  numero y pueda identificar los numeros pares hasta donde desee,cuando el usuario ingrese un numero negativo por pantalla  sale una nota informando que no se encuentra  dentro de los numeros naturales y si ingresa un numero natuaral, envia por pantalla la instruccion de como poder identificar los numeros encontrados.
let numeroPar =  parseInt(prompt('Ingresa numero'));

 if(numeroPar < 0 ){

    alert('El numero ingresado no se encuentra dentro de los numeros naturales');
 
 }else if(numeroPar >= 0){

    for( let i = 0; i<= numeroPar; i++){

        if(i%2 == 0){

            console.log( 'Numero par identificado en el rango de 0 a' + ' ' + numeroPar + ' es : ' + i);
        }

    }
    alert(' Clik derecho inspeccionar, buscar consola y verifica tu lista de numeros ');
 }