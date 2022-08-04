 let titulo = document.getElementById("titulo");
 titulo.onclick= cambiarTexto;
 function cambiarTexto(){
    document.getElementById("titulo").innerHTML =  "BIENVENIDO A NATURIS";
 }

 let promocion = document.getElementById("producto");
 promocion.onclick = aparece;
 function aparece(){
    document.getElementById("promocion").innerHTML =  "Envios gratis por compras superiores a $ 100.000";
    
 }

 function entrar(){
     alert(" Igresaste a Naturis")
 }

 let input1 = document.getElementById("nombre");
 let input2 = document.getElementById("edad");
 input1.onchange = () =>{console.log(input1.value)};
 input2.onchange = () =>{console.log(input2.value)};

 let cambio = document.getElementById("cambio");
 cambio.onmouseout = () =>{cambio.style.color = "red"};
 cambio.onmouseover = () =>{cambio.style.color = "blue"};

 const forma = document.getElementById("forma");
 forma.addEventListener("focus",(evento)=>{
   evento.target.style.background = "yellow";
 },true);

 forma.addEventListener("blur",(evento)=>{
   evento.target.style.background ="red";
 }, true)
