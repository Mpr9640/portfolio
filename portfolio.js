const currentPage = window.location.pathname.split("/").pop();
document.addEventListener("DOMContenLoaded",function(){
    if(pageName){
        document.getElementById('${pageName}-btn')?.classList.add("active");
    }
}
);