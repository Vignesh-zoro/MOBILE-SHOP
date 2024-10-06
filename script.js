let toggleBtn=document.querySelector(".fa-xmark")
var Sidebar=document.querySelector(".left-side-bar")
var container=document.querySelector(".main-content")

toggleBtn.onclick=function(){

    Sidebar.classList.toggle("small-side")
    container.classList.toggle("large-container")
    toggleBtn.classList.toggle("fa-tablet")
}

