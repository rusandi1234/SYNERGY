function registerUser(){

let name =
document.getElementById("name").value;

let email =
document.getElementById("email").value;

let role =
document.getElementById("role").value;

let students =
JSON.parse(localStorage.getItem("students")) || [];

students.push({
    name:name,
    email:email,
    role:role
});

localStorage.setItem(
    "students",
    JSON.stringify(students)
);

alert("Registration Successful");

window.location =
"login.html";

}

function loginUser(){

let email =
document.getElementById("email").value;

let students =
JSON.parse(localStorage.getItem("students")) || [];

let user =
students.find(
s => s.email === email
);

if(!user){

alert("User not found");

return;
}

if(user.role === "Faculty"){

window.location =
"faculty-dashboard.html";

}else{

window.location =
"student-dashboard.html";
}

}