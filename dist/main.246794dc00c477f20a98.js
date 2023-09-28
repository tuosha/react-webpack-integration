"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[179],{588:function(e,t,a){var n=a(378),r=a(634),l=a(935),c=a(783);var s=()=>{const e=(0,n.useCallback)((()=>6),[]),[t,a]=(0,n.useState)(0),[r,l]=(0,n.useState)(""),[c,s]=(0,n.useState)(""),o=(0,n.useRef)(null);return(0,n.useEffect)((()=>{a((e=>e++))}),[e]),(0,n.useEffect)((()=>{t>2&&t<5?(l(`You click: ${t} times, try to stop!`),s("use-effects__msg--alert"),o.current.style.backgroundColor="grey"):t>=5?(l("Too much clicks! No more!"),s("use-effects__msg--final")):(l(""),s(""))}),[t]),React.createElement("div",{className:"use-effects"},React.createElement("span",null,t),React.createElement("p",{ref:o,className:"use-effects_msg "+c},r||""),React.createElement("button",{onClick:()=>t<5?a(t+1):""},"Increase Count"),React.createElement("button",{onClick:()=>t>0?a(t-1):""},"Decrease Count"))};var o=()=>{const{model:e,setModel:t}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;const[t,a]=(0,n.useState)(e);return{model:{value:t,onChange:e=>a(e.target.value)},setModel:a}}("Tony");return React.createElement(React.Fragment,null,React.createElement("h2",null,e.value),React.createElement("input",e),React.createElement("button",{onClick:()=>t("")},"Reset"))};var i=()=>React.createElement("nav",{className:"header-navigation-nav"},React.createElement(c.rU,{to:"/"},"Home"),React.createElement(c.rU,{to:"persons"},"Persons"),React.createElement(c.rU,{to:"planets"},"Planets"));var m=()=>React.createElement(React.Fragment,null,React.createElement("header",{className:"app-header"},React.createElement(i,null)),React.createElement("main",null),React.createElement("section",null,React.createElement(l.j3,null)),React.createElement("section",null,React.createElement(s,null),React.createElement(o,null)),React.createElement("footer",{className:"app-footer"},"Syntheza 2023")),u=a.p+"283ea67e88bc670efc8f.jpg";var d=()=>{const e=(0,l.lk)();return console.log(e),React.createElement("div",{className:"error-page"},React.createElement("h2",{className:"error-page__header"},"Sorry, can't find page!"),React.createElement("p",{className:"error-page__message"},"Error status is: ",e.status||e.message),React.createElement("img",{src:u,className:"router-error__img",alt:"router-error-img"}))},p=a(155);const E=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.reduceRight(((e,t)=>function(){return t(e(...arguments))}),(e=>e))},R=e=>"object"==typeof e&&e.length,f=e=>{return R(e)?React.createElement("ul",null,e.map((t=>React.createElement("li",{key:(0,p.x0)()},R(e)?f(t):t)))):(t=e,new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(t)?React.createElement("a",{href:e},e):e+" ");var t};function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},g.apply(this,arguments)}const h=e=>t=>a=>{const[r,l]=(0,n.useState)([]);return(0,n.useEffect)((()=>{e().then((e=>{l(e)}))}),[]),React.createElement(t,g({},a,{data:r}))},v=e=>t=>a=>{const[r,l]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{a.data.length&&l(!0)}),[a.data.length]),a.data.length||r?React.createElement(t,a):React.createElement(e,null)},y=e=>t=>a=>React.createElement(t,g({},a,{options:e})),_=/people/,b=/planets/,k=e=>e.url.match(/\/([0-9]*)\/$/)[1],w=e=>({id:k(e),name:e.name,birth_year:e.birth_year,eye_color:e.eye_color,gender:e.gender,species:e.species,starships:e.starships,vehicles:e.vehicles}),N=e=>({id:k(e),name:e.name,rotation_period:e.rotation_period,orbital_period:e.orbital_period,diameter:e.diameter,climate:e.climate,gravity:e.gravity,terrain:e.terrain,surface_water:e.surface_water,population:e.population,residents:e.residents,films:e.films}),C=async e=>{const t=await fetch("https://swapi.dev/api"+e);if(!t.ok)throw new Error("Can't get data from server! Status is: "+t.status);return t.json()},j=e=>{let{item:t,handleDelete:a,options:n}=e;const{deleteBtn:r}=n;return React.createElement("li",{key:t.id},Object.entries(t).map((e=>{let[,t]=e;return React.createElement("span",{key:(0,p.x0)()},f(t))})),r?React.createElement("button",{onClick:()=>a(t.id)},"Delete"):"")};var S=e=>{let{data:t,options:a={}}=e;const[r,l]=(0,n.useState)(t),c=e=>l(r.filter((t=>t.id!==e)));return r.length?React.createElement("ul",{className:"items-list"},r.map((e=>React.createElement(j,{key:e.id,item:e,handleDelete:c,options:a})))):"Empty list!"};var z=()=>React.createElement("div",{className:"loadingio-spinner-eclipse-6zthod1qegg"},React.createElement("div",{className:"ldio-36u2fximxwk"},React.createElement("div",null)));var O=()=>React.createElement("div",{className:"loadingio-spinner-reload-l707uuqb2"},React.createElement("div",{className:"ldio-ssa4tiaw9j"},React.createElement("div",null,React.createElement("div",null),React.createElement("div",null),React.createElement("div",null))));const x=E(h((async()=>(await C(_)).results.map(w))),v(z),y({deleteBtn:!0}))(S),B=E(h((async()=>(await C(b)).results.map(N))),v(O),y({deleteBtn:!0}))(S);var D=()=>React.createElement(x,null);var P=()=>React.createElement(B,null);const U=(0,c.aj)([{path:"/",element:React.createElement(m,null),errorElement:React.createElement(d,null),children:[{path:"persons",element:React.createElement(D,null)},{path:"planets",element:React.createElement(P,null)}]}]);r.createRoot(document.getElementById("root")).render(n.createElement(l.pG,{router:U}))}},function(e){e.O(0,[463],(function(){return t=588,e(e.s=t);var t}));e.O()}]);