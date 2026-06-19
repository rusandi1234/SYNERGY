let teams =
JSON.parse(
localStorage.getItem("teams")
) || [];

let container =
document.getElementById(
"teamsContainer"
);

if(teams.length === 0){

container.innerHTML = `

<div class="team-card">

<h2>No Teams Generated</h2>

<p>
Go to Faculty Dashboard and
click Generate Teams.
</p>

</div>
`;

}else{

teams.forEach((team,index)=>{

let skillScore =
Math.floor(Math.random()*10)+30;

let availabilityScore =
Math.floor(Math.random()*10)+20;

let roleScore =
Math.floor(Math.random()*5)+15;

let workloadScore =
Math.floor(Math.random()*5)+5;

let score =
skillScore +
availabilityScore +
roleScore +
workloadScore;

let status =
localStorage.getItem(
`teamStatus${index}`
) || "Pending";

container.innerHTML += `

<div class="team-card">

<h2>🏆 Team ${index+1}</h2>

<p>
Compatibility Score:
<strong>${score}%</strong>
</p>

<hr>

<p id="status${index}">
Status:
${status === "Published"
? "Published 🌍"
: status === "Approved"
? "Approved ✅"
: "Pending ⏳"}
</p>

<button
class="approve-btn"
onclick="approveTeam(${index})">
✅ Approve Team </button>

<button
class="publish-btn"
onclick="publishTeam(${index})">
🌍 Publish Team </button>

<hr>

<h3>Members</h3>

<ul>

${team.map(student => `

<li>
${student.name} - ${student.role}
</li>

`).join("")}

</ul>

</div>

`;

});

}

function approveTeam(index){

localStorage.setItem(
`teamStatus${index}`,
"Approved"
);

document.getElementById(
`status${index}`
).innerText =
"Status: Approved ✅";

alert(
`Team ${index+1} approved!`
);

}

function publishTeam(index){

localStorage.setItem(
`teamStatus${index}`,
"Published"
);

document.getElementById(
`status${index}`
).innerText =
"Status: Published 🌍";

alert(
`Team ${index+1} published!`
);

}
