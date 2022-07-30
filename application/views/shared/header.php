<!DOCTYPE html>
<html lang="es-CO">
<title>HSoft</title>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="<?php echo base_url(); ?>assets/img/logos/icon_hsoft.ico" />

    <!-- Version compilada de Bootstrap css -->
    <link rel=" stylesheet" href="<?php echo base_url(); ?>assets/boostrap/css/bootstrap.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/boostrap/css/bootstrap.min.css">
    <!-- Version compilada de Bootstrap css -->

    <!-- css externos -->
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/jquery.formValidation.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/iconmoon.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/daterangepicker.css">
    <!-- css externos -->

    <!-- plantilla -->
    <link href="<?php echo base_url(); ?>assets/plantilla/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link href="<?php echo base_url(); ?>assets/plantilla/css/sb-admin-2.min.css" rel="stylesheet">
    <!-- plantilla -->

    <!-- Select2 combobox-->
    <link href="<?php echo base_url(); ?>assets/css/select2.min.css" rel="stylesheet" />
    <link href="<?php echo base_url(); ?>assets/css/jquery.growl.css" rel="stylesheet" type="text/css" />
    <!-- Select2 combobox-->
</head>

<body id="page-top">
    <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- Sidebar -->
        <!-- rgb(225, 185, 139, 1) color AMAIA -->
        <ul class="navbar-nav bg-gradient sidebar text-white sidebar-dark accordion" id="accordionSidebar" style="background:#0A3953">

            <!-- Sidebar - Brand -->
            <a class="sidebar-brand d-flex align-items-center justify-content-center text-white" style="cursor: pointer;" name="btnApp" data-modulo="Menu">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">HSoft <sup>Admin</sup></div>
            </a>

            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            <!-- Nav Item - Dashboard -->
            <li class="nav-item menuitem" name="menuDash" style="cursor: pointer">
                <a class="nav-link" data-modulo="Home" name="btnApp">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Empleados</span></a>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider d-none d-md-block">

            <!-- Sidebar Toggler (Sidebar) -->
            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>
        <!-- End of Sidebar -->

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow" name="cabeceraApp">

                    <!-- Sidebar Toggle (Topbar) -->
                    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                        <i class="fa fa-bars"></i>
                    </button>

                    <!-- Topbar Navbar -->
                    <ul class="navbar-nav ml-auto">

                        <!-- Nav Item - User Information -->
                        <li class="nav-item dropdown no-arrow">
                            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small"><?php echo $this->session->getUsername() ?></span>
                                <img class="img-profile rounded-circle" src="<?php echo base_url(); ?>assets/plantilla/img/undraw_profile.svg">
                            </a>
                            <!-- Dropdown - User Information -->
                            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                                <a class="dropdown-item" style="cursor:pointer;" name="miCuenta" title="Mi cuenta" data-toggle="modal" data-target="#modalMiCuenta">
                                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Perfil
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" name="btnCerrarSession" style="cursor:pointer;">
                                    <span class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></span>
                                    Cerrar sesi&oacute;n
                                </a>
                            </div>
                        </li>
                    </ul>
                </nav>
                <!-- End of Topbar -->