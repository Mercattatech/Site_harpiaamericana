(function(){
  var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s));};
  function press(group,btn){group.forEach(function(b){b.setAttribute('aria-pressed',b===btn?'true':'false');});}
  // Idioma (visual por enquanto)
  var langs=$$('.ha-lang');
  langs.forEach(function(b){b.addEventListener('click',function(){press(langs,b);document.documentElement.lang=b.dataset.lang==='PT'?'pt-BR':b.dataset.lang.toLowerCase();});});
  // Herbário: filtro por intenção
  var intents=$$('.ha-intent'),cards=$$('.ha-card');
  function applyIntent(id){cards.forEach(function(c){var fits=c.dataset.fits.split(' ');var all=id==='todos';var match=all||fits.indexOf(id)>-1;c.classList.toggle('is-dim',!match);c.classList.toggle('is-match',match&&!all);c.querySelector('.ha-badge').textContent=(match&&!all)?'INDICADO':'ÓLEO ESSENCIAL';});}
  intents.forEach(function(b){b.addEventListener('click',function(){press(intents,b);applyIntent(b.dataset.intent);});});
  applyIntent('todos');
  // Produto: fragrâncias
  var variants=$$('.ha-variant'),img=document.getElementById('ha-variant-img'),buy=document.getElementById('ha-variant-buy');
  variants.forEach(function(b){b.addEventListener('click',function(){press(variants,b);img.src=b.dataset.img;img.alt='Óleo Corporal Harpia Americana, fragrância '+b.dataset.label;buy.href=b.dataset.url;});});
  // Serviços: acordeão
  var rows=$$('.ha-rowbtn');
  rows.forEach(function(b){b.addEventListener('click',function(){var open=b.getAttribute('aria-expanded')==='true';rows.forEach(function(o){o.setAttribute('aria-expanded','false');document.getElementById(o.getAttribute('aria-controls')).hidden=true;});if(!open){b.setAttribute('aria-expanded','true');document.getElementById(b.getAttribute('aria-controls')).hidden=false;}});});
})();
