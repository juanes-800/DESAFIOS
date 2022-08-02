
let hola = document.getElementById("saludo");
hola.innerText = "Cordial saludo cliente!";
console.log(hola.innerText);
const entrada = [ {saludo:"hola"}, { saludo:"buen dia"}, { saludo:"buenas tardes"}];

for(const ingreso of entrada){
    let saludos = document.createElement("div");
    saludos.innerHTML = `${ingreso.saludo}`;                 
    document.body.appendChild(saludos);
}


const productos =[
                 {nombre:'te verde', precio:'24500', id:1},
                 {nombre:'te forma', precio:'14800', id:2},
                 {nombre:'te relaxnat', precio:'14800', id:3},
                 {nombre:'biotin', precio:'61000', id:4},
                 {nombre:'clorofila', precio:'20850', id:5},
                 {nombre:'esencia ansioff', precio:'15250',id:6},
                 {nombre:'te meishen', precio:'29000', id:7},
                 {nombre:'levadura', precio:'40000', id:8}];

for(const producto of productos){
    let  conter = document.createElement("div");
    conter.innerHTML = `<h3> producto: ${producto.nombre}</h3>
                        <p> $${producto.precio}</P>
                        <b> ID:${producto.id} </b>`
    document.body.appendChild(conter);
}

let lista = document.getElementById("lista");
for(const producto of productos){
    let item = document.createElement("li")
    item.innerHTML = producto.nombre
    lista.append(item)
}




