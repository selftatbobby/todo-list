(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([e.id,"#container {\n    display: grid;\n    grid: 1fr 5fr / 1fr 4fr;\n    width: 100%;\n    height: 100vh;\n}\n\n#header {\n    display: flex;\n    grid-area: 1 / 1 / span 1/ span 2;\n    border: 1px solid blue;\n    justify-content: left;\n    align-items: center;\n}\n\n#sideBar {\n    border: 1px solid red;\n    grid-area: 2 / 1 / span 1 / span 1;\n}\n\n#mainContent {\n    border: 1px solid green;\n    grid-area: 2 / 2 / span 1 / span 1;\n}\n\n#todoItemFormContainer {\n    display: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, .7);\n    justify-content: center;\n    align-items: center;\n    color: white;\n    font-size: 1rem;\n    flex-direction: column;\n}\n#projectFormContainer {\n    display: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, .9);\n    justify-content: center;\n    align-items: center;\n    color: white;\n    font-size: 1rem;\n    flex-direction: column;\n}",""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var m=n(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=r(p,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=o(e,r),d=0;d<i.length;d++){var l=n(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),a=n.n(i),c=n(565),s=n.n(c),d=n(216),l=n.n(d),u=n(589),m=n.n(u),p=n(426),f={};f.styleTagTransform=m(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const v=function(e,t,n,o,r){this.title=e,this.description=t,this.dueDate=n,this.priority=o};let y=document.createElement("div");y.id="new";const h=document.getElementById("todoItemFormContainer"),g=document.getElementById("todoItemForm");let E=document.getElementById("todoItemFormBtn"),I=document.getElementById("mainContent"),b=document.getElementById("defaultProjects"),x=(document.getElementById("inbox"),document.getElementById("addTodoItemBtn")),C=document.getElementById("addProject");const B=document.getElementById("projectFormContainer");let F=document.getElementById("hideProjectFormBtn");function T(){h.style.display="none",g.reset()}document.getElementsByClassName("inputForms"),h.addEventListener("submit",(e=>{e.preventDefault()})),projectFormContainer.addEventListener("submit",(e=>{e.preventDefault()})),x.addEventListener("click",(function(){let e=document.forms.todoItemForm.todoTitle.value,t=document.forms.todoItemForm.todoDescription.value,n=document.forms.todoItemForm.todoDuedate.value,o=document.forms.todoItemForm.todoPriority.value;if(""==e||""==t||""==n||""==o)return alert("Fill it out!"),!1;{new v(e,t,n,o);let r=document.createElement("p");b.appendChild(r),r.innerText=`TODO ITEM: ${e}.\nDESCRIPTION: ${t}.\nDUE-DATE: ${n}.\nPRIORITY: ${o}.`}T()})),E.addEventListener("click",(function(){h.style.display="flex",g.reset()})),document.getElementById("hideForm").addEventListener("click",T),C.addEventListener("click",(function(){B.style.display="flex"})),F.addEventListener("click",(function(){B.style.display="none"})),I.insertBefore(y,E),console.log(I)})()})();