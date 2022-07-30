function heightPanel() {
    var panel = ($(window).height() - $('[name=cabeceraApp]').outerHeight());
    return (panel + 26);
}
function widthPanel() {
    var panel = $(window).width();
    return panel;
}

$(document).ready(function () {
    $(window).resize(function () {
        var height = heightPanel();
        var width = widthPanel();
        var componentAuto = $('[autoCal=true]');
        for (var i = 0; i < componentAuto.length; i++) {
            var formu = $(componentAuto[i]).attr("formulaCal");
            if (formu.indexOf("height") != -1) {
                var resultado = height;
                eval("resultado=" + formu.replace("height", height));
                $(componentAuto[i]).css({
                    height: resultado
                });
            }
            if (formu.indexOf("width") != -1) {
                var resultado2 = width;
                eval("resultado2=" + formu.replace("width", width));
                $(componentAuto[i]).css({
                    width: resultado2
                });
            }
        }
    });

    $(window).resize(function () {
        var componentAuto = $('[autopadre=true]');
        for (var i = 0; i < componentAuto.length; i++) {
            var padre = $(componentAuto[i]).parent();
            var formuxtot = $(componentAuto[i]).attr("formulaxtot");
            var formux = $(componentAuto[i]).attr("formulax");
            var formuytot = $(componentAuto[i]).attr("formulaytot");
            var formuy = $(componentAuto[i]).attr("formulay");
            if (formuytot !== undefined && formuytot.indexOf("v") != -1) {
                var resultado = heightPanel();
                eval("resultado=" + formuytot.replace("v", heightPanel()));
                $(componentAuto[i]).css({
                    height: resultado
                });
            }
            if (formuxtot !== undefined && formuxtot.indexOf("v") != -1) {
                var resultado2 = widthPanel();
                eval("resultado2=" + formuxtot.replace("v", widthPanel()));
                $(componentAuto[i]).css({
                    width: resultado2
                });
            }
            if (formuy !== undefined && formuy.indexOf("v") != -1) {
                var resultado = padre.innerHeight();
                eval("resultado=" + formuy.replace("v", padre.innerHeight()));
                $(componentAuto[i]).css({
                    height: resultado
                });
            }
            if (formux !== undefined && formux.indexOf("v") != -1) {
                var resultado2 = padre.innerWidth();
                eval("resultado2=" + formux.replace("v", padre.innerWidth()));
                $(componentAuto[i]).css({
                    width: resultado2
                });
            }
        }
    });
    $(window).resize();
    $(document).ajaxSuccess(function (event, xhr, settings) {
        if (xhr.status == 200 && settings.url.indexOf(".js") == -1 && settings.dataType != undefined && settings.dataType != "html") {
            var respuesta = $.parseJSON(xhr.responseText);
            if (respuesta.success === false && respuesta.session === false) {
                window.location = BASE_URL + '' + respuesta.anterior;
                return;
            }
        }
    });
    $(document.body).on('hide.bs.modal,hidden.bs.modal', function () {
        $('body').css('padding-right', '0');
    });
});

function showInfo(mensaje) {
    $.bootstrapGrowl(mensaje, {
        align: 'center',
        type: 'success',
        width: 'auto'
    });

}


if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
                ;
        });
    };
}
if (!String.prototype.formatArray) {
    String.prototype.formatArray = function () {
        var args = arguments[0];
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
                ;
        });
    };
}
if (!String.prototype.capital) {
    String.prototype.capital = function () {
        return this.substr(0, 1).toUpperCase() + this.substr(1, this.length).toLowerCase();
    };
}
if (!String.prototype.capitalAll) {
    String.prototype.capitalAll = function () {
        var partes = this.split(" ");
        var retorno = "";
        for (var i = 0; i < partes.length; i++) {
            retorno += (retorno == "" ? "" : " ") + partes[i].capital();
        }
        return retorno;
    };
}

function showLoadingButton(id) {
    $('#' + id).data('loading-text', 'Procesando...');
    $('#' + id).button('loading');
    $('#' + id).attr("disabled", true);
    //$('#pleaseWaitDialog').modal('show');
    //    waitingDialog.show();
}

function resetLoadingButton(id) {
    $('#' + id).button('reset');
    $('#' + id).attr("disabled", false);
    //$('#pleaseWaitDialog').modal('hide');
    //    waitingDialog.hide();
}

function loadingComponent(id) {
    $(id).html('<span style="font-size:20px;"  class="glyphicon glyphicon-refresh glyphicon-refresh-animate">Cargando...</span>');
}

function loadingComponentName(name) {
    $("[name=" + name + "]").html('<div style="margin-top:50%; margin-left:50%;" class="d-flex justify-content-center"><div class="spinner-border" role="status" ><span class="sr-only">Loading...</span></div></div>');
}

function showLoading(mensaje) {
    $("#pleaseWaitDialog").modal("show");
}

function hideLoading() {
    setTimeout(() => { $("#pleaseWaitDialog").modal("hide"); }, 500);
    // waitingDialog.hide();
}

function ocultarModal(name) {
    $("[name=" + name + "]").modal("hide");
}

function ejecutarModal(name) {
    $("[name=" + name + "]").modal("show");
}

function mostrarPaginador(totalRegistros) {
    if (typeof (totalRegistros) === 'undefined' || totalRegistros === null || totalRegistros === 0) {
        totalRegistros = 1;
    }
    var p = new Paginador(
        document.getElementById('paginador'), totalRegistros);
    p.Mostrar();
}

