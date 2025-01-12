//your JS code here. If required.
const para = document.getElementById("status");
const btn = document.getElementById("enterBtn");
btn.addEventListener("click",()=>{
	para.outerHTML = "<h1>Entered Metaverse</h1>";
})