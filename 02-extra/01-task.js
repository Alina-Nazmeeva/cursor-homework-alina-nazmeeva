/*Змінна n зберігає ціле число від 0 до 9. Використовуючи оператор switch, написати скрипт, 
який в залежності від числа буде виводити слово (Наприклад, якщо n дорівнює 3, то буде виводитися слово «три»)*/

let input = prompt("Enter a number from 0 to 9:");
let number = parseInt(input);
while(isNaN(number) || !(number >= 0 && number <= 9) || (input != number)){
    input = prompt("Incorrect input! Enter only number from 0 to 9:");
    number = parseInt(input);
}

switch(number){
    case 0:
        alert("zero");
        break;
    case 1:
        alert("one");
        break;
    case 2:
        alert("two");
        break;
    case 3:
        alert("three");
        break;
    case 4:
        alert("four");
        break;
    case 5:
        alert("five");
        break;
    case 6:
        alert("six");
        break;
    case 7:
        alert("seven");
        break;
    case 8:
        alert("eight");
        break;
    case 9:
        alert("nine");
        break;
    default: 
        alert("nothing");
}