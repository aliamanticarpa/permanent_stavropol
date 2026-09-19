(function(){
'use strict';

var C=window.CONFIG||{};

/* ===== ДАННЫЕ И ШАБЛОНЫ ===== */

/* --- Галереи --- */
var GAL_NAV='<div class="gal-nav"><button class="gal-btn g-prev" aria-label="Назад"><svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg></button><button class="gal-btn g-next" aria-label="Вперёд"><svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg></button></div>';
var galleries=C.photos?C.photos.galleries:[];
function renderGalleries(){
 var el=document.getElementById('galleries');
 if(!el)return;
 el.innerHTML=galleries.map(function(g){
  var imgs=g.images.map(function(i){
   return'<figure><span class="ph"><img src="'+i.src+'" alt="'+i.alt+'" loading="lazy"></span><figcaption>'+i.cap+'</figcaption></figure>';
  }).join('');
  return'<div class="gal-wrap"><div class="gal-head"><h3>'+g.title+'</h3><span class="g-note">листайте →</span>'+GAL_NAV+'</div><div class="gal">'+imgs+'</div></div>';
 }).join('');
}

/* --- Отзывы --- */
var reviews=[
 {tag:'Брови и губы',text:'«Делала у мастера Марьям перманент сначала бровей и потом губ. Марьям отлично подобрала цвет и технику, всё сделала очень быстро и качественно — чувствуется, что профессионал в своей сфере. Спасибо большое 😘 Буду всем вас советовать.»',name:'Анна К.',detail:'брови и губы'},
 {tag:'Брови',text:'«Очень хотела сделать татуаж бровей. Долго думала, переживала, искала мастера. Познакомились с Марьям — доверилась ей и не пожалела. Марьям очень аккуратная, внимательная. Брови получились замечательные, цвет подобран с учётом моего желания. Хожу с бровями с лета 2024 — уже 2 года, и всё хорошо. Благодарю, Марьям.»',name:'Евгения И.',detail:'брови'},
 {tag:'Из Москвы',text:'«Марьям — мой самый любимый мастер татуажа. Я делаю татуаж уже 15 лет: стрелки, губы, брови — и всё всегда на высоте. Марьям подбирает красивый цвет. От всей души рекомендую, особенно тем, кто впервые будет делать перманент. Я приезжаю к ней из Москвы! ❤️»',name:'Наталья А.',detail:'15 лет делает татуаж, приезжает из Москвы'},
 {tag:'7 лет у мастера',text:'«Уже семь лет хожу только к Марьям. Делала брови, губы и стрелки. Стрелки не выцветают уже много лет, коррекции не требуют вообще. Брови периодически обновляю — раз в 2 года примерно. Всегда всё красиво, аккуратно и стерильно. Однозначно рекомендую 👍»',name:'Анастасия Р.',detail:'7 лет у мастера'},
 {tag:'Стрелки',text:'«Делала стрелки у Марьям 13 лет назад, обновила через 2 года — до сих пор носятся прекрасно. Брови и губы делала 11 лет назад, обновляю каждые 2–3 года. Довольна результатом. По сей день хожу к Марьям. Очень опытный мастер!»',name:'Надежда П.',detail:'стрелки 13 лет назад'},
 {tag:'10 лет у мастера',text:'«Марьям — мастер с большой буквы! Десять лет у неё делаю татуаж бровей, губы и стрелки. Всё чётко выполнено, аккуратно. Советы специалиста правильные. Цена приемлемая, дешевле, чем у многих.»',name:'Саида К.',detail:'10 лет у мастера'}
];
function renderReviews(){
 var el=document.getElementById('reviewsGrid');
 if(!el)return;
 el.innerHTML=reviews.map(function(r){
  return'<div class="rev-card"><span class="tag">'+r.tag+'</span>'+r.text+'<div class="who"><b>'+r.name+'</b>'+r.detail+'</div></div>';
 }).join('');
}

/* --- FAQ --- */
var faqData=[
 {q:'Больно ли?',a:'Нет. Перед процедурой наношу аппликационный анестетик — ощущения 2–3 из 10, скорее щекотно, чем больно. Губы чувствительнее, поэтому крем обновляю по ходу процедуры. Многие клиентки засыпают.'},
 {q:'Как долго держится?',a:'Брови — 1–2,5 года, губы — 1,5–3 года, глаза — 2–3 года. Срок зависит от типа кожи, обмена веществ и солнца. Как пишут мои клиентки со стажем — стрелки не выцветают годами, брови достаточно обновлять раз в 2 года.'},
 {q:'Не посинеет и не покраснеет?',a:'Синеют старые пигменты при слишком глубоком введении. Я контролирую глубину и работаю пигментами нового поколения под ваш подтон. Коррекция через 30–40 дней ловит любой сдвиг цвета на ранней стадии.'},
 {q:'Когда можно выходить в люди?',a:'Сразу после процедуры. Первые 3–5 дней цвет ярче и есть лёгкая корочка — декоративную косметику на зону наносить нельзя, но обычная жизнь не страдает. Губы могут слегка отечь 1–2 дня — не планируйте процедуру накануне важного события.'},
 {q:'Можно ли исправить старый перманент?',a:'Чаще всего да: перекрытие пигментом или нейтрализация оттенка. Пришлите фото в MAX — оценю бесплатно и честно скажу, если сначала потребуется выведение.'},
 {q:'Что нельзя после процедуры?',a:'7–10 дней: баня, бассейн, солярий и прямое солнце, скрабы и пилинги на зону. Декоративная косметика на зону — до полного заживления. Полный список — в памятке, которую я выдаю после процедуры.'}
];
function renderFAQ(){
 var el=document.getElementById('faqList');
 if(!el)return;
 el.innerHTML=faqData.map(function(f){
  return'<div class="faq-item"><button class="faq-q" aria-expanded="false">'+f.q+'</button><div class="faq-a"><p>'+f.a+'</p></div></div>';
 }).join('');
}

/* --- Безопасность --- */
var safetyItems=[
 {emoji:'💉',title:'Одноразовые стерильные модули.',text:'Вскрываю упаковку при вас — вы видите, что всё новое.'},
 {emoji:'🧪',title:'Пигменты премиум-класса.',text:'Соответствуют требованиям РФ и ЕС, подбираются под ваш подтон кожи.'},
 {emoji:'🧼',title:'Обработка после каждой клиентки.',text:'Всё, что касается кожи, — одноразовое; поверхности и инструменты — дезинфекция.'},
 {emoji:'💬',title:'Я всегда на связи.',text:'До процедуры и после — с 9:00 до 21:00, отвечаю лично.'}
];
function renderSafety(){
 var el=document.getElementById('safetyGrid');
 if(!el)return;
 el.innerHTML=safetyItems.map(function(s){
  return'<div><span>'+s.emoji+'</span><div><b>'+s.title+'</b> '+s.text+'</div></div>';
 }).join('');
}

/* --- Прайс --- */
var priceItems=[
 {name:'Брови',tech:'пудровое напыление, волосковая техника',price:'5 500 ₽'},
 {name:'Губы',tech:'акварельная, эффект помада, коррекция контура',price:'5 500 ₽'},
 {name:'Стрелка',price:'5 500 ₽'},
 {name:'Тени',price:'3 000 ₽'},
 {name:'Доплата при большом объёме работы',price:'+ 500 ₽'},
 {name:'Коррекция любой зоны',tech:'через 30–40 дней',price:'2 500 ₽',hl:true}
];
function renderPrice(){
 var el=document.getElementById('priceGrid');
 if(!el)return;
 el.innerHTML=priceItems.map(function(p){
  var techSpan=p.tech?' <span class="tech">('+p.tech+')</span>':'';
  var cls=p.hl?'prow hl':'prow';
  return'<div class="'+cls+'"><span>'+p.name+techSpan+'</span><span class="dots"></span><span class="val">'+p.price+'</span></div>';
 }).join('');
}

/* --- Рендер всех шаблонов --- */
renderGalleries();
renderReviews();
renderFAQ();
renderSafety();
renderPrice();

/* ===== ПРИМЕНЕНИЕ КОНФИГУРАЦИИ ===== */
function applyConfig(){
 if(!C)return;
 document.querySelectorAll('[data-config="phone"]').forEach(function(el){el.href='tel:'+C.phone});
 document.querySelectorAll('[data-config="maxLink"]').forEach(function(el){el.href=C.maxLink});
 document.querySelectorAll('[data-config="vkLink"]').forEach(function(el){el.href=C.vkLink});
 document.querySelectorAll('[data-config-text="phoneDisplay"]').forEach(function(el){el.textContent=C.phoneDisplay});
 /* meta description */
 var meta=document.querySelector('meta[name="description"]');
 if(meta)meta.content=meta.content.replace('__PHONE__',C.phoneDisplay);
 /* schema.org JSON-LD */
 var ld=document.querySelector('script[type="application/ld+json"]');
 if(ld){try{var j=JSON.parse(ld.textContent);j.telephone='+'+C.phone.replace(/\D/g,'');j.sameAs[0]=C.vkLink;ld.textContent=JSON.stringify(j,null,1)}catch(e){}}
 /* photos */
 if(C.photos){
  document.querySelectorAll('[data-config-img]').forEach(function(el){
   var k=el.dataset.configImg;
   if(k==='about')el.src=C.photos.about;
   else{var idx=parseInt(k.replace('hero',''),10);if(C.photos.hero[idx])el.src=C.photos.hero[idx].src,el.alt=C.photos.hero[idx].alt;}
  });
 }
}
applyConfig();

/* ===== YANDEX.METRIKA GOALS ===== */
function ymGoal(name){try{if(typeof ym==='function')ym(C.ymId,'reachGoal',name)}catch(e){}}

/* ===== КОПИРОВАНИЕ В БУФЕР ОБМЕНА ===== */
function copySync(t){
 try{
  var ta=document.createElement('textarea');
  ta.value=t;
  ta.style.position='fixed';
  ta.style.opacity='0';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  var ok=document.execCommand('copy');
  document.body.removeChild(ta);
  return ok;
 }catch(e){return false}
}

/* ===== FORMSPREE ===== */
var FORMSPREE_URL=C.formspreeUrl||'';
function sendToFormspree(payload){
 if(!FORMSPREE_URL)return;
 fetch(FORMSPREE_URL,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(payload)})
  .catch(function(){});
}

/* ===== ЛАЙТБОКС ===== */
var lb=document.createElement('div');
lb.className='lb';lb.hidden=true;
lb.innerHTML='<button class="lb-btn lb-close" aria-label="Закрыть"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button>'+
 '<button class="lb-btn lb-prev" aria-label="Назад"><svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg></button>'+
 '<img alt=""><p class="lb-cap"></p>'+
 '<button class="lb-btn lb-next" aria-label="Вперёд"><svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg></button>';
document.body.appendChild(lb);
var lbArr=[],lbIdx=0;
function lbShow(){
 var it=lbArr[lbIdx];
 lb.querySelector('img').src=it.src;
 lb.querySelector('.lb-cap').textContent=it.cap;
}
function openLB(arr,idx){lbArr=arr;lbIdx=idx;lbShow();lb.hidden=false;document.body.style.overflow='hidden'}
function closeLB(){lb.hidden=true;document.body.style.overflow=''}
lb.querySelector('.lb-close').addEventListener('click',closeLB);
lb.querySelector('.lb-prev').addEventListener('click',function(){lbIdx=(lbIdx-1+lbArr.length)%lbArr.length;lbShow()});
lb.querySelector('.lb-next').addEventListener('click',function(){lbIdx=(lbIdx+1)%lbArr.length;lbShow()});
lb.addEventListener('click',function(e){if(e.target===lb)closeLB()});
addEventListener('keydown',function(e){
 if(lb.hidden)return;
 if(e.key==='Escape')closeLB();
 if(e.key==='ArrowLeft'){lbIdx=(lbIdx-1+lbArr.length)%lbArr.length;lbShow()}
 if(e.key==='ArrowRight'){lbIdx=(lbIdx+1)%lbArr.length;lbShow()}
});

/* ===== КЛИК ПО ФОТО В ГАЛЕРЕЕ → ЛАЙТБОКС ===== */
document.querySelectorAll('.gal').forEach(function(g){
 var figs=Array.prototype.slice.call(g.querySelectorAll('figure'));
 figs.forEach(function(fig){
  var ph=fig.querySelector('.ph');
  if(!ph)return;
  ph.addEventListener('click',function(){
   var img=fig.querySelector('img');
   if(!img||!img.complete||!img.naturalWidth)return;
   var arr=[],cur=0;
   figs.forEach(function(f){
    var i=f.querySelector('img');
    if(i&&i.complete&&i.naturalWidth>0){
     if(f===fig)cur=arr.length;
     var cap=f.querySelector('figcaption');
     arr.push({src:i.src,cap:cap?cap.textContent:''});
    }
   });
   if(arr.length)openLB(arr,cur);
  });
 });
});

/* ===== ШАПКА И МОБИЛЬНОЕ МЕНЮ ===== */
var header=document.querySelector('.header');
addEventListener('scroll',function(){header.classList.toggle('scrolled',scrollY>10)},{passive:true});
var burger=document.getElementById('burger');
burger.addEventListener('click',function(){
 document.body.classList.toggle('menu-open');
 burger.setAttribute('aria-expanded',document.body.classList.contains('menu-open'));
});
document.querySelectorAll('.mobile-nav a').forEach(function(a){
 a.addEventListener('click',function(){
  document.body.classList.remove('menu-open');
  burger.setAttribute('aria-expanded','false');
 });
});

/* ===== СТРЕЛКИ У ГАЛЕРЕЙ ===== */
document.querySelectorAll('.gal-wrap').forEach(function(w){
 var g=w.querySelector('.gal');
 if(!g)return;
 var step=function(){return Math.max(g.clientWidth*.85,260)};
 var pr=w.querySelector('.g-prev'),nx=w.querySelector('.g-next');
 if(pr)pr.addEventListener('click',function(){g.scrollBy({left:-step(),behavior:'smooth'})});
 if(nx)nx.addEventListener('click',function(){g.scrollBy({left:step(),behavior:'smooth'})});
});

/* ===== FAQ АККОРДЕОН ===== */
document.querySelectorAll('.faq-q').forEach(function(btn){
 btn.addEventListener('click',function(){
  var item=btn.parentElement;
  var wasOpen=item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(function(i){
   i.classList.remove('open');
   i.querySelector('.faq-a').style.maxHeight=null;
   i.querySelector('.faq-q').setAttribute('aria-expanded','false');
  });
  if(!wasOpen){
   item.classList.add('open');
   var a=item.querySelector('.faq-a');
   a.style.maxHeight=a.scrollHeight+'px';
   btn.setAttribute('aria-expanded','true');
  }
 });
});

/* ===== МАСКА ТЕЛЕФОНА ===== */
function attachPhoneMask(el){
 el.addEventListener('input',function(){
  var d=el.value.replace(/\D/g,'');
  if(d[0]==='8')d='7'+d.slice(1);
  if(d[0]!=='7')d='7'+d;
  d=d.slice(0,11);
  var r='+7';
  if(d.length>1)r+=' ('+d.slice(1,4);
  if(d.length>=5)r+=') '+d.slice(4,7);
  if(d.length>=8)r+='-'+d.slice(7,9);
  if(d.length>=10)r+='-'+d.slice(9,11);
  el.value=r;
 });
}
attachPhoneMask(document.getElementById('phone'));
attachPhoneMask(document.getElementById('qphone'));

/* ===== ОПРОС: 6 ВОПРОСОВ, ПРОМОКОД, MAX ===== */
var PROMO_CODE='МАРЬЯМ';
var MAX_LINK=C.maxLink||'';
var Q_TOTAL=6;
var qCur=0;
var qSummary='';
var qSteps=Array.prototype.slice.call(document.querySelectorAll('#quizBox .q-step'));
var qBar=document.getElementById('qBar');
var qStepNum=document.getElementById('qStepNum');
var qNav=document.getElementById('qNav');
var qBackBtn=document.getElementById('qBack');

function qShow(n){
 qCur=n;
 qSteps.forEach(function(s){s.classList.toggle('on',parseInt(s.dataset.step,10)===n)});
 if(n<=4){
  qBar.style.width=((n+1)/Q_TOTAL*100)+'%';
  qStepNum.textContent='Шаг '+(n+1)+' из '+Q_TOTAL;
  qNav.style.display='flex';
 }else{
  qBar.style.width='100%';
  qStepNum.textContent=(n===5)?'Шаг 6 из 6':'Готово!';
  qNav.style.display='none';
 }
 qBackBtn.style.visibility=(n===0)?'hidden':'visible';
}
function qValue(stepEl){
 var grp=stepEl.querySelector('.q-opts');
 if(!grp)return null;
 var sel=grp.querySelector('.q-opt.sel');
 if(!sel)return null;
 return sel.dataset.v;
}
document.querySelectorAll('#quizBox .q-opts').forEach(function(grp){
 grp.addEventListener('click',function(e){
  var opt=e.target.closest('.q-opt');
  if(!opt)return;
  grp.querySelectorAll('.q-opt').forEach(function(o){o.classList.remove('sel','err')});
  opt.classList.add('sel');
 });
});
document.getElementById('qNext').addEventListener('click',function(){
 if(qCur>4)return;
 var cur=qSteps[qCur];
 if(!qValue(cur)){
  var grp=cur.querySelector('.q-opts');
  if(grp)grp.querySelectorAll('.q-opt').forEach(function(o){o.classList.add('err')});
  return;
 }
 qShow(qCur+1);
});
qBackBtn.addEventListener('click',function(){if(qCur>0)qShow(qCur-1)});

document.getElementById('qSubmit').addEventListener('click',function(){
 var name=document.getElementById('qname');
 var ph=document.getElementById('qphone');
 var cons=document.getElementById('qconsent');
 var ok=true;
 var nOk=name.value.trim().length>1;
 document.getElementById('qfName').classList.toggle('bad',!nOk);ok=ok&&nOk;
 var pOk=ph.value.replace(/\D/g,'').length===11;
 document.getElementById('qfPhone').classList.toggle('bad',!pOk);ok=ok&&pOk;
 var cOk=cons.checked;
 document.getElementById('qfConsent').classList.toggle('bad',!cOk);ok=ok&&cOk;
 if(!ok)return;
 qSummary='Опрос с сайта 🎁\nПромокод: '+PROMO_CODE+
  '\nЗона интереса: '+(qValue(qSteps[0])||'—')+
  '\nКогда планирует прийти: '+(qValue(qSteps[1])||'—')+
  '\nПерманент: '+(qValue(qSteps[2])||'—')+
  '\nВозраст: '+(qValue(qSteps[3])||'—')+
  '\nОткуда узнали: '+(qValue(qSteps[4])||'—')+
  '\nИмя: '+name.value.trim()+
  '\nТелефон: '+ph.value;
 document.getElementById('qCode').textContent=PROMO_CODE;
 copySync(qSummary);
 /* дублируем на почту через Formspree */
 sendToFormspree({type:'Опрос',promo:PROMO_CODE,zone:qValue(qSteps[0]),timing:qValue(qSteps[1]),first:qValue(qSteps[2]),age:qValue(qSteps[3]),source:qValue(qSteps[4]),name:name.value.trim(),phone:ph.value});
 ymGoal('QUIZ_DONE');
 qShow(6);
});

document.getElementById('qChat').addEventListener('click',function(){
 if(!qSummary)return;
 copySync(qSummary);
});

document.getElementById('qCopy').addEventListener('click',function(){
 var b=this;
 if(copySync(PROMO_CODE)){
  b.textContent='Скопировано ✓';
  setTimeout(function(){b.textContent='Скопировать промокод'},2000);
 }
});
qShow(0);

/* ===== ФОРМА ЗАПИСИ ===== */
var form=document.getElementById('bookForm');
var phone=document.getElementById('phone');
form.addEventListener('submit',function(e){
 e.preventDefault();
 var ok=true;
 var name=document.getElementById('name');
 var cons=document.getElementById('consent');
 var nameOk=name.value.trim().length>1;
 document.getElementById('fName').classList.toggle('invalid',!nameOk);
 ok=ok&&nameOk;
 var phOk=phone.value.replace(/\D/g,'').length===11;
 document.getElementById('fPhone').classList.toggle('invalid',!phOk);
 ok=ok&&phOk;
 document.getElementById('fConsent').classList.toggle('invalid',!cons.checked);
 ok=ok&&cons.checked;
 if(!ok)return;
 var text='Заявка с сайта.\nИмя: '+name.value.trim()+'\nТелефон: '+phone.value+'\nЗона: '+document.getElementById('zone').value;
 var okMsg=document.getElementById('formOk');
 ymGoal('FORM_SEND');
 sendToFormspree({type:'Заявка на консультацию',name:name.value.trim(),phone:phone.value,zone:document.getElementById('zone').value});
 okMsg.style.display='block';
 okMsg.textContent='Спасибо! Заявка отправлена — свяжусь с вами в ближайшее время.';
});

/* ===== ПЛАВНОЕ ПОЯВЛЕНИЕ БЛОКОВ ===== */
if('IntersectionObserver' in window){
 var io=new IntersectionObserver(function(entries){
  entries.forEach(function(en){
   if(en.isIntersecting){
    en.target.classList.add('vis');
    io.unobserve(en.target);
   }
  });
 },{threshold:.1});
 document.querySelectorAll('.rev').forEach(function(el){io.observe(el)});
}else{
 document.querySelectorAll('.rev').forEach(function(el){el.classList.add('vis')});
}
})();