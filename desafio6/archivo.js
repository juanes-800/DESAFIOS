let mes = 3;
let estacion;

(mes === 1 || mes === 2 || mes === 12 || mes === 9 || mes === 10 || mes === 11)? estacion ="invierno"  : estacion = "No es una estacion de invierno";
console.log(estacion)

const concierto = {
    edad: 20,
    tiqute: "si"
}

concierto.edad >= 20 && concierto.tiqute === "si"? console.log('se le puede dar ingreso al concierto') : console.log('no puede ingresar al concierto');

const productos = [ ];
productos.length === 0 && console.log("los productos estan vacios");

const alimento ={
    nombre:"tomate",
    ufc: "10ufc",
    fisicoquimicos:{
        ph: 5,
        acidez: 0.3,
        bx : 12 
    }
}
console.log(alimento?.fisicoquimicos?.color||"parametro fisico quimico no se ha determinado")
console.log(alimento?.fisicoquimicos?.ph||"parametro fisico quimico no se ha determinado")

const{ 
    nombre,
    ufc, 
    fisicoquimicos:{
        ph,
        acidez,
        bx
    }
} = alimento;
console.log(`El ${nombre} es un alimento que presenta una microbilogia de ${ufc} y para metros fisicoquimiocos de ph: ${ph} acidez:${acidez} y bx: ${bx}`);

const clasesAlimentos = {
  constructores:"carne, pescado, soya,",
  energeticos: " aceite, grasas, frutos secos",
  reguladores: "vitaminas, minerales"
}

let {constructores: builders, energeticos: energetic, reguladores: regulators} = clasesAlimentos;
console.log(builders);
console.log(energetic);
console.log(regulators);

function mostrarProducto(nombre1, precio, talla){
    console.log(nombre1);
}
let producto1 = {nombre1:"camisa", precio:1000, talla:"L"};
mostrarProducto(producto1);

const addNumeros = (a, b, c) => {
    console.log(a+b+c)
}

let numbersToAdd = [1,2,3]
addNumeros(...numbersToAdd) 


let users = ['javier', 'david', 'rosa', 'juan', 'mercedes']
let newUsers = ['marta', 'jaime', 'laura']
users.push(...newUsers)
console.log(users); 


let arreglo1 = [1, 2, 3, 4,5];
let arreglo2 = [...arreglo1];
console.log(arreglo2); 

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8];
let arrConcat = [...arr1, ...arr2];
console.log(arrConcat);

const numbers = [-12, 2, 3, 23, 43, 2, 3];
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));
