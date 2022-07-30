var compRol = $("[name=rol]");
var modelFilaSeleccione = '<option selected="true" value="">Seleccione</option>';
var modelFilaSelect = '<option value="{0}">{1}</option>';
var cuerpoRoles = $("[name=cuerpoRoles]");
var cuerpoTablaRolPermiso = $("[name=cuerpoTablaRolPermiso]");
var cuerpoPermisosRolSeleccionar = $("[name=cuerpoPermisosRolSeleccionar]");
var cuerpoTablaUsuarios = $("[name=cuerpoTablaUsuarios]");



var cargarPermisosRol = function (codRol) {
    var codRol = $("[name=codRolPermiso]").val();
    var fillaPermisos = '<tr>' +
        '    <td>' +
        '     <span class="icon icon-bin text-danger" name="eliminarPermisoRol" data-cod="{1}" data-rol="{2}" style="font-size:17px; cursor:pointer;" title="Eliminar"' +
        '     name=""></span></td>' +
        '    <td>{3}</td>' +
        '    <td>{0}</td>' +
        '</tr>';
    showLoading('Cargando');
    $.ajax({
        url: BASE_URL + "Usuarios/Usuarios/cargarPermisosRol",
        type: 'POST',
        data: {
            cod: codRol
        },
        dataType: 'JSON',
        success: function (r) {
            var data = r.data;
            if (data.length > 0) {
                cuerpoTablaRolPermiso.empty();
                for (var i = 0; i < data.length; i++) {
                    cuerpoTablaRolPermiso.append(fillaPermisos.format(
                        data[i]['PEROPCION'],
                        data[i]['PEROLCOD'],
                        data[i]['ROL'],
                        i + 1
                    ));
                }
                cuerpoTablaRolPermiso.find("[name=eliminarPermisoRol]").on('click', eliminarPermisoRol);

            } else {
                cuerpoTablaRolPermiso.empty();
            }
            hideLoading();
        }
    }).fail(function () {
        hideLoading();
        notificar(false, 'Error al procesar, por favor intente nuevamente');
    })
};

var eliminarPermisoRol = function () {
    var cod = $(this).data("cod");
    var rol = $(this).data("rol");
    bootbox.confirm({
        title: "Confirmaci&oacute;n de Sistema",
        message: "&iquest;Est&aacute; seguro que desea eliminar el registro?",
        buttons: {
            confirm: {
                label: "Si",
                className: "btn-success"
            },
            cancel: {
                label: "No",
                className: "btn-danger"
            }
        },
        callback: function (result) {
            if (result === true) {
                showLoading("Cargando");
                $.ajax({
                    url: BASE_URL + "Usuarios/Usuarios/eliminarPermisoRol",
                    type: 'POST',
                    data: {
                        cod: cod
                    },
                    dataType: 'JSON',
                    success: function (r) {
                        notificar(r.data.success, r.data.msg);
                        cargarPermisosRol(rol);
                    }
                }).fail(function () {
                    hideLoading();
                    notificar(false, 'Error al procesar, por favor intente nuevamente');
                }).always(function () {

                });
            };
        }
    });
}

var restablacerClave = function () {
    cod = $(this).data("cod");
    showLoading('Cargando');
    $.ajax({
        url: BASE_URL + "Usuarios/Usuarios/restablacerClave",
        type: 'POST',
        data: {
            cod: cod
        },
        dataType: 'JSON',
        success: function (r) {
            notificar(r.data.success, r.data.msg);
            hideLoading();
        }
    }).fail(function () {
        hideLoading();
        notificar(false, 'Error al procesar, por favor intente nuevamente');
    })
}

