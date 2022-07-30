<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Menu extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('Empleados/Empleados_model');
    }

    public function index()
    {
        $this->load->view('shared/header');
        $this->load->view('Modulos/Empleados/Menu');
        $this->load->view('shared/footer', array("js" => array('assets/js/Modulos/Empleados/Menu.js')));
    }

    public function cargarArea()
    {
        $codArea = $this->input->post('codArea');
        $data = $this->Empleados_model->cargarArea($codArea);
        echo json_encode(array("data" => $data));
    }

    public function cargarRoles()
    {
        $codEmpleado = $this->input->post('codEmpleado');
        $data = $this->Empleados_model->cargarRoles($codEmpleado);
        echo json_encode(array("data" => $data));
    }

    public function guardarEmpleado()
    {
        $datosFormulario = $this->input->post('datosFormulario');
        $datosRoles = $this->input->post('datosRoles');
        $data = $this->Empleados_model->guardarEmpleado($datosFormulario, $datosRoles);
        echo json_encode(array("data" => $data));
    }

    public function eliminarEmpleado()
    {
        $codEmpleado = $this->input->post('codEmpleado');
        $data = $this->Empleados_model->eliminarEmpleado($codEmpleado);
        echo json_encode(array("data" => $data));
    }

    public function cargarEmpleados()
    {
        $data = $this->Empleados_model->cargarEmpleados();
        echo json_encode(array("data" => $data));
    }
}
