const start=document.getElementById("start");
const music=document.getElementById("music");
const love=document.getElementById("love");

start.onclick=()=>{

music.play();

love.style.display="block";

start.parentElement.style.display="none";

typing();

}

const text="mass bersyukurr bangett tauukk bisa kenal sama arummm. arumm tuhh lucuuuu, cantikkkkk, baikkkk, dan jadii alasann mass untukk bisaa hidup lebihh lamaa dimuka bumii. 💚";

let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,40);

}

}

const yes=document.getElementById("yes");
const no=document.getElementById("no");

yes.onclick=()=>{

document.querySelector(".gallery").style.display="block";

document.querySelector(".letter").style.display="block";

document.querySelector(".ending").style.display="block";

confetti();

}

no.onmouseover=()=>{

no.style.position="absolute";

no.style.left=Math.random()*80+"%";

no.style.top=Math.random()*80+"%";

}

function heart(){

let h=document.createElement("div");

h.className="heart";

h.innerHTML="💚";

h.style.left=Math.random()*100+"vw";

h.style.animationDuration=Math.random()*3+2+"s";

document.body.appendChild(h);

setTimeout(()=>{

h.remove();

},5000);

}

setInterval(heart,300);

function confetti(){

for(let i=0;i<150;i++){

setTimeout(heart,i*30);

}

}