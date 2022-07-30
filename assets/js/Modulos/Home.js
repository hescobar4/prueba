$("[name=btnApp]").on('click', function () {
    window.location = BASE_URL + $(this).data("modulo");
});

$("[name=btnRegresar]").on('click', function () {
    window.location = BASE_URL + $(this).data("tipo");
});

var cargarGraficaMes = function (datos) {
    var ctx = document.getElementById("graficaArea");
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            datasets: [{
                label: "Ventas",
                lineTension: 0.3,
                backgroundColor: "rgba(91, 229, 108, 0.09)",
                borderColor: "rgba(91, 229, 108, 1)",
                pointRadius: 3,
                pointBackgroundColor: "rgba(91, 229, 108, 1)",
                pointBorderColor: "rgba(91, 229, 108, 1)",
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                pointHitRadius: 10,
                pointBorderWidth: 2,
                data: [datos[1], datos[2], datos[3], datos[4], datos[5], datos[6], datos[7], datos[8], datos[9], datos[10], datos[11], datos[12]],
            }],
        },
        options: {
            maintainAspectRatio: false,
            layout: {
                padding: {
                    left: 5,
                    right: 25,
                    top: 25,
                    bottom: 0
                }
            },
            scales: {
                xAxes: [{
                    time: {
                        unit: 'date'
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        maxTicksLimit: 7
                    }
                }],
                yAxes: [{
                    ticks: {
                        maxTicksLimit: 5,
                        padding: 10,
                        // Include a dollar sign in the ticks
                        callback: function (value, index, values) {
                            return formatMoney(value);
                        }
                    },
                    gridLines: {
                        color: "rgb(234, 236, 244)",
                        zeroLineColor: "rgb(234, 236, 244)",
                        drawBorder: false,
                        borderDash: [2],
                        zeroLineBorderDash: [2]
                    }
                }],
            },
            legend: {
                display: false
            },
            tooltips: {
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                titleMarginBottom: 10,
                titleFontColor: '#6e707e',
                titleFontSize: 14,
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                intersect: false,
                mode: 'index',
                caretPadding: 10,
                callbacks: {
                    label: function (tooltipItem, chart) {
                        var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                        return datasetLabel + ': ' + formatMoney(tooltipItem.yLabel);
                    }
                }
            }
        }
    });
}

var graficarBar = function (datos) {
    if (datos[0]['nombres'].length > 0) {
        var nombres = datos[0]['nombres'];
        var valor = datos[0]['valor'];
        var ctx = document.getElementById("graficarBar");
        var may = 0;
        for (var i = 0; i < valor.length; i++) {
            if (parseInt(valor[i].replace(/[.]/g, "")) > may) {
                may = parseInt(valor[i].replace(/[.]/g, ""));
            }
        }
        var max = may.toString().replace(/[.]/g, "");
        var myBarChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [(nombres[0] == undefined) ? "PENDIENTE" : nombres[0], (nombres[1] == undefined) ? "PENDIENTE" : nombres[1], (nombres[2] == undefined) ? "PENDIENTE" : nombres[2]],
                datasets: [{
                    label: "Total venta",
                    backgroundColor: "#4e73df",
                    hoverBackgroundColor: "#2e59d9",
                    borderColor: "#4e73df",
                    data: [(valor[0] == undefined) ? "0" : valor[0].toString().replace(/[.]/g, ""), (valor[1] == undefined) ? "0" : valor[1].toString().replace(/[.]/g, ""), (valor[2] == undefined) ? "0" : valor[2].toString().replace(/[.]/g, "")],
                }],
            },
            options: {
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        left: 10,
                        right: 25,
                        top: 25,
                        bottom: 0
                    }
                },
                scales: {
                    xAxes: [{
                        time: {
                            unit: 'month'
                        },
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            maxTicksLimit: 6
                        },
                        maxBarThickness: 25,
                    }],
                    yAxes: [{
                        ticks: {
                            min: 0,
                            max: max,
                            maxTicksLimit: 5,
                            padding: 10,
                            // Include a dollar sign in the ticks
                            callback: function (value, index, values) {
                                return formatMoney(value);
                            }
                        },
                        gridLines: {
                            color: "rgb(234, 236, 244)",
                            zeroLineColor: "rgb(234, 236, 244)",
                            drawBorder: false,
                            borderDash: [2],
                            zeroLineBorderDash: [2]
                        }
                    }],
                },
                legend: {
                    display: false
                },
                tooltips: {
                    titleMarginBottom: 10,
                    titleFontColor: '#6e707e',
                    titleFontSize: 14,
                    backgroundColor: "rgb(255,255,255)",
                    bodyFontColor: "#858796",
                    borderColor: '#dddfeb',
                    borderWidth: 1,
                    xPadding: 15,
                    yPadding: 15,
                    displayColors: false,
                    caretPadding: 10,
                    callbacks: {
                        label: function (tooltipItem, chart) {
                            var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                            return datasetLabel + ': ' + formatMoney(tooltipItem.yLabel);
                        }
                    }
                },
            }
        });
    }
}

