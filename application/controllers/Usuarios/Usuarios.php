<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Usuarios extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('Usuarios/Usuarios_model');
    }

    public function cargarRol()
    {
        $data = $this->Usuarios_model->cargarRol();
        echo json_encode(array("data" => $data));
    }

    public function cargarPermisosSeleccion()
    {
        $codRol = $this->input->post("codRol");
        $data = $this->Usuarios_model->cargarPermisosSeleccion($codRol);
        echo json_encode(array("data" => $data));
    }

    public function eliminarPermisoRol()
    {
        $cod = $this->input->post("cod");
        $data = $this->Usuarios_model->eliminarPermisoRol($cod);
        echo json_encode(array("data" => $data));
    }

    public function cargarPermisosRol()
    {
        $cod = $this->input->post("cod");
        $data = $this->Usuarios_model->cargarPermisosRol($cod);
        echo json_encode(array("data" => $data));
    }

    public function insertarUsuario()
    {
        $datos = $this->input->post("datos");
        $data = $this->Usuarios_model->insertarUsuario($datos);
        echo json_encode(array("data" => $data));
    }

    public function cargarDatosUsuarios()
    {
        $CI = &get_instance();
        $codigo = strtoupper($CI->session->getId());
        $data = $this->Usuarios_model->cargarDatosUsuarios($codigo);
        echo json_encode(array("data" => $data));
    }

    public function actualizarUsuario()
    {
        $datos = $this->input->post("datos");
        $data = $this->Usuarios_model->actualizarUsuario($datos);
        echo json_encode(array("data" => $data));
    }

    public function cambiarClave()
    {
        $CI = &get_instance();
        $codigo = strtoupper($CI->session->getId());
        $datos = $this->input->post("datos");
        $data = $this->Usuarios_model->cambiarClave($datos, $codigo);
        echo json_encode(array("data" => $data));
    }

    public function buscarUsuario()
    {
        $datos = $this->input->post("datos");
        $data = $this->Usuarios_model->buscarUsuario($datos);
        echo json_encode(array("data" => $data));
    }

    public function restablacerClave()
    {
        $cod = $this->input->post("cod");
        $data = $this->Usuarios_model->restablacerClave($cod);
        echo json_encode(array("data" => $data));
    }

    public function insertarRol()
    {
        $datos = $this->input->post("datos");
        $data = $this->Usuarios_model->insertarRol($datos);
        echo json_encode(array("data" => $data));
    }

    public function insertarPermisosRol()
    {
        $codRol = $this->input->post("codRol");
        $datos = $this->input->post("datos");
        $data = $this->Usuarios_model->insertarPermisosRol($datos, $codRol);
        echo json_encode(array("data" => $data));
    }

    public function editarRol()
    {
        $datos = $this->input->post("datos");
        $data = $this->Usuarios_model->editarRol($datos);
        echo json_encode(array("data" => $data));
    }

    public function eliminarRol()
    {
        $codRol = $this->input->post("codRol");
        $data = $this->Usuarios_model->eliminarRol($codRol);
        echo json_encode(array("data" => $data));
    }

    public function cargarUsuarios()
    {
        $data = $this->Usuarios_model->cargarUsuarios();
        echo json_encode(array("data" => $data));
    }

    public function estadoUsuario()
    {
        $cod = $this->input->post("cod");
        $data = $this->Usuarios_model->estadoUsuario($cod);
        echo json_encode(array("data" => $data));
    }

    public function cargarRolDiferente()
    {
        $codRol = $this->input->post("codRol");
        $data = $this->Usuarios_model->cargarRolDiferente($codRol);
        echo json_encode(array("data" => $data));
    }

    public function cambiarRol()
    {
        $datos = $this->input->post("datos");
        $data = $this->Usuarios_model->cambiarRol($datos);
        echo json_encode(array("data" => $data));
    }

    public function cambiarUsuario()
    {
        $datos = $this->input->post("datos");
        $data = $this->Usuarios_model->cambiarUsuario($datos);
        echo json_encode(array("data" => $data));
    }
}
