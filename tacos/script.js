const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// ===== ESTRELLAS =====
const stars = [];

for (let i = 0; i < 800; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2,
        a: Math.random(),
        s: Math.random() * 0.02
    });
}

// ===== PALABRAS =====
const words = [
"❤️ Te amo","💖 Mi vida","🌙 Mi luna","✨ Mi universo","💕 Siempre tú",
"💍 Amor eterno","🌹 Mi corazón","☀️ Mi sol","💫 Mi destino",
"😍 Hermosa","💘 Eres todo","🤍 Contigo","🥰 Mi felicidad",
"❤️ Por siempre","🌌 Mi galaxia","✨ Eres única","💖 Mi persona",
"🌠 Infinito","💕 Te elegiría otra vez","💞 Mi hogar"
];

const orbit = [];

for(let i=0;i<250;i++){

    orbit.push({

        angle:Math.random()*Math.PI*2,

        radius:100+Math.random()*420,

        speed:0.0005+Math.random()*0.002,

        text:words[Math.floor(Math.random()*words.length)]

    });

}

// ===== DIBUJAR =====

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

// estrellas

for(let s of stars){

ctx.beginPath();

ctx.fillStyle="rgba(255,255,255,"+(0.5+s.a)+")";

ctx.arc(s.x,s.y,s.r,0,Math.PI*2);

ctx.fill();

s.a+=s.s;

if(s.a>1||s.a<0)s.s*=-1;

}

// palabras

const cx=canvas.width/2;
const cy=canvas.height/2;

ctx.font="18px Poppins";

ctx.textAlign="center";

for(let p of orbit){

p.angle+=p.speed;

const x=cx+Math.cos(p.angle)*p.radius;

const y=cy+Math.sin(p.angle)*p.radius;

ctx.fillStyle="rgba(255,180,255,.9)";

ctx.shadowBlur=15;

ctx.shadowColor="#ff66ff";

ctx.fillText(p.text,x,y);

}

requestAnimationFrame(draw);

}

draw();

// ===== CARTA =====

const hole=document.getElementById("blackHole");
const letter=document.getElementById("letter");
const close=document.getElementById("close");

hole.onclick=()=>{

letter.style.display="block";

}

close.onclick=()=>{

letter.style.display="none";

}

// ===== ESTRELLAS FUGACES =====

setInterval(()=>{

const star=document.createElement("div");

star.style.position="fixed";

star.style.left=Math.random()*window.innerWidth+"px";

star.style.top="-20px";

star.style.width="3px";

star.style.height="120px";

star.style.background="linear-gradient(white,transparent)";

star.style.transform="rotate(35deg)";

star.style.opacity="0.8";

star.style.pointerEvents="none";

star.style.zIndex="2";

star.style.transition="2s linear";

document.body.appendChild(star);

setTimeout(()=>{

star.style.transform="translate(400px,600px) rotate(35deg)";

star.style.opacity="0";

},50);

setTimeout(()=>{

star.remove();

},2100);

},1200);