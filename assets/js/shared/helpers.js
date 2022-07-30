
function descargarPostArchivo(url, parametros) {
    $("<div id='downloadFormPoster' style='display: none;'></div>").appendTo('body');
    var html = "<form target='_blank' action='" + url + "' method='post'>";
    $.each(parametros, function (key, value) {
        html += "<input type='hidden' name='" + key + "' value='" + value + "'/>";
    });
    html += "</form>";
    $(html).appendTo("#downloadFormPoster").submit();
    $("#downloadFormPoster").remove();
}

var formatMoney = function (value, separadorMiles, signo, separadorDecimal, cantidadDecimal) {
    if (separadorMiles == undefined) {
        separadorMiles = ".";
    }
    if (separadorDecimal == undefined) {
        separadorDecimal = ",";
    }
    if (cantidadDecimal == undefined) {
        cantidadDecimal = 4;
    }
    if (signo == undefined) {
        signo = "$ ";
    }
    if (value == null || value === "") {
        return "-";
    }
    var retorno = "";
    var con = 1;
    var value2 = parseFloat(value).toFixed(0) + "";
    var value3 = (parseFloat(value).toFixed(cantidadDecimal)) + "";
    value3 = (value3).substring(value2.length + 1, value3.length);
    var value4 = value3;
    for (var i = value3.length - 1; i >= 0; i--) {
        if (value3[i] == "0") {
            value4 = value3.substring(0, i - 1);
        } else {
            break;
        }
    }
    for (var i = value2.length - 1; i >= 0; i--) {
        retorno = (con == 3 && i > 0 && value2[i - 1] !== "-" ? separadorMiles : "") + value2[i] + retorno;
        if (con == 3) {
            con = 1;
        } else {
            con++;
        }
    }
    return signo + retorno + (value4 != "" && parseFloat(value4) > 0 ? separadorDecimal + value4 : "");
}

var formatMiles = function (value, separadorMiles, separadorDecimal, cantidadDecimal) {
    if (separadorMiles == undefined) {
        separadorMiles = ".";
    }
    if (separadorDecimal == undefined) {
        separadorDecimal = ",";
    }
    if (cantidadDecimal == undefined) {
        cantidadDecimal = 4;
    }
    if (value == null || value === "") {
        return "-";
    }
    var retorno = "";
    var con = 1;
    var value2 = parseFloat(value).toFixed(0) + "";
    var value3 = (parseFloat(value).toFixed(cantidadDecimal)) + "";
    value3 = (value3).substring(value2.length + 1, value3.length);
    var value4 = value3;
    for (var i = value3.length - 1; i >= 0; i--) {
        if (value3[i] == "0") {
            value4 = value3.substring(0, i - 1);
        } else {
            break;
        }
    }
    for (var i = value2.length - 1; i >= 0; i--) {
        retorno = (con == 3 && i > 0 && value2[i - 1] !== "-" ? separadorMiles : "") + value2[i] + retorno;
        if (con == 3) {
            con = 1;
        } else {
            con++;
        }
    }
    return retorno + (value4 != "" && parseFloat(value4) > 0 ? separadorDecimal + value4 : "");
}

var formatDate = function (value) {
    if (value == "" || value == null) {
        return "-";
    }
    var array = value.split("-");
    //var d = new Date(value);
    /*var day = parseInt(array[2]);
    var month = parseInt(array[1]);
    var year = parseInt(array[0]);
    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }*/
    var date = array[2] + "/" + array[1] + "/" + array[0];

    return date;
}

var formatDateYMD = function (value) {
    if (value == "" || value == null) {
        return "";
    }
    var d = new Date(value);
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }
    var date = year + "-" + month + "-" + day;

    return date;
}

var fileInPost = function (url, data) {
    var html = '<form name="formDinamyc" target="_blank" action="' + url + '" method="post">';
    html += '</form>';
    $('body').append(html);
    var keys = Object.keys(data);
    for (var i = 0; i < keys.length; i++) {
        if (data[keys[i]] !== undefined) {
            var input = $("<input>").attr("type", "hidden").attr("name", keys[i]).val(data[keys[i]]);
            $('[name=formDinamyc]').append($(input));
        }
    }
    $('[name=formDinamyc]').submit();
    $('[name=formDinamyc]').remove();

}
var fileInModal = function (url) {
    html = '<div id="dynamicModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="confirm-modal" aria-hidden="true">';
    html += '<div class="modal-dialog" style="width:90%;">';
    html += '<div class="modal-content">';
    html += '<div class="modal-header">';
    html += '<a class="close" data-dismiss="modal">×</a>';
    html += '<h4>Descarga de archivo</h4>'
    html += '</div>';
    html += '<div class="modal-body" autoCal="true" formulacal="height-80">';
    html += '<iframe frameborder="0" width="100%" height="500px" autoCal="true" formulacal="height-110" src="' + url + '"></iframe>';
    html += '</div>';
    html += '<div class="modal-footer">';
    html += 'Si presenta alg&uacute;n problema para visualizar el documento descarguelo desde <a href="' + url + '" target="_blank">aqu&iacute;</a>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    $('body').append(html);
    $("#dynamicModal").modal();
    $("#dynamicModal").modal('show');
    $('#dynamicModal').on('hidden.bs.modal', function (e) {
        $(this).remove();
    });
    $(window).resize();

}

var fileInModal2 = function (url) {
    html = '<div id="dynamicModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="confirm-modal" aria-hidden="true">';
    html += '<div class="modal-dialog" style="width:90%;">';
    html += '<div class="modal-content">';
    html += '<div class="modal-header">';
    html += '<a class="close" data-dismiss="modal">×</a>';
    html += '</div>';
    html += '<div class="modal-body" autoCal="true" formulacal="height-80">';
    html += '<iframe frameborder="0" width="100%" height="400px" autoCal="true" formulacal="height-110" src="' + url + '"></iframe>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    $('body').append(html);
    $("#dynamicModal").modal();
    $("#dynamicModal").modal('show');
    $('#dynamicModal').on('hidden.bs.modal', function (e) {
        $(this).remove();
    });
    $(window).resize();
}

