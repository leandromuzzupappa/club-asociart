const html = $('html');
const loginProductores = $('#Login #productores');
const loginClientes = $('#Login #clientes');

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



$(document).ready(function() {

    // Set title acording to the page
        switch (currentPage) {
            case 'login.php':
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

})

