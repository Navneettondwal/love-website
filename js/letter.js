// ====== APNI LETTER YAHAN LIKHO ======
const text=`Dear Mansi,

I dont know how to say this buy mansi yaar dhere dhere , bht zada close hota jaa raha hu mai tere
and sochta hu tere baare mai ki mansi kya kar rahi hogi kya nhi ab jab baat hogi maansi se , roz subha uth kar tereko good morning msg krnaa , subha call pr tere se baat krnaa , office jakr tera mujhe batana ki mai office aa gyi hu mera tereko update denaa , kya kiya kya nhi video call pr tere se baat krnaa tere ups tere lows mai tere sath sab ab bht achaa lagta haii bht zadaa , i hope mai tujhe woh sara pyaar de saku jo tu deserve krti haii and always remember there is a boy name navneet jo tere life mai hamehsa reheha tereko hasne ke liyee tere dhuk mai tera sath dene ke liyee , lame jokes bolne ke liyee , tujhee irrirate ragebaite krne ke liyee sorry sorry !! 
TU jesi h bht badiyaa haiii , tu jese hi mujhee wese hi tuu pasand h bht zadaa , and never doubt yourself , you are the best thing that happend to meee best best best , bollywood seen bhi ho hi gya h apne sath kurte mai tera kadaa aatak na you know Gods plan babyyy , and i will always remember that hug and that moment always and alwaysss it will be special one date 20th september and 15 october i will remember the date always and bakki toh you know you are special to me and you are my priority now and my princess and my GUDDA !!! Love you mansi always 💖

Mai perfect nhi hoon but i will make sure tereko perfect rakh sakuu hamehsaaa , kabhi tujhe unwanted , taken for granted , unvalued feel nhi hone dunga and always tere sath rahu ga

Love you!!!

I love you, today, tommorrow, always. 💖

Always yours,
Navneet`;
// =====================================
const el=document.getElementById('letter');let k=0;
function type(){
  el.classList.add('cursor');
  if(k<text.length){el.textContent+=text[k++];setTimeout(type,45)}
  else{el.classList.remove('cursor');document.getElementById('after').classList.add('show')}
}
setTimeout(type,800);
