let a = 11
if(a <= 10) {
  //   console.log("a es mayor o igual a 10");
}else {
//  console.log("a es menor  o igual a 10" );

}
//console.log("fin del programa");

const hoy  = new Date();
//console.log(hoy);

let dia = hoy.getDay(); // 0: domingo, 1: lunes, 2: martes, 3: miercoles, 4: jueves, 5: viernes, 6: sabado

if(dia === 0){
    //console.log("domingo");


}else if ( dia ===1 ){/*
    if(dia === 1) {

        console.log("Lunes");
    }
        else {
            console.log("no es lunes ni domingo");
        }
    */
  //  console.log("Lunes");
}
else {
    //console.log("no es lunes ni domingo");
}
/*
const diaSemana = {
    0:"Domingo",
    1:"Lunes",
    2: "Martes",
    3: "Miercoles",
    4:"Jueves",
    5:"Viernes",
    6 :"Sabado",
}*/
const diaSemana =[
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
];



dia =2;

console.log(diaSemana[dia] || "dia no definido");
