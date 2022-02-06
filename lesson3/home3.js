// --створити масив з:
// //  - з 5 числових значень
// // - з 5 стічкових значень
// // - з 5 значень стрічкового, числового та булевого типу
// // - та вивести його в консоль

let mass1 = [1, 2, 3, 4, 5];
console.log(mass1);

let mass2 = ['cat', 'dog', 'fish', 'raccoon', 'bird'];
console.log(mass2);

let mass3 = ['cat', 1, true, 'raccoon', 2];
 console.log(mass3);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись
// до конкретного індексу. Вивести в консоль

let empty = [];

empty [0] = 'cat';
empty [1] = 1992;
empty [2] = 'dog, friend';
empty [4] = 1997;
empty [5] = 'fish, animal';

console.log(empty);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині.

for (let i = 0; i <10; i++) {
  let i = 'Lorem ipsum dolor.'
document.write(`<div>${i}</div>`)
 }
// - За допомогою циклу for і document.write() вивести 10 блоків div
// c довільним текстом і індексом всередині

let blok = ['dT1', 'dT2', 'dT3', 'dT4', 'dT5', 'dT6', 'dT7', 'dT8', 'dT9', 'dT10'];

 for (let i = 0; i <blok.length; i++) {
    document.write(`<div>${i} Some text </div>`)
 }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

 let i = 0;
 while (i < 20) {
    document.write(`<h1>Some text </h1>`);
     i++;
 }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

 let i = 0;
 while (let i < 20) {
    document.write(`<h1> ${i} Some text </h1>`);
    i++;
 }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

 let massNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 let i = 0;
 while (let i < massNumber.length) {
    console.log(massNumber[i]);
    i++;
 }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let massString = ['september', 'october', 'november', 'december', 'january', 'february', 'march', 'april', 'may', 'june'];
let i = 0;
 while (let i<massString.length){
    console.log(massString[i]);
     i++;
 }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let massAll = ['september', 1, true, 'november', 36, 'january', false, 57, 'march', 'may'];
 for (let i=0; i<massAll.length; i++){
     console.log(massAll[i]);
 }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
//     вивести тільки булеві елементи

let massAll2 = ['september', 1, true, 'november', 36, 'january', false, 57, 'march', 'may'];
 for (let i=0; i < massAll2.length; i++) {
    if (typeof massAll2[i] === 'boolean') {
        console.log(massAll2[i]);
   }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести
// тільки числові елементи

 let massAll3 = ['sepember', 1, true, 'november', 36, 'january', false, 57, 'march', 'may'];
 for (let i=0; i < massAll2.length; i++) {
     if (typeof massAll3[i] === 'number') {
         console.log(massAll3[i]);
     }
 }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести
// тільки рядкові елементи

 let massAll4 = ['september', 1, true, 'november', 36, 'january', false, 57, 'march', 'may'];
 for (let i=0; i<massAll4.length; i++){
  if (typeof massAll4[i] === 'string'){
      console.log(massAll4[i]);
    }
 }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//     Вивести в консоль всі його елементи в циклі.

 let months = [];

months[0] = 'september';
months[1] = 'october';
months[2] = 'november';
months[3] = 'december';
months[4] = 'january';
months[5] = 'february';
months[6] = 'march';
months[7] = 'may';
months[8] = 'june';
months[9] = 'july';

 for (let i=0; i<months.length; i++){
    console.log(months[i])
 };

// Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

 for (let i=0; i<10; i++){
    console.log(i);
    document.write(` Крок № ${i} <br> <br>`);
 };

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

 for (let i=0; i<100; i++){
     console.log(i);
    document.write(` Крок № ${i} <br> <br>`);
 };

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

 for (let i=0; i<100; i=i+2){
    console.log(i);
   document.write(` Крок № ${i} <br> <br>`);
 };
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i=2; i<100; i++){
    console.log(i % 2 === 0);
    document.write(` Крок № ${i} <br> <br>`);
};

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

 for (let i=1; i<100; i=i+2){
    console.log(i/2);
   document.write(` Крок № ${i} <br> <br>`);
 };