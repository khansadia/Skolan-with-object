// **** 1 **** //
let OxhagSchool ={
    name:'OxhagSchool',
    address: 'Helsigngatan 41',
    Postcode: 16432,
    City: 'Kista',
    Students: [],
    Teachers: [],
    subjects: [],
    addSubject: function (subject){
        this.subjects.push(subject);
    },
    addSubject: function (teacher){
        this.teachers.push(teacher);
    },
    addStudent: function (student){
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
    subject: [],
    addSubject: function (subject){
        this.subjects.push(subject);
    },

};

let Saad = {
    name:"Saad",
    age: 30,
    gender: "Male",
    subject: [],
    addSubject: function (subject){
        this.subjects.push(subject);
    },

};

let Sadia = {
    name:"Sadia",
    age: 28,
    gender: "Female",
    subject: [],
    addSubject: function (subject){
        this.subjects.push(subject);
    },

};

let Adam = {
    name:"Adam",
    age: 18,
    gender: "Male",
    subject: [],
    addSubject: function (subject){
        this.subjects.push(subject);
    },

};
let Aena = {
    name:"Aena",
    age: 18,
    gender: "Female",
    subject: [],
    addSubject: function (subject){
        this.subjects.push(subject);
    },

};
// Skapa två stycken lärare med namnet som variabel och egenskaperna name och subjects som en tom array.
let Tomas = {
    name:"Tomas",
    subject: [],
    addSubject: function (subject){
        this.subjects.push(subject);
    }
};
let Niklas = {
    name:"Niklas",
    subject: [],
    addSubject: function (subject){
        this.subjects.push(subject);
    }
};
//Skriv en kodrad där du lägger till ett ämne i en lärares ämnesarray. push() eller unshift() Kommer du ihåg skillnaden på dem två?
 Niklas.subject.push(matematik);
 console.log(Niklas);
 console.log(Niklas.subject);

Tomas.subject.push(programming);
console.log(Tomas);
console.log(Tomas.subject);

Aena.subject.push(matematik);
console.log(Aena); 
// eller kan man göra så
/* matematik.teachers = Niklas;
console.log(matematik);
const addSubjectToTeacher = (_subject, _teacher) => {
    _teacher.subjects.push(_subject);
     _subject.teachers = _teacher
 }
 addSubjectToTeacher(programming, Tomas);

 console.log(Niklas); */
 