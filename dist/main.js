(()=>{"use strict";var e={185:(e,t,o)=>{o.d(t,{f:()=>d});let r=localStorage.getItem("folderList");r=r?JSON.parse(r):["All Tasks"];let n="All Tasks";const l=function(){let e=document.querySelector("#sideBar");for(;e.firstChild;)e.removeChild(e.firstChild);for(let t=0;t<r.length;t++){let o=document.createElement("div"),c=document.createElement("div");c.textContent="x",c.classList="folderRemoveButton",c.addEventListener("click",(()=>{r.splice(t,1),localStorage.setItem("folderList",JSON.stringify(r)),l()})),o.addEventListener("click",(()=>{n=r[t],u(),console.log(n)})),o.textContent=r[t],o.classList="folderList",e.appendChild(o),"All Tasks"!=o.textContent&&o.appendChild(c)}};let c=localStorage.getItem("taskList");c=c?JSON.parse(c):[];class i{constructor(e,t,o,r,n){this.task=e,this.dueDate=o,this.priority=r,this.description=t,this.folder=n}}function a(){document.querySelector("#mainForm").style.opacity="0.0",document.querySelector("#mainForm").style.transform="translateY(40px)"}const s=function(e){if(document.querySelector("#taskName").value=e.task,document.querySelector("#dueDate").value=e.dueDate,document.querySelector("#priority").value=e.priority,document.querySelector("#taskDescription").value=e.description,document.querySelector("#doneButton").style.display="none",!document.querySelector(".saveButton")){let t=document.createElement("div");t.textContent="save",t.classList="saveButton",document.querySelector("#mainForm").appendChild(t),t.addEventListener("click",(function(){e.task=document.querySelector("#taskName").value,e.dueDate=document.querySelector("#dueDate").value,e.priority=document.querySelector("#priority").value,e.description=document.querySelector("#taskDescription").value,u(),a(),document.querySelector("#doneButton").style.display="block",document.querySelector(".saveButton").remove(),document.querySelector("#taskName").value="",document.querySelector("#dueDate").value="",document.querySelector("#priority").value="",document.querySelector("#taskDescription").value=""}))}d()},u=function(){let e=document.querySelector("#listArea");for(;e.firstChild;)e.removeChild(e.firstChild);let t=document.createElement("div");t.textContent=n,t.classList="folderName",e.appendChild(t);for(let t=0;t<c.length;t++)if(c[t].folder===n||"All Tasks"===n){let o=document.createElement("div"),r=document.createElement("i"),n=document.createElement("div");o.innerHTML=`\n      <p>Task: ${c[t].task}</p>\n      <p>Notes: ${c[t].description}</p>\n      <p>Priority: ${c[t].priority}</p>\n      <p>Deadline: ${c[t].dueDate}</p>\n      <p>Folder: ${c[t].folder}</p>`,r.addEventListener("click",(()=>{c.splice(t,1),localStorage.setItem("taskList",JSON.stringify(c)),u()})),n.addEventListener("click",(()=>{s(c[t])})),o.classList="listItems",r.classList="fa fa-trash",n.classList="fa fa-edit",o.appendChild(r),o.appendChild(n),e.appendChild(o),t%2==0&&(o.style.backgroundColor="rgb(182, 222, 247)")}};function d(){document.querySelector("#mainForm").style.opacity="1",document.querySelector("#mainForm").style.transform="translateY(-40px)"}document.querySelector("#addItemButton").addEventListener("click",d),document.querySelector("#formX").addEventListener("click",a),document.querySelector("#doneButton").addEventListener("click",(function(){""!=document.querySelector("#taskName").value&&(function(){let e=document.querySelector("#taskName").value,t=document.querySelector("#dueDate").value,o=document.querySelector("#priority").value,r=document.querySelector("#taskDescription").value,l=new i(e,r,t,o,n);c.push(l),console.log(c),localStorage.setItem("taskList",JSON.stringify(c))}(),u(),a())})),document.querySelector("#newProject").addEventListener("click",(function(){let e=document.querySelector("#projectInput").value;""!=e&&(r.push(e),localStorage.setItem("folderList",JSON.stringify(r)),l()),document.querySelector("#projectInput").value=""})),u(),l()}},t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o(185)})();