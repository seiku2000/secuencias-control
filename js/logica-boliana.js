const regresaTrue = () => {
    console.log("Regresa true");
    return true;
}

const regresaFalse = () => {
    console.log("regresa false");
    return false;
}

console.warn("not o la negacion");
console.log(true);
console.log(!true);
console.log(!false);

console.log(!regresaFalse());

console.warn("and");
console.log(true && true);
console.log(true && !false);
console.log("=========");
console.log(regresaFalse() && regresaTrue());

regresaTrue() && regresaFalse();

console.warn("OR");
console.log(true || false);
console.log(false || true);


console.log("====");
console.log(regresaTrue() || regresaFalse());
console.log(regresaFalse() || regresaTrue());

console.log(true || true ||true || false);
