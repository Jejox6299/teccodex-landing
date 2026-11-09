const menu=document.querySelector('#menu'),nav=document.querySelector('nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open);menu.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));const photos=['laptop','rack','security-collage','fire','access'],labels=['SOPORTE E INFRAESTRUCTURA','REDES Y CONECTIVIDAD','SEGURIDAD ELECTRÓNICA','DETECCIÓN Y ALARMA','PLATAFORMAS Y AUTOMATIZACIÓN'],alts=['Técnico revisando una laptop','Técnico trabajando en un rack de red','Collage de instalación de cámara de seguridad y automatización de portón','Instalación de detector de humo','Control de acceso residencial con QR'];document.querySelectorAll('details').forEach((d,i)=>d.addEventListener('toggle',()=>{if(d.open){document.querySelectorAll('details').forEach(o=>{if(o!==d)o.open=false});const img=document.querySelector('#solutionphoto');img.src='assets/'+photos[i]+'.png';img.alt=alts[i];document.querySelector('#photolabel').textContent=labels[i]}}));

document.querySelector('#contact-form').addEventListener('submit',function(event){
 event.preventDefault();
 if(!this.reportValidity())return;
 const data=new FormData(this),value=key=>String(data.get(key)||'').trim();
 const message=['Hola Teccodex, quisiera información sobre sus servicios.','', 'Nombre: '+value('nombre'),'WhatsApp: '+value('telefono'),value('organizacion')?'Empresa: '+value('organizacion'):'','Ciudad: '+value('ciudad'),'País: '+value('pais'),'Servicio: '+value('servicio'),'','Solicitud: '+value('mensaje')].filter(line=>line!==null).join('\n');
 window.open('https://wa.me/593999757379?text='+encodeURIComponent(message),'_blank','noopener,noreferrer');
});

const brandIntro=document.querySelector('#brand-intro');
if(brandIntro&&!brandIntro.hidden){
 let introClosed=false;
 const closeIntro=()=>{if(introClosed)return;introClosed=true;const hadFocus=brandIntro.contains(document.activeElement);brandIntro.classList.add('is-leaving');if(hadFocus)document.querySelector('header a').focus();setTimeout(()=>{brandIntro.hidden=true},650)};
 brandIntro.querySelector('.intro-skip').addEventListener('click',closeIntro);
 const introKey=event=>{if(event.key==='Escape')closeIntro()};
 document.addEventListener('keydown',introKey);
 setTimeout(()=>{closeIntro();document.removeEventListener('keydown',introKey)},6000);
}
