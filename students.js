let students =
JSON.parse(
localStorage.getItem("students")
) || [];

document
.getElementById("studentForm")
.addEventListener(
"submit",
function(e){

e.preventDefault();

const student = {

studentId:
document.getElementById("studentId").value,

name:
document.getElementById("name").value,

degree:
document.getElementById("degree").value,

skill:
document.getElementById("skill").value,
skillLevel:
document.getElementById(
"skillLevel"
).value,

evidence:
document.getElementById(
"evidence"
).value,
availability:
document.getElementById("availability").value,

role:
document.getElementById("role").value

};

students.push(student);

localStorage.setItem(
"students",
JSON.stringify(students)
);

document
.getElementById("studentForm")
.reset();

displayStudents();

});

function displayStudents(){

let table =
document.getElementById(
"studentTable"
);

table.innerHTML = "";

students.forEach((student,index)=>{

table.innerHTML += `

<tr>

<td>${student.studentId}</td>
<td>${student.name}</td>
<td>${student.degree}</td>
<td>${student.skill}</td>
<td>${student.availability}</td>
<td>${student.role}</td>

<td>

<button class="edit-btn"
onclick="editStudent(${index})">
Edit </button>

<button class="delete-btn"
onclick="deleteStudent(${index})">
Delete </button>

</td>

</tr>

`;

});

}

function deleteStudent(index){

if(confirm(
"Delete this student?"
)){

students.splice(index,1);

localStorage.setItem(
"students",
JSON.stringify(students)
);

displayStudents();

}

}

function editStudent(index){

let student =
students[index];

document.getElementById(
"studentId"
).value =
student.studentId;

document.getElementById(
"name"
).value =
student.name;

document.getElementById(
"degree"
).value =
student.degree;

document.getElementById(
"skill"
).value =
student.skill;

document.getElementById(
"availability"
).value =
student.availability;

document.getElementById(
"role"
).value =
student.role;

students.splice(index,1);

localStorage.setItem(
"students",
JSON.stringify(students)
);

displayStudents();

}

function resetStudents(){

if(confirm(
"Delete ALL students?"
)){

students = [];

localStorage.removeItem(
"students"
);

displayStudents();

}

}

displayStudents();
