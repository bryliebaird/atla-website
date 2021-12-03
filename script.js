const navBtn = document.querySelector("#nav-btn");
const navList = document.querySelector(".nav-list");


navBtn.addEventListener("click", function(){
    if(navList.classList.contains("hidden")){
        navList.classList.remove("hidden");
    
    } else if(!navList.classList.contains("hidden")){
        console.log("howdy");
        navList.classList.add("hidden");
    }
})