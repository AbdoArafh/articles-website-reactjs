import{j as d,r as u,R as p,a as f}from"./vendor.2a4a5b3c.js";const v=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}};v();const e=d.exports.jsx,i=d.exports.jsxs;function N(){const c=Array.from(Array(20)).map((s,h)=>"Article "+(h+1));let[a,o]=u.exports.useState(""),[l,r]=u.exports.useState("");const t=s=>{r(s.target.value),o(s.target.value.trim().toLowerCase())},n=s=>s.toLowerCase().match(a);return i("div",{className:"home",children:[e("div",{className:"header",children:e("input",{autoFocus:!0,placeholder:"Search",type:"search",value:l,onChange:t})}),e("div",{className:"articles",children:c.filter(s=>n(s)).map(s=>e("div",{className:"article",children:i("a",{href:"#",children:[e("img",{src:"https://picsum.photos/seed/"+encodeURIComponent(s)+"/300/300",alt:"article image",className:"thumbnail"}),e("div",{className:"title",children:s})]})},s))})]})}function m({children:c}){return e("div",{className:"btn",children:c})}function g(){return i("div",{className:"sidebar",children:[i("div",{className:"logo",children:[e("div",{className:"title",children:"Articles Website"}),e("div",{className:"slogan",children:"A website just for articles"})]}),i("div",{className:"links",children:[e("div",{className:"link",children:"Home"}),e("div",{className:"link",children:"Discover"}),e("div",{className:"link",children:"About"}),e("div",{className:"link",children:"My Profile"}),e("div",{className:"link",children:"Contact"})]}),i("div",{className:"buttons",children:[e(m,{children:"Sign Up"}),e(m,{children:"Login"})]})]})}function y(){return i("div",{className:"App",children:[e(g,{}),e("div",{className:"content",children:e(N,{})})]})}p.render(e(f.StrictMode,{children:e(y,{})}),document.getElementById("root"));