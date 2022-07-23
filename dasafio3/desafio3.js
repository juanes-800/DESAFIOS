
// se desea realizar un algoritmo para un laboratorio de analisis de alimento donde el analista de calidad, guarde los datos de los resultados obtenidos, el algoritmo  realizado guarda en un arreglo el alimento analisado con  nombre del producto, la clase de alimento y la fecha en que se hizo el analisis ademas  convierte el analis de solidos solubles  en enteros bx (brix) debido a la variacion que  presta este en el analisis.

class Alimentos{
    constructor( nombre,ph,bx, acidez,){
        this.nombre = nombre.toUpperCase();
        this.ph = ph;
        this.bx = parseFloat(bx);
        this.acidez = acidez;
    }
    ajuste(){
        this.bx= Math.round(this.bx)
    }



}
class TipoDeAlimento extends Alimentos{
    constructor(nombre,ph,bx,acidez, tipo, fechaRegistro){
        super(nombre,ph,bx,acidez);
        this.tipo = tipo.toUpperCase();
        this.fechaRegistro = fechaRegistro;
    }
    fechaRegistro(){
        return this.fechaRegistro;
    }
}

let analisis = [];
analisis.push(new Alimentos(' leche','3', '7,6','0,3'));
analisis.push(new Alimentos('vainilla','3,5', '17,2', '0,5'));
analisis.push(new Alimentos('mostaza','3,0', '16,6', ' 0,2'));
analisis.push(new TipoDeAlimento('yogurt', '3,6', '12,6', '0,37','lacteo', new Date()));
analisis.push(new TipoDeAlimento(' carne de res', '4,5', '6,6', '0,3','carnica', new Date()));
analisis.push(new TipoDeAlimento('compota', '3,7', '17,6', '0,4','vegetal', new Date()));

for(const Alimentos of analisis){
    Alimentos.ajuste();
}

for(const TipoDeAlimento of analisis){
    TipoDeAlimento.ajuste();
}

console.log(analisis);
