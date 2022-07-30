<?php
    $url='http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
    $urlTem=explode("index.php", $url);
    $url=$urlTem[0];
?>
﻿<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tareas de mantenimiento</title>
        <link href="<?php echo $url; ?>assets/css/bootstrap.min.css" rel="stylesheet">
        <link href="<?php echo $url; ?>assets/css/login.css" rel="stylesheet">
        <script type="text/javascript" src="<?php echo $url; ?>assets/js/jquery-3.1.0.min.js"></script>
        <script type="text/javascript" src="<?php echo $url; ?>assets/js/bootstrap.min.js"></script>
    </head>
    <body>
        <div class="separador-r" name="separadorHeader">
            <div class="separador"></div>
        </div>
        <img class="fondoLogin" src="<?php echo $url; ?>/assets/img/fondo.jpg">
		<div class="container col-xs-10 col-sm-10 col-md-10 col-md-offset-1 col-xs-offset-1 col-sm-offset-1 " style="margin-top: 100px;">
            <div style="
                background-color: #ffffff;
                filter: alpha(opacity=20);
                -moz-opacity: 0.2;
                opacity: 0.2;
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
            "></div>
			<div class="col-xs-3 col-sm-3 col-md-3" align="center" style="margin-top: 80px;"><img src="<?php echo $url; ?>assets/img/logo-login.png" width="200px"/></div>
			<div class="col-xs-9 col-sm-9 col-md-9" style="height: 350px;">
				<center style="margin-top:50px;"><h1>Tareas de mantenimiento</h1></center>
				<!--<p style="margin-top:45px;" class="lead" align="justify">En estos momentos nos encontramos realizando tareas de mantenimiento del sistema de información SIAAF, el cual se lleva a cabo en las franjas de Lunes a Viernes de 7:00pm - 8:00pm y Sabados de 1:00pm - 2:00pm.</p>-->
				<p style="margin-top:45px;" class="lead" align="justify">En estos momentos nos encontramos realizando tareas de mantenimiento del sistema de información SIAAF, el cual se lleva a cabo de 19:00 - 07:00. Ofrecemos disculpas por los inconvenientes causados.</p>
				<center><p><a class="btn btn-lg btn-success" href="http://www.unisimon.edu.co/" role="button">Regresar al sitio principal</a></p></center>
			</div>
		</div>
    </body>
</html>
