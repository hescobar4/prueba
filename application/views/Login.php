<!DOCTYPE html>
<html lang="en">
<title>HSoft</title>
<!--===============================================================================================-->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="shortcut icon" href="<?php echo base_url(); ?>assets/img/logos/icon_hsoft.ico" />

<!-- Version compilada de Bootstrap css -->
<link rel="stylesheet" href="<?php echo base_url(); ?>assets/boostrap/css/bootstrap.css">
<link rel="stylesheet" href="<?php echo base_url(); ?>assets/boostrap/css/bootstrap.min.css">
<!-- Version compilada de Bootstrap css -->

<!-- css externos -->
<link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/jquery.formValidation.css">
<link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/iconmoon.css">
<link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/daterangepicker.css">

<link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/estilos.css">
<link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/table.css">
<!-- css externos -->

<!-- plantilla -->
<link href="<?php echo base_url(); ?>assets/login/css/bootstrap.css" rel="stylesheet">
<link href="<?php echo base_url(); ?>assets/login/css/fontawesome-all.css" rel="stylesheet">
<link href="<?php echo base_url(); ?>assets/login/css/swiper.css" rel="stylesheet">
<link href="<?php echo base_url(); ?>assets/login/css/magnific-popup.css" rel="stylesheet">
<link href="<?php echo base_url(); ?>assets/login/css/styles.css" rel="stylesheet">
<!-- plantilla -->


<!--===============================================================================================-->
<script type="text/javascript">
	var BASE_URL = "<?php echo base_url(); ?>";
	var FECHA_ACTUAL = "<?php echo date("Y-m-d"); ?>";
</script>
<!--===============================================================================================-->
</head>

<!--===============================================================================================-->

<!-- #1E75BC    #24519E -->

<body data-spy="scroll" data-target=".fixed-top">

	<!-- Navigation -->
	<nav class="navbar navbar-expand-lg fixed-top navbar-dark" style="background:#0A3953">
		<div class="container">

			<!-- Text Logo - Use this if you don't have a graphic logo -->
			<!-- <a class="navbar-brand logo-text page-scroll" href="index.html">Gemdev</a> -->

			<!-- Image Logo -->
			<!-- <a class="navbar-brand logo-image" href="index.html"><img src="<?php echo base_url(); ?>assets/login/images/logo.svg" alt="alternative"></a> -->
			<!-- <a class="navbar-brand logo-image"><img src="<?php echo base_url(); ?>assets/img/logos/hsoft_letras_solo.png" alt="alternative"></a> -->
			<h5 class="text-white">H S O F T</h5>

			<!-- <button class="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault" style="background:#0A3953">
				<ul class="navbar-nav ml-auto">
				</ul>
			</div>  -->
			<!-- end of navbar-collapse -->
		</div> <!-- end of container -->
	</nav> <!-- end of navbar -->
	<!-- end of navigation -->


	<!-- Header -->

	<div class="header" style="background:#0A3953">
		<div class=" ocean">
			<div class="wave"></div>
			<div class="wave"></div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<div class="image-container">
						<img class="img-fluid" src="<?php echo base_url(); ?>assets/img/logos/hsoft_letras_v.png" alt="alternative">
					</div> <!-- end of image-container -->
				</div> <!-- end of col -->
				<div class="col-lg-6">
					<div class="text-container" style="border: 1px solid #fff; padding:15px; border-radius: 20px;">
						<div class="text-center mb-4 mt-4">
							<h5 class="text-white">¡Bienvenidos!</h5>
						</div>
						<div class="row mt-4">
							<div class="col-lg-12 form-group">
								<label for="" class="text-white">N° de identificación</label>
								<input type="text" style="border-radius:20px;" class="form-control form-control-user" placeholder="N° Documento" name="codigo">
							</div>
						</div>
						<div class="row mb-4">
							<div class="col-lg-12 form-group">
								<label for="" class="text-white">Contraseña</label>
								<input name="contra" style="border-radius:20px;" placeholder="Contraseña" type="password" class="form-control form-control-user">
							</div>
						</div>
						<a class="btn mt-4 mb-4 btnLogin" style="width:200px; display: block; margin:auto;" name="btnLogin">Ingresar</a>
						<style>
							/* AF7746 */
							.btnLogin {
								background: #0A3953;
								border-color: white;
								border-radius: 20px;
								color: white !important;
							}

							.btnLogin:hover {
								background: #fff;
								border-color: #0A3953;
								color: #0A3953 !important;
							}
						</style>
					</div> <!-- end of text-container -->
				</div> <!-- end of col -->
			</div> <!-- end of row -->
		</div> <!-- end of container -->
	</div> <!-- end of header -->

	<!-- Footer -->
	<div class="footer bg-gray">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="social-container">
						<!-- <span class="fa-stack">
							<a href="#your-link">
								<i class="fas fa-circle fa-stack-2x"></i>
								<i class="fab fa-facebook-f fa-stack-1x"></i>
							</a>
						</span>
						<span class="fa-stack">
							<a href="#your-link">
								<i class="fas fa-circle fa-stack-2x"></i>
								<i class="fab fa-twitter fa-stack-1x"></i>
							</a>
						</span>
						<span class="fa-stack">
							<a href="#your-link">
								<i class="fas fa-circle fa-stack-2x"></i>
								<i class="fab fa-pinterest-p fa-stack-1x"></i>
							</a>
						</span> -->
						<span class="fa-stack">
							<a href="" target="_blank" title="Instagram HSoft">
								<i class="fas fa-circle fa-stack-2x"></i>
								<i class="fab fa-instagram fa-stack-1x"></i>
							</a>
						</span>
						<!-- <span class="fa-stack">
							<a href="#your-link">
								<i class="fas fa-circle fa-stack-2x"></i>
								<i class="fab fa-youtube fa-stack-1x"></i>
							</a>
						</span> -->
					</div> <!-- end of social-container -->
				</div> <!-- end of col -->
			</div> <!-- end of row -->
		</div> <!-- end of container -->
	</div> <!-- end of footer -->
	<!-- end of footer -->


	<!-- Copyright -->
	<div class="copyright bg-gray">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<p class="p-small">Copyright © <a class="no-line" href="" target="_blank">HSoft</a></p>
				</div> <!-- end of col -->
			</div>
			<!-- enf of row -->
		</div> <!-- end of container -->
	</div> <!-- end of copyright -->
	<!-- end of copyright -->

	<!-- Modal Login -->
	<div class="modal fade" id="modalLogin" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-md" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Ingresar al sistema</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="container">
						<div class="row">
							<div class="col-lg-12 form-group">
								<label for="">N° de identificación</label>
								<input type="text" class="form-control form-control-user" placeholder="N° Documento" name="codigo">
							</div>
						</div>
						<div class="row">
							<div class="col-lg-12 form-group">
								<label for="">Contraseña</label>
								<input name="contra" placeholder="Contraseña" type="password" class="form-control form-control-user">
							</div>
						</div>
						<a name="btnLogin" class="btn btn-primary btn-user btn-block text-white">
							Ingresar
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Modal Login -->
</body>
<!--===============================================================================================-->
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/jquery-3.1.0.min.js" type="text/javascript"></script>

