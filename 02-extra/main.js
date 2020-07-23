/*Змінна n зберігає ціле число від 0 до 9. Використовуючи оператор switch, написати скрипт, 
який в залежності від числа буде виводити слово (Наприклад, якщо n дорівнює 3, то буде виводитися слово «три»)*/

// let input = prompt("Enter a number from 0 to 9:");
// let number = parseInt(input);
// while(isNaN(number) || !(number >= 0 && number <= 9) || (input != number)){
//     input = prompt("Incorrect input! Enter only number from 0 to 9:");
//     number = parseInt(input);
// }

// switch(number){
//     case 0:
//         console.log("zero");
//         break;
//     case 1:
//         console.log("one");
//         break;
//     case 2:
//         console.log("two");
//         break;
//     case 3:
//         console.log("three");
//         break;
//     case 4:
//         console.log("four");
//         break;
//     case 5:
//         console.log("five");
//         break;
//     case 6:
//         console.log("six");
//         break;
//     case 7:
//         console.log("seven");
//         break;
//     case 8:
//         console.log("eight");
//         break;
//     case 9:
//         console.log("nine");
//         break;
//     default: 
//         console.log("nothing");
// }
/*Використовуючи document.write () і будь-яку з циклічних конструкцій виведіть 
десять однакових зображень (треба виводити <img src = "..." alt = "..." />) */
for(let i = 0; i < 10; i++){
    document.writeln('<img src = "https://www.realnz.ru/wp-content/uploads/2015/10/10645160_794812977228943_1074212644988496996_n.jpg" alt="New Zealand"/>');
}

/*Сформувати для учня список складається з n елементів, кожен елемент якого - це оцінка від 2 до 5.
Підрахувати середнє арифметичне і відповідно до цього дати визначення учневі: відмінник, хорошист, трієчник, двієчник. */
// let n = 3; 
// let mark = 0;
// let sum = 0;
// let averageMark = 0;
// for(let i = 0; i < n; i++){
//     mark = Math.round(Math.random()*3) + 2;
//     console.log("Mark = " + mark);
//     sum += mark;
// }
// console.log("Sum = " + sum);
// averageMark = Math.round(sum/n);
// console.log("Average = " + averageMark);
// switch(averageMark){
//     case 5:
//         console.log("Відмінник");
//         break;
//     case 4:
//         console.log("Хорошист");
//         break;
//     case 3:
//         console.log("Трієчник");
//         break;
//     case 2:
//         console.log("Двієчник");
//         break;    
// }
// const arr = [100, 80, 60, 50, 40, 20, 10, 0];
// for(let i = 0; i < arr.length; i++){
//     document.write ('Число: <b>' + arr[i] + '</b><br>');
// }


// for(let i = 0; i < 8; i++){
//     if(i%2 === 0){
//         console.log("# # # # ");
//     } else {
//         console.log(" # # # #");
//     }
//     document.write('<br>');
// }

// let chess = "";

// for(let i = 0; i < 8; i++){
//     if(i%2 === 0){
//         chess += "# # # # \n"
//     } else {
//         chess += " # # # #\n";
//     }
//         //document.write('<br>');
// }
// console.log(chess);

for(let i = 1; i < 8; i++){
    document.write("#".repeat(i) + "<br>");
}