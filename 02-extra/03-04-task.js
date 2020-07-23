/*Сформувати для учня список складається з n елементів, кожен елемент якого - це оцінка від 2 до 5.
Підрахувати середнє арифметичне і відповідно до цього дати визначення учневі: відмінник, хорошист, трієчник, двієчник. */
let n = 3; 
let mark = 0;
let sum = 0;
let averageMark = 0;
for(let i = 0; i < n; i++){
    mark = Math.round(Math.random()*3) + 2;
    console.log("Mark = " + mark);
    sum += mark;
}
console.log("Sum = " + sum);
averageMark = Math.round(sum/n);
console.log("Average = " + averageMark);
switch(averageMark){
    case 5:
        console.log("Відмінник");
        break;
    case 4:
        console.log("Хорошист");
        break;
    case 3:
        console.log("Трієчник");
        break;
    case 2:
        console.log("Двієчник");
        break;    
}