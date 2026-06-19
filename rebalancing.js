let container =
document.getElementById(
"recommendations"
);

let students =
JSON.parse(
localStorage.getItem("students")
) || [];

if(students.length > 0){

let student =
students[0];

container.innerHTML += `

<div class="team-card">

<h2>
🔄 Team Rebalancing Recommendation
</h2>

<p>
Issue:
Missing Designer
</p>

<p>
Suggested Student:
<strong>
${student.name}
</strong>
</p>

<p>
Skill:
${student.skill}
</p>

<p>
Availability:
${student.availability}
</p>

<p>
Reason:
High compatibility and suitable availability.
</p>

<button
class="approve-btn"
onclick="approveRecommendation()">

Approve Recommendation

</button>

<p id="approvalStatus">
Status: Pending ⏳
</p>
</div>

`;

}
function approveRecommendation(){

document.getElementById(
"approvalStatus"
).innerHTML =
"Status: Approved ✅";

alert(
"Recommendation Approved!"
);

}
window.onload = function(){

if(
localStorage.getItem(
"rebalancingApproved"
) === "true"
){

let status =
document.getElementById(
"approvalStatus"
);

if(status){

status.innerHTML =
"Status: Approved ✅";

}

}

};