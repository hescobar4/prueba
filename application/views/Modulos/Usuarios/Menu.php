<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>

<!-- Begin Page Content -->
<div class="container-fluid" autoCal="true" formulacal="height-55" style="overflow-y: auto;">

    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Administraci&oacute;n de Usuarios</h1>
    </div>

    <!-- Content -->
    <div class="row">
        <div class="col-xs col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div class="card shadow mb-4">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-muted">Informaci&oacute;n de Usuarios</h6>
                    <div class="btn-group dropleft">
                        <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Menú de opciones
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" style="cursor:pointer;" name="btnModalAgregarUsuario" data-toggle="modal" data-target="#modalAgregarUsuario">Agregar usuario</a>
                            <a class="dropdown-item" style="cursor:pointer;" name="btnCargarUsuarios">Cargar usuarios</a>
                            <a class="dropdown-item" style="cursor:pointer;" name="btnModalRoles" data-toggle="modal" data-target="#modalRol">Roles</a>
                        </div>
                    </div>
                </div>
                <div class="card-body" autoCal="true" formulacal="height-210" style="overflow-y:auto;">
                    <div class="table-responsive" autoCal="true" formulacal="height-315" style="overflow-y:auto;">
                        <div>
                            <input type="text" onkeyup="doSearch('tablaUsuarios', 'inputBuscar')" placeholder="Buscar" class="form-control mb-2 col-4" name="inputBuscar" style="float: right;">
                        </div>
                        <table class="table table-bordered" id="tablaUsuarios" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th scope="col">OPCION</th>
                                    <th scope="col">#</th>
                                    <th scope="col">NOMBRE</th>
                                    <th scope="col">USUARIO</th>
                                    <th scope="col">ROL</th>
                                    <th scope="col">ESTADO</th>
                                </tr>
                            </thead>
                            <tbody name="cuerpoTablaUsuarios">

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Content -->
</div>
<!-- /.container-fluid -->
</div>
<!-- End of Main Content -->

<!-- MODAL REGISTRAR USUARIO-->
<div class="modal fade" id="modalAgregarUsuario" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Administraci&oacute;n de Roles en SUC</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" autoCal="true" formulacal="height-400" style="overflow-y:auto;">
                <div class=" container">
                    <form name="formularioAgregarUsuario">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-4 form-group">
                                <label for="">Nombre: <span class="text-danger">*</span></label>
                                <input type="text" name="nombre" class="form-control" data-error="Complete el campo Nombre">
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4 form-group">
                                <label for="">Apellido: <span class="text-danger">*</span></label>
                                <input type="text" name="apellido" class="form-control" data-error="Complete el campo Apellido">
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4 form-group">
                                <label for="">Cedula: <span class="text-danger">*</span></label>
                                <input type="text" name="cedula" class="form-control" data-error="Complete el campo Cedula">
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4 form-group">
                                <label for="">Email: <span class="text-danger">*</span></label>
                                <input type="email" name="email" class="form-control" data-error="Complete el campo Email">
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4 form-group">
                                <label for="">Telefono: <span class="text-danger">*</span></label>
                                <input type="number" name="telefono" class="form-control" data-error="Complete el campo Telefono">
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4 form-group">
                                <label for="">Rol: <span class="text-danger">*</span></label>
                                <select name="rol" class="form-control" data-error="Complete el campo Rol"></select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-success" name="btnGuardarUsuario" id="btnGuardarUsuario">Guardar</button>
            </div>
        </div>
    </div>
</div>
<!-- MODAL REGISTRAR USUARIO-->

<!-- MODAL ADMINISTRACION DE ROL-->
<div class="modal fade" id="modalRol" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Administraci&oacute;n de Roles en SUC</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" autoCal="true" formulacal="height-250" style="overflow-y:auto;">
                <div class="container">
                    <div class="row">
                        <div align="center" class="col-xs-12 col-sm-2 col-md-2 col-lg-2 img">
                            <a data-toggle="modal" data-target="#modalAgregarRol" style="text-decoration:none; color:#333;">
                                <font style="cursor: pointer;">
                                    <img src="<?php echo  base_url(); ?>assets/img/modulos/usuarios/anadir.png" alt="" height="60" width="60">
                                    <div>Agregar rol</div>
                                </font>
                            </a>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div autoCal="true" formulacal="height-400" style="overflow-y:auto; border: 7px solid rgba(241, 241, 241);">
                                <table class="table table-hover" id="tabalaRoles">
                                    <thead style="background:#DBDBDB;">
                                        <tr>
                                            <th scope="col">OPCION</th>
                                            <th scope="col">#</th>
                                            <th scope="col">DETALLE</th>
                                        </tr>
                                    </thead>
                                    <tbody name="cuerpoTablaRoles"></tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>
