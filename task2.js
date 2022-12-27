// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет
// есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const obj = {
    age: 10,
    car: "none",
    name: "Oleg"
  }
  let func = (string, obj) => {
    console.log(string in obj)
  }
  
  func("age", obj)
  