 "use strict";

// const { json } = require("stream/consumers");

// const { scrypt } = require("crypto");

// const { over } = require("lodash");

//функции////////////////////////////////////////////////////////////////////

// function showFitstMessage(text) {
//     console.log(text);
// }
// showFitstMessage(Hello World);

//  function calc(a, b) {
//      return (a + b);
//  }

//  console.log(calc(4, 3));
//  console.log(calc(5, 6));
//  console.log(calc(6, 10));

//  function ret()           {
//      let num =50;

// //      //

//      return num;
//  }

//  const anotherNum = ret();
//  console.log(anotherNum);


//  const calc = ( a, b) => {
//      console.log();
//      return a + b;

//  };


// ЦИКЛЫ//////////////////////////////////////////////////////////////////////

// let num = 50;

// while(num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while(num <= 55);

// for(let i = 1; i < 8; i++) {
//     // console.log(num);
//     // num++;
//     if (i ===6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }


// МЕТОДЫ/////////////////////////////////////////////////////////////////////

// const str ='test';
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.length);
// console.log(str[2]);

// const fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit'));
// console.log(fruit.slice(-5, -2));
// console.log(fruit.slice(5, 3));
// console.log(fruit.slice('', 4));
// console.log(fruit.substring(5, 3));
// console.log(fruit.substr(5, 2));

// const num =12.49;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));


// CALLBACK

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок!');
// }

// learnJS('JavaScript', done);
 
//OBJECT////////////////////////////////////////////////////////

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red',
//     },
//     makeTest: function() {
//         console.log('test');
//     }
// };

// options.makeTest();
// const {border, bg} = options.colors;
// console.log(bg);
// console.log(options.colors.border);
// delete options.name;
// console.log(options);
//  let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options [key] [i]}`); 
//             counter ++;
//         }
//     } else {
//     console.log(`Свойство ${key} имеет значение ${options [key]}`);
//     counter ++;
//     }
// }
// console.log(counter);

// object keys

// console.log(Object.keys(options).length);


// МАСИВЫ////////////////////////////////////////////////////////////////////////

// const arr = [2, 31, 16, 48, 310];
// удвляет последние элементы массива
// arr.pop();
// добавляет елемент в масив
// arr.push(10);
//сортировка, compareNum - сортировка по порядку чисел
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

// перебор
// for (let i = 0; i < arr.length; i++ ) {
//     console.log(arr[i]);
// }
// перебор 2 способ, работает с масивоподобными функциями. можно использовать брейк и континуем
// for (let value of arr) {
//     console.log(value);
// }
// гибко перебрать елементы в нутри масива
// arr.forEach(function(elimentVnuyriMasiva, nomerPoPoryadku, arr){
//     console.log(`${nomerPoPoryadku}: ${elimentVnuyriMasiva} внутри массива ${arr}`);
// });

// const str = prompt("", "");
// const products = str.split(", ");
// // console.log(products);
// console.log(products.join(';'));


//КОПИИ///////////////////////////////////////////////////////////////////////

				   //поверностная копия с помощью циклов
// function copy(mainObj) {                
//     let objCopy ={};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];       
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);     

				      //метод соеденение нескольких обьектов
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };     

// const add ={
//     d: 17,
//     e: 20
// };                              

// console.log(Object.assign(numbers, add));

					     //клонирование пустого обьекта
// const add ={
//     d: 17,
//     e: 20
// };         

// const clone = Object.assign({}, add);
// clone.d = 20; 

						   //копия массива
// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'zamenil';

//копия с помощью оператора разворота(sprat)
// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs =['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// ///////////////////////////////////////////      
// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }      

// const num = [1, 2, 3];

// log(...num);

/////////////////////
// const array = ["a", "b"];
// const newArray = [...array];

// const obj = {
//     one: 1,
//     two: 2
// };

// const newObjc = {...obj};


// //

// function hello() {
//     console.log('Hello World');
// }

// hello();

// function hi() {
//     console.log('Say hi');
// }

// hi();

// const arr = [1, 14, 4, 30,54],
// sorted = arr.sort(compareNum);

// function compareNum(a, b) {
//     return a - b;
// }

// console.log(sorted);


// ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ................................................................

// 1)string -строка
// console.log(typeof(String(null)));

//2) превращаем в строку //при сложении со строкой получаеться строка
// console.log(typeof(String(null +'')); 

// const num = '5';
// console.log('https://vk.com/catalog/' + num);

// const fontSize = 26 + 'px';

//превращаем в число
// //1)
// console.log(typeof(number('5')));
// //2)  
// console.log(typeof(+'4'));
// //3)
// console.log(typeof(parseInt('15px', 10 )));
// let answ = +prompt("hello", "");

//to boolin
//0, '', null, undefinder, NaN - false
 //1)
// let switcher = null;
// if (switcher) {
//     console.log('Working...');          
// }

// switcher = 1;
// if (switcher) {
//     console.log('Working...');
// }

//2)
// console.log(typeof(Boolean('5')));
// console.log(typeof(!!'5'));



/////////////////////////////////////////////////////////////////////////////////////////СОБЫТИЯ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const btn = document.querySelector('button'),
//       overlay = document.querySelector('.overlay');

// btn.addEventListener('click', (e) => {  //1)событие, 2)колл бек функция, первый аргумент в коллБек функц -название произвольное(event/e) - обьект событий
//     console.log(e.target);
//     e.target.remove();  //удалил кнопку
//     // alert('click');
// });
//mouseenter - срабатывает когда мышка наводиться на элемент
// const deleteElement = (e) => {
//     console.log(e.target);
// };
// btn.addEventListener('click', deleteElement);  //назначаем обработчикё
// btn.removeEventListener('click', deleteElement);  //удаляем обработчик

// let i = 0;
// const addElement = (e) => {      //пример удаления обработчика
//     console.log(e.target);
//     i++;
//     if(i == 1) {
//         btn.removeEventListener('click', deleteElement); 
//     }
// };

// const addElement = (e) => {      //пример удаления обработчика
//     console.log(e.currentTarget);   //изначально событие происходит на вложенной кнопке(btn), потом на overlay  
//     console.log(e.type);
//     };

// overlay.addEventListener('click', addElement);
// btn.addEventListener('click', addElement);

//удаляем стандартное поведение браузера..................
// const link = document.querySelector('a');
      
// link.addEventListener('click', (e) => {
//     e.preventDefault();  //ставиться в начало функции 
// } );

//назначаем обработчик на несколько
// const btns = document.querySelectorAll('button');

// const addElement = (e) => {      
//     console.log(e.target);   
//    };

// btns.forEach(btn => {  //forEach -перебираем элементы внутри масива, btn -каждая отдельная кнопка которая находиться внутри
//     btn.addEventListener('click', addElement);
// });

//опции событий, ставить 3 аргумент в addEventListener
// const btn.addEventListener('click', addElement, {once: true}); //once - не повторять после выполнения функцию, аналог ретурн



///////////////////////////////УСЛОВИЯ///////////////////////////////////////////////////////////////////////////////////////////////

// const i = 50;
// if(i) {
//     //значение true выполняет условия 
// } else {
//     //если не выполнено условие
// }

// const a = 10;
// if(a < 9) {
//     console.log('false');
// } else if(a>11) {
//     console.log('falseToo');
// } else {
//     console.log('true');
// }                                  //log=true

