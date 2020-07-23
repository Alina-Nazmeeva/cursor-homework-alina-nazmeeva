const students = ["Саша", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// Розділіть студентів на пари для рoботи над проєктом. 

function getPairs(students){
    const pairs = [];
    for(let i = 0; i < students.length/2; i++){
        pairs[i] = [students[i], students[students.length - 1 - i]];
    }
    return pairs;
}
const pairs = getPairs(students);
console.log(pairs);

// Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. 

function getProjects(pairs, themes){
    const projects = [];
    for(let i = 0; i < pairs.length; i++){
        projects[i] = [pairs[i].join(" і "), themes[i]];
    }
    return projects;
}
const projects = getProjects(pairs, themes);
console.log(projects);

//Зіставте оцінки(marks) зі студентом(students)

function getMarks(students, marks){
    const achievements = [];
    for(let i = 0; i < students.length; i++){
        achievements[i] = [students[i], marks[i]];
    }
    return achievements;
}
const achievements = getMarks(students, marks);
console.log(achievements);

// Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): 
// [["Саша і Олена", "Теорія автоматів", 5], [...], [...]]

function randomMark(){
    return Math.round(Math.random()*4) + 1;
}

function getProjectMarks(projects){
    const randomMarks = [];
    for(let i = 0; i < projects.length; i++){
        randomMarks[i] = [projects[i][0], projects[i][1], randomMark()];
    }
    return randomMarks;
}
const randomMarks = getProjectMarks(projects);
console.log(randomMarks);