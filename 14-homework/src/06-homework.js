const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

/*1. Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів 
  для конкретного студента. Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл  */

const getSubjects = (student) => Object.keys(student.subjects).map((item) =>
    item.charAt(0).toUpperCase() + item.slice(1).toLowerCase().split("_").join(" "));

const subjectList = getSubjects(students[0]);
// console.log(subjectList);

/*2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого 
студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку.*/

function getAverageMark(student){
    let marksArray = [];
    Object.values(student.subjects).forEach((item) => marksArray.push(...item));
    const total = marksArray.reduce((acc, item) => acc + item, 0);
    const averageMark = Math.round(total/marksArray.length*100)/100;
    return averageMark;
}
const averageMark = getAverageMark(students[0]);
// console.log(averageMark);

/*3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – 
яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). 
ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.*/

function getStudentInfo(student){
    const studentInfo = {};
    studentInfo.course = student.course;
    studentInfo.name = student.name;
    studentInfo.averageMark = getAverageMark(student);
    return studentInfo;
}
const studentInfo = getStudentInfo(students[0]);
// console.log(studentInfo);

/*4. Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – 
яка повертає імена студентів у алфавітному порядку. */

function getStudentsNames(students){
    let namesArray = [];
    students.forEach((student) => namesArray.push(student.name));
    namesArray.sort();
    return namesArray;
}
const studentsNames = getStudentsNames(students);
// console.log(studentsNames);

/*5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку 
по показнику середньої оцінки.  */

function getBestStudent(students){
    let bestStudentIndex;
    let bestAverageMark = 0;
    for(let i = 0; i < students.length; i++){
        if(getAverageMark(students[i]) > bestAverageMark){
            bestAverageMark = getAverageMark(students[i]);
            bestStudentIndex = i;
        }
    }
    return students[bestStudentIndex].name;
}
const bestStudent = getBestStudent(students);
// console.log(bestStudent);

/*6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, 
в якому ключі це букви у слові, а значення – кількість їх повторень.*/

export function calculateWordLetters(word){
    let result = {};
    let counter = 0;
    for(let i = 0; i < word.length; i++){
        if(result[word[i]]) continue;
        counter = word.split("").reduce((acc, letter) => {
            if(letter === word[i]){
                return acc + 1;
            } else {
                return acc;
            }
        }, 0);
        result[word[i]] = counter;
    }
    return result;
}
const wordLetters = calculateWordLetters("test");
// console.log(wordLetters);