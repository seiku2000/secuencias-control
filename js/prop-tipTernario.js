const elMayor = (a, b) => {
    return (a > b) ? a : b;


}
console.log(elMayor(10, 15));


const tieneMembresia = (miembre) => (miembre) ? `2 dolares` : `10 dolares`;
console.log(tieneMembresia(false));

const amigo = false;
console.log(amigo);
const amigosArr = [
    "peter",
    "tony",
    "dr.strange",
    amigo ? "thor" : "loki",
    (() => "nick fury")()
]
console.log(amigosArr);

const nota = 60 // A+ A B+ B C+ C D F
const grado = nota >= 95 ? "A+" :
    nota >= 90 ? "A" :
        nota >= 85 ? "B+" :
            nota >= 80 ? "B" :
                nota >= 75 ? "C+" :
                    nota >= 70 ? "C" :
                        nota >= 65 ? "D" : "calificacion insuficiente reprobado"
console.log(grado);





