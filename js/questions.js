// ====== APNE QUESTIONS YAHAN BADLO ======
const questions=[
 {q:"Kya mansi mai tujhee MINE bula sakta hu? 🥺",yes:"Haan, obviously 😌",reaction:"Mujhe pata tha! 😍"},
 {q:"Kya tu Mansi navneet ki baby hai? 💕",yes:"Yesss❤️",reaction:"Baby toh tu hai ik! 🥰"},
 {q:"Mansi I likee youuu ! Something something ? 🫶",yes:" Yes Navneet something something! 💍",reaction:"something something too 🔒💖"},
 {q:" Will you go on a date with me mansi ?🍕",yes:"Done! 😋",reaction:"Okayyy lets goo 🎉"},
 {q:" Kya Mansi teri taraf se mai haan samjhooo ?",yes:"Yesssss! 😋",reaction:"Thank you Mansi Love youuu!!!"},
];
const noTexts=["No 😢","Pakka? 🥺","Soch lo na 😭","Please 🥹","Dil tut jayega 💔","Mat karo na 😿","Ye button bhaag gaya 🏃"];
// ========================================
let i=0,tries=0;
const box=document.getElementById('qbox'),bar=document.getElementById('bar');

function show(){
  tries=0;
  const cur=questions[i];
  bar.style.width=(i/questions.length*100)+'%';
  box.innerHTML=`<h2 class="pop">${cur.q}</h2>
   <div class="q-btns"><button class="btn" id="yes">${cur.yes}</button>
   <button class="btn ghost" id="no">${noTexts[0]}</button></div>`;
  const yes=document.getElementById('yes'),no=document.getElementById('no');
  yes.onclick=()=>{confetti(25);next(cur)};
  const dodge=e=>{
    e.preventDefault();tries++;
    no.textContent=noTexts[Math.min(tries,noTexts.length-1)];
    no.style.position='fixed';no.style.zIndex=60;
    no.style.left=Math.random()*(innerWidth-no.offsetWidth-20)+10+'px';
    no.style.top=Math.random()*(innerHeight-no.offsetHeight-100)+80+'px';
    yes.style.transform=`scale(${Math.min(1+tries*.12,2)})`;
  };
  ['mouseenter','touchstart','click'].forEach(ev=>no.addEventListener(ev,dodge));
}
function next(cur){
  i++;
  if(i>=questions.length){finish();return}
  box.innerHTML=`<h2 class="pop">${cur.reaction}</h2>`;
  bar.style.width=(i/questions.length*100)+'%';
  setTimeout(show,1400);
}
function finish(){
  bar.style.width='100%';confetti(150);
  box.innerHTML=`<div class="big-heart">💖</div>
   <h1 class="pop">Yaaay! Pata tha tum yes hi bologi 😘</h1>
   <p>Ab chalo meri taraf se ek chhoti si letter padho...</p>
   <a class="btn" href="letter.html">Letter kholo 💌</a>`;
  setInterval(()=>confetti(20),2500);
}
show();