<!-- MODAL ADMINISTRACION DE ROL-->

<!-- MODAL AGREGAR ROL-->
<div class="modal fade" name="modalAgregarRol" id="modalAgregarRol" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Agregar nuevo Rol en SUC</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container">
                    <form name="formularioAgregarRol">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <label for="">Nombre del Rol: <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" name="nombreAgregarRol" data-error="Complete el campo Nombre del Rol">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-success" name="btnAgregarRol">Guardar</button>
            </div>
        </div>
    </div>
</div>
<!-- MODAL AGREGAR ROL-->

<!-- MODAL EDITAR ROL-->
<div class="modal fade" name="modalEditarRol" id="modalEditarRol" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Editar Rol</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container">
                    <form name="formularioEditarRol">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <input type="hidden" name="codRolEditar" value="">
                                <label for="">Nombre del Rol: <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" name="nombreRolEditar" data-error="Complete el campo Nombre del Rol">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-success" name="btnGuardarEditarRol">Guardar</button>
            </div>
        </div>
    </div>
</div>
<!-- MODAL EDITAR ROL-->

<!-- MODAL ADMINISTRAR PERMISOS-->
<div class="modal fade" name="modalRolPermisos" id="modalRolPermisos" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Administraci&oacute;n de Permisos en Rol</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" autoCal="true" formulacal="height-250" style="overflow-y:auto;">
                <div class="container">
                    <div class="row">
                        <input type="hidden" name="codRolPermiso" vale="">
                        <div align="center" class="col-xs-12 col-sm-2 col-md-2 col-lg-2 img">
                            <a name="btnModalInsertRolPermisos" style="text-decoration:none; color:#333;">
                                <font style="cursor: pointer;">
                                    <img src="<?php echo  base_url(); ?>assets/img/modulos/usuarios/agregar_2.png" alt="" height="60" width="60">
                                    <div>Agregar permiso al Rol</div>
                                </font>
                            </a>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div autoCal="true" formulacal="height-450" style="overflow-y:auto; border: 7px solid rgba(241, 241, 241);">
                                <table class="table table-hover" id="tabalaRoles">
                                    <thead style="background:#DBDBDB;">
                                        <tr>
                                            <th scope="col">OPCION</th>
                                            <th scope="col">#</th>
                                            <th scope="col">DETALLE</th>
                                        </tr>
                                    </thead>
                                    <tbody name="cuerpoTablaRolPermiso"></tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>
<!-- MODAL ADMINISTRAR PERMISOS-->

<!-- MODAL AGREGAR PERMISOS-->
<div class="modal fade" name="modalInsertarPermisoRol" id="modalInsertarPermisoRol" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Selecci&oacute;n de permiso</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container">
                    <form name="formularioInsertarPermisosRol">
                        <div class="row" name="cuerpoPermisosRolSeleccionar"></div>
                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-success" name="btnAgregarPermisoRol">Guardar</button>
            </div>
        </div>
    </div>
</div>
<!-- MODAL AGREGAR PERMISOS-->

<!-- MODAL CAMBIOD DE ROL-->
<div class="modal fade" name="modalCambioRol" id="modalCambioRol" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Cambio de Rol</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container">
                    <form name="formulariosEditarUsuario">
                        <input type="hidden" name="codEditarUsuario" value="">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <label for="">Rol</label>
                                <select name="sCambiarRol" class="form-control" data-error="Complete el campo Rol">
                                    <option value="">Seleccione</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-success" name="btnCambioRol" id="btnCambioRol">Guardar</button>
            </div>
        </div>
    </div>
</div>
<!-- MODAL CAMBIO DE ROL-->

<!-- MODAL CAMBIO DE USUARIO-->
<div class="modal fade" name="modalCambiarUsuario" id="modalCambiarUsuario" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Cambio de Usuario</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container">
                    <form name="formualarioCambiarUsuario">
                        <input type="hidden" name="codCambiarUsuario" value="">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <label for="">C&eacute;dula / Usuario </label>
                                <input type="text" class="form-control" name="cambiarUsuarioCedula" data-error="Complete el campo C&eacute;dula / Usuario">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-success" name="btnCambiarUsuario" id="btnCambiarUsuario">Guardar</button>
            </div>
        </div>
    </div>
</div>
<!-- MODAL CAMBIO DE USUARIO-->