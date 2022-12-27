// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения 
// только собственных свойств. Данная функция не должна возвращать значение.


const obj = {
    a: 0,
    b: 10,
    c: "string",
  };
  
  const copyOfObj = Object.create(obj)
  
  copyOfObj.new = "true"
  
  let func = (Object) => {
    for (let key in Object) {
      if (Object.hasOwnProperty(key)) {
        console.log(key);}
    }
  }
  
  func(copyOfObj)
  