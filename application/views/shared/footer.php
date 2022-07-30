<!-- MODAL MI CUENTA-->
<div class="modal fade" name="modalMiCuenta" id="modalMiCuenta" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Mi informaci&oacute;n</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" autoCal="true" formulacal="height-320" style="overflow-y: auto;">
                <div class="container">
                    <div class="row">
                        <div align="center" class="col-xs-12 col-sm-2 col-md-2 img">
                            <a href="" data-toggle="modal" data-target="#modalCambioClave" style="text-decoration:none; color:#333;">
                                <font style="cursor: pointer;">
                                    <img src="<?php echo  base_url(); ?>assets/img/iconos/login/pass.png" alt="" height="60" width="60">
                                    <div>Cambiar contrase&ntilde;a</div>
                                </font>
                            </a>
                        </div>
                        <!-- <div align="center" class="col-xs-12 col-sm-2 col-md-2 img">
                            <a name="btnGenerarQr" style="text-decoration:none; color:#333;">
                                <font style="cursor: pointer;">
                                    <img src="<?php echo  base_url(); ?>assets/img/iconos/login/codigo-qr.png" alt="" height="60" width="60">
                                    <div>Mi QR</div>
                                </font>
                            </a>
                        </div> -->
                    </div>
                    <form name="formularioMiCuenta">
                        <hr>
                        <div class="row">
                            <input type="hidden" name="cod" value="">
                            <div class="col-xs-12 col-sm-12 col-md-4 form-group">
                                <label for="">Nombre: <span class="text-danger">*</span></label>
                                <input type="text" name="nombre" class="form-control" data-error="Complete el campo Nombre">
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4 form-group">
                                <label for="">Apellido: <span class="text-danger">*</span></label>
                                <input type="text" name="apellido" class="form-control" data-validation="false">
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4 form-group">
                                <label for="">Email: <span class="text-danger">*</span></label>
                                <input type="email" name="email" class="form-control" data-validation="false">
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4 form-group">
                                <label for="">Telefono: <span class="text-danger">*</span></label>
                                <input type="number" name="telefono" class="form-control" data-validation="false">
                            </div>
                        </div>
                    </form>

                    <div class="row">
                        <div class="text-left text-muted">
                            <div><b>Nota:</b> Recuerde, que para iniciar sesion, se est&aacute; tomando la informaci&oacute;n de la C&eacute;dula como usuario, si realiza alg&uacute;n cambio de informaci&oacute;n, ese ser&aacute; su nuevo usuario para ingresar al aplicativo.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-success" name="btnActualizarUsuario" id="btnActualizarUsuario">Actualizar informaci&oacute;n</button>
            </div>
        </div>
    </div>
</div>
<!-- MODAL MI CUENTA-->

<!-- MODAL CAMBIO DE CLAVE-->
<div class="modal fade" name="modalCambioClave" id="modalCambioClave" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Cambio de contrase&ntilde;a</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container">
                    <form name="formularioCambioClave">
                        <div class="form-group">
                            <div>
                                <label for="current_password">Contrase&ntilde;a actual</label> <span class="required">*</span>
                                <div class="">
                                    <input autocomplete="false" class="form-control" type="password" name="actual" data-error="Complete el campo Contrase&ntilde;a actual">
                                </div>
                            </div>
                            <div style="padding-top: 10px;"></div>
                            <div>
                                <label for="new_password">Nueva contrase&ntilde;a</label> <span class="required">*</span>
                                <div class="">
                                    <input autocomplete="false" data-error="Complete el campo Nueva contrase&ntilde;a" class="form-control" type="password" name="nueva">
                                </div>
                            </div>
                        </div>
                        <div style="padding-top: 20px;"></div>
                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-success" name="btnCambiar" id="btnCambiar">Actualizar</button>
            </div>
        </div>
    </div>
</div>
<!-- MODAL CAMBIO DE CLAVE-->

<!-- MODAL CAMBIO DE CLAVE-->
<div class="modal fade" name="modalGenerarQr" id="modalGenerarQr" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Mi QR</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container" name="cuerpoQr">
                </div>
            </div>
        </div>
    </div>