var buscarUsuario = function () {
    var filaUsuario = '<tr class="clickable-row filausuario" style="background:#d1d1d1;">' +
        '    <td>' +
        '     <span class="icon icon-cross text-danger" style="font-size:17px; cursor:pointer;" title="Inhabilitar"' +
        '     name=""></span>' +
        '     <span class="icon icon-loop2 text-primary" data-cod="{0}" name="rClave" style="font-size:17px; cursor:pointer;" title="Restablecer clave"' +
        '     name=""></span>' +
        '    </td>' +
        '    <td style="margin-top:5px;"><center>{3}-{1} {2}</center></td>' +
        '</tr>';
    var validate = $("[name = formularioBuscarUsuario]").formValidation({
        returnData: true
    });
    if (validate.error === true) {
        notificar(false, validate.message);
    } else {
        showLoading();
        $.ajax({
            url: BASE_URL + "Usuarios/Usuarios/buscarUsuario",
            type: 'POST',
            data: {
                datos: validate.data
            },
            dataType: 'JSON',
            success: function (r) {
                var data = r.data;
                $("[name=cuerpoUsuario]").empty();
                if (data.length > 0) {
                    for (var i = 0; i < data.length; i++) {
                        $("[name=cuerpoUsuario]").append(filaUsuario.format(
                            data[i]['USUCOD'],
                            data[i]['USUNOMBRE'],
                            data[i]['USUAPELLIDO'],
                            data[i]['USUCEDUlA']
                        ));
                    }
                    $("[name=cuerpoUsuario]").find("[name=rClave]").on('click', restablacerClave);
                } else {
                    notificar(false, "No se encontr&oacute; informaci&oacute;n");
                    $("[name=cuerpoUsuario]").empty();
                }
                hideLoading();
            }
        }).fail(function () {
            hideLoading();
            notificar(false, 'Error al procesar, por favor intente nuevamente');
        })
    }
}

var cargarRol = function () {
    var filaRol = '<tr>' +
        '               <td><span class="icon icon-pencil2 text-primary" title="Editar" style="text-decoration:none; cursor:pointer; font-size:17px;" name="editarRol" data-cod="{0}" data-detalle="{1}"></span> <span class="icon icon-bin text-danger" title="Eliminar" style="text-decoration:none; cursor:pointer; font-size:17px;" name="eliminarRol" data-cod="{0}"></span> <span class="icon icon-unlocked text-success" title="Permisos" style="text-decoration:none; cursor:pointer; font-size:17px;" name="verPermisos" data-cod="{0}"></span> </td> ' +
        '               <td>{2}</td> ' +
        '               <td>{1}</td> ' +
        '          </tr > ' +

        $.ajax({
            url: BASE_URL + "Usuarios/Usuarios/cargarRol",
            dataType: 'JSON',
            success: function (r) {
                var data = r.data;
                $("[name=cuerpoTablaRoles]").empty();
                if (data.length > 0) {
                    for (var i = 0; i < data.length; i++) {
                        $("[name=cuerpoTablaRoles]").append(filaRol.format(
                            data[i]['ROLCOD'],
                            data[i]['ROLDETALLE'],
                            i + 1
                        ));
                    }
                    $("[name=cuerpoTablaRoles]").find("[name=editarRol]").on("click", editarRol);
                    $("[name=cuerpoTablaRoles]").find("[name=eliminarRol]").on("click", eliminarRol);
                    $("[name=cuerpoTablaRoles]").find("[name=verPermisos]").on("click", verPermisos);
                } else {
                    notificar(false, "No se encontr&oacute; informaci&oacute;n de Roles");
                    $("[name=cuerpoTablaRoles]").empty();
                }
            }
        }).fail(function () {
            notificar(false, 'Error al procesar, por favor intente nuevamente');
        }).always(function () {
        });
}

var editarRol = function () {
    var codRol = $(this).data("cod");
    var detalle = $(this).data("detalle");
    $("[name=codRolEditar]").val(codRol);
    $("[name=nombreRolEditar]").val(detalle);
    $("[name=modalEditarRol]").modal("show");
}

var eliminarRol = function () {
    var codRol = $(this).data("cod");
    bootbox.confirm({
        title: "Confirmaci&oacute;n del Sistema",
        message: "&iquest;Est&aacute; seguro que desea eliminar el registro?",
        buttons: {
            cancel: {
                label: 'No'
            },
            confirm: {
                label: 'Si'
            }
        },
        callback: function (result) {
            if (result === true) {
                showLoading("Cargando");
                $.ajax({
                    url: BASE_URL + "Usuarios/Usuarios/eliminarRol",
                    type: 'POST',
                    data: {
                        codRol: codRol
                    },
                    dataType: 'JSON',
                    success: function (r) {
                        notificar(r.data.success, r.data.msg);
                        hideLoading();
                        cargarRol();
                    }
                }).fail(function () {
                    notificar(false, 'Error al procesar, por favor intente nuevamente');
                }).always(function () {

                });
            };
        }
    });
}

