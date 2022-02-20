
// 1 Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone




function  User(userId, userName, userSurname, userEmail,userPhone){
    this.id=userId
    this.name=userName;
    this.surname=userSurname;
    this.email=userEmail;
    this.phone=userEmail;

}
////--------------------------------------------------------------------------------------------------------------------
// створити пустий масив, наповнити його 10 об'єктами new User(....)
////---------------------------------------------------Варіант №1-------------------------------------------------------
let freeNewArray = [];

let user1 = new User(2574628,'Mariana','Dropa','dropa211992@gmail.com', 0931374904 );
freeNewArray.push(user1);
console.log(freeNewArray);

let user2 =  new User(252525, 'Marta', 'Velychko', 'velychko@gmail.com',0934545253);
freeNewArray.push(user2);
console.log(freeNewArray);

let user3 = new User(252526, 'Olga', 'Shtrih', 'shtrih@gmail.com',0933124532);
freeNewArray.push(user3);
console.log(freeNewArray);

let user4 = new User(252527, 'Petro', 'Pyps', 'pyps@gmail.com',0932170259);
freeNewArray.push(user4);
console.log(freeNewArray);

let user5 = new User(252528, 'Anna', 'Meow', 'meow@gmail.com',0936663444);
freeNewArray.push(user5);
console.log(freeNewArray);

let user6 = new User(252529, 'Ihor', 'Lic', 'lic.i@gmail.com',0935674387);
freeNewArray.push(user6);
console.log(freeNewArray);

let user7 = new User(252510, 'Ostap', 'Pyxh', 'pyxh@gmail.com',0932212680);
freeNewArray.push(user7);
console.log(freeNewArray);

let user8 = new User(252511, 'Ihor', 'Apple', 'apple@gmail.com',0935689012);
freeNewArray.push(user8);
console.log(freeNewArray);

let user9 = new User(252512, 'Nazar', 'Oreo', 'oreo@gmail.com',0939081717);
freeNewArray.push(user9);
console.log(freeNewArray);

let user10 = new User(252513, 'Topa', 'Kit', 'topa@gmail.com',0937684530);
freeNewArray.push(user10);
console.log(freeNewArray);


// 2- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let result2Task = freeNewArray.filter(function (arayyFiltred){ return arayyFiltred.id % 2 === 0 });
console.log(result2Task);

////--------------------------------------------------------------------------------------------------------------------
// 3- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let result3Task = freeNewArray.sort(function (a, b){return a.id-b.id})
console.log(result3Task)

////--------------------------------------------------------------------------------------------------------------------
// 4- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком
// товарів)

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let resultTask4 = new Client(254516,'Mariana','Dropa','dropa211992@gmail.com', 0931374904, ['fish','cake','umbrella','apple','soup']);
console.log(resultTask4);



// // 5 cтворити пустий масив, наповнити його 10 об'єктами Client

let emptyArray =[
    new Client (2574628,'Mariana','Dropa','dropa211992@gmail.com', 0931374904,['fish','cake','umbrella','apple','soup']),
    new Client (252525, 'Marta', 'Velychko', 'velychko@gmail.com',0934545253 ,['fish','cake','umbrella','apple','soup']),
    new Client (252526, 'Olga', 'Shtrih', 'shtrih@gmail.com',0933124532 ,['fish','cake','umbrella','apple','soup']),
    new Client (252527, 'Petro', 'Pyps', 'pyps@gmail.com',0932170259 ,['fish','cake','umbrella','apple','soup']),
new Client (252528, 'Anna', 'Meow', 'meow@gmail.com',0936663444 ,['fish','cake','umbrella','apple','soup']),
new Client (252529, 'Ihor', 'Lic', 'lic.i@gmail.com',0935674387 ,['fish','cake','umbrella','apple','soup']),
new Client (252510, 'Ostap', 'Pyxh', 'pyxh@gmail.com',0932212680 ,['fish','cake','umbrella','apple','soup']),
new Client (252511, 'Ihor', 'Apple', 'apple@gmail.com',0935689012 ,['fish','cake','umbrella','apple','soup']),
new Client (252512, 'Nazar', 'Oreo', 'oreo@gmail.com',0939081717 ,['fish','cake','umbrella','apple','soup']),
new Client (252513, 'Topa', 'Kit', 'topa@gmail.com',0937684530 ,['fish','cake','umbrella','apple','soup'])
];
console.log(emptyArray);

// 6 Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

 let resultTask6 = client.order.sort(function (a,b){return a.order-b.order});
 console.log(resultTask6);