<script type="text/javascript">
	var BASE_URL = "<?php echo base_url(); ?>";
	var FECHA_ACTUAL = "<?php echo date("Y-m-d"); ?>";
</script>

<script>
	$.getScript('<?php echo base_url(); ?>assets/js/shared/Util.js');
	$.getScript('<?php echo base_url(); ?>assets/js/shared/helpers.js');
	$.getScript("<?php echo base_url(); ?>assets/js/Modulos/Login.js");
</script>

<!-- Js funcionales -->
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/popper.min.js"></script>
<!-- Version compilada de Bootstrap js -->
<script type="text/javascript" src="<?php echo base_url(); ?>assets/boostrap/js/bootstrap.min.js"></script>
<!-- Version compilada de Bootstrap js -->

<!--===============================================================================================-->
<script src="<?php echo base_url(); ?>assets/login/js/jquery.easing.min.js"></script> <!-- jQuery Easing for smooth scrolling between anchors -->
<script src="<?php echo base_url(); ?>assets/login/js/swiper.min.js"></script> <!-- Swiper for image and text sliders -->
<script src="<?php echo base_url(); ?>assets/login/js/jquery.magnific-popup.js"></script> <!-- Magnific Popup for lightboxes -->
<script src="<?php echo base_url(); ?>assets/login/js/scripts.js"></script> <!-- Custom scripts -->
<!--===============================================================================================-->

<!--===============================================================================================-->
<!-- Js funcionales -->
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/bootstrap-datepicker.min.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/bootstrap-select.min.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/jquery.growl.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/jquery.bootstrap-growl.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/bootbox.min.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/bootbox.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/bootbox.locales.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/bootbox.all.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/bootbox.all.min.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/bootbox.locales.min.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/notify.min.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/notify.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/jquery.autocomplete.min.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/jquery.base64.js" type="text/javascript"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/moment.min.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/daterangepicker.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/loading.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/Chart/Chart.min.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/Chart/Chart.bundle.min.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/Chart/utils.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/bootstrap-treeview.min.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/jquery.formValidation.js"></script>
<!-- Js funcionales -->
<!--===============================================================================================-->

</html>