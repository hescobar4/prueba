var btnCrearEmpleado = $("[name=btnCrearEmpleado]");
var listadoEmpleados = $("[name=listadoEmpleados]");
var modalEmpleado = $("[name=modalEmpleados]");
var compArea = $("[name=sArea]");
var compRoles = $("[name=listadoRoles]");
var btnGudarEmpleado = $("[name=btnGuardarEmpleado]");

var modelFilaArea = '<option value="{0}">{1}</option>';
var modelFilaSeleccione = '<option selected="true" value="">Seleccione</option>';
var modelFilaRoles =
    '<div class="form-check form-check-inline">' +
    '   <input class="form-check-input checkRoles" name="checkRoles" type="checkbox" id="checkRoles{0}" value="{0}" data-validation="false">' +
    '   <label class="form-check-label" for="checkRoles{0}">{1}</label>' +
    '</div>';
var mdoelFilaEmpleados =
    '<tr>' +
    ' <td>{1}</td>' +
    ' <td>{2}</td>' +
    ' <td>{6}</td>' +
    ' <td>{8}</td>' +
    ' <td>{7}</td>' +
    ' <td><span class="icon icon-pencil2 text-success" title="Editar" style="text-decoration:none; cursor:pointer; font-size:15px;" name="btnEditar" data-codempleado="{0}" data-nombre="{1}" data-email="{2}" data-descripcion="{9}" data-sexo="{4}" data-areacod="{3}" data-areadescripcion="{8}" data-boletin="{5}"></span> <span class="icon icon-bin text-danger" title="Eliminar" style="text-decoration:none; cursor:pointer; font-size:15px;" name="btnEliminar" data-codempleado="{0}"></span></td>' +
    '</tr>';
var cargarArea = function (codArea, nombreArea) {
    showLoading();
    $.ajax({
        url: BASE_URL + "Empleados/Menu/cargarArea",
        type: 'POST',
        data: {
            codArea: codArea
        },
        dataType: 'JSON',
        success: function (r) {
            var data = r.data;
            if (data.length > 0) {
                compArea.empty();
                if (codArea == 0) {
                    compArea.append(modelFilaSeleccione);
                    for (var i = 0; i < data.length; i++) {
                        compArea.append(modelFilaArea.format(
                            data[i]['id'],
                            data[i]['nombre'],
                        ));
                    }
                } else {
                    compArea.append('<option selected="true" value="' + codArea + '">' + nombreArea + '</option>');
                    for (var i = 0; i < data.length; i++) {
                        compArea.append(modelFilaArea.format(
                            data[i]['id'],
                            data[i]['nombre'],
                        ));
                    }
                }
            } else {
                compArea.empty();
                compArea.append(modelFilaSeleccione);
            }
            hideLoading();
        }
    }).fail(function () {
        notificar(false, 'Error al procesar, por favor intente nuevamente');
    }).always(function () {

    });
}

var cargarRoles = function (codEmpleado) {
    showLoading();
    $.ajax({
        url: BASE_URL + "Empleados/Menu/cargarRoles",
        type: 'POST',
        data: {
            codEmpleado: codEmpleado
        },
        dataType: 'JSON',
        success: function (r) {
            var data;
            (codEmpleado == 0) ? data = r.data : data = r.data.roles;
            if (data.length > 0) {
                compRoles.empty();
                for (var i = 0; i < data.length; i++) {
                    compRoles.append(modelFilaRoles.format(
                        data[i]['id'],
                        data[i]['nombre'],
                    ));
                }
                if (codEmpleado != 0) {
                    var rolesEmpleado = r.data.rolesEmpleado;
                    for (var i = 0; i < rolesEmpleado.length; i++) {
                        var roleExiste = compRoles.find("#checkRoles" + rolesEmpleado[i]['id']);
                        if (roleExiste.length > 0) {
                            $("#checkRoles" + rolesEmpleado[i]['id']).attr('checked', true);
                        } else {
                            $("#checkRoles" + rolesEmpleado[i]['id']).removeAttr('checked');
                        }
                    }
                }
            } else {
                compRoles.empty();
            }
            hideLoading();
        }
    }).fail(function () {
        notificar(false, 'Error al procesar, por favor intente nuevamente');
    }).always(function () {

    });
}

var validarRoles = function (className) {
    var allRoles = compRoles.find("." + className);
    let datosRoles = [];
    let contador = 0;
    for (var i = 0; i < allRoles.length; i++) {
        if ($("#" + allRoles[i]['id']).prop('checked')) {
            datosRoles[contador] = $("#" + allRoles[i]['id']).val();
            contador++;
        }
    }
    return datosRoles;
}

