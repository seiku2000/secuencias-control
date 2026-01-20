const regresaTrue = () => {
    console.log("Regresa true");
    return true;
}

const regresaFalse = () => {
    console.log("regresa false");
    return false;
}

console.warn("asignacion");

const soyUndefined = undefined;
const soyNull =null;
const soyFalso =false;

const a1 =true && "hola mundo";
const a2 ="hola" && "mundo";
const a3 = soyFalso || "no soy falso";
const a4 = soyFalso || soyUndefined || soyNull || "ya no soy falso de nuevo"||true;
const a5 = soyFalso || soyUndefined || regresaTrue() || "ya no soy falso de nuevo"||true;

console.log({a1,a2,a3});

console.log({a4,a5});