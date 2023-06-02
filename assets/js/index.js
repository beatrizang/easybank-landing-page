let btnMenu = document.getElementById("button__menu");
let nav = document.getElementById("nav");
let backMenu = document.getElementById("back_menu");
let show = false;


btnMenu.addEventListener('click',()=>{
    if(!show){
        showMenu();
    }
    else{
        hideMenu();
    }
});

backMenu.addEventListener('click', ()=>{
        hideMenu();
})

function hideMenu(){
    nav.style.display = "none";
    backMenu.style.display = "none";
    show = false;
}

function showMenu(){
    nav.style.display = "block";
    backMenu.style.display = "block";
    show= true;
}