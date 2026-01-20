let a = 10;
let b = a;
a = 30;
console.log(a, b);

let juan = { nombre: "juan" };
let ana = { ...juan }; //operador spred
ana.nombre = "ana";

console.log(juan, ana);



const cambiaNombre = ({...persona}) => {
    persona.nombre = "tony";
    return persona;
};
let peter = { nombre: "peter" };
let tony = cambiaNombre(peter);
console.log(peter, tony);


const frutas = ["Manzana","pera","Mango"];
//la diferencia entre dos arreglos es que uno es una referencia y el otro es una copia


console.time("slice");
const otrasFrutas2 = frutas.slice();
console.timeEnd("slice");

console.time("spred");
const otrasFrutas = [...frutas ,"Banana"];
console.timeEnd("spred");

console.table({frutas,otrasFrutas,otrasFrutas2});
