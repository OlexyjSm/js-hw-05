
// # Завдання 2

// Напиши функцію `findBestEmployee(employees)`, яка приймає об'єкт співробітників
// і повертає ім'я найпродуктивнішого (який виконав більше всіх задач).
// Співробітники і кількість виконаних завдань містяться як властивості об'єкта в
// форматі `"ім'я":"кількість задач"`.





const findBestEmployee = function (employees) {
    let bestEmployee = '';
    let maxTasks = 0;
  
    for (const employee in employees) {
      if (employees.hasOwnProperty(employee)) {
        if (employees[employee] > maxTasks) {
          maxTasks = employees[employee];
          bestEmployee = employee;
        }
      }
    }
  
    return bestEmployee;
  };
  
  /*
   * Виклики функції для перевірки працездатності
   */
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux
  