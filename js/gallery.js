const cards=[...document.querySelectorAll('.polaroid')];
const lb=document.getElementById('lb'),stage=document.getElementById('lbs'),cap=document.getElementById('lbc');
let cur=0;
// videos grid me tabhi chalein jab screen pe dikhein
const vio=new IntersectionObserver(es=>es.forEach(e=>{
  const v=e.target; if(e.isIntersecting){v.play().catch(()=>{})}else{v.pause()}
}),{threshold:.4});
document.querySelectorAll('.polaroid video').forEach(v=>vio.observe(v));

function open(i){
  cur=(i+cards.length)%cards.length;
  const c=cards[cur],src=c.dataset.src;
  stage.innerHTML=c.dataset.type==='vid'
    ?`<video src="${src}" controls autoplay playsinline loop></video>`
    :`<img src="${src}" alt="">`;
  cap.textContent=c.querySelector('p').textContent;
  lb.classList.add('open');lb.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
}
function close(){lb.classList.remove('open');lb.setAttribute('aria-hidden','true');stage.innerHTML='';document.body.style.overflow=''}
cards.forEach((c,i)=>c.addEventListener('click',()=>open(i)));
document.getElementById('lbx').onclick=close;
document.getElementById('lbp').onclick=()=>open(cur-1);
document.getElementById('lbn').onclick=()=>open(cur+1);
lb.addEventListener('click',e=>{if(e.target===lb||e.target===stage)close()});
addEventListener('keydown',e=>{
  if(!lb.classList.contains('open'))return;
  if(e.key==='Escape')close();if(e.key==='ArrowLeft')open(cur-1);if(e.key==='ArrowRight')open(cur+1);
});
// swipe (mobile)
let sx=0;
lb.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});
lb.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>60)open(d<0?cur+1:cur-1)});
