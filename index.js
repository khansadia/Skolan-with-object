// **** 1 **** //
let OxhagSchool ={
    name:'OxhagSchool',
    address: 'Helsigngatan 41',
    Postcode: 16432,
    City: 'Kista',
    Students: [],
    teachers: [],
    subjects: [],
    addSubject: function (subject){
        this.subjects.push(subject);
    },
    addTeacher: function (teacher){
        this.teachers.push(teacher);
    },
    
    addStudent: function(student){
        this.students.push(student);
    },
    removeStudent: function (student) {
        this.students = this.students.filter((x) => x !== student);
    }
    };

//let matematik = {/*ämnets egenskaper här*/}
let matematik = {
    name: "matematik",
    students: [],
    teachers: {},
    addTeacher: function (teacher){
        this.teachers = teacher;
    },
    addStudent: function (student){
        this.students.push(student);
    },
    removeStudent: function (student) {
        this.students = this.students.filter((x) => x !== student);
    }
    
};
let programming = {
    name: "programming",
    students: [],
    teachers: {},
    addTeacher: function (teacher){
        this.teachers = teacher;
    },
    addStudent: function (student){
        this.students.push(student);
    },
    removeStudent: function (student) {
        this.students = this.students.filter((x) => x !== student);
    }
    
};
let svenska = {
    name: "svenska",
students: [],
teachers: {},
addTeacher: function (teacher){
    this.teachers = teacher;
},
addStudent: function (student){
    this.students.push(student);
},
removeStudent: function (student) {
    this.students = this.students.filter((x) => x !== student);
}
};
//Skapa fem stycken studenter, där namnet på studenten motsvara variabeln. Egenskaperna ska vara name, age, gender och subjects som en tom array.
let Khan = {
    name:"Khan",
    age: 35,
    gender: "Female",
    subjects: [],
    addSubject: function (subject){
        this.subjects.push(subject);
    },

};

let Saad = {
    name:"Saad",
    age: 30,
    gender: "Male",
    subjects: [],
    addSubject: function (subject){
        this.subjects.push(subject);
    },

};

let Sadia = {
    name:"Sadia",
    age: 28,
    gender: "Female",
    subjects: [],
    addSubject: function (subject){
        this.subjects.push(subject);
    },

};

let Adam = {
    name:"Adam",
    age: 18,
    gender: "Male",
    subjects: [],
    addSubject: function (subject){
        this.subjects.push(subject);
    },

};
let Aena = {
    name:"Aena",
    age: 18,
    gender: "Female",
    subjects: [],
    addSubject: function (subject){
        this.subjects.push(subject);
    },

};
// Skapa två stycken lärare med namnet som variabel och egenskaperna name och subjects som en tom array.
let Tomas = {
    name:"Tomas",
    subjects: [],
    addSubject: function (subject){
        this.subjects.push(subject);
    }
};
let Niklas = {
    name:"Niklas",
    subjects: [],
    addSubject: function (subject){
        this.subjects.push(subject);
    }
};
//Skriv en kodrad där du lägger till ett ämne i en lärares ämnesarray. push() eller unshift() Kommer du ihåg skillnaden på dem två?
 Niklas.subjects.push(matematik);
 console.log(Niklas);
 console.log(Niklas.subject);

Tomas.subjects.push(programming);
console.log(Tomas);
console.log(Tomas.subject);

Niklas.addSubject = function(subject){
    this.subjects.push(this.subjects)
}
Niklas.addSubject(svenska);
console.log(Niklas);
console.log(Niklas.subject);

Aena.subjects.push(matematik);
console.log(Aena); 
// eller kan man göra så
/* matematik.teachers = Niklas;
console.log(matematik);
const addSubjectToTeacher = (_subjects, _teacher) => {
    _teacher.subjects.push(_subjects);
     _subjects.teachers = _teacher
 }
 addSubjectToTeacher(programming, Tomas);

 console.log(Niklas); */


 // ---Adding Teachers and Students in a School
 //OxhagSchool.addTeacher(Niklas);
 //OxhagSchool.addTeacher(Tomas);
 //OxhagSchool.addStudent(Khan);
 //OxhagSchool.addStudent(Saad);
 //OxhagSchool.addStudent(Sadia);
  //OxhagSchool.addStudent(Adam);
 //OxhagSchool.addStudent(Aena);
 // ---Adding Teachers and Students in a Subjects
 //matematik.addTeacher(Niklas);
