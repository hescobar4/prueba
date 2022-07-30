<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Login extends CI_Controller
{
    public function index()
    {
        $this->load->view('Login');
    }


    public function inicioSesion()
    {
        $this->load->model("Login/Login_model");
        $usuario = sql_anti_injection($this->input->post('usuario'));
        $clave = $this->input->post('pass');
        $retorno = $this->Login_model->login($usuario, $clave);
        echo json_encode(array("retorno" => $retorno));
    }

    public function logout()
    {
        $this->load->model("Login/Login_model");
        $this->Login_model->logout();
    }
}
