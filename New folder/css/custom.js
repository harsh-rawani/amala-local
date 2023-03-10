
const menu = document.querySelector('.menu')
const menuMain = menu.querySelector('.menu-main')
const goBack = menu.querySelector('.go-back')
const menuTrigger = document.querySelector('.mobile-menu-trigger')
const closeMenu = document.querySelector('.mobile-menu-close')
// const closeMenu = document.querySelector('.mobile-menu-close')
let subMenu;
menuMain.addEventListener('click', (e)=>{
    if(e.target.closest('.menu-item-has-children')){
        const hasChildren = e.target.closest('.menu-item-has-children')
        showSubMenu(hasChildren)
    }
    
})
goBack.addEventListener('click', ()=> {
    hideSubMenu()
})
menuTrigger.addEventListener('click', ()=>{
    toggleMenu()
})
closeMenu.addEventListener('click',()=>{
    toggleMenu()
})
document.querySelector(".menu-overlay").addEventListener('click',()=>{
    toggleMenu()
})
function toggleMenu(){
    menu.classList.toggle('active')
    document.querySelector(".menu-overlay").classList.toggle('active')
}
function showSubMenu(hasChildren){
        subMenu =hasChildren.querySelector(".sub-menu");
        subMenu.classList.add('active')
        subMenu.style.animation ="slideleft 0.5s ease-in-out c forwards";
        const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
        menu.querySelector('.current-mobile-title').innerHTML = menuTitle
        menu.querySelector('.mobile-menu-head').classList.add('active')
}
function hideSubMenu(){
    subMenu.style.animation ="slideright 0.5s ease c forwards";
    setTimeout(()=>{
        subMenu.classList.remove('active')
    },300)     
 
    menu.querySelector('.current-mobile-title').innerHTML = ""
    menu.querySelector('.mobile-menu-head').classList.remove('active')
}