var cargarEmpleados = function () {
    showLoading();
    $.ajax({
        url: BASE_URL + "Empleados/Menu/cargarEmpleados",
        dataType: 'JSON',
        success: function (r) {
            var data = r.data;
            if (data.length > 0) {
                listadoEmpleados.empty();
                for (var i = 0; i < data.length; i++) {
                    listadoEmpleados.append(mdoelFilaEmpleados.format(
                        data[i]['id'],//0
                        data[i]['nombre'],//1
                        data[i]['email'],//2
                        data[i]['areaCod'],//3
                        data[i]['sexo'],//4
                        data[i]['boletin'],//5
                        data[i]['descripcionSexo'],//6
                        data[i]['descripcionBoletin'],//7
                        data[i]['areaNombre'],//8
                        data[i]['descripcion']//9
                    ));
                }
                listadoEmpleados.find("[name=btnEditar]").on("click", eveEditar);
                listadoEmpleados.find("[name=btnEliminar]").on("click", eveEliminar);
            } else {
                listadoEmpleados.empty();
            }
            hideLoading();
        }
    }).fail(function () {
        notificar(false, 'Error al procesar, por favor intente nuevamente');
    }).always(function () {

    });
}

var eveEditar = function () {
    var btn = $(this);
    modalEmpleado.find("[name=tituloModal]").text("Editar Empleado");
    modalEmpleado.find("[name=codigoEmpleado]").val((btn.data("codempleado") != "") ? btn.data("codempleado") : 0);
    modalEmpleado.find("[name=textNombre]").val((btn.data("nombre") != "") ? btn.data("nombre") : "");
    modalEmpleado.find("[name=textEmail]").val((btn.data("email") != "") ? btn.data("email") : "");
    modalEmpleado.find("[name=textDescripcion]").val((btn.data("descripcion") != "") ? btn.data("descripcion") : "");

    //Funcion que realizar la seleccion del Sexo segun los datos de la DB
    if (btn.data("sexo") != "") {
        modalEmpleado.find("[name=radioSexo]").removeAttr('checked');
        (btn.data("sexo") == "M") ? modalEmpleado.find("#radio1").attr('checked', true) : modalEmpleado.find("#radio2").attr('checked', true);
    }
    //Funcion que cargar y selecciona el Area segun los datos de la DB
    cargarArea(btn.data("areacod"), btn.data("areadescripcion"));

    //Funcion que selecciona el check de boletin dependiendo los datos de la DB
    if (btn.data("boletin") != "") {
        (btn.data("boletin") == 1) ? modalEmpleado.find("#checkBoletin").attr('checked', true) : modalEmpleado.find("[name=checkBoletin]").removeAttr('checked');
    }

    cargarRoles(btn.data("codempleado"));

    ejecutarModal('modalEmpleados');
}

var eveEliminar = function () {
    let codEmpleado = $(this).data('codempleado');
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
                    url: BASE_URL + "Empleados/Menu/eliminarEmpleado",
                    type: 'POST',
                    data: {
                        codEmpleado: codEmpleado
                    },
                    dataType: 'JSON',
                    success: function (r) {
                        notificar(r.data.success, r.data.msg);
                        if (r.data.success) {
                            cargarEmpleados();
                        }
                        hideLoading();
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

$(document).ready(function () {
    cargarEmpleados();

    btnCrearEmpleado.click(function () {
        modalEmpleado.find("[name=tituloModal]").text("Crear Empleado");
        modalEmpleado.find("[name=codigoEmpleado]").val(0);
        cargarArea(0);
        cargarRoles(0);
        ejecutarModal('modalEmpleados');
    });

    btnGudarEmpleado.click(function () {
        var validate = $("[name = formularioEmpleados]").formValidation({
            returnData: true
        });
        if (validate.error === true) {
            notificar(false, validate.message);
        } else {
            var datosFormuario = validate.data;
            const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if ((emailRegex.test(datosFormuario['textEmail']) === false)) {
                notificar(false, "Ingrese un Correo valido.");
                return;
            }

            if (datosFormuario['checkRoles'] != "") {
                let datosRoles = validarRoles('checkRoles');
                showLoading();
                $.ajax({
                    url: BASE_URL + "Empleados/Menu/guardarEmpleado",
                    type: 'POST',
                    data: {
                        datosFormulario: validate.data,
                        datosRoles: datosRoles
                    },
                    dataType: 'JSON',
                    success: function (r) {
                        var data = r.data;
                        notificar(data.success, data.msg);
                        if (data.success) {
                            cargarEmpleados();
                            ocultarModal("modalEmpleados");
                        }
                        hideLoading();
                    }
                }).fail(function () {
                    notificar(false, 'Error al procesar, por favor intente nuevamente');
                }).always(function () {

                });
            } else {
                notificar(false, "Seleccione al menos 1 Rol");
                return;
            }
        }
    });
});