import{r as v,n as w,j as u,a as s,G as j,A as O,o as m,c as I,B as G,b as R,d as F,e as q,f as N,g as H}from"./vendor.8ab70689.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const K="_elementsList_1ins8_1",U="_element_1ins8_1",X="_deleteButton_1ins8_14",J="_addButton_1ins8_20",f={elementsList:K,element:U,deleteButton:X,addButton:J},Q=({Component:e})=>{const[t,n]=v.exports.useState(()=>[w()]),a=()=>{n(r=>[...r,w()])},o=r=>{n(c=>c.filter(d=>d!==r))};return u("div",{className:f.elementsList,children:[t.map(r=>u("div",{className:f.element,children:[s(e,{}),t.length>1&&s("button",{onClick:()=>o(r),className:f.deleteButton,children:s(j,{})})]},r)),s("button",{className:`is-outline is-primary fullwidth ${f.addButton}`,onClick:a,children:s(O,{})})]})},W="_error_sa79c_1",Y={error:W},$=m(({id:e,label:t,initialValue:n,onChange:a,placeholder:o})=>{const[r,c]=v.exports.useState(n?n.toString():""),d=i=>{c(i.target.value),a(I(i.target.value))};return v.exports.useEffect(()=>{c((n==null?void 0:n.value.toString())||"")},[n==null?void 0:n.value]),u("div",{children:[t&&s("label",{htmlFor:e,children:t}),s("input",{id:e,className:"fullwidth",type:"text",inputMode:"numeric",placeholder:o,value:r,pattern:"[\\d\\s]*(\\.\\d{0,2})?",onChange:d}),s("span",{className:Y.error,children:"Only numbers and one point can be used in this input"})]})});$.displayName="CurrencyInput";var h=(e=>(e.rate="rate",e.received="received",e))(h||{});const Z="received";function V(e,t){return()=>t(e.id,"mode",e.mode===h.rate?h.received:h.rate)}const ee="_disabledMode_10ugu_1",te={disabledMode:ee};function A(e,t){return m(n=>{const a=V(n.row,n.onChange);return s("div",{className:e===n.row.mode?"":te.disabledMode,onClick:e===n.row.mode?void 0:a,children:s(t,{...n})})})}function b(e,t,n){return m(({row:a,onChange:o,label:r})=>s($,{id:`${e}-${a.id}`,label:r!=null?r:t,initialValue:a[e],placeholder:n,onChange:c=>o(a.id,e,c)}))}const E=A(h.received,b("received","Received","100500")),L=A(h.rate,b("rate","Rate","6.55")),S=b("fee","Fee","205"),ne="_exchangerRow_h4h7z_1",re="_exchangerInitialRow_h4h7z_6",se="_exchangerFinalRow_h4h7z_7",oe="_expression_h4h7z_12",ce="_notCentered_h4h7z_19",ae="_expressionOperator_h4h7z_23",ie="_deleteButton_h4h7z_30",l={exchangerRow:ne,exchangerInitialRow:re,exchangerFinalRow:se,expression:oe,notCentered:ce,expressionOperator:ae,deleteButton:ie},z=m(({row:e,onChange:t,onDelete:n})=>{const{id:a}=e;return u("div",{className:l.exchangerRow,children:[s("span",{className:`${l.expression} ${l.notCentered}`,children:"("}),s(E,{row:e,onChange:t}),s("span",{className:l.expressionOperator,children:"OR"}),s(L,{row:e,onChange:t}),s("span",{className:l.expression,children:") +"}),s(S,{row:e,onChange:t}),s("button",{className:`is-outline is-primary ${l.deleteButton}`,onClick:()=>n(a),children:s(G,{})})]})});z.displayName="ExchangerRow";const M=m(({row:e,onChange:t})=>u("div",{className:l.exchangerFinalRow,children:[s(E,{row:e,onChange:t}),s("span",{className:l.expressionOperator,children:"OR"}),s(L,{row:e,onChange:t})]}));M.displayName="FinalExchangerRow";const k=m(({row:e,onChange:t})=>u("div",{className:l.exchangerInitialRow,children:[s(E,{row:e,onChange:t,label:"Paid"}),s("span",{className:l.expression,children:"+"}),s(S,{row:e,onChange:t})]}));k.displayName="InitialExchangerRow";const g=I(0);function D({paid:e=g,received:t=g,fee:n=g}){return e.value<=0||t.value<=0||n.value<0?g:t.divide(e.add(n))}const _=I(0);function de({paid:e=_,rate:t=_,fee:n=_}){return e.value<=0||t.value<=0||n.value<0?_:e.add(n).multiply(t)}function y(){return F({id:w(),mode:Z,dispose:[]})}const x=R((e,t)=>{var o;const a=e.findIndex(r=>r.id===t.id)||1;for(let r=a;r<e.length;r++){const c=e[r],d=e[r-1];let i,p;c.mode===h.rate?(i="received",p=de({paid:d.received,rate:c.rate,fee:d.fee})):(i="rate",p=D({paid:d.received,received:c.received,fee:d.fee})),((o=c[i])==null?void 0:o.value)!==p.value&&(c[i]=p)}});function B(e,t){t.dispose.push(N(()=>{var n;return(n=t.received)==null?void 0:n.value},()=>t.mode===h.received&&x(e,t))),t.dispose.push(N(()=>{var n;return(n=t.rate)==null?void 0:n.value},()=>t.mode===h.rate&&x(e,t))),t.dispose.push(N(()=>{var n;return(n=t.fee)==null?void 0:n.value},()=>x(e,t)))}function le(){const[e]=v.exports.useState(()=>F([y(),y()])),[t]=v.exports.useState(()=>q(()=>D({paid:e[0].received,received:e[e.length-1].received,fee:e[0].fee})));v.exports.useEffect(()=>{e.forEach(r=>B(e,r))},[]);const n=R((r,c,d)=>{const i=e.find(p=>p.id===r);i&&(i[c]=d)}),a=R(()=>{const r=y();B(e,r),e.splice(-1,0,r)}),o=R(r=>{const c=e.findIndex(i=>i.id===r);if(c<1||c===e.length-1)return;e[c].dispose.forEach(i=>i()),e.splice(c,1),x(e,e[c])});return{total:t,rows:e,onChange:n,onAdd:a,onDelete:o}}const ue="_converter_1br2e_1",he="_converterRows_1br2e_7",me="_resultRate_1br2e_12",C={converter:ue,converterRows:he,resultRate:me},pe=m(({total:e})=>u("div",{children:[s("p",{className:"text-hr",children:"Total"}),u("p",{className:C.resultRate,children:["Rate: ",e.get().toString()]})]})),P=m(()=>{const{rows:e,onChange:t,onAdd:n,onDelete:a,total:o}=le(),r=e[0],c=e[e.length-1],d=e.slice(1,-1);return u("fieldset",{className:C.converter,children:[s("legend",{children:"Define converter sequence"}),s(k,{row:r,onChange:t,onDelete:a},r.id),s("p",{className:"text-hr",children:"Additional exchanges"}),u("div",{className:C.converterRows,children:[d.map(i=>s(z,{row:i,onChange:t,onDelete:a},i.id)),s("button",{className:"is-outline is-primary fullwidth",onClick:n,children:s(O,{})})]}),s("p",{className:"text-hr",children:"Finally received money"}),s(M,{row:c,onChange:t,onDelete:a},c.id),s(pe,{total:o})]})});P.displayName="Converter";const T=()=>s(Q,{Component:P});T.displayName="ConverterPage";const ve=()=>s("div",{className:"App",children:s(T,{})});H.createRoot(document.getElementById("root")).render(s(ve,{}));