// matematik.addStudent(Khan);
// matematik.addStudent(Adam);
// science.addTeacher(Tomas);
// science.addStudent(Aena);
// science.addStudent(Khan);
// english.addTeacher(Niklas);
// english.addStudent(Sadia);
// english.addStudent(Saad);
// english.addStudent(Aena);
//Niklas.addSubject(matematik);
// Niklas.addSubject(svenska);
// Tomas.addSubject(svenska);
// Khan.addSubject(matematik);
 //Khan.addSubject(programming);
// Aena.addSubject(matematik);
// Adam.addSubject(svenska);
// Saad.addSubject(svenska);
// Khan.addSubject(svenska);
 //Adam.addSubject(programming);

console.log(OxhagSchool);
 console.log(Niklas.subjects);
//console.log(Khan.subjects);
 console.log(matematik.teachers);
 console.log(programming.students);

 // To remove student--------
 //OxhagSchool.removeStudent(Khan);
  //matematik.removeStudent(Khan);
  //programming.removeStudent(Adam);
  //console.log(OxhagSchool);
 //console.log(programming);


 //Ny bygger vi på det lite. För att undvika att behöva anropa massa metoder i konsolen när vi startar om programmet (vilket händer vid varje redigering av script-filen) så kan vi längst ner i script-filen skapa 
OxhagSchool.Students.push(Khan, Saad, Sadia, Adam, Aena);
OxhagSchool.subjects.push(matematik, svenska, programming);
OxhagSchool.teachers.push(Niklas, Tomas);

const assignSubjectToStudentAndTeacher = (_subject, _student, _teacher) => {
    _student.addSubject(_subject);
    _subject.addStudent(_student);
    _teacher.addSubject(_subject);
    _subject.addTeacher(_teacher);
}
assignSubjectToStudentAndTeacher(matematik, Khan, Niklas);
assignSubjectToStudentAndTeacher(matematik, Saad, Niklas);
assignSubjectToStudentAndTeacher(programming, Aena, Niklas);
assignSubjectToStudentAndTeacher(matematik, Adam, Niklas);
assignSubjectToStudentAndTeacher(programming, Saad, Niklas);
assignSubjectToStudentAndTeacher(svenska, Sadia, Tomas);
assignSubjectToStudentAndTeacher(svenska, Adam, Tomas);

console.log(OxhagSchool);
//---To displayAllStudents  Names---

const displayAllStudents = () => {
    for (key in OxhagSchool.students){
        console.log(OxhagSchool.students[key]);
    }
}

const displayStudentsNames = () => {
    for (key in OxhagSchool.students){
        console.log(OxhagSchool.students[key].name);
    }
}

 displayAllStudents();
 displayStudentsNames();


// --- Skapa nu fler funktioner, *displayAllSubjectsOfStudent(student)*, *displayAllStudentsEnlistedToSubject(subject)*, *displayAllTeachers*.
 // To display All Teachers
const displayAllTeachers = () => {
    for (key in OxhagSchool.teachers){
        console.log(OxhagSchool.teachers[key]);
    }
}
displayAllTeachers();

const displayAllSubjectsOfStudent = (_student) => {
    for (key in _student){
        if (key === 'subjects'){
            console.log(_student[key]);
        }
    }
}
displayAllSubjectsOfStudent(Saad);


const displayAllStudentsEnlistedToSubject = (_subject) => {
    for (key in _subject){
        if (key === 'students'){
            console.log(_subject[key]);
        }
    }
}
displayAllStudentsEnlistedToSubject(svenska);


 // --To show the Grades f students--

 const grades = {
    marks: [],
    addSubject: function (subject) {
        this.subjects.push(subject);
    },
    addStudent: function (student) {
        this.students.push(student);
    },
    addGrade: function(student, subject, grade){
        this.marks.push(`${student}'s grade in ${subject} is ${grade}`);
    }
};

grades.addGrade(Khan.name, matematik.name, 78);
grades.addGrade(Saad.name, programming.name, 69);
grades.addGrade(Aena.name, programming.name, 82);
grades.addGrade(Adam.name, svenska.name, 76);
console.log(grades.marks);


 
 