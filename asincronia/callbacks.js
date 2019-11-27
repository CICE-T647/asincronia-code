const getUserById = (id, callback) => {
  const user = {
    id: 5,
    name: "Jorge"
  };

  if (id === user.id) callback(null, user);
  else callback("No se encontró ningún usuario");
};

getUserById(10, (error, data) => {
  if (error) {
    return console.log(error);
  }

  return console.log(data);
});