var graficaTorta = function (datos) {
    if (datos.productos.length > 2) {
        var cantidadTotal = datos.cantidadTotal;
        var productos = datos.productos;
        var otro = (cantidadTotal - datos.smadorEscogidos);
        var ctx = document.getElementById("graficaTorta");
        $("[name=textPro1]").text(productos[0]['nombre']);
        $("[name=textPro2]").text(productos[1]['nombre']);
        $("[name=textPro3]").text(productos[2]['nombre']);
        var myPieChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [
                    (productos[0]['nombre'] == undefined) ? "PENDIENTE" : productos[0]['nombre'],
                    (productos[1]['nombre'] == undefined) ? "PENDIENTE" : productos[1]['nombre'],
                    (productos[2]['nombre'] == undefined) ? "PENDIENTE" : productos[2]['nombre'],
                    "OTROS"
                ],
                datasets: [{
                    label: "Porcentaje: ",
                    backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
                    hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
                    hoverBorderColor: "rgba(234, 236, 244, 1)",
                    data: [productos[0]['cantidadInv'], productos[1]['cantidadInv'], productos[2]['cantidadInv'], otro],
                }],
            },
            options: {
                maintainAspectRatio: false,
                tooltips: {
                    backgroundColor: "rgb(255,255,255)",
                    bodyFontColor: "#858796",
                    borderColor: '#dddfeb',
                    borderWidth: 1,
                    xPadding: 15,
                    yPadding: 15,
                    displayColors: false,
                    caretPadding: 10,
                },
                legend: {
                    display: false
                },
                cutoutPercentage: 35,
            },
        });
    }
}

var estadisticas = function () {
    showLoading();
    $.ajax({
        url: BASE_URL + "Home/estadisticas",
        dataType: 'JSON',
        success: function (r) {
            //PROCESO DE LLENADO DE GRAFICAS
            cargarGraficaMes(r.data.ventasMeses);
            graficarBar(r.data.productosMasVendidos);
            graficaTorta(r.data.productosMayorInv);
            //PROCESO DE LLENADO DE GRAFICAS

            //LLENAOD DE INFORMACION DATOS PRINCIPALES
            $("[name=textCantidadProductos]").text((r.data.cantidadProductos == 0) ? 0 : r.data.cantidadProductos);
            $("[name=textCosto]").text((r.data.costosMes == 0) ? 0 : r.data.costosMes);
            $("[name=textValorConsumoInv]").text((r.data.estadoInventario == 0) ? 0 : r.data.estadoInventario + "%");
            document.getElementById("barraProgresoInv").style.width = r.data.estadoInventario + "%";
            $("[name=textUtilidad]").text((r.data.utilidad == 0) ? 0 : r.data.utilidad);
            //LLENAOD DE INFORMACION DATOS PRINCIPALES

            hideLoading();
        },
    }).fail(function () {
        notificar(false, 'Error al procesar, por favor intente nuevamente');
    }).always(function () {

    });
}

var migracionFarm = function () {
    showLoading();
    $.ajax({
        url: BASE_URL + "Home/migracionFarm",
        dataType: 'JSON',
        success: function (r) {
            var data = r.data;
            debugger;
            hideLoading();
        }
    }).fail(function () {
        notificar(false, 'Error al procesar, por favor intente nuevamente');
    }).always(function () {

    });
}

$(document).ready(function () {
    estadisticas();
});