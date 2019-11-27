console.log("Inicio del programa");

setTimeout(() => {
  console.log("Primer setTimeout");
}, 3000);

setTimeout(() => {
  console.log("Segundo timeout");
}, 0);

setTimeout(() => {
  console.log("tercer timeout");
}, 0);

console.log("Fin del programa");
