let vuelta1: number = Number(
  prompt("Ingrese el tiempo de la 1ra vuelta en segundos")
);
let vuelta2: number = Number(
  prompt("Ingrese el tiempo de la 2da vuelta en segundos")
);
let vuelta3: number = Number(
  prompt("Ingrese el tiempo de la 3ra vuelta en segundos")
);
let vuelta4: number = Number(
  prompt("Ingrese el tiempo de la 4ta vuelta en segundos")
);

console.log(
  "El tiempo total es de",
  vuelta1 + vuelta2 + vuelta3 + vuelta4,
  "segundos"
);
console.log(
  "El tiempo promedio de las vueltas es de",
  (vuelta1 + vuelta2 + vuelta3 + vuelta4) / 4,
  "segundos"
);