//тернарный оператор......................................
// const a =10;
// (a === 10) ? console.log('yes') : console.log('no');  // ? тернарный оператор, если условие правдивое выполняеться первое действие, если нет - второе

//switch - работает на строгое сравнение...................
// const a =10;
// switch(a) {
//     case 9:
//         console.log('yes');      //break - останавливает условие если сработала правда
//         break;             
//     case 11:
//         console.log('no');
//         break;
//     default:                      //default в случаи если нет истины
//         console.log('sorry');
//         break;
// }



///////////////////////////ЦИКЛЫ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  let num = 50;          
//  while(num <= 55) {      //пока условие не выполнено цикл будет продолжать действие.
//      console.log(num);  //50, 51, 52, 53, 54, 55
//      num++;
//  }

//цикл может состоять из 3 аргументов, но нони не обязательны
// let num = 50;
// for(let i = 1; i < 8; i++) {              //1)создаем переменную i и даем значение, 2)условие при котором цикл остановит свою работу, 3)шаг цикла            
//     console.log(num);                    ////50, 51, 52, 53, 54, 55, 56
//     num++;
// }

// for(let i = 1; i < 8; i++) {            //прерываем цикл с помощью условий        
//     if(i === 6){
//         break;
//     }
//     console.log(i);         //1, 2, 3, 4, 5 
// }

// for(let i = 1; i < 8; i++) {            //оператор continue позволяет пропустить значение не прирывая цикл       
//         if(i === 6){
//             continue;
//         }
//         console.log(i);         //1, 2, 3, 4, 5, 7
//     }


///////////////методы и свойства////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//свойства дают новые значения не меняя исходник.....................
// const str = 'text';
// const arr = [1, 2, 3];

// // console.log(str.length);    //4  получаем количуство элементов
// // console.log(arr.length);    //3  получаем количество элементов
// // console.log(str[2]);    //x
// console.log(str.toUpperCase()); //TEXT большой регистр
// console.log(str.toLocaleLowerCase());   //text нижний регистр

// const fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit'));    //5 ищем с какого индекса начинаеться заданое значение/слово
// console.log(fruit.slice(5, 10));    //fruit принимает 2 значения 1)с какой строки начать обрезание(включая строку), 2) на которой закончить(не включая ее)
// console.log(fruit.slice(2));    //me fruit если указываем 1 значение + с какой строки обрезать текст(включая строку)
// console.log(fruit.slice(-8, -2));   //me fru  1)с какой строки с конца начать обрезание(не включая строку), 2)с какой сроки с конца закончить обрезание(включая строку)
// console.log(fruit.slice(-8));   //me fruit
// console.log(fruit.substring(5, 10));    //fruit аналог slice, не поддерживает отрицательные значения
// console.log(fruit.substr(2, 6));    //me fru 1)с какого значения начать(включительно), 2)сколько символов вырезать(включительно)

// //для работы с числами в консоле браузера = Math.
// const num =12.2;
// console.log(Math.round(num));   //12  округление

// const test = '16.6px';
// console.log(parseInt(test));    //16  превращаем строки в числа(уберая дробь - не округляя число) (используем не по назначению, назначение - превращает число в другую систему исчесления)
// console.log(parseFloat(test));  //16.6 -исполбзуем не по назначению, метод предназначен для превращение числа в десетичную систему измерения

//callback///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//это функция которая должна выполниться после окончания выполнения другой функции
// function fn(){
//     //do something
//     setTimeout(function() {     //setTimeout задержка - указываеться в доли-секундах
//         console.log();
//     }, 500);
// }

// function learnJs(lang, callback) {      
//     console.log(`Я учу ${lang}`);
//     callback();     //передаеться значение функции, чтобы в дальнейшем вывести после определенной функции
// }
// function done() {
//     console.log('Я прошел этот урок');
// }

// learnJs('javaScript', done);


