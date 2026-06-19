function getStudents() {
    return JSON.parse(
        localStorage.getItem("students")
    ) || [];
}

function saveStudents(data) {
    localStorage.setItem(
        "students",
        JSON.stringify(data)
    );
}

// Sample student object

const sampleStudent = {
    id: 1,
    name: "Rusandi",
    email: "rusandi@gmail.com",

    skills: [
        "Python",
        "SQL",
        "UI Design"
    ],

    availability: [
        "Monday Morning",
        "Tuesday Evening"
    ],

    rolePreferences: [
        "Team Leader",
        "Business Analyst"
    ],

    workload: 30,

    evidence: [],

    teamId: null
};
let students = getStudents();

students.push(sampleStudent);

saveStudents(students);

console.log("Student saved!");
function getStudents() {

    let students = JSON.parse(
        localStorage.getItem("students")
    );

    if (!students) {

        students = [
            {
                id: 1,
                name: "Rusandi",
                email: "rusandi@gmail.com",

                skills: ["Python", "SQL", "UI Design"],

                availability: [
                    "Monday Morning",
                    "Tuesday Evening"
                ],

                rolePreferences: [
                    "Team Leader",
                    "Business Analyst"
                ],

                workload: 30,

                evidence: [],

                teamId: null
            }
        ];

        localStorage.setItem(
            "students",
            JSON.stringify(students)
        );
    }

    return students;
}