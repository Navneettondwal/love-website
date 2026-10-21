// ====== YAHAN APNA NAAM / HER NAME CHANGE KARO ======
const HER_NAME = "Meri Jaan";
const MY_NAME  = "Tumhara Pagal";
// ====================================================
document.querySelectorAll('[data-her]').forEach(e=>e.textContent=HER_NAME);
document.querySelectorAll('[data-me]').forEach(e=>e.textContent=MY_NAME);

const page=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('nav a').forEach(a=>{if(a.getAttribute('href')===page)a.classList.add('active')});

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.fade').forEach(el=>io.observe(el));

const emojis=['💖','💕','💗','🌸','✨','🩷'];
setInterval(()=>{
  const h=document.createElement('span');h.className='float-heart';
  h.textContent=emojis[Math.floor(Math.random()*emojis.length)];
  h.style.left=Math.random()*100+'vw';h.style.fontSize=14+Math.random()*24+'px';
  h.style.animationDuration=6+Math.random()*6+'s';
  document.body.appendChild(h);setTimeout(()=>h.remove(),12000);
},500);
function confetti(n=80){
  for(let i=0;i<n;i++){
    const c=document.createElement('span');c.className='float-heart';
    c.textContent=emojis[i%emojis.length];c.style.zIndex=99;c.style.opacity=1;
    c.style.left=Math.random()*100+'vw';c.style.fontSize=18+Math.random()*28+'px';
    c.style.animationDuration=2+Math.random()*3+'s';document.body.appendChild(c);
    setTimeout(()=>c.remove(),5500);
  }
}
