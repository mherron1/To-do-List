(()=>{"use strict";var e={185:(e,t,o)=>{o.d(t,{f:()=>a});let r=["All Tasks"],n="All Tasks";const c=function(){let e=document.querySelector("#sideBar");for(;e.firstChild;)e.removeChild(e.firstChild);for(let t=0;t<r.length;t++){let o=document.createElement("div"),l=document.createElement("div");l.textContent="x",l.classList="folderRemoveButton",l.addEventListener("click",(()=>{r.splice(t,1),c()})),o.addEventListener("click",(()=>{n=r[t],s(),console.log(n)})),o.textContent=r[t],o.classList="folderList",e.appendChild(o),"All Tasks"!=o.textContent&&o.appendChild(l)}};let l=[];class u{constructor(e,t,o,r,n){this.task=e,this.dueDate=o,this.priority=r,this.description=t,this.folder=n}}function i(){document.querySelector("#mainForm").style.opacity="0.0"}const d=function(e){if(document.querySelector("#taskName").value=e.task,document.querySelector("#dueDate").value=e.dueDate,document.querySelector("#priority").value=e.priority,document.querySelector("#taskDescription").value=e.description,document.querySelector("#doneButton").style.display="none",!document.querySelector(".saveButton")){let t=document.createElement("div");t.textContent="save",t.classList="saveButton",document.querySelector("#mainForm").appendChild(t),t.addEventListener("click",(function(){e.task=document.querySelector("#taskName").value,e.dueDate=document.querySelector("#dueDate").value,e.priority=document.querySelector("#priority").value,e.description=document.querySelector("#taskDescription").value,s(),i(),document.querySelector("#doneButton").style.display="block",document.querySelector(".saveButton").remove()}))}a()},s=function(){let e=document.querySelector("#listArea");for(;e.firstChild;)e.removeChild(e.firstChild);let t=document.createElement("div");t.textContent=n,t.classList="folderName",e.appendChild(t);for(let t=0;t<l.length;t++)if(l[t].folder===n||"All Tasks"===n){let o=document.createElement("div"),r=document.createElement("div"),n=document.createElement("div");o.innerHTML=`\n      <p>Task: ${l[t].task}</p>\n      <p>Description: ${l[t].description}</p>\n      <p>Priority: ${l[t].priority}</p>\n      <p>Due: ${l[t].dueDate}</p>\n      <p>Folder: ${l[t].folder}</p>`,r.textContent="Remove",n.textContent="Edit",r.addEventListener("click",(()=>{l.splice(t,1),s()})),n.addEventListener("click",(()=>{d(l[t])})),o.classList="listItems",r.classList="listRemove",n.classList="listEdit",e.appendChild(o),o.appendChild(r),o.appendChild(n)}};function a(){document.querySelector("#mainForm").style.opacity="1"}document.querySelector("#addItemButton").addEventListener("click",a),document.querySelector("#formX").addEventListener("click",i),document.querySelector("#doneButton").addEventListener("click",(function(){!function(){let e=document.querySelector("#taskName").value,t=document.querySelector("#dueDate").value,o=document.querySelector("#priority").value,r=document.querySelector("#taskDescription").value;if(""!=e){let c=new u(e,r,t,o,n);l.push(c)}document.querySelector("#taskName").value="",document.querySelector("#dueDate").value="",document.querySelector("#priority").value="",document.querySelector("#taskDescription").value=""}(),s(),i()})),document.querySelector("#newProject").addEventListener("click",(function(){let e=document.querySelector("#projectInput").value;""!=e&&(r.push(e),c()),document.querySelector("#projectInput").value=""})),s(),c(),document.querySelector("textarea").focus(),document.querySelector("textarea").setSelectionRange(0,0)}},t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o(185)})();