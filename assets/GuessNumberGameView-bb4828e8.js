import{d as h,g as t,l as g,i as k,o as s,c as n,x as y,y as N,a as l,F as M,e as x,t as p,n as C,s as V,z as B}from"./index-964c15c1.js";const G=["disabled"],R=["disabled"],w=l("div",null,"已输入的结果:",-1),O=h({__name:"GuessNumberGameView",setup(z){const o=t(Math.floor(Math.random()*100+1)),e=t(""),a=t(""),u=t([]),r=t(!1),c=t(null),f=()=>{v(),a.value>o.value?e.value="太大了":a.value<o.value?e.value="太小了":e.value="正确",u.value.push(Number(a.value)),a.value="",u.value.length===10&&(r.value=!0)},b=()=>{o.value=Math.floor(Math.random()*100+1),e.value="",a.value="",u.value=[],r.value=!1,B(()=>{v()})},i=g(()=>e.value==="正确"||r.value),v=()=>{c.value.focus()};return k(()=>{v()}),(D,m)=>(s(),n("div",null,[y(l("input",{ref_key:"inputNumberRef",ref:c,type:"number",disabled:i.value,"onUpdate:modelValue":m[0]||(m[0]=d=>a.value=d)},null,8,G),[[N,a.value]]),l("button",{disabled:i.value,onClick:f},"猜",8,R),l("div",null,[w,(s(!0),n(M,null,x(u.value,(d,_)=>(s(),n("span",{key:_},p(`${d} `),1))),128))]),l("div",{style:C({color:e.value==="正确"?"green":"red"})},p(e.value),5),i.value?(s(),n("button",{key:0,onClick:b},"重新开始")):V("",!0)]))}});export{O as default};
