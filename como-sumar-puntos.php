<?php include 'data/cargar-puntos.php';
    function orderData($a, $b) {
		return $a['cantidadPuntos'] > $b['cantidadPuntos'];
	}
	usort ($operaciones,'orderData');
?>
<?php include 'includes/head.php'?>
<div id="Como-sumar-puntos">
    
    <header>
        <div id="menuMobileBoton">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div id="menuMobile" class="">
            <div class="logos">
                <img src="assets/images/logo-club-asociart-blanco.svg" alt="Club Asociart">
                <img src="assets/images/logo-asociart-blanco.svg" alt="Asociart">
            </div>
            <div class="item">
                <a class="active" href="bienvenido.php">Inicio
                    <div class="bottomLine"></div>
                </a>
            </div>
            <div class="item">
                <a class="" href="como-canjear-premios.php">¿Cómo canjear los premios?
                    <div class="bottomLine"></div>
                </a>
            </div>
            <div class="item">
                <a class="" href="como-sumar-puntos.php">¿Cómo sumar puntos?
                    <div class="bottomLine"></div>
                </a>
            </div>
            <div class="item">
                <a class="" href="bases-y-condiciones.php">Bases y condiciones
                    <div class="bottomLine"></div>
                </a>
            </div>
        </div>
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
                    <strong>¿Cómo sumar</strong> puntos?
                </h1>
                <div class="texto">
                    <h6>
                        ¡Sumar puntos es muy fácil!
                    </h6>
                    <p>
                        Cuanto más usas Asociart Online y ASDirect, <strong>más puntos acumulás y más rápido podés canjear</strong>. <br><br>
                        Consultá a continuación las acciones que suman puntos, sus puntos correspondientes y sumá beneficios para tu empresa.
                    </p>
                </div>
            </div>
        </div>

    </header>

    <main>
        <section class="listaDeOperaciones">
            <div class="container">

                <div class="listaHeader">
                    <div class="col title">
                        <h3>
                            Operaciones
                        </h3>
                    </div><!--
                    --><div class="col title">
                        <h3>
                            Puntos
                        </h3>
                    </div>
                </div>

                <div class="listaContent">
                    <ul>
                        <!--
                        <li>
                            <p class="operacion">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque 
                            </p>
                            <p class="puntos">
                                <span>
                                    99999
                                </span>
                            </p>
                        </li>
                        -->
                        <?php foreach ($operaciones as $key => $operacion):?>
                            <li>
                                <p class="operacion">
                                    <?php echo $operacion['operacion']?>
                                </p>
                                <p class="puntos">
                                    <span>
                                        <?php echo number_format($operacion['cantidadPuntos'], 0, ',', '.'); ?>
                                    </span>
                                </p>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>


            </div>

        </section>
    </main>

</div>
<?php include 'includes/footer.php'?>