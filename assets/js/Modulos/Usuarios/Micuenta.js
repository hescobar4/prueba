var actualizarUsuario = function () {
    var validate = $("[name=formularioMiCuenta]").formValidation({
        returnData: true
    });
    if (validate.error === true) {
        notificar(false, validate.message);
    } else {
        $.ajax({
            url: BASE_URL + "Usuarios/Usuarios/actualizarUsuario",
            type: 'POST',
            data: {
                datos: validate.data
            },
            dataType: 'JSON',
            success: function (r) {
                if (r.data.success) {
                    notificar(r.data.success, r.data.msg);
                    $("[name=modalMiCuenta]").modal("hide");
                    setTimeout(function () { window.location = BASE_URL + 'Login/logout'; }, 2000);
                } else {
                    notificar(false, r.data.msg);
                }
            }
        }).fail(function () {
            hideLoading();
            notificar(false, 'Error al procesar, por favor intente nuevamente');
        }).always(function () {

        });
    }
}

$(document).ready(function () {

    $("[name=miCuenta]").click(function () {
        $.ajax({
            url: BASE_URL + "Usuarios/Usuarios/cargarDatosUsuarios",
            dataType: 'JSON',
            success: function (r) {
                var data = r.data;
                if (data.length > 0) {
                    $("[name=formularioMiCuenta]").find("[name=nombre]").val(data[0]['USUNOMBRE']);
                    $("[name=formularioMiCuenta]").find("[name=apellido]").val(data[0]['USUAPELLIDO']);
                    $("[name=formularioMiCuenta]").find("[name=email]").val(data[0]['USUEMAIL']);
                    $("[name=formularioMiCuenta]").find("[name=telefono]").val(data[0]['USUTELEFONO']);
                    $("[name=formularioMiCuenta]").find("[name=cod]").val(data[0]['USUCOD']);
                } else {
                    notificar(false, "No se encontró información");
                    compRol.empty();
                }
            }
        }).fail(function () {
            notificar(false, 'Error al procesar, por favor intente nuevamente');
        }).always(function () {
        });
    });
    //formularioMiCuenta
    $("[name=btnActualizarUsuario]").click(function () {
        actualizarUsuario();
    });

    $("[name=btnCambiar]").click(function () {
        var validate = $("[name = formularioCambioClave]").formValidation({
            returnData: true
        });
        if (validate.error === true) {
            notificar(false, validate.message);
        } else {
            showLoading('Cargando');
            $.ajax({
                url: BASE_URL + "Usuarios/Usuarios/cambiarClave",
                type: 'POST',
                data: {
                    datos: validate.data
                },
                dataType: 'JSON',
                success: function (r) {
                    if (r.data.success) {
                        $("[name=modalCambioClave]").modal('hide');
                        notificar(true, 'Por favor, ingrese nuevamente, su clave ha sido actualizada.');
                        setTimeout(function () { window.location = BASE_URL + 'Login/logout'; }, 2000);
                    } else {
                        notificar(false, r.data.msg);
                    }
                    hideLoading();

                }
            }).fail(function () {
                notificar(false, 'Error al procesar, por favor intente nuevamente');
            }).always(function () {

            });
        }
    });

    $("[name=btnGenerarQr]").click(function () {
        $.ajax({
            url: BASE_URL + "Qr/Menu/generarQr",
            dataType: 'JSON',
            success: function (r) {
                var data = r.data;
                var srcImg = BASE_URL + "assets/archivos/qr/" + data['img'];
                $("[name=cuerpoQr]").empty();
                $("[name=cuerpoQr]").append('<img class="img-fluid" style="display:block; margin:auto;" src="' + srcImg + '"></a>');
                hideLoading();
                ejecutarModal("modalGenerarQr");
            }
        }).fail(function () {
            notificar(false, 'Error al procesar, por favor intente nuevamente');
        }).always(function () {

        });
    });
});