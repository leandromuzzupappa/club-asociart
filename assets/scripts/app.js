const html = $('html');
const overlay = $('.overlay');
const loginProductores = $('#Login #productores');
const loginClientes = $('#Login #clientes');

// Animacion de carga
    function loader () {
        html.css('overflow', 'hidden');
        
        setTimeout(() => {
            html.css('overflow', 'auto');
            overlay.fadeOut('slow');
        }, 1000);
    }

// Check current page
    function checkPage () {
        let thisPage = $(location).attr('pathname');

        if ( thisPage.indexOf('clubasociart/web/') > -1 ) {
            return thisPage.replace('/clubasociart/web/', '');
        }
        if ( thisPage.indexOf('/devel/') > -1 ) {

            return thisPage.replace('/devel/', '');
        }
        
    }
    var currentPage = checkPage ();
    console.log(currentPage);

// Set new title tag
    function setTitleTag (newTitle) {
        $(document).prop('title', newTitle);
    }

// Menu mobile
    var mmbtn = $('#menuMobileBoton');
    var mm = $('#menuMobile');

    mmbtn.click(function () {
        $(this).toggleClass('menuMobileBotonActive');
        mm.toggleClass('menuMobileActive');
        if ( mm.hasClass('menuMobileActive') ) {
            html.animate({scrollTop: 0}, '20')
            html.css('overflow', 'hidden')
            setTimeout(() => {
                mm.css('top', '0px') 
            }, 30);
        } else {
            html.css('overflow', 'scroll')
            mm.css('top', '-100p%') 
        }
    })

// Login events
    // Animations
    loginProductores.hover(function () {
        // Mouse enter
        gsap.to( $('#svgProductores > .LINEA'), {duration: .5, scaleX: 1.1, transformOrigin: "center center"} );
    }, function () {
        // Mouse leave
        gsap.to( $('#svgProductores > .LINEA'), {duration: .5, scaleX: 1, transformOrigin: "center center"} );
    });

    loginClientes.hover(function () {
        // Mouse enter
        gsap.to( $('#svgClientes > .LINEAS'), {duration: .5, scaleX: 1.1, transformOrigin: "center center"} );
    }, function () {
        // Mouse leave
        gsap.to( $('#svgClientes > .LINEAS'), {duration: .5, scaleX: 1, transformOrigin: "center center"} );
    });

    // Redirect to
    loginProductores.click(()=>{
        window.location.href = 'bienvenido.php?productores'
    });
    loginClientes.click(()=>{
        window.location.href = 'bienvenido.php?clientes'
    });

// Como canjear premios
    // Boton Ingresar para canjear
    $('#ingresoCanjear').click(function() {
        alert(1);
    })

    // Lista de productos pagination


$(document).ready(function() {

    // Set title acording to the page
        switch (currentPage) {
            case 'login.php':
                setTitleTag('Iniciar Sesión - Club Asociart');
                // Particles Js
                particlesJS.load('particles-js', 'assets/scripts/particlesjs-config.json');
                break;
            case '':
                setTitleTag('Iniciar Sesión - Club Asociart');
                // Particles Js
                particlesJS.load('particles-js', 'assets/scripts/particlesjs-config.json');
                break;
            case 'bienvenido.php':
                setTitleTag('Bienvenido - Club Asociart');
                break;
            case 'como-sumar-puntos.php':
                setTitleTag('¿Cómo sumar puntos? - Club Asociart');
                break;
            case 'como-canjear-premios.php':
                setTitleTag('¿Cómo canjear premios? - Club Asociart');
                break;
            case 'bases-y-condiciones.php':
                setTitleTag('Bases y condiciones - Club Asociart');
                break;
            default:
                break;
        }
    
    // Lista de precios?
        setTimeout(() => {
            $('.premiosContainer').slick({
                infinite: false,
                rows: 2,
                arrows: false,
                dots: true,
                slidesPerRow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1000,
                        settings: {
                            slidesPerRow: 3,
                            centerMode: true
                        }
                    },
                    {
                        breakpoint: 800,
                        settings: {
                            rows: 1,
                        }
                    }
                ]
            });
        }, 100);

    // Animacion de carga
        loader();
})
