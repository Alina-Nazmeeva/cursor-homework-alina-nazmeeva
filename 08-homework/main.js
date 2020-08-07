class Student{
    
    constructor(university, course, fullName){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this._marks = [];
        this._active = true;
    }

    getInfo(){
        return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
    }

    get marks(){
        if(this._active) return this._marks;
        else return null;  
    }

    set marks(mark){
        if(this._active){
            this._marks.push(mark);
            return this._marks;
        }
        else return null; 
    }

    getAverageMark(){
        return this._marks.reduce((acc, mark) => acc + mark, 0) / this._marks.length;
    }

    dismiss(){
        this._active = false;
    }

    recover(){
        this._active = true;
    }
}

class BudgetStudent extends Student {
    constructor(university, course, fullName){
        super(university, course, fullName);
        this._scholarship = 1400;
    }

    getScholarship(){
        if(this.getAverageMark() >= 4 && this._active){
            console.log("Ви отримали", this._scholarship, " грн стипендії");
        }        
    }
}

const previousMarks = [5, 4, 4, 5];

const student = new Student("НаУКМА", 5, "Іванов Іван");
for(let mark of previousMarks){
    student.marks = mark;
}
console.log("Info: ", student.getInfo());
console.log("Marks: ", student.marks);
student.marks = 5;
console.log("Marks: ", student.marks);
console.log("Average mark: ", student.getAverageMark());
student.dismiss();
student.marks = 5;
console.log('Cпроба поставити і вивести оцінки "виключеному" студенту:');
console.log("Marks: ", student.marks);
console.log('Поновлюємо студента і виводимо його оцінки:');
student.recover();
console.log("Marks: ", student.marks);

const budgetStudent = new BudgetStudent("НаУКМА", 6, "Назьмєєва Аліна");
for(let mark of previousMarks){
    budgetStudent.marks = mark;
}
console.log(budgetStudent.getInfo());
console.log("Marks: ", budgetStudent.marks);
budgetStudent.getScholarship();