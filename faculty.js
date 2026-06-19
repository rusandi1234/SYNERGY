let students =
JSON.parse(
localStorage.getItem("students")
) || [];

document.getElementById(
"studentCount"
).innerText = students.length;

function loadStudents(){

let table =
document.getElementById(
"facultyStudentTable"
);

table.innerHTML = "";

students.forEach(student=>{

table.innerHTML += `

<tr>

<td>${student.studentId}</td>
<td>${student.name}</td>
<td>${student.degree}</td>
<td>${student.skill}</td>
<td>${student.availability}</td>
<td>${student.role}</td>
<td>
<a href="${student.evidence}" target="_blank">
View Evidence
</a>
</td>

</tr>

`;

});

}

loadStudents();

function generateTeams(){

let teams = [];

for(let i=0;i<students.length;i+=4){

let team =
students.slice(i,i+4);

teams.push(team);

}

localStorage.setItem(
"teams",
JSON.stringify(teams)
);

document.getElementById(
"teamCount"
).innerText =
teams.length;

alert(
"Teams Generated Successfully!"
);

window.location =
"teams.html";

}
function logoutFaculty(){

localStorage.removeItem(
"facultyLoggedIn"
);

window.location =
"login.html";

}