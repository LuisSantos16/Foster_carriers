//menu

function llamar(){
    let menudespegable = document.getElementById("listaid");
    menudespegable.classList.toggle("lista-open")
    let listabar=document.getElementById("lista-bar");
    listabar.querySelector("lista-bar .listabar").classList.toggle;
}

//Boton Subir
window.addEventListener('scroll', Subir);
    function Subir(){
var subir=document.getElementById("subir");
var npos=window.pageYOffset;
        if (npos>100){
            subir.style.display="block";
            subir.style.transition="0.5s";
        }
        else{
            subir.style.display="none";
            subir.style.transition="0.5s";
        }
    }