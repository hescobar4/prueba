var btnLogin = $("[name=btnLogin]");
var compUsuario = $("[name=codigo]");
var compPassword = $("[name=contra]");

var validarLogin = function () {
    if (compUsuario.val().trim() === '') {
        notificar(false, "Complete el campo Usuario");
        return;
    }
    if (compPassword.val() === '') {
        notificar(false, "Complete el campo Password");
        return;
    }
    var usuario = $("[name=codigo]").val();
    var pass = $("[name=contra]").val();
    $.ajax({
        url: BASE_URL + "Login/inicioSesion",
        type: "POST",
        data: {
            usuario: usuario,
            pass: pass
        },
        dataType: 'JSON',
        success: function (response) {
            var respuesta = response.retorno;
            if (respuesta.success === true) {
                window.location = BASE_URL + 'Empleados/Menu';
            } else {
                notificar(respuesta.success, respuesta.msg);
            }
        }
    }).fail(function () {
        $.notify({
            message: "Error al procesar, por favor intente nuevamente"
        }, {
            type: 'danger',
            delay: 3000,
            placement: {
                align: 'center'
            }
        });
    }).always(function () {
    });
};

$(document).ready(function () {
    $("[name=iniciarSesion]").on('click', function () {
        validarLogin();
    });
});


compUsuario.on('keyup', function (e) {
    if (e.keyCode === 13) {
        compPassword.focus();
    }
});
compPassword.on('keyup', function (e) {
    if (e.keyCode === 13) {
        validarLogin();
    }
});
btnLogin.on('click', validarLogin);