</div>
<!-- MODAL CAMBIO DE CLAVE-->

<!-- MODAL REPORTE VENTAS FECHA-->
<div class="modal fade" id="modalFechasReporteVentas" name="modalFechasReporteVentas" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Ingresar rango de fechas</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container">
                    <input type="hidden" name="validarTipoReporte">
                    <form name="formularioReporteVentasFecha">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-6 form-group">
                                <label for="">Desde: <span class="text-danger">*</span></label>
                                <input type="date" class="form-control" name="textFechaDesdeReporteVenta" data-error="Complete el campo Desde">
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-6 form-group">
                                <label for="">Hasta: <span class="text-danger">*</span></label>
                                <input type="date" class="form-control" name="textFechaHastaReporteVenta" data-error="Complete el campo Hasta">
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 form-group">
                                <label for="">Usuario</label>
                                <select name="sUsuarioReporteVenta" class="form-control">

                                </select>
                            </div>
                            <div class="text-center">
                                <p class="text-muted text-center">Si desea generar el reporte de ventas por usuario, por favor seleccione el usuario. <i class="text-danger">Recuerde que esta opción solo funciona con el reporte en PDF.</i></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <input type="button" class="btn btn-success" name="btnGeneraReporteVentas" value="Generar reporte">
            </div>
        </div>
    </div>
</div>
<!-- MODAL REPORTE VENTAS FECHA-->

<!-- MODAL CARGANDO-->
<div class="modal fade" id="pleaseWaitDialog" style="z-index: 100000;" ata-backdrop="static" data-keyboard="false">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="spinner-border text-info" style="margin-left: 50%; width: 3rem; height: 3rem; z-index: 100000;" role=" status"></div>
    </div>
</div>
<!-- MODAL CARGANDO-->

<!-- End of Footer -->
</div>
<!-- End of Content Wrapper -->

<!-- Js funcionales -->
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/jquery-3.1.0.min.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/popper.min.js"></script>
<!-- Version compilada de Bootstrap js -->
<script type="text/javascript" src="<?php echo base_url(); ?>assets/boostrap/js/bootstrap.min.js"></script>
<!-- Version compilada de Bootstrap js -->
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/bootstrap-datepicker.min.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/bootstrap-select.min.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/jquery.growl.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/jquery.bootstrap-growl.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/bootbox.min.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/bootbox.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/bootbox.locales.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/bootbox.all.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/bootbox.all.min.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/bootbox.locales.min.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/notify.min.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/notify.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/jquery.autocomplete.min.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/jquery.base64.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/moment.min.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/daterangepicker.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/loading.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/plantilla/vendor/chart.js/Chart.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/plantilla/vendor/chart.js/Chart.min.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/plantilla/vendor/chart.js/Chart.bundle.min.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/plantilla/vendor/chart.js/Chart.bundle.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/plantilla/vendor/jquery-easing/jquery.easing.min.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/plantilla/js/sb-admin-2.min.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/bootstrap-treeview.min.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/jquery.formValidation.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/select2.min.js"></script>
<!-- Js funcionales -->

<script type="text/javascript">
    $.getScript('<?php echo base_url(); ?>assets/js/shared/Util.js');
    $.getScript('<?php echo base_url(); ?>assets/js/shared/helpers.js');
    $.getScript("<?php echo base_url(); ?>assets/js/Modulos/Usuarios/Micuenta.js");

    var BASE_URL = "<?php echo base_url(); ?>";
    var FECHA_ACTUAL = "<?php echo date("Y-m-d"); ?>";
    var HORA = "<?php echo date("H:i"); ?>";
    var APP_USER = "<?php echo $this->session->getUsername(); ?>";

    $('[name=btnCerrarSession]').on('click', function() {
        window.location = "<?php echo base_url_index(); ?>Login/logout";
    });
    $("[name=btnApp]").on('click', function() {
        window.location = BASE_URL + $(this).data("modulo");
    });
</script>

<?php for ($i = 0; $i < count($js); $i++) {
    echo '<script>$.getScript("' . base_url() . $js[$i] . '");</script>';
} ?>

</body>

</html>