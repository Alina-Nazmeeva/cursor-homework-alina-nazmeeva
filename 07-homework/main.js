const ukraine = {
    tax: 0.195,
    middleSalary: 1789,
    vacancies: 11476
};
const latvia = { 
    tax: 0.25, 
    middleSalary: 1586, 
    vacancies: 3921
};
const litva = { 
    tax: 0.15, 
    middleSalary: 1509, 
    vacancies: 1114
};

/*1. Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст 
в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this */

function getMyTaxes(salary){
    return salary * this.tax;
}
console.log("Task#1");
console.log(getMyTaxes.call(ukraine, 2000));
console.log(getMyTaxes.call(latvia, 2000));
console.log(getMyTaxes.call(litva, 2000));

/*2. Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платять IT-спеціалісти 
у кожній країні. (tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this */

function getMiddleTaxes(){
    return this.middleSalary * this.tax;
}
console.log("Task#2");
console.log(getMiddleTaxes.call(ukraine));
console.log(getMiddleTaxes.call(latvia));
console.log(getMiddleTaxes.call(litva));

/*3.Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти 
у кожній країні. (tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this */

function getTotalTaxes(){
    return this.middleSalary * this.tax * this.vacancies;
}
console.log("Task#3");
console.log(getTotalTaxes.call(ukraine));
console.log(getTotalTaxes.call(latvia));
console.log(getTotalTaxes.call(litva));

/*4. Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, 
profit: number } кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. 
taxes – розраховується в залежності від вибраної країни та значення salary. profit = salary - taxes;  */

function getMySalary(){
    let mySalary = {};
    mySalary.salary = Math.round(Math.random()*500) + 1500;
    mySalary.taxes = Math.round(mySalary.salary * this.tax * 100)/100;
    mySalary.profit = Math.round((mySalary.salary - mySalary.taxes) * 100)/100;
    console.log(mySalary);
}
console.log("Task#4");
window.setInterval(getMySalary.bind(ukraine), 10000);