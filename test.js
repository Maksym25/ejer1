'use strict';


let money = prompt("Ваш бюджет на месяц? "," ");
console.log(money);

let time = prompt("Введите дату в формате YYYY-MM-DD", " ");
console.log(time);

let an1 = prompt("Введите обязательную статью расходов в этом месяце"," ");
console.log(an1);

let an2 = prompt("Во сколько обойдется?”", " ");
console.log(an2);

let appData = {
    ismoney :  money,
    istime: time,
    expenses : {
        an1 : an2
    },
    optionalExpenses:{},
    arr : [""],
    savings : false
}
console.log(appData);

alert("бюджет на 1 день : 30$");


/*

Вопросы к этому заданию
Сколько типов данных существует в JS?
7
Как вывести информацию в консоль?
console.log();
Какая функция операторов || и &&?
|| или
&& и

*/