const words = [
"Web Developer",
"IT Student",
"Aspirant Data Analyst",
"Problem Solver"
];

let i = 0;
let j = 0;

function type(){

document.getElementById("typing")
.innerHTML = words[i].slice(0,j++);

if(j > words[i].length){
j = 0;
i = (i + 1) % words.length;
}

setTimeout(type,150);
}

type();

document
.getElementById("theme-btn")
.addEventListener("click",()=>{

document.body.classList.toggle("light");

});