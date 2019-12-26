<?php include 'data/cargar-premios.php';
    function orderData($a, $b) {
		return $a['price'] > $b['price'];
	
	}

	usort ($premios,'orderData');
?>
<?php include 'includes/head.php'?>

<div id="Como-canjear-premios">
    
    <header>

        <nav id="menuDesktop" class="menuDesktopRojo">
            <div class="container">
                <ul>
                    <li>
                        <a class="" href="bienvenido.php">
                            <svg id="Capa_1" width="70" height="70" viewBox="0 0 70 70">
                                <defs>
                                    <clipPath id="clip-path">
                                    <rect class="cls-1" x="3.35" y="9.88" width="63.3" height="50.24"/>
                                    </clipPath>
                                </defs>
                                <title>Inicio</title>
                                <g class="cls-2">
                                    <path class="cls-3" d="M34.77,20,12.36,38.46a.89.89,0,0,1,0,.11.74.74,0,0,0,0,.12V57.4a2.35,2.35,0,0,0,.74,1.75,2.38,2.38,0,0,0,1.75.75h15v-15h10v15h15a2.53,2.53,0,0,0,2.5-2.5V38.69a.45.45,0,0,0,0-.23Zm0,0"/>
                                    <path class="cls-3" d="M65.76,34.25l-8.53-7.1V11.24A1.2,1.2,0,0,0,56,10H48.5a1.18,1.18,0,0,0-.9.35,1.21,1.21,0,0,0-.35.89v7.61l-9.51-8a4.86,4.86,0,0,0-5.93,0l-28,23.36a1.12,1.12,0,0,0-.43.83,1.3,1.3,0,0,0,.28.92L6,38.88a1.29,1.29,0,0,0,.82.43A1.42,1.42,0,0,0,7.8,39l27-22.49L61.75,39a1.21,1.21,0,0,0,.82.27h.12a1.32,1.32,0,0,0,.82-.43L65.92,36a1.25,1.25,0,0,0,.27-.92,1.09,1.09,0,0,0-.43-.83Zm0,0"/>
                                </g>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a class="active" href="como-canjear-premios.php">
                            ¿Cómo canjear los premios?
                            <div class="bottomLine"></div>
                        </a>
                    </li>
                    <li>
                        <a class="" href="como-sumar-puntos.php">
                            ¿Cómo sumar puntos?
                            <div class="bottomLine"></div>
                        </a>
                    </li>
                    <li>
                        <a class="" href="bases-y-condiciones.php">
                            Bases y condiciones
                            <div class="bottomLine"></div>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="container">
            <div class="bajada">
                <h1>
                    ¿Cómo canjear los <br> <strong>puntos por premios?</strong>
                </h1>
                <p>
                    Con sólo tener un mínimo de puntos en la cuenta, ya podés empezar a canjear tus premios.
                </p>
            </div>
        </div>

    </header>
    
    <main>

        <section class="acceso">
            <div class="container">
                <div class="pasos">

                    <!--paso 1-->
                    <div class="col item">
                        <div class="img">
                            <svg x="0px" y="0px" viewBox="0 0 178 63.6">
                            <g id="item1">
                                <g>
                                    <path class="st0" d="M18.8,48.5c-11.1,0-15.9-6.6-15.9-23.2C2.9,8.1,7.6,2,18.8,2s15.9,6.1,15.9,23.2
                                        C34.6,41.9,29.8,48.5,18.8,48.5z M18.8,9.9c-4.6,0-6.9,3.2-6.9,15.2c0,12.3,2.3,15.4,6.9,15.4s6.9-3.2,6.9-15.4S23.4,9.9,18.8,9.9
                                        z"/>
                                    <path class="st0" d="M41.5,39.4h11.6V12.9l-10.4,3.3V8.5l12.7-5.6h7.1v36.5h10.8v8.1H41.5V39.4z"/>
                                </g>
                                <rect x="2.6" y="59.1" class="st1" width="172.9" height="0.2"/>
                            </g>
                            </svg>
                        </div>
                        <div class="texto">
                            <p>
                                <strong>Seleccioná</strong> el premio que más te guste de nuestro catálogo
                            </p>
                        </div>
                    </div>
                    <!--Paso 2-->
                    <div class="col item">
                        <div class="img">
                            <svg x="0px" y="0px" viewBox="0 0 178 63.6">
                            <g id="item2">
                                <g>
                                    <path class="st0" d="M18.8,48.5c-11.1,0-15.9-6.6-15.9-23.2C2.9,8.1,7.6,2,18.8,2s15.9,6.1,15.9,23.2
                                        C34.6,41.9,29.8,48.5,18.8,48.5z M18.8,9.9c-4.6,0-6.9,3.2-6.9,15.2c0,12.3,2.3,15.4,6.9,15.4s6.9-3.2,6.9-15.4S23.4,9.9,18.8,9.9
                                        z"/>
                                    <path class="st0" d="M53.2,39.2v0.2h17.9v8.1H40.3v-7.2c10.6-9.7,21-17.8,21-24.6c0-2.9-2-5.6-7.1-5.6c-4.5,0.1-8.8,1.5-12.5,4.1
                                        V6c3.8-2.4,8.1-4,14.6-4c9.2,0,14.5,4.9,14.5,12.5C70.8,23,64.1,30.4,53.2,39.2z"/>
                                </g>
                                <rect x="3.3" y="59.1" class="st1" width="172.9" height="0.2"/>
                            </g>
                            </svg>
                        </div>
                        <div class="texto">
                            <p>
                                <strong>Ingresá</strong> en Asociart Online con tu usuario.
                            </p>
                        </div>
                    </div>
                    <!--Paso 3-->
                    <div class="col item">
                        <div class="img">
                            <svg x="0px" y="0px" viewBox="0 0 178 63.6">
                            <g id="item3">
                                <g>
                                    <path class="st0" d="M18.8,48.5c-11.1,0-15.9-6.6-15.9-23.2C2.9,8.1,7.6,2,18.8,2s15.9,6.1,15.9,23.2
                                        C34.6,41.9,29.8,48.5,18.8,48.5z M18.8,9.9c-4.6,0-6.9,3.2-6.9,15.2c0,12.3,2.3,15.4,6.9,15.4s6.9-3.2,6.9-15.4S23.4,9.9,18.8,9.9
                                        z"/>
                                    <path class="st0" d="M42,2.9h28.8v6.5l-9.5,9.1l0.1,0.3c7.4,0.9,10.8,6.1,10.8,14.3c0,11.5-8.6,15.4-16.4,15.4
                                        c-8.6,0-13.8-3.3-13.8-3.3V37c3.9,2.2,8.2,3.4,12.7,3.3c4.7,0,8.3-2.2,8.3-7.5c0-6.1-3.4-7.2-6.3-7.2c-2.3,0.1-4.6,0.9-6.6,2.2
                                        l-3.7-5l12-11.7H42V2.9z"/>
                                </g>
                                <rect x="3.3" y="58.7" class="st1" width="172.9" height="0.2"/>
                            </g>
                            </svg>
                        </div>
                        <div class="texto">
                            <p>
                                <strong>Gestioná</strong> el canje, y ¡listo!
                            </p>
                        </div>
                    </div>

                    <div class="cta">
                        <button id="ingresoCanjear">Ingresá para canjear</button>
                    </div>

                </div>
            </div>
        </section>

        <div class="listaDePremios">
            <div class="container">
                <div class="premiosContainer">
                    <!-- Maquetado del premio - single
                    <div class="col premio">

                        <div class="pPrecio">
                            <h4>
                                99.999
                            </h4>
                        </div>
                        <div class="pImagen">
                            <img src="assets/images/premios/lapiceras.svg" alt="Lapiceras">
                        </div>
                        <div class="pDatos">
                            <h4>
                                PACK 5 BOLIGRAFOS
                            </h4>
                            <p>
                                Garbarino/Fravega $200
                            </p>
                        </div>

                    </div>
                    -->
                    <?php foreach ($premios as $key => $premio):?>
                    <div class="col premio">

                        <div class="pPrecio">
                            <h4>
                                <?php echo number_format($premio['price'], 0, ',', '.'); ?>
                            </h4>
                        </div>
                        <div class="pImagen">
                            <img src="<?php echo $premio['img']; ?>" alt="<?php echo $premio['altImg']; ?>">
                        </div>
                        <div class="pDatos">
                            <h4>
                                <?php echo $premio['title']; ?>
                            </h4>
                            <?php if (isset($premio['desc'])):?>
                                <p>
                                    <?php echo $premio['desc']; ?>
                                </p>
                            <?php endif;?>
                        </div>

                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>

    </main>

</div>
<?php include 'includes/footer.php'?>