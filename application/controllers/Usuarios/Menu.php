<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Menu extends CI_Controller
{

    public function index()
    {
        $this->load->view('shared/header');
        $this->load->view('Modulos/Usuarios/Menu');
        $this->load->view('shared/footer', array("js" => array('assets/js/Modulos/Usuarios/Usuarios.js')));
    }
}
