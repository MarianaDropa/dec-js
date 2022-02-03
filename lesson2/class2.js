// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
 let containerA = +prompt('Enter a random number');
let containerB = +prompt('Enter your lucky number');

 if(containerA < containerB){
    console.log(containerB)
 }
 if(containerA > containerB){
     console.log(containerA)
 }
 if(containerA == containerB){
     console.log(containerA + "=" + containerB);
     console.log('Congratulation, You WON!!! )');
 }

// 2 У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

 let korystuvach = +prompt('Enter your apartment number', 'Number 1 to 90');


 if ( korystuvach  >= 1 && korystuvach <=20){
     console.log('You live in block no. 1')
 }
 if ( korystuvach  >= 21 && korystuvach <=48){
     console.log('You live in block no. 2')
 }
 if ( korystuvach  >= 49 && korystuvach <=90){
     console.log('You live in block no. 3')
}

// 3 Ми маємо змінну number в яку користувач задає числове значення,
// якщо змінна рівна 10 вивести повідомлення ВІРНО,
// якщо змінна не рівна 10 - тоді НЕВІРНО

let number = prompt('Enter your lucky Number');

if(number == 10){
    console.log('TRUE')
 }
else {
    console.log('WRONG')
 }

// 4 Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

 let x = prompt('');
 if(typeof x === 'number'){
    console.log('#1');
 }
 else if (typeof x === "string"){
     console.log('#2');
 }
 else if(typeof x === "boolean"){
     console.log('#3');
 }
 else if(typeof x === "object"){
     console.log('#3');
 }
 else {
     console.log("WRONG FORMAT");
 }

// 5 Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення
// що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

 let temp = +prompt('чи ми йдемо сьогодні в OKTEN на навчання?')
 if(temp > 10 && temp < 22){
    console.log(' Ми идем вчитись в  OKTEN WEB')
     }
 else {
     console.log('Ми сидимо вдома і вчимося ОНЛАЙН!!!')
 }

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення
//     - що число не вірне ... .

 let yakubovich = prompt('Стирай цифру на квитку', 'Вибирай шарік з однаковою цифрою та виграй ПРИЗ');
 switch (htosj){
   case '1':
       console.log('AudiQ8');
      break;
    case '2':
         console.log('WolksvagenTiguan');
         break;
     case '3':
         console.log('Iphone13');
         break;
     case '4':
         console.log('Cat');
         break;
    case '5':
         console.log('Maldives');
         break;
    default:
         console.log('The number is wrong - You lost');
 }