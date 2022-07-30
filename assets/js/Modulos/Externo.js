//FUNCIONES POR MODULOS CON FUNCIONAMIENTO INTERNO O EXTERNO
var validarActive = function () {
    menus = $("body").find(".menuitem").removeClass('active');
    var URLactual = window.location.href;
    var urlSeperada = URLactual.split("/");
    // PROCESO PARA SERVIVOR
    if (urlSeperada.length >= 4) {
        if (urlSeperada[3] == "Usuarios") {
            $("[name=menuUsuarios]").addClass('active');
            return;
        }
        if (urlSeperada[3] == "Personas") {
            $("[name=menuPersonas]").addClass('active');
            return;
        }
        if (urlSeperada[3] == "Productos") {
            $("[name=menuProductos]").addClass('active');
            return;
        }
        if (urlSeperada[3] == "Inventario") {
            $("[name=menuInventario]").addClass('active');
            return;
        }
        if (urlSeperada[3] == "Ventas") {
            $("[name=menuVentas]").addClass('active');
            return;
        }
        if (urlSeperada[3] == "Home") {
            $("[name=menuDash]").addClass('active');
            return;
        }
        if (urlSeperada[3] == "Laboratorios") {
            $("[name=menuLab]").addClass('active');
            return;
        }
    } else {
        $("[name=menuPrincipal]").addClass('active');
        return;
    }
    // PROCESO PARA LOCAL
    if (urlSeperada.length >= 5) {
        if (urlSeperada[4] == "Usuarios") {
            $("[name=menuUsuarios]").addClass('active');
            return;
        }
        if (urlSeperada[4] == "Personas") {
            $("[name=menuPersonas]").addClass('active');
            return;
        }
        if (urlSeperada[4] == "Productos") {
            $("[name=menuProductos]").addClass('active');
            return;
        }
        if (urlSeperada[4] == "Inventario") {
            $("[name=menuInventario]").addClass('active');
            return;
        }
        if (urlSeperada[4] == "Ventas") {
            $("[name=menuVentas]").addClass('active');
            return;
        }
        if (urlSeperada[4] == "Home") {
            $("[name=menuDash]").addClass('active');
            return;
        }
        if (urlSeperada[4] == "Laboratorios") {
            $("[name=menuLab]").addClass('active');
            return;
        }
    }
}

//FUNCIONES POR MODULOS CON FUNCIONAMIENTO INTERNO O EXTERNO

$(document).ready(function () {
    validarActive();
    //FUNCION DE BUSCAR PERSONA
});