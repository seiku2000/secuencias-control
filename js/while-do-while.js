const carros = ["ford", "audi", "bmw", "fiat", "chevrolet"];

let i = 0;
/* 
while (i < carros.length) {
    console.log(carros[i]);
    i++;

}*/
while (carros[i]) {
    if (i === 1) {
      i++;
    continue;
 }

    console.log(carros[i]);
    i++;
   
}