function mostrarError(mensaje) {
    $.bootstrapGrowl(mensaje, {
        align: 'center',
        type: 'danger',
        width: 'auto',
        allow_dismiss: true,
        delay: 2000

    });
}


function notificar(status, mensaje) {
    if (status == null || status == undefined) {
        $.notify(
            "¡Ups! no te he podido notificar.", "info"
        );
        return false;
    }
    if (status == true) {
        $.notify(
            mensaje, "success"
        );
        return false;
    }
    if (status == false) {
        $.notify(
            mensaje, "error"
        );
        return false;
    }
}

function sinInformacion() {
    $.notify(
        "¡Ups! No se encontró información", "error"
    );
    return false;
}

function mostrarInput(mensaje, tipo, accion) {
    bootbox.prompt({
        title: mensaje,
        inputType: tipo,
        callback: accion
    });
}

function mostrarConfirmar(titulo, mensaje, accionSi, accionNo, si, no) {
    if (si == undefined) {
        si = "Si";
    }
    if (no == undefined) {
        no = "No";
    }
    if (accionSi == undefined) {
        accionSi = function () {
        };
    }
    if (accionNo == undefined) {
        accionNo = function () {
        };
    }
    bootbox.dialog({
        message: mensaje,
        title: titulo,
        animate: true,
        size: 'small',
        buttons: {
            success: {
                label: si,
                className: "btn-success",
                callback: function () {
                    accionSi();
                }
            },
            danger: {
                label: no,
                className: "btn-danger",
                callback: function () {
                    accionNo();
                }
            }
        }
    });
}


function mostrarConfirmarUnico(titulo, mensaje, accionSi, si) {
    if (si == undefined) {
        si = "Aceptar";
    }
    if (accionSi == undefined) {
        accionSi = function () {
        };
    }
    bootbox.dialog({
        message: mensaje,
        title: titulo,
        animate: true,
        size: 'small',
        buttons: {
            success: {
                label: si,
                className: "btn-success",
                callback: function () {
                    accionSi();
                }
            }
        }
    });
}

function containts(text, substring) {
    return text.indexOf(substring) >= 0;
}



function validarDecimal(value, decimales, min, max) {
    value = parseFloat(value).toFixed(decimales);
    if (!$.isNumeric(value)) {
        value = min;
    }
    if (parseFloat(value) > max) {
        value = max;
    }
    if (parseFloat(value) === "0.00") {
        value = min;
    }
    return value;
}

function validarEntero(value, min, max) {
    value = parseInt(value);
    if (!$.isNumeric(value)) {
        value = min;
    }
    if (value < 1) {
        value = min;
    }
    if (value > max) {
        value = max;
    }
    return value;
}

function fechaActual() {
    var f = new Date();
    return f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
}

function fechaActualHora() {
    var f = new Date();
    var hora = f.getHours();
    var minutos = f.getMinutes();
    var segundos = f.getSeconds();
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    if (hora < 10) {
        hora = "0" + hora;
    }
    if (segundos < 10) {
        segundos = "0" + segundos;
    }
    return f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear() + " " + hora + ":" + minutos + ":" + segundos;
}

function imprimir(html) {
    hideLoading();
    var win = window.open('', 'imprimir', '');
    if (typeof win == 'undefined') {
        mostrarError("Por favor habilite las ventanas emergentes.");
    } else {
        win.document.body.innerHTML = html;
        win.focus();
        win.print();
        win.close();
    }

}

function __validEmail(v) {
    var r = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
    return (v.toLowerCase().match(r) == null) ? false : true;
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, " "));
}

$.fn.modal.Constructor.prototype.enforceFocus = function () {
    $(document)
        .off('focusin.bs.modal') // guard against infinite focus loop
        .on('focusin.bs.modal', $.proxy(function (e) {
            if (
                this.$element[0] !== e.target && !this.$element.has(e.target).length
                // CKEditor compatibility fix start.
                && !$(e.target).closest('.cke_dialog, .cke').length
                // CKEditor compatibility fix end.
            ) {
                this.$element.trigger('focus');
            }
        }, this));
};

function doSearch(tabla, input) {
    var tableReg = document.getElementById(tabla);
    var searchText = $("[name=" + input + "]").val().toLowerCase();
    var cellsOfRow = "";
    var found = false;
    var compareWith = "";

    // Recorremos todas las filas con contenido de la tabla
    for (var i = 1; i < tableReg.rows.length; i++) {
        cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
        found = false;
        // Recorremos todas las celdas
        for (var j = 0; j < cellsOfRow.length && !found; j++) {
            compareWith = cellsOfRow[j].innerHTML.toLowerCase();
            // Buscamos el texto en el contenido de la celda
            if (searchText.length == 0 || (compareWith.indexOf(searchText) > -1)) {
                found = true;
            }
        }
        if (found) {
            tableReg.rows[i].style.display = '';
        } else {
            // si no ha encontrado ninguna coincidencia, esconde la
            // fila de la tabla
            tableReg.rows[i].style.display = 'none';
        }
    }
}

function validarDatoNumerico(evt) {
    var code = (evt.which) ? evt.which : evt.which;
    if (code == 0) {
        return true;
    } else if (code >= 40 && code <= 57) {
        return true;
    } else {
        return false;
    }
}

$(document).ajaxSuccess(function (event, xhr, settings) {
    if (xhr.status == 200 && settings.url.indexOf(".js") == -1) {
        var respuesta = $.parseJSON(xhr.responseText);
        if (respuesta.success === false && respuesta.session === false) {
            window.location = 'Login';
            return;
        }
    }
});




