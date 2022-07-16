
/* Nota : se desea realizar un algoritmo donde un niño de primaria pueda conocer  la tabla de multipliacion, las operaciones basicas de la matematica y los colores primarios  en ingles. por consola mostrara la tabla de multplicar que desee, los colores y  la operacion realizada , tambien  demostrara por consola, cuando no esta ingresando un numero bien, un color que no sea  primario o una operacion matematica basica.*/

function operaciones(operacion){
  
  if(operacion ==='+'){
    let valor1 = parseInt(prompt('ingrese numero1'));
    let valor2 = parseInt(prompt('ingrese numero2'));
    console.log('El resultado de tu suma es :' + (valor1 + valor2));
     
  } else if(operacion ==='-'){
    let valor1 = parseInt(prompt('ingrese numero1'));
    let valor2 = parseInt(prompt('ingrese numero2'));
    console.log( 'El resultado de tu resta es :'+ (valor1-valor2));
     
  } else if(operacion === 'x'){
    let valor1 = parseInt(prompt('ingrese numero1'));
    let valor2 = parseInt(prompt('ingrese numero2'));
    console.log(  'El resultado de tu multiplicación es :'+ (valor1*valor2));
     
  }else if(operacion ==='/'){
    let valor1 = parseInt(prompt('ingrese numero1'));
    let valor2 = parseInt(prompt('ingrese numero2'));
    console.log(  'El resultado de tu división es :'+ (valor1/valor2));
     
  } else if(operacion === !'+'||'-'||'x'||'/'){

    console.log(operacion + ' ' + 'no es una operacion')
  }

}

function coloresPrimarios(color){
  
  if(color === 'azul'){

    console.log('color' +' '+ color + ' '+ 'en ingles es : blue' );

  } else if(color === 'rojo'){

    console.log('color' +' '+ color + ' '+ 'en ingles es : red' );
    
  }
  else if(color === 'amarillo'){

    console.log('color' +' '+ color + ' '+ 'en ingles es : yellow' );

  } else{
    console.log('el color' + ' ' + color + ' no es un color primario')
  }
  
}

function tablaMultiplicar(tabla) {
  if(!isNaN(tabla)){

    for (i = 0; i <= 10; i++) {

      console.log(tabla, 'x', i, '=', tabla * i);
  
    }

  }else{

    console.log( tabla+ " "+ 'No es un numero para realizar tu tabla de multiplicacion');
    
  }
  
  operaciones(prompt(('Que operacion deseas realizar')));

  coloresPrimarios(prompt('ingrese el color'));
  
}
 

tablaMultiplicar(parseInt(prompt( "Ingresa tabla de multiplicar que deseas aprender")));
 