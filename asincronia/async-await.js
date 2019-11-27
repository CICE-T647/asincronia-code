const getTime = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Primera promesa en getTime");
      if (5 === 5) {
        resolve(3000);
      }
      reject("Ha ocurrido un error");
    }, 3000);
  });
};

const getResult = async () => {
  const result = await getTime();

  console.log(result); //Promise...
};

const as = async () => {
  try {
    console.log("inicio del programa");

    console.log(await getResult());

    console.log("Fin del programa");
  } catch (error) {
    console.log(error);
  }
};
as();
