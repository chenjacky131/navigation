import{d as O,g as c,i as se,k as W,l as ie,o as B,c as V,a,n as C,u as b,F as re,e as ve,p as de,j as ce,_ as Y,m as ge,f as he,q as G,s as pe,v as fe}from"./index-964c15c1.js";const S=w=>(de("data-v-32002e65"),w=w(),ce(),w),_e={class:"color-select"},be=S(()=>a("div",{class:"saturation-value-2"},null,-1)),me=S(()=>a("div",{class:"saturation-value-3"},null,-1)),$e={class:"color-select-middle"},we={style:{flex:"auto"}},xe={class:"color-diamond"},Ce={class:"color-value"},ke={class:"hex"},ye=["value"],Fe=S(()=>a("p",null,"Hex",-1)),Se={class:"rgba-r"},Ae=["value"],Ie=S(()=>a("p",null,"R",-1)),Ee={class:"rgba-g"},Me=["value"],Be=S(()=>a("p",null,"G",-1)),Le={class:"rgba-b"},Ve=["value"],Re=S(()=>a("p",null,"B",-1)),He={class:"rgba-a"},Pe=["value"],De=S(()=>a("p",null,"A",-1)),Ne={class:"preset"},Te=["onClick"],We=O({__name:"VueColorComponent",props:{color:{default:()=>({r:217,g:128,b:95,a:1})},preset:{default:()=>["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF"]}},emits:["update:color"],setup(w,{emit:x}){const f=w,k=x,_=c(null),y=c(null),$=c(null);let A=c("top: 25%;left: 80%;"),R=c("left: 0;"),H=c("left: calc(100% - 6px);"),F=c(0),I=c(1),E=c(1),g=c(255),h=c(0),p=c(0),v=c(1);se(()=>{let{r:e,g:t,b:l,a:n}=oe(f.color);g.value=e,h.value=t,p.value=l,v.value=n}),W([g,h,p],()=>{k("update:color",{r:g.value,g:h.value,b:p.value,a:v.value});let{h:e,s:t,v:l}=ue(g.value,h.value,p.value);F.value=e,I.value=t,E.value=l,A.value=`top: ${100-l*100}%;left: ${t*100}%;`,R.value=`left: ${F.value/360*100}%;`}),W(v,()=>{k("update:color",{r:g.value,g:h.value,b:p.value,a:v.value}),H.value=`left: ${v.value>=1?"calc(100% - 6px)":v.value*100+"%"};`});let P=ie(()=>{let e=g.value,t=h.value,l=p.value,n=v.value,o=F.value,u=I.value,i=E.value;return{rgb:`rgba(${e},${t},${l})`,rgba:`rgba(${e},${t},${l},${n})`,hex6:z(e,t,l),hex8:z(e,t,l,n),hsv:`hsv(${o},${u},${i})`,hsl:""}});function J(e){let t=e.target.value;if(/^#?([0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(t)){let{r:l,g:n,b:o,a:u}=M(t);g.value=l,h.value=n,p.value=o,v.value=u}}function K(e){let t=e.target.value;t!==""&&(+t>255&&(g.value=255),+t<0&&(g.value=0),+t>=0&&+t<=255&&(g.value=parseInt(t)))}function Q(e){let t=e.target.value;t!==""&&(+t>255&&(h.value=255),+t<0&&(h.value=0),+t>=0&&+t<=255&&(h.value=parseInt(t)))}function Z(e){let t=e.target.value;t!==""&&(+t>255&&(p.value=255),+t<0&&(p.value=0),+t>=0&&+t<=255&&(p.value=parseInt(t)))}function ee(e){let t=e.target.value;t!==""&&(v.value=+t,+t>1&&(v.value=1),+t<0&&(v.value=0),+t>=0&&+t<=1&&(v.value=+t))}function te(e){if(/^#?([0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(e)){let{r:t,g:l,b:n,a:o}=M(e);g.value=t,h.value=l,p.value=n,v.value=o}}function D(e){let t=_.value.clientWidth,l=_.value.clientHeight,n=e.pageX-_.value.getBoundingClientRect().left,o=e.pageY-_.value.getBoundingClientRect().top;n=n<t&&n>0?n:n>t?t:0,o=o<l&&o>0?o:o>l?l:0,I.value=Math.floor(n/t*100+.5)/100,E.value=Math.floor((1-o/l)*100+.5)/100;let{r:u,g:i,b:m}=U(F.value,I.value,E.value);g.value=u,h.value=i,p.value=m,A.value=`top: ${o}px;left: ${n}px;`}function le(e){D(e),window.addEventListener("mousemove",D),window.addEventListener("mouseup",X)}function X(){window.removeEventListener("mousemove",D),window.removeEventListener("mouseup",X)}function N(e){let t=y.value.clientWidth,l=e.pageX-_.value.getBoundingClientRect().left;l=l<t&&l>0?l:l>t?t:0,F.value=Math.floor(l/t*360+.5);let{r:n,g:o,b:u}=U(F.value,I.value,E.value);g.value=n,h.value=o,p.value=u,R.value=`left: ${l>=t-6?t-6:l}px;`}function ne(e){N(e),window.addEventListener("mousemove",N),window.addEventListener("mouseup",j)}function j(){window.removeEventListener("mousemove",N),window.removeEventListener("mouseup",j)}function T(e){let t=$.value.clientWidth,l=e.pageX-_.value.getBoundingClientRect().left;l=l<t&&l>0?l:l>t?t:0,v.value=Math.floor(l/t*100+.5)/100,H.value=`left: ${l>=t-6?t-6:l}px;`}function ae(e){T(e),window.addEventListener("mousemove",T),window.addEventListener("mouseup",q)}function q(){window.removeEventListener("mousemove",T),window.removeEventListener("mouseup",q)}function oe(e){if(e){let t,l,n,o;if(typeof e=="string"){if(/^#?([0-9a-fA-F]{6}|[0-9a-fA-F]{8}|[0-9a-fA-F]{3}|[0-9a-fA-F]{4})$/.test(e))return M(e)}else return t=e.r>255?255:e.r<0?0:e.r,l=e.g>255?255:e.g<0?0:e.g,n=e.b>255?255:e.b<0?0:e.b,o=e.a>1?1:e.a<0?0:e.a,{r:t,g:l,b:n,a:o}}}function U(e,t,l){e===360&&(e=0);let n=Math.floor(e/60)%6,o=e/60-n,u=l*(1-t),i=l*(1-t*o),m=l*(1-t*(1-o)),s,r,d;return n===0?(s=l,r=m,d=u):n===1?(s=i,r=l,d=u):n===2?(s=u,r=l,d=m):n===3?(s=u,r=i,d=l):n===4?(s=m,r=u,d=l):n===5&&(s=l,r=u,d=i),s=Math.floor(s*255+.5),r=Math.floor(r*255+.5),d=Math.floor(d*255+.5),{r:s,g:r,b:d}}function ue(e,t,l){let n=e/255,o=t/255,u=l/255,i=Math.max(n,o,u),m=Math.min(n,o,u),s=i-m,r,d,L;return s===0?r=0:i===n?r=(60*(o-u)/s+360)%360:i===o?r=60*((u-n)/s+2):i===u&&(r=60*((n-o)/s+4)),i===0?d=0:d=s/i,L=i,r=Math.floor(r+.5),d=Math.floor(d*100+.5)/100,L=Math.floor(L*100+.5)/100,{h:r,s:d,v:L}}function z(e,t,l,n=1){let o=e.toString(16).length!==2?"0"+e.toString(16):e.toString(16);t=parseInt(t);let u=t.toString(16).length!==2?"0"+t.toString(16):t.toString(16);l=parseInt(l);let i=l.toString(16).length!==2?"0"+l.toString(16):l.toString(16);n=parseFloat(n);let m="";if(n!==1){let s=Math.floor(256*n);m=s.toString(16).length!==2?"0"+s.toString(16):s.toString(16)}return`#${o}${u}${i}${m}`.toUpperCase()}function M(e){if(/^#?[0-9a-fA-F]{3}$/.test(e)){let t=e.substring(e.length-1,e.length),l=e.substring(e.length-2,e.length-1),n=e.substring(e.length-3,e.length-2);return M(`${n+n}${l+l}${t+t}`)}if(/^#?[0-9a-fA-F]{4}$/.test(e)){let t=e.substring(e.length-1,e.length),l=e.substring(e.length-2,e.length-1),n=e.substring(e.length-3,e.length-2),o=e.substring(e.length-4,e.length-3);return M(`${o+o}${n+n}${l+l}${t+t}`)}if(/^#?[0-9a-fA-F]{6}$/.test(e)){let t=parseInt("0x"+e.substring(e.length-2,e.length)),l=parseInt("0x"+e.substring(e.length-4,e.length-2));return{r:parseInt("0x"+e.substring(e.length-6,e.length-4)),g:l,b:t,a:1}}if(/^#?[0-9a-fA-F]{8}$/.test(e)){let t=parseInt("0x"+e.substring(e.length-2,e.length));t=t/255;let l=parseInt("0x"+e.substring(e.length-4,e.length-2)),n=parseInt("0x"+e.substring(e.length-6,e.length-4));return{r:parseInt("0x"+e.substring(e.length-8,e.length-6)),g:n,b:l,a:t}}}return(e,t)=>(B(),V("div",_e,[a("div",{class:"saturation-value",ref_key:"saturation_value",ref:_,onMousedown:le},[a("div",{style:C(`background-color: hsl(${b(F)}, 100%, 50%);`)},[a("div",{class:"point",style:C(b(A))},null,4)],4),be,me],544),a("div",$e,[a("div",we,[a("div",{class:"hue-slider",ref_key:"hue_slider",ref:y,onMousedown:ne},[a("div",{class:"slider",style:C(b(R))},null,4)],544),a("div",{class:"alpha-slider",ref_key:"alpha_slider",ref:$,onMousedown:ae},[a("div",{class:"slider",style:C(b(H))},null,4),a("div",{style:C(`background: linear-gradient(to right, rgba(0,0,0,0), ${b(P).rgb});width: 100%;height: 100%`)},null,4)],544)]),a("div",xe,[a("div",{style:C(`background-color: ${b(P).rgba};width: 100%;height: 100%;box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15), inset 0 0 4px rgba(0, 0, 0, .25);`)},null,4)])]),a("div",Ce,[a("div",ke,[a("label",null,[a("input",{value:b(P).hex8,onInput:J,spellcheck:"false"},null,40,ye)]),Fe]),a("div",Se,[a("label",null,[a("input",{value:b(g),onInput:K},null,40,Ae)]),Ie]),a("div",Ee,[a("label",null,[a("input",{value:b(h),onInput:Q},null,40,Me)]),Be]),a("div",Le,[a("label",null,[a("input",{value:b(p),onInput:Z},null,40,Ve)]),Re]),a("div",He,[a("label",null,[a("input",{value:b(v),onInput:ee},null,40,Pe)]),De])]),a("ul",Ne,[(B(!0),V(re,null,ve(e.preset,(l,n)=>(B(),V("li",{key:n,style:C(`background-color: ${l}`),onClick:o=>te(l)},null,12,Te))),128))])]))}});const Xe=Y(We,[["__scopeId","data-v-32002e65"]]),je=(w,x)=>{let f,k;return function(..._){k=this,f&&clearTimeout(f),f=setTimeout(()=>{w.call(k,_)},x)}},qe=O({__name:"ColorPickerView",setup(w){const x=c(!1),f=c({r:0,g:0,b:0,a:.66}),k=()=>{x.value=!x.value},_=je(y=>console.log(y[0]),100);return W(f,y=>{_(fe(y))},{deep:!0}),(y,$)=>(B(),V("div",{class:"color-wrap",onClick:$[2]||($[2]=A=>x.value=!1)},[ge(" 颜色拾取器: "),a("div",{class:"holder",onClick:G(k,["stop"])},[a("div",{class:"color-holder",style:C({background:`rgba(${f.value.r},${f.value.g},${f.value.b},${f.value.a})`})},null,4),x.value?(B(),he(Xe,{key:0,onClick:$[0]||($[0]=G(()=>{},["stop"])),color:f.value,"onUpdate:color":$[1]||($[1]=A=>f.value=A)},null,8,["color"])):pe("",!0)])]))}});const ze=Y(qe,[["__scopeId","data-v-f0217ece"]]);export{ze as default};
