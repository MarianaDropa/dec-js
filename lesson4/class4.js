// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

 function f1(a,b,c) {
 if (a < b && a < c) {
    console.log(a);
} else if (b < c && b < a) {
     console.log(b);
 } else if (c < b && c < a) {
     console.log(c);
 }
 }
 f1(38, 14, 8);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

 function f2(a,b,c) {

     if (a > b && a > c) {
         console.log(a);
     } else if (b > c && b > a) {
         console.log(b);
     } else if (c > b && c > a) {
         console.log(c);
     }
 }
 f2(29, 36, 28);


// - створити функцію яка повертає найбільше число з масиву

 function f12(massiv) {

        let result = Math.max.apply(null, massiv);
     console.log(result)
}
 f12([1, 33, 27, 47, 1137, 7777, 17, 70007, 777])



// - створити функцію яка повертає найменьше число з масиву

 let maxMassive = [1,33,27,47,1137,7777,17,7,777];
 function f5(a){
   let max = a[0];
   for (let newA of a) {
    if(newA<max){
      max=newA;
    }
   }
   return max;
 }
 let aa = f5(maxMassive);
 console.log(aa);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

 let massiveSum = [1,33,27,47,1137,7777,17,7,777];
 function f6 (a) {
  let sum = 0;
   for (let newA of a) {
     sum = newA +sum;
   }
   return sum;
 }
 console.log(f6(massiveSum))


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

 let massiveMidle = [1, 33, 27, 47, 1137, 7777, 17, 7, 777];

 function f7(array) {
    let sum = 0;
     for (let newArray of array) {
         sum = newArray + sum;

     }
     return sum / array.length;
 }

 let result = f7(massiveMidle);
 console.log(result);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);

 function f8(){
     let max = arguments[0];
   let min = arguments[0];
     for (const newArray of arguments) {
       if (newArray>max){
            max=newArray;
        }  if(newArray<min){

           min = newArray;
        }
     }
    console.log(max);
     return min;
 }
 let minResult = f8(17,13,29,33,77);
 console.log(minResult);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

 function f9(){
 return Math.floor(Math.random() * 100)+1;
 }
 let result = f9();
 console.log(result);


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
//     який характеризує кінцеве значення діапазону.


 function f10(limit){
     return Math.floor(Math.random() * limit);
 }
 let result = f10(17);
 console.log(result);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1]

 function  f11(array){
     let go = array;
     console.log(array);
    let goBack = array.reverse();
     console.log(goBack);
     return goBack;
 }
 let result = f11([17,13,29,33,77]);