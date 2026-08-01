const roles = [
"C++ Developer",
"Software Engineer",
"Python Developer",
"Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;

function typeEffect(){

const currentRole = roles[roleIndex];

document.getElementById("typing").textContent =
currentRole.substring(0,charIndex);

charIndex++;

if(charIndex > currentRole.length){

roleIndex++;

charIndex = 0;

if(roleIndex >= roles.length){
roleIndex = 0;
}

setTimeout(typeEffect,1000);
}
else{
setTimeout(typeEffect,100);
}
}

typeEffect();