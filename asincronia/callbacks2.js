const employees = [
  {
    id: 1,
    name: "Álvaro"
  },
  {
    id: 2,
    name: "Alfonso"
  },
  {
    id: 3,
    name: "Ricardo"
  }
];

const salaries = [
  {
    id: 1,
    salary: 10000
  },
  {
    id: 2,
    salary: 300000
  }
];

const getemployee = (id, callback) => {
  const employee = employees.find(employee => {
    return employee.id === id;
  });

  if (!employee) callback(`No hay ningún empleado con la id ${id}`);
  else callback(null, employee);
};

const getSalary = (employee, callback) => {
  const salary = salaries.find(salary => employee.id === salary.id);

  if (!salary) callback(`El empleado ${employee.name} esta en paro`);
  else callback(null, salary);
};

getemployee(2, (error, data) => {
  if (error) return console.log(error);
  getSalary(data, (error, data) => {
    if (error) return console.log(error);
    return console.log(data);
  });
});
