const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      sidebarClose = document.querySelector(".sidebarClose");


//js code to toggel sidebar
sidebarOpen.addEventListener("click",()=>{
    nav.classList.add("active");
});
//js code to toggel sidebar
body.addEventListener("click", e =>{
    let clickedElm = e.target;
    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu"))
    {
        nav.classList.remove("active");
    }
});