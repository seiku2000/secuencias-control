

const dia = 1;
const horaActual = 10;

let horaApertura;
let mensaje; //abierto o cerrado

//includes verifica si un valor existe dentro del arreglo regresa true o false
/*
if([0,6].includes(dia) ){
    //es fin de semana
    console.warn("es fin de semana");
    horaApertura = 9;
}else {
    console.log("dia entre semana");
    horaApertura = 11;
}*/
horaApertura = ([0, 6].includes(dia)) ? 9 : 11;



/*
if( horaActual >= horaApertura ){
    mensaje = "esta abierto";
}
else {
    mensaje = `esta cerrado, hoy abrimos a las ${horaApertura}`;
}

console.log({
    horaApertura,mensaje
})*/
mensaje = (horaActual >= horaApertura) ?
    "esta abierto" :
    `esta cerrado vuelva a la hora de: ${horaApertura}`
console.log({ horaApertura, mensaje });

//console.log({mensaje})