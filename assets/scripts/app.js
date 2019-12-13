// CONSTANTES
const html = $('html');
const overlay = $('.overlay');

// Check Page
function checkPage() {
    let page = document.querySelectorAll('div')[0].getAttribute('page');
    return page;
}
var currentPage = checkPage();

// Page fully loaded
function pageLoaded () {
    let html = $('html');
    let preloader = $('.preloader');
    
    html.css('overflow', 'hidden');

    setTimeout(() => {
        html.css('oveflow', 'auto');
        preloader.fadeOut();
    }, 2000);
}

// Header Particles JS
if ($(window).width() < 700) {
    var particleJsCanva = $('header > canvas');
    particleJsCanva.removeAttr('style');
    particlesJS('particles-js', {
        "particles": {
        "number": {
            "value": 100,
            "density": {
            "enable": false,
            "value_area": 1000
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
            "width": 0,
            "color": "#000000"
            },
            "polygon": {
            "nb_sides": 5
            },
            "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 50,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
            }
        }
        },
        "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
            "enable": true,
            "mode": "repulse"
            },
            "onclick": {
            "enable": true,
            "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
            "distance": 400,
            "line_linked": {
                "opacity": 1
            }
            },
            "bubble": {
            "distance": 200,
            "size": 0,
            "duration": 2,
            "opacity": 8,
            "speed": 3
            },
            "repulse": {
            "distance": 200,
            "duration": 0.4
            },
            "push": {
            "particles_nb": 4
            },
            "remove": {
            "particles_nb": 2
            }
        }
        },
        "retina_detect": true
});
}
else {
    particlesJS('particles-js', {
        "particles": {
        "number": {
            "value": 166,
            "density": {
            "enable": false,
            "value_area": 100
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
            "width": 0,
            "color": "#000000"
            },
            "polygon": {
            "nb_sides": 5
            },
            "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
            }
        }
        },
        "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
            "enable": true,
            "mode": "repulse"
            },
            "onclick": {
            "enable": true,
            "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
            "distance": 400,
            "line_linked": {
                "opacity": 1
            }
            },
            "bubble": {
            "distance": 200,
            "size": 0,
            "duration": 2,
            "opacity": 8,
            "speed": 3
            },
            "repulse": {
            "distance": 200,
            "duration": 0.4
            },
            "push": {
            "particles_nb": 4
            },
            "remove": {
            "particles_nb": 2
            }
        }
        },
        "retina_detect": true
});
}