var verPermisos = function () {
    $("[name=modalRolPermisos]").modal("show");
    $("[name=codRolPermiso]").val($(this).data("cod"));
    cargarPermisosRol();
}

var cargarPermisosSeleccion = function (codRol) {
    var fillaPermisos = '<div class="input-group mb-3">' +
        '           <div class="input-group-prepend">' +
        '               <div class="input-group-text">' +
        '                   <input type="checkbox" aria-label="" value="{0}" name="permiso{0}">' +
        '               </div>' +
        '           </div>' +
        '           <input type="text" readonly class="form-control" aria-label="" value="{1}">' +
        '     </div>';
    $.ajax({
        url: BASE_URL + "Usuarios/Usuarios/cargarPermisosSeleccion",
        type: 'POST',
        data: {
            codRol: codRol
        },
        dataType: 'JSON',
        success: function (r) {
            var data = r.data;
            if (data.length > 0) {
                cuerpoPermisosRolSeleccionar.empty();
                for (var i = 0; i < data.length; i++) {
                    cuerpoPermisosRolSeleccionar.append(fillaPermisos.format(
                        data[i]['PERCOD'],
                        data[i]['PEROPCION']
                    ));
                }
            } else {
                notificar(false, "No se encontr&oacute; Permisos disponibles");
                cuerpoPermisosRolSeleccionar.empty();
            }
        }
    }).fail(function () {
        notificar(false, 'Error al procesar, por favor intente nuevamente');
    }).always(function () {
    });
}

var cargarUsuarios = function () {
    var modelFila = '<tr>' +
        '               <td><span class="icon icon-user text-danger" title="Cambiar Usuario" style="text-decoration:none; cursor:pointer; font-size:17px;" name="cambiarUsuario" data-cod="{0}" data-cedula="{2}"></span> <span span class="icon icon-loop text-primary" title="Cambiar Rol" style="text-decoration:none; cursor:pointer; font-size:17px;" name="cambioRol" data-cod="{0}" data-cedula="{2}" data-rol="{3}" data-detallerol="{4}" ></span> <span class="icon icon-undo text-success" title="Restablecer clave" style="text-decoration:none; cursor:pointer; font-size:17px;" name="restablecerClave" data-cod="{0}"></span> <span class="icon icon-switch text-warning" title="Habilitar o Inhabilitar" style="text-decoration:none; cursor:pointer; font-size:17px;" name="estadoUsuario" data-cod="{0}"></span></td > ' +
        '               <td>{6}</td>' +
        '               <td>{1}</td>' +
        '               <td>{2}</td>' +
        '               <td>{4}</td>' +
        '               <td>{5}</td>' +
        '           </tr>';
    showLoading();
    $.ajax({
        url: BASE_URL + "Usuarios/Usuarios/cargarUsuarios",
        dataType: 'JSON',
        success: function (r) {
            var data = r.data;
            if (data.length > 0) {
                cuerpoTablaUsuarios.empty();
                for (var i = 0; i < data.length; i++) {
                    cuerpoTablaUsuarios.append(modelFila.format(
                        data[i]['USUCOD'],
                        data[i]['NOMBRE'],
                        data[i]['USUCEDULA'],
                        data[i]['ROLCOD'],
                        data[i]['ROLDETALLE'],
                        data[i]['ESTADOUSUARIO'],
                        i + 1
                    ));
                }
                cuerpoTablaUsuarios.find("[name=restablecerClave]").on("click", restablacerClave);
                cuerpoTablaUsuarios.find("[name=estadoUsuario]").on("click", estadoUsuario);
                cuerpoTablaUsuarios.find("[name=cambioRol]").on("click", cambioRol);
                cuerpoTablaUsuarios.find("[name=cambiarUsuario]").on("click", cambiarUsuario);
            } else {
                sinInformacion();
                cuerpoTablaUsuarios.empty();
            }
            hideLoading();
        }
    }).fail(function () {
        notificar(false, 'Error al procesar, por favor intente nuevamente');
    }).always(function () {
    });
}

var cambiarUsuario = function () {
    var cod = $(this).data("cod");
    var cedula = $(this).data("cedula");
    $("[name=cambiarUsuarioCedula]").val(cedula);
    $("[name=codCambiarUsuario]").val(cod);
    $("[name=modalCambiarUsuario]").modal("show");
}

