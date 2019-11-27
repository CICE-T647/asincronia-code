const getTime = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Primera promesa en getTime");
      if (5 === 10) {
        resolve(3000);
      }
      reject("Ha ocurrido un error");
    }, 3000);
  });
};

getTime()
  .then(
    time =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("Segunda promesa en primer then");
          resolve("Fin de la cadena de promesas");
        }, time);
      })
  )
  .then(message => console.log(message))
  .catch(error => console.log(error));

console.log("Inicio del programa");

console.log(getTime());

console.log("Fin del programa");
