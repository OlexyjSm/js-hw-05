
// # Завдання 1

// Напиши функцію `countProps(obj)`, яка рахує кількість властивостей в об'єкті.
// Функція повертає число - кількість властивостей.


const countProps = function (obj) {
    // Отримати масив ключів та повернути їхню кількість
    return Object.keys(obj).length;
  };
  
  /*
   * Виклики функції для перевірки працездатності
   */
  console.log(countProps({})); // 0
  
  console.log(countProps({ name: 'Mango', age: 2 })); // 2
  
  console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
  