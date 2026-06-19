function login(){

let role =
document.getElementById(
"userRole"
).value;

if(role === "faculty"){

let password =
document.getElementById(
"password"
).value;

if(password !== "admin123"){

alert(
"Incorrect Faculty Password"
);

return;

}

localStorage.setItem(
"facultyLoggedIn",
"true"
);

window.location =
"faculty.html";

return;

}

let userId =
document.getElementById(
"userId"
).value;

let students =
JSON.parse(
localStorage.getItem(
"students"
)
) || [];

let student =
students.find(
s => s.studentId === userId
);

if(!student){

alert(
"Student ID not found"
);

return;

}

localStorage.setItem(
"currentStudent",
JSON.stringify(student)
);

window.location =
"student-dashboard.html";

}