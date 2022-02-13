var S=Object.defineProperty;var p=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var m=(e,t,l)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,v=(e,t)=>{for(var l in t||(t={}))k.call(t,l)&&m(e,l,t[l]);if(p)for(var l of p(t))b.call(t,l)&&m(e,l,t[l]);return e};var y=(e,t,l)=>(m(e,typeof t!="symbol"?t+"":t,l),l);const q=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const f of n.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function l(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=l(s);fetch(s.href,n)}};q();const _=()=>{};const x={onChange:_};class g{constructor(t,l){y(this,"select");y(this,"options");this.select=t,this.options=v(v({},x),l),this.init()}init(){console.log("select:",this.select),console.log("options:",this.options)}}class A extends g{constructor(t,l){super(t,l)}}const i=document.querySelector('select[name="region"]');new g(i,{onChange:e=>{console.log("regionSelect -> selectedOptions:",e)}});i==null||i.addEventListener("change",e=>{const t=e.target;console.log("regionSelect -> value:",t.value)});const a=document.querySelector('select[name="customer"]');new A(a,{onChange:e=>{console.log("customerSelect -> selectedOptions:",e)}});a==null||a.addEventListener("change",e=>{const t=e.target;console.log("customerSelect -> value:",t.value)});const T=document.querySelector(".form__back"),u=document.querySelector(".first"),d=document.querySelector(".second"),c=document.querySelector("#modals"),o=document.querySelectorAll(".select"),N=document.querySelector("#selected"),O=document.querySelector(".btn__filter"),M=document.querySelector(".a__top"),w=document.querySelector(".a__bottom"),C=document.querySelector(".close"),D=document.querySelector(".close1"),F=document.querySelector(".content__back__link"),L=document.querySelector(".top"),h=document.querySelector(".bottom"),E=document.querySelector(".content__back__input");T.addEventListener("submit",function(e){return e.preventDefault()});u.addEventListener("click",function(){let e=u.value.split(",");for(let t of Array.from(o))e.includes(t.value)&&(t.classList.add("selectfull"),t.classList.remove("select"));c.style.display="block"});d.addEventListener("click",function(){let e=d.value.split(",");for(let t of Array.from(o))e.includes(t.value)&&(t.classList.add("selectfull"),t.classList.remove("select"));c.style.display="block"});w.addEventListener("click",function(){c.style.display="block"});M.addEventListener("click",function(){c.style.display="block"});F.addEventListener("click",function(){c.style.display="none";for(let e of Array.from(o))e.className=="selectfull"&&(e.classList.add("select"),e.classList.remove("selectfull"))});window.addEventListener("click",function(e){e.target==c&&(c.style.display="none")});N.addEventListener("click",function(e){e.target.classList=="select"?(e.target.classList.add("selectfull"),e.target.classList.remove("select")):(e.target.classList.add("select"),e.target.classList.remove("selectfull")),!(e.target.tagName!="OPTION"||e.target.dataset.level=="1"&&e.target.nextElementSibling.dataset.level=="1"||e.target.dataset.level=="6"&&e.target.nextElementSibling.dataset.level=="6")&&(e.target.nextElementSibling.hidden=!e.target.nextElementSibling.hidden)});C.addEventListener("click",function(){let e=[];for(let l of Array.from(o)){l.className=="selectfull"&&e.push(l.value);let r=e.length;r>1&&(L.text=`\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0435 (${r})`)}let t=e.join(",");u.value=t});D.addEventListener("click",function(){let e=[];for(let t of Array.from(o)){t.className=="selectfull"&&e.push(t.value);let l=e.length;l>1&&(h.text=`\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0435 (${l})`);let r=e.join(",");d.value=r}});L.addEventListener("click",function(){let e=u.value.split(",");for(let t of Array.from(o))e.includes(t.value)&&(t.classList.add("selectfull"),t.classList.remove("select"));c.style.display="block"});h.addEventListener("click",function(){let e=d.value.split(",");for(let t of Array.from(o))e.includes(t.value)&&(t.classList.add("selectfull"),t.classList.remove("select"));c.style.display="block"});E.addEventListener("input",function(){let e=this.value.trim();e!=""?o.forEach(function(t){if(t.innerText.search(e)==-1)t.classList.add("hide"),t.innerHTML=t.innerText;else{t.classList.remove("hide");let l=t.innerText;t.innerHTML=H(l,t.innerText.search(e),e.length)}}):o.forEach(function(t){t.classList.remove("hide"),t.innerHTML=t.innerText})});function H(e,t,l){return e.slice(0,t)+"<mark>"+e.slice(t,t+l)+"</mark>"+e.slice(t+l)}O.addEventListener("click",function(){E.value="";for(let e of Array.from(o))e.className=="selectfull"&&(e.classList.add("select"),e.classList.remove("selectfull"))});
