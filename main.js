let nav = document.querySelector("navbar")
window.onnscroll = function(){
    if(document.documentElement.scroll>20){
        nav.classList.add("header-scrolled")
    }else{
        nav.classList.remove("header-scrolled")
     }
}
