let teams =
JSON.parse(
localStorage.getItem("teams")
) || [];

let container =
document.getElementById(
"conflictContainer"
);

if(teams.length === 0){

container.innerHTML = `
<div class="conflict-card">
<h2>No Teams Found</h2>
<p>
Generate teams first.
</p>
</div>
`;

}

teams.forEach((team,index)=>{

let conflicts = [];

let leaders =
team.filter(
student =>
student.role === "Team Leader"
);

if(leaders.length > 1){

conflicts.push(
"Multiple Team Leaders"
);

}

let developers =
team.filter(
student =>
student.role === "Developer"
);

if(developers.length === 0){

conflicts.push(
"No Developer Assigned"
);

}

if(conflicts.length === 0){

container.innerHTML += `

<div class="success-card">

<h2>
✅ Team ${index+1}
</h2>

<p>
No conflicts detected.
</p>

</div>

`;

}
else{

container.innerHTML += `

<div class="conflict-card">

<h2>
⚠ Team ${index+1}
</h2>

<ul>

${conflicts.map(
c => `<li>${c}</li>`
).join("")}

</ul>

<p>
Severity: High
</p>

</div>

`;

}

});