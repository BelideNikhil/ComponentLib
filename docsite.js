const navToggleBtn=document.querySelector("#nav-toggle-btn")
const closeAsideBtn=document.querySelector("#close-aside-btn")
const asideComp=document.querySelector(".aside")


navToggleBtn.addEventListener("click",()=>{
   asideComp.classList.add("aside-active")
   // document.querySelector("body").style.overflow = 'hidden';
})

closeAsideBtn.addEventListener("click",()=>{
   asideComp.classList.remove("aside-active")
   // document.querySelector("body").style.overflow = 'auto';
})