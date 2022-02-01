// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// - Переприсвоїти кожній змінній з завдання значення на довільне.
// Вивести кожну змінну за допомогою: console.log , alert, document.write

let a = 'hello';
console.log(a);
alert(a);
document.write(a);
a = 'hi';
console.log(a);
alert(a);
document.write(a);

let b = 'owu';
console.log(b);
alert(b);
document.write(b);
b = 'courses'
console.log(b);
alert(b);
document.write(b);

let c = 'com';
console.log(c);
alert(c);
document.write(c);
c='mail';
console.log(c);
alert(c);
document.write(c);

let d = 'ua';
console.log(d);
alert(d);
document.write(d);
d='lang';
console.log(d);
alert(d);
document.write(d);


let e = 1;
console.log(e);
alert(e);
document.write(e);
e='first';
console.log(e);
alert(e);
document.write(e);


let f = 10;
console.log(f);
alert(f);
document.write(f);
f='tenth';
console.log(f);
alert(f);
document.write(f);


let g = -999;
console.log(g);
alert(g);
document.write(g);
g = -1000;
console.log(g);
alert(g);
document.write(g);


let h = 123;
console.log(h);
alert(h);
document.write(h);
h = 115;
console.log(h);
alert(h);
document.write(h);


let i = 3.14;
console.log(i);
alert(i);
document.write(i);
i = 'pi';
console.log(i);
alert(i);
document.write(i);


let j = 2.7;
console.log(j);
alert(j);
document.write(j);
j = 'number';
console.log(j);
alert(j);
document.write(j);


let k = 16;
console.log(k);
alert(k);
document.write(k);
k = 'days';
console.log(k);
alert(k);
document.write(k);


let l = true;
console.log(l);
alert(l);
document.write(l);
l = 'false';
console.log(l);
alert(l);
document.write(l);


let m = false;
console.log(m);
alert(m);
document.write(m);
m = true;
console.log(m);
alert(m);
document.write(m);

// Створити 3 змінних firstName, middleName, lastName,
// наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

let firstName = 'Mariana';
let middleName = 'Pavlivna';
let lastName = 'Dropa';
let person = (`${firstName} ${middleName} ${lastName}`);
console.log(person);
document.write(person);

// За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let firstName = prompt ('What is your Name?' , 'example - Mariana' )
let middleName = prompt('What is your Middle Name?', 'example - Pavlivna' );
let age =prompt('What is your Age?', 'example 25-35' ) ;
console.log(` Hi ${firstName} ${middleName} You are ${age} years old`)

// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

let a = 100;
console.log(typeof a);

let b = '100';
console.log(typeof b);

let c = true;
console.log(typeof c);

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
    // В однакових виразах не використовувати однакові оператори!!!
console.log(5<6)
console.log(5>6)
console.log(5==6)
console.log(5===6)
console.log(10==10)
console.log(10===10)
console.log(10>10)
console.log(10<10)
console.log(10!==10)
console.log(123!==123)
console.log(123===123)

// Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str = "20";
let a = 5;
document.write(str + a + "<br/>");
// 205 бо js добавить їх, буде стрінга,що складається зі стрінги 20 і 5;
document.write(str - a + "<br/>");
// якщо йде вирах, то js зробить мат дії і відніме від 20 - 5, получиться стрінга 15;
//
document.write(str * "2" + "<br/>");
// спочатку буде множення, а потім вивед стрінга 40;
//
document.write(str / 2 + "<br/>");
// спочатку буде ділення, а потім вивед стрінга 10;