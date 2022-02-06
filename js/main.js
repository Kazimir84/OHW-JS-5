// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника
let sqrt = (a, b) => a*b;
console.log('Площа прямокутника', sqrt(10,20));

// - створити функцію яка обчислює та повертає площу кола
let sqrtCircle = (r) => Math.PI*r**2;
console.log('Площа кола', sqrtCircle(20))

// - створити функцію яка обчислює та повертає площу циліндру
let sqrtV = (r, h) => 2*Math.PI*r*(r+h);
console.log('Повна площа поверхні циліндра = ', sqrtV(5,10));

// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = [1, 'JS', true];

let getArr = (arr) => {
    for (let arrElement of arr) {
        console.log(arrElement);
        document.write(`<p>${arrElement}</p>`);
    };
};
getArr(arr);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let text = 'Java Script';
let getP = (text) => {
    let p = document.createElement('P');
    p.innerText = text;
    document.body.append(p);
}
getP(text);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let text2 = 'ECMAScript';

let getLi = (text2) => {
    let ul = document.createElement('UL');
    document.body.append(ul);
    for (let i = 0; i < 3; i++) {
        let li = document.createElement('LI');
        li.innerText = text2;
        ul.append(li);
    };
};
getLi(text2);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let getLi2 = (text2, limit) => {
    let ul = document.createElement('UL');
    document.body.append(ul);
    for (let i = 0; i < limit; i++) {
        let li = document.createElement('LI');
        li.innerText = text2;
        ul.append(li);
    };
};
getLi2(text2, 5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let getArrLi = (arr) => {
    let ol = document.createElement('OL');
    document.body.append(ol);
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('LI');
        li.innerText = arr[i];
        ol.append(li);
    };
};
getArrLi(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let arrObj = [
    {id: 1, name: 'Alex', age: 37},
    {id: 2, name: 'Katya', age: 35},
    {id: 3, name: 'Nikita', age: 10},
];

let getArrObj = (arrObj) => {
    let div = document.createElement('DIV');
    document.body.append(div);
    for (let arrObjKey in arrObj) {
        let p = document.createElement('P');
        p.innerHTML = `Id - ${arrObj[arrObjKey].id}, Name - ${arrObj[arrObjKey].name}, age - ${arrObj[arrObjKey].age}`;
        div.append(p);
    };
};
getArrObj(arrObj);