var cambioRol = function () {
    var cod = $(this).data("cod");
    var cedula = $(this).data("cedula");
    var rol = $(this).data("rol");
    var detalleRol = $(this).data("detallerol");
    $("[name=codEditarUsuario]").val(cod);
    $("[name=cedulaEditarUsuario]").val(cedula);
    $("[name=modalCambioRol]").modal("show");
    cargarRolDiferente(rol, detalleRol, "sCambiarRol");
}

var cargarRolDiferente = function (codRol, detalleRol, component) {

    $.ajax({
        url: BASE_URL + "Usuarios/Usuarios/cargarRolDiferente",
        type: 'POST',
        data: {
            codRol: codRol
        },
        dataType: 'JSON',
        success: function (r) {
            var data = r.data;
            if (data.length > 0) {
                $("[name=" + component + "]").empty();
                $("[name=" + component + "]").append('<option selected="true" value="' + codRol + '">' + detalleRol + '</option>');
                for (var i = 0; i < data.length; i++) {
                    $("[name=" + component + "]").append(modelFilaSelect.format(
                        data[i]['ROLCOD'],
                        data[i]['ROLDETALLE']
                    ));
                }
            } else {
                $("[name=" + component + "]").empty();
                $("[name=" + component + "]").append(modelFilaSeleccione);
            }
        }
    }).fail(function () {
        hideLoading();
        notificar(false, 'Error al procesar, por favor intente nuevamente');
    }).always(function () {

    });
}

var estadoUsuario = function () {
    var cod = $(this).data("cod");
    showLoading("Cargando");
    $.ajax({
        url: BASE_URL + "Usuarios/Usuarios/estadoUsuario",
        type: 'POST',
        data: {
            cod: cod
        },
        dataType: 'JSON',
        success: function (r) {
            notificar(r.data.success, r.data.msg);
            cargarUsuarios();
        }
    }).fail(function () {
        hideLoading();
        notificar(false, 'Error al procesar, por favor intente nuevamente');
    }).always(function () {

    });
}