//диструктуризация обьектов//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const options = {
//     name: 'teset',
//     width: 1024,
//     height: 1024,
//     color: {
//         border: 'black',
//         bg: 'red'
//     }
// };
// let counter = 0; //перенменная для подсчета количества значений в обьекте
// for(let key in options) {       //создаем переменную и указываем в каком оьекте перебирать
//     if(typeof(options[key]) == 'object') {      //перебираем обьекты внутри обьекта
//         for(let i in options[key]) {        
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;      //перебираем сколько по счету свойств вобьекте
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение${options[key]}`);
//         counter++;      //перебираем сколько по счету свойств вобьекте
//     }
// }


// for(let key in options) {       //перебираем сколько по счету свойств в верхнем обьекте(не включая вложенных свойств)
//         counter++;    
// }

// const test = {
//     name: 'Oleh',
//     age: 31,
//     skills: {
//         developer: 'js',
//         couching: 'react',
//     },
//     colorEyes: 'green',
// };

// console.log(Object.keys(test));     //[ 'name', 'age', 'skills', 'colorEyes' ]  узнаем название ключей в обьекте не включая вложенных обьектов
// console.log(Object.keys(test).length);      //4   узнаем число ключей не включая вложенных

// const test = {
//     name: 'Oleh',
//     age: 31,
//     skills: {
//         developer: 'js',
//         couching: 'react',
//     },
//     colorEyes: 'green',
    
//     makeTest: function() {
//         console.log('созданый метод в обьекте');
//     }
// };

// test.makeTest();

// const{developer, couching} = test.skills;      //ДИСТРУКТУРИЗАЦИЯ вытянули переменные в глобальную память
// console.log(developer);     //js


//МАСИВЫ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const arr = [1, 2, 3, 4, 6, 8];
// arr.pop();      //удаляет последний элемент масива
// arr.push(10);       //добавляет элемент в конец масива
// arr.shift();        //добавляет в начале масива элемент - ТАКОЙ МЕТОД ИСПОЛЬЗУЕТЬСЯ КРАЙНЕ РЕДКО, ПОТОМУ ЧТО НЕОБХОДИМО МЕНЯТЬ ИНДЕКС КАЖДОМУ ЭЛЕМЕНТУ МАСИВА
// arr.unshift();      //удаляет в начале масива элемент - ТАКОЙ МЕТОД ИСПОЛЬЗУЕТЬСЯ КРАЙНЕ РЕДКО, ПОТОМУ ЧТО НЕОБХОДИМО МЕНЯТЬ ИНДЕКС КАЖДОМУ ЭЛЕМЕНТУ МАСИВА

// const arr = [1, 2, 4, 6, 8];
// for (let i = 0; i < arr.length; i++) {      //перебераем элементы внутри масива с помошью цикла(length -количество элементов в масиве)
//     console.log(arr[i]);     //1 2 4 6 8
// }

// console.log(arr.length);        //выводит последний индекс масива + 1

// for(let value of arr) {     //Перебор с помошью метода For Of
//     console.log(value);     //1 2 4 6 8
// }

// const arr = [1, 2, 3, 4];
// arr.forEach(function(item, i, arr) {        //1)элементы масива(1,2,3,4), 2)индекс(номер по порядку) 3)масив который перебираем
//     console.log(`${item} : ${i} внутри мвсива${arr}`);      //1 : 0 внутри мвсива1,2,3,4; 2 : 1 внутри мвсива1,2,3,4; 3 : 2 внутри мвсива1,2,3,4; 4 : 3 внутри мвсива1,2,3,4
// });

// const str = prompt('', '');
// const product = str.split(', ');    //метод split позволяет создать масив,(пользователь вводит значение разделяя , и значения попадают в масив, но необходимо точно знать и указать разделитель)
// product.join('; ');     //выводит с масива в строку(указываем разделитель элементов массива)

// const str = ['q', 'c', 'a', 'b'];
// const num = [12, 6, 26];

// str.sort();     //сортировка строк
// num.sort(compareNum);

// function compareNum(a, b) {     //функция сортировки чисел
//     return a - b;
// }
// console.log(num);       //[ 6, 12, 26 ]
// console.log(str);       //[ 'a', 'b', 'c', 'q' ] сортирует массив со строками, с числамт сортирует по первым значением числа а не цифры


//ПЕРЕДАЧА ПО ССЫЛКЕ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\\
// const obj = {       
//     a: 5,
//     b: 1,
// };

// const copy = obj;       //передача по ссылке, модифицируем и переменную и обьект
// copy.a = 10;

// console.log(obj);       //{ a: 10, b: 1 }
// console.log(copy);      //{ a: 10, b: 1 }

//ПОВЕРХНОСТНАЯ КОПИЯ ОБЬЕКТА, она мутирует вложеные обьекты в исходной обьект.
// function copy(mainObject) {     //создаем функцию копирование обьекта церез цикл
//     let objCopy = {};

//     let key;
//     for(key in mainObject) {
//         objCopy[key] = mainObject[key];
//     }
//     return objCopy;
// }

// const numb = {      //обьект
//     a: 10,
//     b: 5,
//     c: {
//         x: 1,
//         y: 2,
//     }
// };

// const newNumb = copy(numb);     //копируем обьект в переменную
// newNumb.a = 5;      //изменяем копию не мутируя/меняя исходной обьект

// console.log(newNumb);       //{ a: 5, b: 5, c: { x: 1, y: 2 } }
// console.log(numb);      //{ a: 10, b: 5, c: { x: 1, y: 2 } }

//Object.assign////слитие обьектов,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// const numb = {      
//     b: 5,
//     c: {
//         x: 1,
//         y: 2,
//     }
// };

// const add = {
//     d: 7,
//     e: 8
// };

// // const test = Object.assign(numb, add);      //вставляем обьекты и создаем поверхносные копии
// // console.log(test);      //{ b: 5, c: { x: 1, y: 2 }, d: 7, e: 8 }

// const test2 = Object.assign({}, add);       //простой способ поверхносного копирования обьекта
// console.log(test2);     //{ d: 7, e: 8 }

// const num = {
//     a: 1,
//     b: 2,
// };

// const numbers = {...num};
// console.log(numbers);       //{ a: 1, b: 2 }

//копирование массивов,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// const array = ['a', 'b', 'c'];
// const newArray = array.slice();     //копируем массив(можно передать аргументы по количеству)
// const newArray = [...array]     //копируем массив с помошью спрет оперратора

// // newArray[2] = 'qqqqq';      //изменяем копированный масив не мутируя исходной массив

// console.log(array);     //[ 'a', 'b', 'c' ]
// console.log(newArray);      //[ 'a', 'b', 'qqqqq' ]

//спрет оператор или оператор разворота,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, 
// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'facebook', 'instagram'];     //сливаем массивы + добавляем в новый массив новые значения

// console.log(internet);      //['youtube', 'vimeo', 'rutube', 'wordpress', 'livejournal', 'blogger', 'facebook', 'instagram']

// function log (a, b, c) {
//     console.log(a);     //1
//     console.log(b);     //2
//     console.log(c);     //3
// }

// const num = [1, 2, 3];

// log(...num);


//ООП///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// const john = Object.create(soldier);        //создаем прототип john который будет прототипно наследоваться от soldier

// const john = {
//     health: 100,
// };

// Object.setPrototypeOf(john, soldier);       //1й аргумент - обьект которому необходимо назначить прототип, 2й с которого назначить


//ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//конкратенация - сложение строки с любым обьектом
//При сложинии со строкой = тип данных строка
//превращение в числовые данные с помошбю унарного плюса, +передзначением

// console.log(typeof(null + ''));     //string
// console.log(typeof(+'5'));      //number
// console.log(typeof(parseInt('15px', 10)));      //number -превращаем строку в число(убирая дробь, не округляя число)
// const answ = +prompt('How mfny', '');       //преобразование ответ от пользователя в числовой тип данных  

//to boolean
// 0, '', null, undefine, NaN - FALSE не правдивые значение в булиновых выражениях

// const switcher = null;
// if (switcher) {
//     console.log('working...');      //ничего не произойдет, так как значение = false
// }

// const switcher = 1;
// if (switcher) {
//     console.log('working...');      //working...
// }

// console.log(typeof(Boolean( '5')));     //boolean
// console.log(typeof(!!'5'));     //boolean

//задачки//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Какое будет выведено значение: let x = 5; alert( x++ );      5
// Чему равно такое выражение: [ ] + false - null + true ?      NaN
// Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?      2
// Чему равна сумма [ ] + 1 + 2?        '12'
// Что выведет этот код: alert( "1"[0] )?       1
// Чему равно 2 && 1 && null && 0 && undefined ?        null - запинаеться на лжи
// Есть ли разница между выражениями? !!( a && b ) и (a && b)?      false
// Что выведет этот код: alert( null || 2 && 3 || 4 ); ?        3 - pfgbyftnmcz yf ghfdlt
// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?     false
// Что выведет этот код: alert( +"Infinity" ); ?    Infinity     
// Верно ли сравнение: "Ёжик" > "яблоко"?
// Чему равно 0 || "" || 2 || undefined || true || falsе ?      2

// 5
// nan..
//'12'
//3..
//1
//1..
//boolean a&b..
//3||4
//Нет
//NaN, Unduf
//True
//2 

//DOM/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const box = document.getElementById('box');        //получаем документ по ид

// const btns = document.getElementsByTagName('button');       //получаем все элементы по тегу(создаеться псевдомасив с индексами элементов, даже если один элемент)
// console.log(btns[1]);       //обращаемся по индексу к необходимому тегу
// const btns = document.getElementsByTagName('button')[1];       //выводим по индексу необходимый тег, обращаться необходимо ОБЯЗАТЕЛЬНО к индексу, в противном случаи обращение будет к псевдомасиву и к нему не доступны методы

// const circles = document.getElementsByClassName('circle');      //получаем все элементы по класу(не ставим точку перед названием), - выводиться в псевдомасив

// const hearts = document.querySelectorAll('.heart');     //обращение к селектору(необходимо указывать. или #) - выводит псевдомасив и у него есть функция forEach
// hearts.forEach(item =>{     //item - каждый элемент масива
//     console.log(item);      //выводим все элементы масива 
// });

// const oneHearth = document.querySelector('.hearth');        //выводим первый элемент


//ДЕЙСТВИЯ С ЭЛЕМЕНТАМИ НА СТРАНИЦЕ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// const box = document.getElementById("box"),
//       btns = document.getElementsByTagName('button'),
//       circles = document.getElementsByClassName('circle'),
//       hearts = document.querySelectorAll('.heart'),
//       oneHearth = document.querySelector('.hearth'),
//       wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
// const wdt = 500;
// box.style.cssText = `background-color: blue; width:${wdt}px`;        //записываем стили,(${}можно вставить переменную)

// btns[1].style.borderRadius = '100%';        //обращение к элементу масива

// for(let i = 0; i < hearts.length; i++) {        //перебераем с помошью цикла. 
//     hearts[i].style.backgroundColor = 'blue';
// }

// hearts.forEach(item => {        //перебор с помошью forEach
//     item.style.backgroundColor = 'blue';
// });

// создание элементов через метод .createElement(); 
// во внутрь метода надо вписать то, что мы сейчас создаем, например div.
// const div = document.createElement('div');
// элемент создан, НО он пока что существует только внутри джаваскрипта.

//.createTextNode(); - *используется редко
// создает текст, который не помещен ни в какой тэг. то есть, просто текстовую ноду(узел), который существует только в джаваскрипте. в верстке он не появится.
//принимает в себя просто текст.
// const text = document.createTextNode('Тут был я');

// div.classList.add('black');     //добавляем класс(уже создан в цсс)

// document.body.append('div');        //добавляем елемент див в конец тега див

//если переменная используеться один раз ее не обязательно создавать, а можно вызвать напрямую
// document.querySelector('.wrapper').prepend(div);        //поместили елемент див в начало тега враппер

// hearts[0].before(div);      //вставляем елемент перед каким то тегом(в даном случаи див)
//after - аналогично before? только вставляет после заданого элемента
// circles[0].remove();        //удаляем элемент

// hearts[0].replaceWith(circles[0]);      //заменяем элемент на странице

// div.innerHTML = '<h1>Hello world</h1>';     //вставляем текст со структурой штмл
// div.textContent = 'Hello world';        //вставляем текст
// div.incertAdjacentHTML('', '<h2>Hello</h2>');   //вставить текст в определенную область(значение - beforebegin, afterbegin, beforeend, afterend)

//устаревшие методы,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// wrapper.appendChild();     //добавляем елемент див в конец тега див
// wrapper.insertBefore(div, hearts[0]);      //вставляем элемент 1) елемент который вставляем, 2)перед каким элементом вставляем
// wrapper.removeChild(hearts[1]);     //удаляем элемент
// wrapper.replaceChild(circles[0], hearts[0]);


					//СОБЫТИЯ И ИХ ОБРАБОТЧИКИ///////////////////////////////////////////////////////////////////////////

// const btn = document.querySelector('button');

// btn.addEventListener('click', () => {       //обработчик событий 1)действие 2)коллбек функция
//     alert('click');
// });

// btn.addEventListener('mouseenter', () => {       //будет выполняться функция при каждм наведеии мышки
//     console.log('hover');
// });

// btn.addEventListener('mouseenter', (e) => {       //значение в функции event/событие(чаще всего пишут e/event)
//     console.log(e);                                //event - обьект который описывает, что произошло с элементом                          
//     e.target.remove();      //target - доступ к элементу
// });

// let i = 0;

// const deleteElement = (e) => {
//     console.log(e.target);
//     i++;
//     if (i == 1) {
//         btn.removeEventListener('click', deleteElement);
//     }
// };

// btn.addEventListener('click', deleteElement);       //после клика вызвали функцию и функцией остановили событие

// const btn = document.querySelector('button'),
//       overlay = document.querySelector('.overlay');

// const deleteElement = (e) => {
//     console.log(e.target);
//     console.log(e.type);
// };

// btn.addEventListener('click', deleteElement);       //Вызовиться сначала более вложенный элемент - всплытие событий
// overlay.addEventListener('click', deleteElement);

// //отменяем стандартное поведение брауера, обязательно в начало обработчика ставить
// const link = document.querySelector('a');

// link.addEventListener('click',(e) => {
//     e.preventDefault();     

//     alert('oops, try again))');
// });

// //Перебираем и назначаем обработчик на
// const btns = document.querySelectorAll('button');

// btns.forEach(btn => {       
//     btn.addEventListener('click', deleteElement);
// });

// const deleteElement = (e) => {
//         console.log(e.target);
//         console.log(e.type);
//     };

//3й аргумент - опция ставить не обязательно, в даном случаи {once: true} -не дает повторно выполнить функцию
// const btns = document.querySelectorAll('button');

// btns.forEach(btn => {       
//         btn.addEventListener('click', deleteElement, {once: true});
//     });


						    //НАВИГАЦИЯ ПО DOM///////////////////////////////////////////////////////////////////////

//dom узел - это все что находиться в верстке(включая пробелы, коментарии и т.д)
//dom элементы - это все видимые елементы(теги, дивы и т.д)

//обращение к родителям
// console.log(document.body);     //получаем доступ к тегу бади
// console.log(document.documentElement);      //выводим всю верстку штмл
// console.log(document.body.childNodes);      //получаем все узлы которые находяться внутри родителя
// console.log(document.body.firstChild);      //получаем первый узел родителя
// console.log(document.body.lastChild);       //получаем последний узел родителя
// console.log(document.nextSibling);      //получаем следующий соседский узел
// console.log(document.previousSibling);      //подучаем предыдущий соседский узел

// console.log(document.querySelector('#current').parentNode.parentNode);      //обращаемься сперва к родителю элемента, и повторно к родителю родителя
// .nextElementSibling     //следующий соседский элемент
// .previousElementSibling     //предыдущий соседский элемент
// .firstElementChild      //получаем первый ЭЛЕМЕНТ родителя
// .lastElementChild       //получаем последний ЭЛЕМЕНТ родителя

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);       //выводим дату атрибут и обращаемся к следующему элементу
// console.log(document.querySelector('#current').parentElement);       //родительский ЭЛЕМЕНТ

// for (let node of document.body.childNodes) {        //чистим узлы внутри родителя и получаем одни элементы
//     if (node.nodeName == '#text' || node.nodeName == '#comment') {
//         continue;
//     }
//     console.log(node);
// }



				    //событие на мобильных устройствах////////////////////////////////////////////////////////////////////////
//touchstart - срабатывает прикасании на элемент
//touchmove - срабатывает при касании на элемент палец начинает движение
//touchend - срабатывает при отрывании пальца от элемента 
//touchenter - когда ведем пальцем и наскакиваем на событие
//touchleave - когда палец продолжил скользить покинув пределы элемента
//touchcancel - YFGHBVTH RJULF GFKTW DSITK PF GHTLTKS ,HFEPTHF

// window.addEventListener('DOMConntantLoaded', () => {        //джава подключаеться когда все дом узлы уже готовы
//     const box = document.querySelector('.box');

//     box.addEventListener('touchmove', (e) => {
//         e.preventDefault();

//         console.log(e.touches);     //touches сколько пальцев на экране
//         console.log(e.changedtouches);      //палец который убран
//         console.log(e.targetToches[0].pageX);       //обращаемься к первому пальцу и получаем координаты
//     });
// });

							//ДИНАМИЧЕСКИЕ СКРИПТЫ/////////////////////////////////////////////////////////////////

//<scrypt async src=""><</scrypt>     //не зависит от других скриптов и дом структуры, загрузилься и сразу выполнилься
//<scrypt defer src=""><</scrypt>     //не блокирует штмл код, загружаеться в фоновом режиме

// const script = document.createElement('script');      //помещаем скрипт на страницу штмл
// script.src ='js/test.js';       //назначаем путь скрипту
// document.body.append(script);       //помещаем скрипт в конец бади

// function loadScript(src) {
//     const script = document.createElement('script');
//     script.src = src;
//     script.async = false;
//     document.body.append(script);
// }

// loadScript('js/test.js');


						    //className и делегирование////////////////////////////////////////////////////////////////////////////////
// const btns = document.querySelectorAll('button'), 
//       wrapper = document.querySelector('.btn-block');
// console.log(btns[0].classList.length);      //сколько класов есть
// console.log(btns[0].classList.item(1));     //выбираем класс по индексу
// console.log(btns[1].classList.add('red'));      //добавляем класы
// console.log(btns[0].classList.remove('blue', 'red'));       //удаляем класы
// console.log(btns[0].classList.toggle)('blue');      //если клас отсутствует - добавляет и наоборот

// if(btns[1].classList.contains('red')){      //проверяем на наличие заданого класа по указаному индексу
//     console.log('red');
// }

// btns[0].addEventListener('click', () => {        //при клике на 1 кнопку добавляем(если нет) или удаляем класс ред
//     // if (btns[1].classList.contains('red')) {
//     //     btns[1].classList.remove('red');
//     // } else {
//     //     btns[1].classList.add('red');
//     // }
//     //или
//     btns[1].classList.toggle('red');
// });

// wrapper.addEventListener('click', (event) => {       //дилигируем на родителя кнопок, при динамическом добавлении кнопки, будет консоль распространяться и на их
//     if(event.target && event.target.tagName == "BUTTON") {
//         console.log('good');
//     }
// });

// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);


						    //время выполнение скриптов, скрипты/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const timerId = setTimeout(() => {
//     alert("5sec");
// }, 5000);
//.....
// const timerId = setTimeout((text) => {
//     alert(text);
// }, 5000, '5sec');        //1)время выполнения, 2)передаем значение в setTimeout
//.....
// const timerId = setTimeout(logger, 2000)        //1) задаем функцию, 2) время задержки выполнения

// function logger () {
//     console.log('test');
// }

// clearInterval(logger);      //останавливаем функцию задержки
//.....
// const btn = document.querySelector('.btn');
// let timerId,
//     i =0;

// btn.addEventListener('click', () => {
//     timerId = setInterval(logger, 1500);
// });

// function logger() {
//     if(i == 4){
//         clearInterval(timerId);
//     }
//     alert('каждые 2 сек после клика');
//     i++;
// }

//...
// let id = setTimeout(function log() {        //рекурсивный вызов setTimeout
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);

//.....
// const btn = document.querySelector('.btn');

// function myAnimation() {
//     console.log('click');
//     const elem = document.querySelector('.box');
//     let pos = 0;

//     const id = setInterval(frame, 6);

//     function frame() {
//         if(pos == 300) {
//                 clearInterval(id);
//             } else {
//                 pos++;
//                 elem.style.left = pos + 'px';
//                 elem.style.top = pos + 'px';
//             }
//     }  
// }

// btn.addEventListener('click', myAnimation);



						    //даты////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const now = new Date();
// console.log(now.getFullYear());     //2022
// console.log(now.getMonth());     //0  январь
// console.log(now.getDate());     //13
// console.log(now.getHours());     //23
// console.log(now.getMinutes());     //0
// console.log(now.getSeconds());     //4
// console.log(now.getDay());     //день недели, начинаеться с воскресенья = 0
// console.log(now.getUTCHours());     //21 часовой пояс +0

// console.log(now.getTimezoneOffset());     //-120  разница между часовым поясом и utc( в минутах)
// console.log(now.getTime());     //1642108572104 количество милисикунд которое прошло з 1970г

//.....set -задать данные, применяеться как get
// console.log(now.setHours(18));

// let start = new Date();

// for(let i = 0; i < 100000; i++) {
//     let some = i ** 3;
// }

// let end = new Date();

// console.log(`цикл отработал за ${end - start} миллисекунд`);   //  цикл отработал за 10 миллисекунд   



						    //ПАРАМЕТРЫ ДОКУМЕНТА////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
						    
// const box = document.querySelector('.box'),
//       btn = document.querySelector('button');

// const width = box.clientWidth,      //ширина  модельного окна включая паддинг(внешний отступ) и не включая прокрутку
//       height = box.clientHeight;        //высота модельного окна включая паддинг(внешний отступ) и не включая прокрутку
// const width = box.offsetWidth,      //ширина  модельного окна включая паддинг(внешний отступ), прокрутку, марджин и бордер
//       height = box.offsetHeight;        //высота модельного окна включая паддинг(внешний отступ), прокрутку, марджин и бордер
// const width = box.scrollWidth,      //ширина модельного окна не включая прокрутку
//       height = box.scrollHeight;        //высота модельного окна включая всю прокрутку

// btn.addEventListener('click', () => {
//     box.style.height = box.scrollHeight + 'px';     //получаем высоту текста в числовых данных и добавляем px

//     console.log(box.scrollTop);     //показывает сколько прочитано в пикселях
// });

// console.log(box.getBoundingClientRect());       //получаем ккординаты всех сторон
// console.log(box.getBoundingClientRect().top);       //получаем координаты только верха

// const style = window.getComputedStyle(box);        //получаем стили примененные к обьекту, нельзя изменять

// document.documentElement.scrollTop;     //получаем инфо, без елемент не рпботает, можно модефицировать

// window.scrollBy(x, y);      //х - ширина, y - висота, задавая параметры перемещаем на нужную часть экрана

// window.scrollTo(x, y);      //х - ширина, y - висота, задавая параметры перемещаем по всей странице

							//функции - конструкторы////////////////////////////////////////////////////////////////////

//создаем конструктор с ее помощью можем создавать новых пользователей
// const user = function(name, id) { //указываем для каждого отдельного пользователя уникальное имя и уникальный номер
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`hello ${this.name}`);  //создали метод и обращаемься к конкретному пользователю
//     };
// }

// user.prototype.exit = function() {  //прототипно будет наследоваться метод у своих потомках

//     console.log(`пользователь ${this.name} ушел`);
// }

// ivan.exit();  //пользователь ivan ушел

// const ivan = new user('ivan', 28) //new - создает новый обьект с свойствами в функции user
// const alex = new user('alex', 31)

// ivan.hello();  //hello ivan
// alex.hello();  //hello alex

// console.log(ivan);  //user { num: 'ivan', id: 28, human: true }
// console.log(alex);  //user { num: 'alex', id: 31, human: true }

//контекст вызова this//////////////////////////////////////////////////////////////////////////
//обычная функция this = window, если use syricy(строгий режим) = undefined
// function showThis() {
//     console.log(this);
// }

// showThis();

//контекст у методов обьекта - будет сам обьект
// const obj = {
//     a: 20,
//     b: 30,
//     sum: function () {
//         console.log(this);
//     }
// }

// obj.sum(); //{a: 20, b: 30, sum: ƒ}

//this в конструкторах и классах - новый экземпляр обьекта(в данном случаи переменная new(ivan))
// const user = function(name, id) {     
//         this.name = name;
//         this.id = id;
//         this.human = true;
//         this.hello = function() {
//             console.log(`hello ${this.name}`);   
//         };
//     }

//     const ivan = new user('ivan', 28);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'smith')  //во внутрь метода call передаем контекст вызова который необходимо передать во внутрь функции
// sayName.apply(user, ['smith'])  //1 передаем (указано в коментарии к call) 2) передаем аргумент функции которую вызываем, разница с call  в синтаксисе

//ручная привязка this: call, apply, 
//bind - создает новую функцию и под нее подвяхывает контекст
// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);       //2 помещаеться в this, а значение функции double вызванный консолью в num

// console.log(double(3));     //6
// console.log(double(4));     //8

// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {      //this при приминении стандартной функции(не стрелочной) - элемент на котором произошло событие
//     this.style.backgroundColor = 'red';     //перекрашиваем кнопку после нажатия
// });

//стрелочная функция не имеет контекста вызова, она берет контекст у своего родителя
// const obj = {  
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this);      //{num: 5, sayNumber: ƒ}
//         }
//         say();
//     }
// };

// obj.sayNumber();      

//если функция влазет в одну строчку скобки и return ставить не нужно. return будет работать автоматически
// const double = a => a * 2;      //если больше 1 аргумента - нужно аргументы оборачивать в круглые скобки

//  console.log(double(4));    //8


						    //класы/////////////////////////////////////////////////////////////////////////////////////////////
// class Rectangle {
//     constructor(height, width) {  //в () функции конструктора записуем аргументы которые будут приходить из вне
//         this.height = height;  //this - обращаемся к экземпляру нового созданого обьекта
//         this.width = width;
//     }

//     calcArea() {  //создаем метод который в дальнейшем будем вызывать, между методами не ставим ";"
//         return this.height * this.width;
//     }
// }    

// class ColoredRectangleWithText extends Rectangle {  //extend - наследуеться класс(приминяем значения класа)
//     constructor(height, width, text, bgColor){
//         super(height, width);  //вызывает конструктор родителя(должна быть на первом месте в конструкторе)
//         this.text = text;
//         this.bgColor = bgColor;
//     }

//     showMyProps() {
//         console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
//     }
// }

// // const square = new Rectangle(10, 10); //создаем через new новый обьект и указываем аргументы
// // const long = new Rectangle(10, 200);

// // console.log(square.calcArea()); //100   обязательно вызываем функцию
// // console.log(long.calcArea());   //2000  обязательно вызываем функцию

// const div = new ColoredRectangleWithText(10, 30, 'какой-то текст', 'красный');

// div.showMyProps();

// console.log(div.calcArea());  //Текст: какой-то текст, цвет: красный


					    //REST оператор/////////////////////////////////////////////////////////////////////////////////////////

// const log = function(a, b, ...c){
//     console.log(a, b, c);
// }

// log(1, 2, 55, 44);      //1 2 [ 55, 44 ]

// // ,,,,,,,,,,,
// function calcOrDouble(num, basis = 2) {     // = в случаи есле не передаеться второй аргумент подставляеться число 2
//     console.log(num * basis);
// }

// calcOrDouble(3);        //6


					    //JSON глубокое клонирование/////////////////////////////////////////////////////////////////////////////////
// const persone = {
//     name: 'Oleh',
//     tel: +3806666,
//     parents: {
//         mom: 'Ira',
//         dad: 'Vova'
//     }
// }

// const clone = JSON.parse(JSON.stringify(persone));      //создаем глубокое клонирование с помощью json

// clone.parents.mom = 'Irina'

// console.log(persone);       //{ name: 'Oleh', tel: 3806666, parents: { mom: 'Ira', dad: 'Vova' } }
// console.log(clone);     //{ name: 'Oleh', tel: 3806666, parents: { mom: 'Irina', dad: 'Vova' } }

						//AJAX//////////////////////////////////////////////////////////////////////////////////////////////
// const inputUah = document.querySelector('#uah'),
//       inputUsd = document.querySelector('#usd'); 

// inputUah.addEventListener('input', () => {
//     const request = new XMLHttpRequest();  //создаем обьект XMLHttpRequest

//     ///////////методы обьекта XMLHttpRequest:
//     // request.open(method, url, async, login, pass);
//     request.open('GET', 'js/current.json');       //собирает настройку для обр к серверу - метод(гет или пуш)б,  адрес джейсона
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');  //указываеим серверу, что он поучает - тип, названин типа
//     request.send();  //() помещаем данные которые отправляем на сервер

	//так не нужно
//     request.addEventListener('readystatechange', () => {
//         if(request.readyState === 4     data.current.usd).toFixed(2);
//         } else {
//             inputUsd.value = 'alarm';  //при поломки сервера
//         }
//     });

//     request.addEventListener('load', () => {
//         if(request.status === 200) { //проверка на успешный запрос 
//             const data = JSON.parse(request.response);  //формат json переводим в формат js
//             inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2);
//         } else {
//             inputUsd.value = 'alarm';  //при поломки сервера
//         }
//     });

    ///////////свойства обьекта XMLHttpRequest:
    //status - показывает статус запроса
    //statusText - текстовое описание ответа от сервера
    //response - ответ от сервера
    //readyState - текущее состояние запроса
    
    ///////////события обьекта XMLHttpRequest:
    //readystatechange - статус события в текущий момент
    //load - срабатывает когда запрос полностью загрузилься и получили результат


								//promise///////////////////////////////////////////////////////////////////////////////
//Promice -обещание
// console.log('запрос данных...');
// //помещаем обещания в переменную reg, мы не знаем как выполниться положытельно или нет
// //then обрабатывает положительный результат, принимает аргумент resolt
// const reg = new Promice(function(resolve, reject) {     //1 обещание выполнилось, 2обещание не выполнилось
//     setTimeout(() => {
//         console.log('подготовка данных...');

//         const product = {
//             name: 'tv',
//             price: 2000
//         };

//         resolve(product);      //если все правильно, обещание выполнено - вызываеться функция resolve
//     }, 2000);
// });

// reg.then((product) => {        //внутри себя принимает аргумент с функцией resolve
//     setTimeout(() => {
//         product.status = 'order';
//         console.log(product);
//     }, 2000);
    
// });

// console.log('Запрос данных');

// const req = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Подготовка данных');

//         const product = {
//             name: 'TV',
//             price: 2000
//         };

//         resolve(product);
//     }, 2000);
// });

// req.then((product) => {
//     setTimeout(() => {
//         product.status = 'order';
//         console.log(product);
//     }, 2000);
// });   

// });

//Promice all - возвращает then после выполнения всех promise
//Promice.race - выполняеться, когда самый первый promise правильно отработал
// const test = time => {
//         return new Promise(resolve => {
//                 setTimeout(() => resolve(), time);
//         });
// };

// Promise.all([test(1000), test(2000)]).then(() => {
//         console.log('all');  //all появится через 2 секунды
// });

// Promise.race([test(1000), test(2000)]).then(() => {
//         console.log('all');  //all появится через 1 секунду
// });





//РЕКУРСИЯ///////////////////////////////////////////////////////////////////////////////////////////
//МЕТОД БЕЗ РЕКУРСИИ
// let students = {
//     js: [{
//         name: 'John',
//         progress: 100
//     }, {
//         name: 'Ivan',
//         progress: 60
//     }],

//     html: {
//         basic: [{
//             name: 'Peter',
//             progress: 20
//         }, {
//             name: 'Ann',
//             progress: 18
//         }],

//         pro: [{
//             name: 'Sam',
//             progress: 10
//         }]
//     }
// };

// function gettotalProgressByIteration(data) {
//     let total = 0;
//     let student = 0;

//     for (let course of Object.values(data)) {  //получаем значение обьекта
//         if (Array.isArray(course)) {  //проверяем являеться ли массивом
//             // console.log(course);
//             student += course.length;
//             // console.log(student);

//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//                 // console.log(total); 
//             }
//         } else {  //если обьект перебираем по новому
//             for (let subCourse of Object.values(course)) {
//                 student += subCourse.length;
//                 // console.log(student);
//                 for (let i = 0; i < subCourse.length; i++) {
//                     total += subCourse[i].progress;
//                 }
//             }
//         }
//     };



//     return total / student;
// };

// console.log(gettotalProgressByIteration(students));


//СПОМОЩЬЮ РЕКУРСИИ
// let students = {
//     js: [{
//         name: 'John',
//         progress: 100
//     }, {
//         name: 'Ivan',
//         progress: 60
//     }],

//     html: {
//         basic: [{
//             name: 'Peter',
//             progress: 20
//         }, {
//             name: 'Ann',
//             progress: 18
//         }],

//         pro: [{
//             name: 'Sam',
//             progress: 10
//         }]
//     }
// };

// function gettotalProgressByRecursion(data) {debugger
//     if (Array.isArray(data)) {debugger
//         let total = 0;

//         for(let i = 0; i < data.length; i++) {debugger
//             total += data[i].progress;
//         }

//         return [total, data.length];debugger
//     } else {debugger
//         let total = [0, 0];

//         for (let subData of Object.values(data)) {debugger
//             const subDataArr = gettotalProgressByRecursion(subData);debugger
//             total[0] += subDataArr[0];
//             total[1] += subDataArr[1];
//         }

//         return total;debugger
//     }
// }

// const result = gettotalProgressByRecursion(students);
// console.log(result[0]/result[1]);


///////////////////////fetch

// fetch('https://jsonplaceholder.typicode.com/posts', {  //url - запрос на сервер
//  method: "POST",  //метод(гет или пост)
//  body: JSON.stringify({name: 'Alex'}),  //тело отправки
//  headers: {  //заголовки - определяют какой контент мы отправляем
//         'content-type': 'application/json'  //указываеим серверу, что он поучает - тип, названин типа
//  }    
// })  
// .then(response => response.json())  //респонс - верный ответ, .json -встроеный метод, переводит джейсон формат в джаваскрипт(есть еще метод text)
// .then(json => console.log(json));

//.ok - мы что - то получили и все ок
//.status - статус который вернул сервера


//////////////////////////////////////переборы масива

//////filter - перебирает и возвращает в новый масив

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemar'];

// const shortname = names.filter((name) => {  //каждый отдельный эл, перебераемый в масиве
//         return name.length < 5;  //возвращаем НОВЫЙ масив с задаными критериями
// });

// console.log(shortname);  //[ 'Ivan', 'Ann' ]

//////map - изменяет исходный масив

// const answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map(item => item.toLowerCase());  //создает новый масив и изменяет его

// console.log(result);  //[ 'ivan', 'anna', 'hello' ]

//////every/some
//some - если хоть 1 эелемент попадает под условия - возвращает true, если нет -false
//every - если все условия верны - возвращает true

// const arr = [4, 'asd', 'asdqw'];

// arr.some(item => typeof(item) === 'number');  //true

// arr.every(item => typeof(item) === 'number');  //false

//////reduce - собирать масив в одно целое

//reduce на числах
//  const arr = [1, 4 ,3 ,6 ,2];

//  const res = arr.reduce((sum, item) => sum + item);  //метод перебора (1) - сума значений, (2) - каждый елемент перебираемый по порядку

//  console.log(res); //16

//  //reduce на строках
//  const arr2 = ['apple', 'pear', 'plum'];

//  const res2 = arr2.reduce((sum, item) => `${sum}, ${item}`);

//  console.log(res2);  //apple, pear, plum

 //reduce с дополнительным(начальным элемнтом)
// const arr3 = [5, 5, 5, 5,];

// const res3 = arr3.reduce((sum, item) => sum + item, 3);  //3 - начальный єлемент с которого будет начинаться действие

// console.log(res3);  //23

// //приминение на практике
// const obj = {
//         ivan: 'persone',
//         ann: 'persone',
//         dog: 'animal',
//         cat: 'animal'
// };

// const newArr = Object.entries(obj)  //превращаем обьект в масив  //[[ 'ivan', 'persone' ],[ 'ann', 'persone' ],[ 'dog', 'animal' ],[ 'cat', 'animal' ]]
// .filter(item => item[1] === 'persone')  //[ [ 'ivan', 'persone' ], [ 'ann', 'persone' ] ]
// .map(item => item[0]);  //[ 'ivan', 'ann' ]

 
//////////////////////////////////////async/
//async - уведомляет функцию, что будет асинхронный код (ставиться перед функцией)
//await - ставиться перед теми операциями, которые необходимо дождаться

// const postData = async (url, data) => {
//         const res = await fetch(url, {
//             method: 'POST',
//             body: data,
//             headers: {
//                 'Content-type': 'application/json'
//             }
//         });

//         return await res.json();  //возвращаеться промис и только после его обработки возвращает константу
//     };



/////////////////////////////////localStorage

// localStorage - память браузера(обьектБ точнее функция обьекта Window)
// const checkbox = document.querySelector('#checkbox'),
//       form = document.querySelector('.form-signin'),
//       btn = document.querySelector('#color');

// // localStorage.setItem('key', 'value');  //записать новый ключ(название, значение)
// // localStorage.getItem('key');  //получить значение
// // localStorage.removeItem('key');  //удалить значение
// // localStorage.clear();  //очистить хранилище - все элементы

// //1) 
// if (localStorage.getItem('isChecked')) {  //проверка на наличие значения в хранилище
//         checkbox.checked = true;  //запоминаем галочку
// }

// checkbox.addEventListener('changed', () => {
//         localStorage.setItem('isChecked', true);
// });

// //2)
// if (localStorage.getItem('bg') === 'changed') {
//         btn.style.background = 'red';
// }

// btn.addEventListener('click', () => {
//         if (localStorage.getItem('bg') === 'changed') {
//                 btn.style.background = 'blue';
//                 localStorage.removeItem('bg');
//         } else {
//                 localStorage.setItem('bg', 'changed');
//                 btn.style.background = 'red';
//         }
// });

// //3) помещение
// const persone = {
//         name: "Alex",
//         age: 25
// };

// const personeJson = JSON.stringify(persone);

// localStorage.setItem('Alex', personeJson);

// console.log(JSON.parse(personeJson));




/////////////////////////////////////////регулярные выражения
//состоит из 2 частей: патерн, флаги
// new RegExp('pattern', 'flags');  //старый пример 
//патерн - шаблон(шаблон, что ищем или пытаемься удалить...)
//флаги :
//i - ищет в независимости от регистра
//g - ищет несколько вхождений
//m - многострочный режим

// /./ - берем все элементы которые попадут в строку
// /\./ - указываем, что идет не спецсимвол, а просто точка


//методы:
// const ans = 'Ann and Natali = 45';
// let reg;

//search() - ищет только первое совпадение
//reg = /n/;  //1 показивает индекс первой находки(-1 если не нашел)
// console.log(ans.search(reg));

// match() - многократно ищет
// reg = /n/i;  //[ 'n', index: 1, input: 'Ann and Natali', groups: undefined ]
// reg = /n/ig;  //[ 'n', 'n', 'n', 'N' ]
// console.log(ans.match(reg));


//replace(1, 2) - позволяет изменить(1 - что изменяем, 2 - на что изменяем)
// ans.replace(/./g, "*");  **************
// console.log('12-54-36'.replace(/-/g, ':'));  //12:54:36 - /-/не являеться спецсимволом

//test - возвращает true если есть хоть 1 совпадение 
// reg = /n/ig;
// console.log(reg.test('NDV'));  //true


//класы:
// \d - цифры
// \w -слова(буквы)
// \s - пробелы

//обратные класы:
// \D - не цифры
// \W - не буквы(слова)
// \S - не пробелы

// reg = /\d/g;
// // reg.match(ans);
// console.log(ans.match(reg));  //[ '4', '5' ]
// console.log(ans.match(/\w\w\w\w\w\w\s\=\s\d\d/igm));  //[ 'Natali = 45' ]




///////////////////////////////////////////геттеры(get) и сеттеры(set)
//свойства обьекта - описывает обьект
//методы обьекта - что умеет обьект
//ГЕТТЕРЫ(get) - получать свойства, СЕТТЕРЫ(set) - устанавливают свойства

// const persone = {
//         name: 'Alex',
//         age: 25,

//          get userAge() {
//                return this.age;
//          },

//          set userAge(num) {
//                 this.age = num;
//          }
// };

// persone.userAge = 30;








//////////////////////////////////////Инкапсуляция
//Инкапсуляция - не позволить пользователям изменить код

//применение на функции
// function User(name, age) {
//         this.name = name;
//         let userAge = age;  //переменная не выводиться на ружу

//         this.say = function() {
//                 console.log(`Імя користувача: ${this.name}, вік: ${userAge} `);
//         };

//        this.getAge = function() {  //функция получения
//                 return userAge;
//         };

//         this.setAge = function(age) {  //функция изменения
//                 if (typeof age === 'number' && age > 0 && age <110) {
//                         userAge = age;
//                 } else {
//                         console.log('Не корректні дані');
//                 }
//         };      
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.userAge);  //undefined
// ivan.userAge = 25;

// ivan.say();  //Імя користувача: Ivan, вік: 27 

// ivan.getAge();  //получаем  возраст
// ivan.setAge(42);  //назначаем возраст

// ivan.say();  //Імя користувача: Ivan, вік: 42  

//применение на классах
// class User {
//         constructor(name, age) {
//                 this.name = name;
//                 this._age = age;  //указываем _ для понимания, что будем скрывать от пользователя
//         }

//         say() {
//                 console.log(`Імя користувача: ${this.name}, вік: ${this._age} `);
//         }

//        get age() {  //функция получения
//                 return this._age;
//         }

//         set age(age) {  //функция изменения
//                 if (typeof age === 'number' && age > 0 && age <110) {
//                         this._age = age;
//                 } else {
//                         console.log('Не корректні дані');
//                 }
//         }    
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.age);  //27
// ivan.age = 25;
// console.log(ivan.age);  //25
// ivan.say();  //Імя користувача: Ivan, вік: 25 

// //поля классов - эксперементальный метод, который не вошел в стандарт

// class User {
//         constructor(name, age) {
//                 this.name = name;
//                 this.age = age;
//         }

//         #surname = 'Zelensky';

//         get surname() {
//               return this.#surname;  
//         }

//         set surname(surname) {
//                 this.#surname = surname;
//         }

// }

// const vova = new User('Volodymyr', 48);
// console.log(vova.surname);
// vova.surname = 'Danko';
// console.log(vova.surname);




////////////////////////////Ошибки
//try - изначально выполняеться, переходит к catch после ошибки
//catch - выполняеться, если try не выполнился(отлавливает ошибки)

// try {
//         console.log('normal');
//         console.log(a);
// } catch(error) {
//         console.log(error.name);  //ReferenceError
//         console.log(error.message);  //a is not defined
//         console.log(error.stack);  //ReferenceError: a is not defined | at teoryScript.js:1870:21
// } finally {

// }

//пример
// const data = [
//         {
//                 id: 'box',
//                 tag: 'div'
//         },
//         {
//                 id: '',
//                 tag: 'nav',
//         },
//         {
//                 id: 'circle',
//                 tag: 'span'
//         }
// ];

// try {
//         data.forEach((blockObj, i) => {
//                 const block = document.createElement(blockObj.tag);

//                 if (!blockObj.id) throw new SyntaxError(`У номера ${i} відсутнє id`);

//                 block.setAttribute('id', blockObj.id);
//                 document.body.append(block);
//         });
// } catch(e) {
//         if(e.name === 'SyntaxError') {
//                 console.log(e.message);  
//         } else throw e;    //если это не ошибка которую я создал выбрасываем ошибку за пределы catch

// }




/////////////////////////////////////функции генераторы
//при каждом вызове будет возврать последовательно
// function* generator() {
//         yield 's';
//         yield 'c';
//         yield 'r';
//         yield 'i';
//         yield 'p';
//         yield 't';
// }

// const str = generator();
// //next встроеный метод
// str.next();  //{ value: 's', done: false }  done - указывает закончились ли функции
// str.next();  //{ value: 'c', done: false }
// str.next();  //{ value: 'r', done: false }
// str.next();  //{ value: 'i', done: false }
// str.next();  //{ value: 'p', done: false }
// str.next();  //{ value: 't', done: false }
// console.log(str.next());  //{ value: undefined, done: true }
//** 
// function* count(n) {
//       for (let i = 0; i < n; i++) {
//         yield i;
//       }  
// }

// const num = count(3);

// num.next().value;  //0
// num.next().value;  //1
// num.next().value;  //2
// num.next().value;  //undefined
// //** 
// //для запуска макс количества раз
// function* count(n) {
//         for (let i = 0; i < n; i++) {
//           yield i;
//         }  
//   }

//   for (let k of count(3)) {
//         console.log(k);  //0 1 2
//   }



////////////////////////////////анимация
// const elem = document.querySelector('.header__logo');
// let pos = 0;

// function myAnimation() {
// 	pos++;
// 	elem.style.width = pos + 'px';

// 	if (pos < 170) {
// 		requestAnimationFrame(myAnimation);
// 	}
// }

// elem.addEventListener('click', () => requestAnimationFrame(myAnimation));

// let id = requestAnimationFrame(myAnimation);
// cancelAnimationFrame(id);

// const multiply20 = (price) => price * 20;
// const divide100 = (price) => price / 100;
// const normalizePrice = (price) => price.toFixed(2);

// const result = normalizePrice(divide100(multiply20(460)));
// console.log(result);






























































// Element.setAttribute()
//Добавляет новый атрибут или изменяет значение существующего атрибута у выбранного элемента.
//element.setAttribute(name, value);  //name - имя атрибута (строка).  value - значение атрибута. 

