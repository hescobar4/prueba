<!-- Begin Page Content -->
<div class="container-fluid" autoCal="true" formulacal="height-55" style="overflow-y: auto;">

    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <!-- <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a> -->
    </div>

    <!-- Content Row -->
    <div class="row">
        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                Utilidad (inventario actual)</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800" name="textUtilidad"></div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-wallet fa-3x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                costos (inventario actual)</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800" name="textCosto"></div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-dollar-sign fa-3x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-info shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Consumo de inventario
                            </div>
                            <div class="row no-gutters align-items-center">
                                <div class="col-auto">
                                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800" name="textValorConsumoInv"></div>
                                </div>
                                <div class="col">
                                    <div class="progress progress-sm mr-2">
                                        <div class="progress-bar bg-info" role="progressbar" id="barraProgresoInv" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-warehouse fa-3x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Pending Requests Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                Productos en sistema</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800" name="textCantidadProductos"></div>
                        </div>
                        <div class="col-auto">
                            <i class="fab fa-product-hunt fa-3x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-muted">VENTAS POR MES</h6>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                    <div class="chart-area">
                        <canvas id="graficaArea"></canvas>
                    </div>
                </div>
            </div>
        </div>
        <!-- Content Row -->

    </div>
    <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-muted">3 PRODUCTOS CON MAYOR INVENTARIO</h6>
                </div>
                <!-- Card Body -->
                <div class="card-body" style="height:380px;">
                    <div class="chart-pie pt-4 pb-2">
                        <canvas id="graficaTorta"></canvas>
                    </div>
                    <div class="mt-4 text-center small">
                        <span class="mr-2">
                            <i class="fas fa-circle text-primary"> <span class="text-muted" name="textPro1"></span></i>
                        </span>
                        <span class="mr-2">
                            <i class="fas fa-circle text-success"> <span class="text-muted" name="textPro2"></span></i>
                        </span>
                        <span class="mr-2">
                            <i class="fas fa-circle text-info"> <span class="text-muted" name="textPro3"></span></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-muted">3 PRODUCTOS MAS VENDIDOS</h6>
                </div>
                <div class="card-body" style="height:380px;">
                    <div class="chart-bar">
                        <canvas id="graficarBar"></canvas>
                    </div>
                </div>
            </div>
        </div>
        <!-- Content Row -->
    </div>
    <hr>
    <!-- /.container-fluid -->

</div>
<!-- End of Main Content -->