// Animaciones de los acceso del home
var getBocaProductor = document.querySelector('#svgProductores > .BOCA > path');
var getBocaCliente = document.querySelector('#svgClientes > .BOCA > path');
var icProductorBocaCerrada = getBocaProductor.getAttribute('d');
var icProductorBocaAbierta = 'M80.3,85.7c2.8,0,5.2-1.4,5.8-3.5c0.1-0.4,0-0.8-0.2-1.1c-0.3-0.4-0.9-0.7-1.4-0.6h-8.3c-0.5,0-1.1,0.2-1.4,0.6c-0.2,0.3-0.3,0.7-0.2,1.1C75.1,84.2,77.5,85.7,80.3,85.7z M84.4,82c-0.5,1.2-2.2,2-4.1,2s-3.6-0.9-4.1-2H84.4z';
var icClienteBocaCerrada = getBocaCliente.getAttribute('d');
var icClienteBocaAbierta = 'M81.3,82.4C81,82.7,81,83.1,81,83.5c0.6,2,2.9,3.5,5.6,3.5s5.1-1.4,5.6-3.5c0.1-0.4,0-0.8-0.2-1.1c-0.3-0.4-0.8-0.6-1.4-0.6h-8.1C82.1,81.8,81.6,82,81.3,82.4z M90.7,83.4c-0.5,1.2-2.2,2-4,2s-3.5-0.8-4-2H90.7z';
var accesoProductor = document.querySelector('.accesosProductor');
var accesoCliente = document.querySelector('.accesosCliente');
accesoProductor.addEventListener('mouseenter', () => {
    getBocaProductor.setAttribute('d', icProductorBocaAbierta);

    gsap.to( $('#svgProductores > .LINEA'), {duration: 1, scaleX: 1.1, transformOrigin: "center center"} );
    gsap.to( $('#svgProductores > .MISC_x5F_1'), {duration: .5, scaleX: 1.3, transformOrigin: "46,4px 120,35px"} );
    gsap.to( $('#svgProductores > .MISC_x5F_2'), {duration: 1, scale: 1.2, rotation: 360, transformOrigin: "center center"} );
    gsap.to( $('#svgProductores > .MISC_x5F_3'), {duration: 1, scale: 2, transformOrigin: "center center"} );
    gsap.to( $('#svgProductores > .MISC_x5F_4'), {duration: 2, rotation: 360, transformOrigin: "center center"} );
    gsap.to( $('#svgProductores > .MISC_x5F_6'), {duration: 1, scale: 3, transformOrigin: "center center"} );
    gsap.to( $('#svgProductores > .MISC_x5F_5'), {duration: 2, scale: 3, rotation: 360, translateX: 20, transformOrigin: "center center"} );


});
accesoProductor.addEventListener('mouseleave', () => {
    getBocaProductor.setAttribute('d', icProductorBocaCerrada);

    gsap.to( $('#svgProductores > .LINEA'), {duration: 1, scaleX: 1, transformOrigin: "center center"} );
    gsap.to( $('#svgProductores > .MISC_x5F_1'), {duration: 1, scaleX: 1, transformOrigin: "46,4px 120,35px"} );
    gsap.to( $('#svgProductores > .MISC_x5F_2'), {duration: 1, scale: 1, rotation: 0,ransformOrigin: "center center"} );
    gsap.to( $('#svgProductores > .MISC_x5F_3'), {duration: 1, scale: 1, transformOrigin: "center center"} );
    gsap.to( $('#svgProductores > .MISC_x5F_4'), {duration: 1, rotation: 0, transformOrigin: "center center"} );
    gsap.to( $('#svgProductores > .MISC_x5F_6'), {duration: 1, scale: 1, transformOrigin: "center center"} );
    gsap.to( $('#svgProductores > .MISC_x5F_5'), {duration: 1, scale: 1, rotation: 0, translateX: 0, transformOrigin: "center center"} );


});
accesoCliente.addEventListener('mouseenter', () => {
    getBocaCliente.setAttribute('d', icClienteBocaAbierta);

    gsap.to( $('#svgClientes .LINEAS'), { duration: 1, scaleX: 1.05, transformOrigin: 'center center' } )
    gsap.to( $('#svgClientes > .MISC_x5F_1'), {duration: .5, scale: 2, transformOrigin: "center center"} );
    gsap.to( $('#svgClientes > .MISC_x5F_3'), {duration: 1, scale: 2, transformOrigin: "center center"} );
    gsap.to( $('#svgClientes > .MISC_x5F_2'), {duration: 1, scale: 1.2, rotation: 360, transformOrigin: "center center"} );
    gsap.to( $('#svgClientes > .MISC_x5F_4'), {duration: 2, rotation: 360, scale: 1.5, transformOrigin: "center center"} );
    gsap.to( $('#svgClientes > .MISC_x5F_6'), {duration: .5, rotation: 360, scale: 1.2, transformOrigin: "center center"} );
    gsap.to( $('#svgClientes > .MISC_x5F_5'), {duration: 1, scale: 1.4, translateX: 0, transformOrigin: "center center"} );


});
accesoCliente.addEventListener('mouseleave', () => {
    getBocaCliente.setAttribute('d', icClienteBocaCerrada);

    gsap.to( $('#svgClientes .LINEAS'), { duration: 1, scaleX: 1, transformOrigin: 'center center' } )
    gsap.to( $('#svgClientes > .MISC_x5F_1'), {duration: 1, scale: 1, transformOrigin: "center center"} );
    gsap.to( $('#svgClientes > .MISC_x5F_3'), {duration: 1, scale: 1, transformOrigin: "center center"} );
    gsap.to( $('#svgClientes > .MISC_x5F_2'), {duration: 1, scale: 1, rotation: 0,ransformOrigin: "center center"} );
    gsap.to( $('#svgClientes > .MISC_x5F_4'), {duration: 1, rotation: 0, scale: 1, transformOrigin: "center center"} );
    gsap.to( $('#svgClientes > .MISC_x5F_6'), {duration: 1, rotation: 0, scale: 1, transformOrigin: "center center"} );
    gsap.to( $('#svgClientes > .MISC_x5F_5'), {duration: 1, scale: 1, translateX: 0, transformOrigin: "center center"} );

});

// Acceso productores
var popupProductores = $('.popupIngresoProductores');

$('.accesosProductor').click(function () {
    popupProductores.fadeIn();
    overlay.fadeIn();
    html.css('overflow', 'hidden');
})
//  -- Cerrar popup
$('.cerrarPopupIngresoProductores').click(function () {
    popupProductores.fadeOut();
    overlay.fadeOut();
    html.css('overflow', 'auto');
})
overlay.click(function () {
    popupProductores.fadeOut();
    overlay.fadeOut();
    html.css('overflow', 'auto');
})
// -- Enviar codigo productor
$('#sendCodigoProductor').click(function () {
    event.preventDefault();
    alert('Ingreso productores no terminado, ingresar por clientes')
})

// Acceso clientes
$('.accesosCliente').click(function () {
    window.location.href = '../../inicio.php'
})


$(document).ready(function () {
    //pageLoaded();
    
})