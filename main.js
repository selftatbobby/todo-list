(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([e.id,"#container {\n    display: grid;\n    grid: 1fr 5fr / 1fr 4fr;\n    width: 100%;\n    height: 100vh;\n}\n\n#header {\n    display: flex;\n    grid-area: 1 / 1 / span 1/ span 2;\n    border: 1px solid blue;\n    justify-content: left;\n    align-items: center;\n}\n\n#sideBar {\n    border: 1px solid red;\n    grid-area: 2 / 1 / span 1 / span 1;\n}\n\n#mainContent {\n    border: 1px solid green;\n    grid-area: 2 / 2 / span 1 / span 1;\n}\n\n#todoItemFormContainer {\n    display: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, .7);\n    justify-content: center;\n    align-items: center;\n    color: white;\n    font-size: 1rem;\n    flex-direction: column;\n}\n#projectFormContainer {\n    display: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, .9);\n    justify-content: center;\n    align-items: center;\n    color: white;\n    font-size: 1rem;\n    flex-direction: column;\n}",""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],s=o.base?d[0]+o.base:d[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var m=n(u),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=r(p,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var d=o(e,r),s=0;s<i.length;s++){var l=n(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),a=n.n(i),c=n(565),d=n.n(c),s=n(216),l=n.n(s),u=n(589),m=n.n(u),p=n(426),f={};f.styleTagTransform=m(),f.setAttributes=d(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const v=function(e,t,n,o){this.title=e,this.description=t,this.dueDate=n,this.priority=o},y=function(e){this.title=e},h=document.getElementById("todoItemFormContainer"),g=document.getElementById("todoItemForm"),E=document.getElementById("addProjectForm");let I=document.getElementById("todoItemFormBtn"),b=document.getElementById("hideTodoFormBtn"),x=document.getElementById("mainContent"),B=document.getElementById("defaultProjects"),T=document.getElementById("inbox"),j=document.getElementById("addTodoItemBtn"),C=document.getElementById("addProject"),F=document.getElementById("createProjectBtn");const L=document.getElementById("projectFormContainer");let P=document.getElementById("hideProjectFormBtn");const w=document.querySelectorAll(".inputForms");let k=document.getElementById("projectDashboard"),D=document.querySelectorAll(".projectClass");function M(){L.style.display="none",E.reset()}function S(){h.style.display="none",g.reset()}j.addEventListener("click",(function(){let e=document.forms.todoItemForm.todoTitle.value,t=document.forms.todoItemForm.todoDescription.value,n=document.forms.todoItemForm.todoDuedate.value,o=document.forms.todoItemForm.todoPriority.value;if(""==e||""==t||""==n||""==o)return alert("Fill it out!"),!1;{new v(e,t,n,o);let r=document.createElement("p");B.appendChild(r),r.innerText=`TODO ITEM: ${e}.\nDESCRIPTION: ${t}.\nDUE-DATE: ${n}.\nPRIORITY: ${o}.`}S()})),I.addEventListener("click",(function(){h.style.display="flex",g.reset()})),b.addEventListener("click",S),C.addEventListener("click",(function(){L.style.display="flex",E.reset()})),P.addEventListener("click",M),F.addEventListener("click",(function(){let e=document.forms.addProjectForm.projectTitle.value;if(""==e)return alert("Fill it out!"),!1;{new y(e);let t=document.createElement("div");t.classList.add("projectClass"),x.insertBefore(t,I);let n=document.createElement("button");n.innerHTML=e,k.appendChild(n),console.log(x.children[1]),console.log(x)}M()})),T.addEventListener("click",(function(){D[0].style.display="flex"})),w.forEach((e=>{e.addEventListener("submit",(e=>{e.preventDefault()}))}))})()})();