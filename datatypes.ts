let lname: string = "Test";

let age: number;

age = 10;

let isValid: boolean = false;

console.log(isValid)

// let varname:any;

// varname="hjghj";
// varname=10;
// varname  = new Date('10-nov-2987');


let unionType: string | number | boolean;


unionType = "ghjdsgf";
unionType = 56;


let student = [];
let studentList = new Array<string>();


student.push(
    {
        id: 1,
        name: 'test',
        address: 'mumbai'
    },
    {
        id: 2,
        name: 'test2',
        address: 'mumbai'
    }
);

student.forEach(function (stud) {
    console.log(stud.name);
    console.log(stud.id);
});

student.filter(function (stud) {
    if (stud.id > 1)
        return stud
})

let newStudnt = student.filter((stud) => stud.id > 1);

console.log(newStudnt);

for (let stud of student) {
    console.log(stud);
}

for (let stud in student) {
    console.log(stud);
}


studentList.push('test', 'test2');
