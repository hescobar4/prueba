<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Menu extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        $this->load->view('shared/header');
        $this->load->view('Menu');
        $this->load->view('shared/footer', array(
            "js" => array()
        ));
    }
}
