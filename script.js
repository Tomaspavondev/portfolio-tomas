let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList=""
        menuVisible= false;
    }else{
        document.getElementById("nav").classList="responsive"
        menuVisible= true;
    }
}

function seleccionar(){
    //ocultar menu cuando se selecciona
    document.getElementById("nav").classList="";
    menuVisible = false;
}

//aplicar las clases de las habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades")
    var distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top
    if(distancia_habilidades >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("html");
        habilidades[2].classList.add("css");
        habilidades[3].classList.add("react");
        habilidades[4].classList.add("tailwind");
        habilidades[5].classList.add("responsive");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("equipo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("proactividad");
        habilidades[10].classList.add("emocional");
        habilidades[11].classList.add("aprendizaje");
    }
}

//detectar scrrolling
window.onscroll = function(){
    efectoHabilidades()
}

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing');
    });
});
function abrirCorreo() {
    var url = "https://mail.google.com/mail/?view=cm&fs=1&to=pavonx8@gmail.com";
   // Obtener el ancho de la pantalla y definir la posición de la ventana emergente
    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;
   var popupWidth = 500; // Ancho de la ventana emergente
   var popupHeight = 500; // Alto de la ventana emergente
   var posX = screenWidth - popupWidth; // Posición X para que aparezca en el lado derecho
   var posY = screenHeight - popupHeight; // Posición Y para que aparezca en la parte inferior
    
    window.open(url, "_blank", "width=500,height=400,right=" + posX + ",top=" + posY);
}