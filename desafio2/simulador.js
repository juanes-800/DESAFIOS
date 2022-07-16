


function operaciones(operacion){

  if(operacion === 'suma'){
    let valor1 = parseInt(prompt('ingrese numero1'));
    let valor2 = parseInt(prompt('ingrese numero2'));
    console.log('El resultado de tu suma es :' + (valor1 + valor2));
     
  }

  if(operacion === 'resta'){
    let valor1 = parseInt(prompt('ingrese numero1'));
    let valor2 = parseInt(prompt('ingrese numero2'));
    console.log( 'El resultado de tu resta es :'+ (valor1-valor2));
     
  }

  if(operacion === 'multiplicacion'){
    let valor1 = parseInt(prompt('ingrese numero1'));
    let valor2 = parseInt(prompt('ingrese numero2'));
    console.log(  'El resultado de tu multiplicación es :'+ (valor1*valor2));
     
  }

  if(operacion === 'division'){
    let valor1 = parseInt(prompt('ingrese numero1'));
    let valor2 = parseInt(prompt('ingrese numero2'));
    console.log(  'El resultado de tu división es :'+ (valor1/valor2));
     
  }else{
    console.log('Operacion ingresada no es una operacion basica de la matemática');
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
    console.log('No es un color primario');
  }
  
}

function tablaMultiplicar(tabla) {
  if(!isNaN(tabla)){

    for (i = 0; i <= 10; i++) {

      console.log(tabla, 'x', i, '=', tabla * i);
  
    }

  }else{

    console.log('No es un numero para realizar tu tabla de multiplicaion');
    
  }
  
  operaciones(prompt(('Que operacion deseas realizar')));

  coloresPrimarios(prompt('ingrese el color'));
  
}
 

tablaMultiplicar(parseInt(prompt( "Ingresa tabla de multiplicar que deseas aprender")));
 