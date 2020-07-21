/*1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. 
Приклади: 1236 -> 6, 987 -> 9, 385 -> 8  */

const getMaxDigit = (number) => Math.max(...Math.abs(number).toString());

/*2. Створити функцію, яка визначає ступінь числа.*/
function calculatePow(number, power){   
    let result = 1; 
    for(let i = 1; i <= power; i++){
        result *= number;
    }
    return result;
}

/*3. Створити функцію, яка форматує ім'я, роблячи першу букву великою.*/
const formatName = (name) => name[0].toUpperCase() + name.slice(1).toLowerCase();    

/*4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. 
(Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805  */

const calculateSalary = (salary, tax) => salary / 100 * (100 - tax);

/*5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. 
Приклад: getRandomNumber(1, 10) -> 5 */

const getRandomNumber = (start, end) => Math.round(Math.random()*(end-start)) + start;

/*6. Створити функцію, яка рахує скільки разів певна буква повторюється в слові.*/
function countLetter(letter, word){
    let result = 0;
    for(let i = 0; i < word.length; i++){
        if(word[i].toLowerCase() === letter.toLowerCase()){
            result++;
        }
    }
    return result;
}

/*7. Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. 
регістр uah не має значення. */

function convertCurrency(cash){
    let result;
    if(cash.includes("$")){
        result = (parseInt(cash)*27.7).toString() + "UAH";
    } else if(cash.toUpperCase().includes("UAH")){
        result = (parseInt(cash)/27.7).toString() + "$";
    } else {
        return "Iнші валюти не конвертуються";
    }
    return result;
}

/*8. Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем 
або по замовчуванню = 8 символам.*/

function getRandomPassword (symbols = 8){
    let result = "";
    for(let i = 0; i < symbols; i++){
        result += Math.round(Math.random()*9);
    }
    return result;
}


/*9. Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"*/

function deleteLetters(letter, word){
    let result = "";
    for(let i = 0; i < word.length; i++){
        if(word[i].toLowerCase() !== letter.toLowerCase())
        result += word[i];
    }    
    return result;
}

/*10. Створіть функцію, яка перевіряє, чи є слово паліндромом.*/

function isPalyndrom(string){
    strWithoutSpaces = string.replace(/\s/g,"");
    strReverse = strWithoutSpaces.split("").reverse().join("");
    return strWithoutSpaces.toLowerCase() === strReverse.toLowerCase();
}

/*11. Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.*/

function deleteDuplicateLetter(string){
    const strLowerCase = string.toLowerCase();
    let result = "";
    for(let i = 0; i < string.length; i++){
        if(strLowerCase.indexOf(strLowerCase[i]) === strLowerCase.lastIndexOf(strLowerCase[i])){
            result += string[i];
        }
    }
    return result.replace(/\s/g,"");
}

document.writeln(`Функція №1: Найбільша цифра у числі -28201146: ${getMaxDigit(-28201146)}<br>
Функція №2: 2 в степені 10 = ${calculatePow(2, 10)}<br>
Функція №3: Форматування імені: "alINa" => ${formatName("alINa")}<br>
Функція №4: З/п після вирахування податків: ${calculateSalary(1000, 19.5)}<br>
Функція №5: Випадкове ціле число в діапазоні від 1 до 10: ${getRandomNumber(1, 10)}<br>
Функція №6: Скільки разів буква "c" повторюється в слові "Cucumber": ${countLetter("c", "Cucumber")}<br>
Функція №7: Конвертація (2770 грн у долари) = ${convertCurrency("2770uAh")}<br>
Функція №8: Генерація випадкового паролю: ${getRandomPassword()}<br>
Функція №9: Видалення букви "B" з речення "Blablabla": ${deleteLetters("B", "Blablabla")}<br>
Функція №10: Чи є вираз "Мадам" паліндромом? ${isPalyndrom("Мадам")}<br>
Функція №11: Видалення з речення "Learning JavaScript with CURSOR" букв, що повторюються: ${deleteDuplicateLetter("Learning JavaScript with CURSOR")}`);