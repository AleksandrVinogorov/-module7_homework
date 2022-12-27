/* Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на 
прототипах.

Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность
всех включенных приборов (передайте аргумент). 

Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, 
какими свойствами он обладает.
*/
function Device(name,isPlugged, voltage, power, timeUsed) {
  this.name = name; // имя прибора
  this.isPlugged = isPlugged; // статус подключения в розетку
  this.voltage = voltage; // вольтаж прибора
  this.power = power; // потребляемая мощность прибора
  this.timeUsed = timeUsed; //время использования прибора (в часах)
  this.result = 0;
}

// Функция, включающая прибор в розетку.
Device.prototype.letPlug = function (){
  if (this.isPlugged === true) {
    console.log("Прибор уже был включен в розетку")
  } else if (this.isPlugged === false) {
    console.log("Прибор " + this.name + " был выключен, подключаем в розетку");
    return this.isPlugged = true;}
}

// Функция powerUsed, вычисляющая количество потребляемой мощности.
Device.prototype.powerUsed = function () {
  let power = this.power;
  let time = this.timeUsed;
  let plugIn = this.isPlugged;
  let result = power * time;
  this.result = result;
 if (plugIn === true) {
   console.log(this.name + " включен в розетку", `Расход эл. энергии прибора ${this.name} за ${time} час = ${result}Вт.`)
 } else {
   console.log("Прибор " + this.name + " выключен");
  }
}


// Создаем уникальные экземпляры приборов
const laptop = new Device ("Ноутбук", false, 240, 28, 1);
const tv = new Device ("Телевизор", false, 220, 60, 2);


// Создаем уникальные свойства и методы приборов
laptop.voltage = "240v";
laptop.isCharging = true;
laptop.displayInch = 15.6;

tv.voltage = "230v";
tv.displayInch = "42"
tv.function = () => {
  console.log("showing television programs")
};

// вызываем функцию, подключающую наши приборы в розетку.

tv.letPlug()
laptop.letPlug()

// Вызываем функцию, подсчитывающую количество потребленной энергии для каждого прибора.

tv.powerUsed(tv)
laptop.powerUsed(laptop)

// Считаем общее потребление энергии приборами;
console.log("Общий расход электроэнергии равен " + (tv.result + laptop.result) + " Вт")