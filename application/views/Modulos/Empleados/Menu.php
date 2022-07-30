<!-- Begin Page Content -->
<div class="container-fluid" autoCal="true" formulacal="height-55" style="overflow-y: auto;">

    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Gestión de Empleados</h1>

    </div>

    <!-- Content Row -->
    <div class="row">
        <div class="col-xs col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div class="card shadow mb-4">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-muted">Informaci&oacute;n de Empleados</h6>
                    <div class="btn-group dropleft">
                        <a name="btnCrearEmpleado" style="color:#FFF; text-decoration:none;" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-plus fa-sm text-white-50"></i> Crear</a>
                    </div>
                </div>
                <div class="card-body" autoCal="true" formulacal="height-210" style="overflow-y:auto;">
                    <div>
                        <input type="text" onkeyup="doSearch('tablaEmpleados', 'inputBuscarEmpleados')" placeholder="Buscar" class="form-control mb-2 col-4" name="inputBuscarEmpleados" style="float: right;">
                    </div>
                    <div class="table-responsive table-bordered" autoCal="true" formulacal="height-315" style="overflow-y:auto;">
                        <table class="table table-bordered table-hover" id="tablaEmpleados" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Sexo</th>
                                    <th scope="col">Area</th>
                                    <th scope="col">Boletín</th>
                                    <th scope="col">Opciones</th>
                                </tr>
                            </thead>
                            <tbody name="listadoEmpleados">

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /.container-fluid -->
</div>
<!-- End of Main Content -->

<!-- Modal empleado-->
<div class="modal fade" id="modalEmpleados" name="modalEmpleados" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel" name="tituloModal"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" autocal="true" formulacal="height-235" style="overflow-y: auto;">
                <div class="container">
                    <form name="formularioEmpleados">
                        <input type="hidden" name="codigoEmpleado" data-validation="false">
                        <div class="row">
                            <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 form-group">
                                <label for="textNombre">Nombre: <span class="text-danger">*</span></label>
                                <input type="text" maxlength="255" class="form-control" name="textNombre" data-error="Complete el campo Nombre">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 form-group">
                                <label for="textEmail">Correo electrónico: <span class="text-danger">*</span></label>
                                <input type="email" maxlength="255" class="form-control" name="textEmail" data-error="Complete el campo Correo electrónico">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 form-group">
                                <label for="Sexo">Sexo: <span class="text-danger">*</span></label>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="radioSexo" id="radio1" value="1" checked>
                                    <label class="form-check-label" for="radio1">
                                        Masculino
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="radioSexo" id="radio2" value="2">
                                    <label class="form-check-label" for="radio2">
                                        Femenino
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 form-group">
                                <label for="sArea">Área: <span class="text-danger">*</span></label>
                                <select class="form-control" name="sArea" data-error="Complete el campo Área"></select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 form-group">
                                <label for="textDescripcion">Descripción: <span class="text-danger">*</span></label>
                                <textarea type="text" maxlength="255" class="form-control" rows="5" name="textDescripcion" data-error="Complete el campo Descripción"></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 form-group">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" name="checkBoletin" id="checkBoletin" value="1" data-validation="false">
                                    <label class="form-check-label" for="checkBoletin">Deseo recibir boletín informativo</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <label for="">Roles: <span class="text-danger">*</span></label><br>
                            <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 form-group" name="listadoRoles">

                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-success" name="btnGuardarEmpleado">Guardar</button>
            </div>
        </div>
    </div>
</div>
<!-- Modal empleado-->