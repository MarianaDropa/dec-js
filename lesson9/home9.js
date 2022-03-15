// Все робити за допомоги js.
// // - створити блок,
// let divC = document.createElement('div')
// //     - додати йому класи wrap, collapse, alpha, beta
// divC.classList.add('wrap')
// divC.classList.add('collapse', 'alpha', 'beta')
// console.log(divC)
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// divC.style.background = 'red';
// divC.style.color = 'black';
// divC.style.fontSize = '20px'
// divC.innerText = 'test'
// // - додати цей блок в body.
// document.body.appendChild(divC)
// // - клонувати його повністю, та додати клон в body.
//
// let clon = divC.cloneNode(true);
// document.body.appendChild(clon)

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку
//  .menu
// Завдання робити через цикли.
// let array = ['Main', 'Products', 'About us', 'Contacts']
// let menu = document.getElementsByClassName('menu')[0];
// for (const string of array) {
//     let li = document.createElement('li');
//     li = `${string}`
//
//     menu.appendChild(li)
//
// }
// console.log(li)
// //


// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const coursesElement of coursesAndDurationArray) {
//     let divE = document.createElement('div')
//     divE.innerText = `${coursesElement.title} ${coursesElement.monthDuration}`
//     document.body.append(divE)
//     console.log(divE)
// }

//
// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// // з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const coursesElement of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.classList.add('item')
//     let h1 = document.createElement('h1');
//     h1.innerText = coursesElement.title
//     h1.classList.add('heading')
//     let p = document.createElement('p');
//     p.innerText = coursesElement.monthDuration
//     p.classList.add('description')
//     document.body.append(div)
//     div.appendChild(h1)
//     div.appendChild(p)
//     console.log(coursesElement)
// }