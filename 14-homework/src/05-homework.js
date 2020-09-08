/*1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. 
У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа.*/

export function getRandomArray(length, min, max){
    let arr = [];
    for(let i = 0; i < length; i++){
        arr.push(Math.round(Math.random() * (max - min)) + min);
    }
    return arr;
}
const getRandomArray1 = (length = 8, min = 0, max = 9) => Array.from({ length }).map(() => Math.round(min - 0.5 + Math.random() * (max - min + 1)) );

const randomNumbersArray = getRandomArray(5, 1, 10);
// console.log(`Масив випадкових цілих чисел, аргументи (5, 1, 10) => ${randomNumbersArray}`);


/*2. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2 */

function getModa(...numbers){
    const filteredArr = numbers.filter((number) => Number.isInteger(number));
    const sortedArr = [...filteredArr].sort((a, b) => a - b);       
    let acc = 1;
    let max = 0;
    let result = [];

    for(let i = 1; i < sortedArr.length; i++){
        if(sortedArr[i] === sortedArr[i - 1]){
            acc++;
        }
        else{
            if(acc > max){
                max = acc;
                result.length = 0;
                result.push(sortedArr[i - 1]);
            } else if(acc === max){
                result.push(sortedArr[i - 1]);
            }
            acc = 1;
        }
    }
    return result;
}
const moda = getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 55, 55);
// console.log(`Мода, аргументи (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 55, 55) => ${moda}`);

/*3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. 
НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4 */

function getAverage(...numbers){
    const filteredArr = numbers.filter((number) => Number.isInteger(number));
    const sum = filteredArr.reduce((acc, el) => acc + el, 0);
    return sum/filteredArr.length;
}
function getAverage1(...numbers){ const filteredArr = numbers.filter((number) => Number.isInteger(number)); return filteredArr.reduce((acc, el) => acc + el, 0)/filteredArr.length; }
const average = getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
// console.log(`Середнє арифметичне, аргументи (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) => ${average}`);

/*4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23 Приклад: getMedian(1, 2, 3, 4) –> 2.5 
Приклад: getMedian(1, 2, 3, 4, 5) –> 3 */

function getMedian(...numbers){
    const filteredArr = numbers.filter((number) => Number.isInteger(number));
    const sortedArr = [...filteredArr].sort((a, b) => a - b);
    if(sortedArr.length%2 === 0){
        return (sortedArr[sortedArr.length/2 - 1] + sortedArr[sortedArr.length/2])/2;
    } else {
        return sortedArr[Math.round(sortedArr.length/2) - 1];
    }
}
const median = getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
// console.log(`Медіана, аргументи (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) => ${median}`);

/*5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5] */

const filterEvenNumbers = (...numbers) => numbers.filter((number) => number%2 === 1);
const arrWithoutEven = filterEvenNumbers(1, 2, 3, 4, 5, 6);
// console.log(`Фільтрує парні числа, аргументи (1, 2, 3, 4, 5, 6) => ${arrWithoutEven}`);

/*6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3 */

function countPositiveNumbers(...numbers){
    const result = numbers.reduce((acc, el) => el > 0 ? acc + 1: acc, 0);
    return result;
}
const positiveNumbersQuantity = countPositiveNumbers(1, -2, 3, -4, -5, 6);
// console.log(`Кількість чисел більших за 0, аргументи (1, -2, 3, -4, -5, 6) => ${positiveNumbersQuantity}`);

/*7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, 
які діляться на ціло на 5 Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55] */

const getDividedByFive = (...numbers) => numbers.filter((number) => number % 5 === 0);
const numbersDividedByFive = getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
// console.log(`Кратні 5, аргументи (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) => ${numbersDividedByFive}`);

/*8. Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). 
При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), після чого масив необхідно 
буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.
Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing kidding?" 
Приклад: replaceBadWords("Holy shit!") -> "Holy ****!" Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!" */

function replaceBadWords(string, badWordsList = []){
    const badWords = badWordsList.concat(["shit", "fuck"]);
    const arr = string.split(" ");
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < badWords.length; j++){
            if(arr[i].toLowerCase().includes(badWords[j].toLowerCase())){
                let reg = new RegExp(badWords[j], 'ig');
                arr[i] = arr[i].replace(reg, "*".repeat(badWords[j].length));
            }
        }
    }
    return arr.join(" ");
}
const str = replaceBadWords("Are you fucking kidding?", ["kid"]);
const str2 = replaceBadWords("Holy shit!", ["holy"]);
// console.log(`Замінює погані слова на зірочки, додаткові погані слова: "holy" та "kid": "Are you fucking kidding?" => ${str}; "Holy shit!" => ${str2}`);

/*9.  Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. 
Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру.*/

function divideByThree(word){
    const arr = word.toLowerCase().split(" ");
    let result = [];
    for(let j = 0; j < arr.length; j++){
        if(arr[j].length <= 3){
            result.push(arr[j]);
        }
        for(let i = 3; i <= arr[j].length; i += 3){
            result.push(arr[j].slice(i - 3, i));
            if(arr[j].slice(i).length < 3 && arr[j].slice(i).length != 0){
                result.push(arr[j].slice(i));
            }
        }
    }
    return result;
}
const dividedByThree = divideByThree("Learning JavaScript with CURSOR");
// console.log(`Розбиває кожне слово на склади по 3 букви, аргумент ("Learning JavaScript with CURSOR"): ${dividedByThree}`);

/*10. Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові. 
Краще  обмежити рoботу функції 10 буквами.*/
// нагуглила((
function generateCombinations(word){
    if(!word || typeof(word) !== "string"){
        throw new Error("Please, enter a string");
    }
    if(word.length > 10){
        throw new Error("Please, enter 10 letter maximum");
    }
    if(word.length === 1){
        return word;
    }    
    let result = [];
    for(let i = 0; i < word.length; i++){
        let letter = word[i];
        if(word.indexOf(letter) != i) continue;
        let remainingLetters = word.slice(0, i) + word.slice(i + 1);
        for(let permutation of generateCombinations(remainingLetters)){
            result.push(letter + permutation);
        }
    }
    return result;
}
const combinations = generateCombinations("man");
// console.log(`Всі можливі перестановки букв в слові, аргумент ("man"): ${combinations}`);