$(document).ready(function () {

    // BOTON ACCION AGREGAR PERMISO A ROL
    $("[name=btnAgregarPermisoRol]").click(function () {
        var codRol = $("[name=codRolPermiso]").val();
        var validate = $("[name=formularioInsertarPermisosRol]").formValidation({
            returnData: true
        });
        if (validate.error === true) {
            notificar(false, validate.message);
        } else {
            $.ajax({
                url: BASE_URL + "Usuarios/Usuarios/insertarPermisosRol",
                type: 'POST',
                data: {
                    codRol: codRol,
                    datos: validate.data
                },
                dataType: 'JSON',
                success: function (r) {
                    notificar(r.data.success, r.data.msg);
                    $("[name=modalInsertarPermisoRol]").modal("hide");
                    cargarPermisosRol($("[name=codRolPermiso]").val());
                }
            }).fail(function () {
                hideLoading();
                notificar(false, 'Error al procesar, por favor intente nuevamente');
            }).always(function () {

            });
        }
    });

    $("[name=btnRegresar]").on('click', function () {
        window.location = BASE_URL + $(this).data("tipo");
    });

    $("[name=btnAgregarRol]").click(function () {
        var validate = $("[name = formularioAgregarRol]").formValidation({
            returnData: true
        });
        if (validate.error === true) {
            notificar(false, validate.message);
        } else {
            showLoading('Cargando');
            $.ajax({
                url: BASE_URL + "Usuarios/Usuarios/insertarRol",
                type: 'POST',
                data: {
                    datos: validate.data
                },
                dataType: 'JSON',
                success: function (r) {
                    notificar(r.data.success, r.data.msg);
                    if (r.data.success) {
                        $("[name=modalAgregarRol]").modal('hide');
                    }
                    hideLoading();
                }
            }).fail(function () {
                hideLoading();
                notificar(false, 'Error al procesar, por favor intente nuevamente');
            }).always(function () {
                cargarRol();
            });
        }
    });

    $("[name=btnModalAgregarUsuario]").click(function () {
        $.ajax({
            url: BASE_URL + "Usuarios/Usuarios/cargarRol",
            dataType: 'JSON',
            success: function (r) {
                var data = r.data;
                if (data.length > 0) {
                    compRol.empty();
                    compRol.append(modelFilaSeleccione);
                    for (var i = 0; i < data.length; i++) {
                        compRol.append(modelFilaSelect.format(
                            data[i]['ROLCOD'],
                            data[i]['ROLDETALLE']
                        ));
                    }
                } else {
                    sinInformacion();
                    compRol.empty();
                }
            }
        }).fail(function () {
            notificar(false, 'Error al procesar, por favor intente nuevamente');
        }).always(function () {
        });
    });

    $("[name=btnGuardarUsuario]").click(function () {
        var validate = $("[name = formularioAgregarUsuario]").formValidation({
            returnData: true
        });
        if (validate.error === true) {
            notificar(false, validate.message);
        } else {
            showLoading();
            $.ajax({
                url: BASE_URL + "Usuarios/Usuarios/insertarUsuario",
                type: 'POST',
                data: {
                    datos: validate.data
                },
                dataType: 'JSON',
                success: function (r) {
                    notificar(r.data.success, r.data.msg);
                    if (r.data.success) {
                        $("[name=modalAgregarUsuario]").modal('hide');
                    }
                    hideLoading();
                }
            }).fail(function () {
                hideLoading();
                notificar(false, 'Error al procesar, por favor intente nuevamente');
            }).always(function () {
            });
        }
    });

    $("#cedula").keypress(function (e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) {
            buscarUsuario();
            return false;
        }
    });

    $("[name=btnActualizarUsuario]").click(function () {
        actualizarUsuario();
    });

    $("[name=btnModalRoles]").click(function () {
        cargarRol();
    });

    $("[name=btnGuardarEditarRol]").click(function () {
        var validate = $("[name = formularioEditarRol]").formValidation({
            returnData: true
        });
        if (validate.error === true) {
            notificar(false, validate.message);
        } else {
            showLoading('Cargando');
            $.ajax({
                url: BASE_URL + "Usuarios/Usuarios/editarRol",
                type: 'POST',
                data: {
                    datos: validate.data
                },
                dataType: 'JSON',
                success: function (r) {
                    notificar(r.data.success, r.data.msg);
                    if (r.data.success) {
                        $("[name=modalEditarRol]").modal('hide');
                    }
                    hideLoading();
                }
            }).fail(function () {
                hideLoading();
                notificar(false, 'Error al procesar, por favor intente nuevamente');
            }).always(function () {
                cargarRol();
            });
        }
    });

    $("[name=btnModalInsertRolPermisos]").click(function () {
        $("[name=modalInsertarPermisoRol]").modal("show");
        cargarPermisosSeleccion($("[name=codRolPermiso]").val());
    });

    $("[name=btnCargarUsuarios]").click(function () {
        cargarUsuarios();
    });

    $("[name=btnCambioRol]").click(function () {
        var validate = $("[name = formulariosEditarUsuario]").formValidation({
            returnData: true
        });
        if (validate.error === true) {
            notificar(false, validate.message);
        } else {
            showLoading('Cargando');
            $.ajax({
                url: BASE_URL + "Usuarios/Usuarios/cambiarRol",
                type: 'POST',
                data: {
                    datos: validate.data
                },
                dataType: 'JSON',
                success: function (r) {
                    notificar(r.data.success, r.data.msg);
                    if (r.data.success) {
                        $("[name=modalCambioRol]").modal('hide');
                    }
                    cargarUsuarios();
                }
            }).fail(function () {
                hideLoading();
                notificar(false, 'Error al procesar, por favor intente nuevamente');
            }).always(function () {
            });
        }
    });

    $("[name=btnCambiarUsuario]").click(function () {
        var validate = $("[name = formualarioCambiarUsuario]").formValidation({
            returnData: true
        });
        if (validate.error === true) {
            notificar(false, validate.message);
        } else {
            showLoading('Cargando');
            $.ajax({
                url: BASE_URL + "Usuarios/Usuarios/cambiarUsuario",
                type: 'POST',
                data: {
                    datos: validate.data
                },
                dataType: 'JSON',
                success: function (r) {
                    notificar(r.data.success, r.data.msg);
                    if (r.data.success) {
                        $("[name=modalCambiarUsuario]").modal('hide');
                    }
                    cargarUsuarios();
                }
            }).fail(function () {
                hideLoading();
                notificar(false, 'Error al procesar, por favor intente nuevamente');
            }).always(function () {
            });
        }
    });
});