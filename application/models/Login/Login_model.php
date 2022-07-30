<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Login_model extends CI_Model
{
    public function login($usuario, $clave)
    {
        $sql = sprintf(
            "SELECT * FROM suc_usuarios WHERE USUCEDULA='%s' AND USUPASSWORD='%s'",
            trim($usuario),
            md5(trim($clave))
        );
        $query = $this->db->query($sql);
        $data = $query->result_array();
        $query->free_result();
        if (count($data) > 0) {
            if ($data[0]['USUESTADO'] == 0) {
                return array("msg" => "Usted se encuentra inhabilitado.", "success" => false);
            }
            // $this->session->set_userdata("usuario", $campos['USUNOMBRE'] . " " . $campos['USUAPELLIDO']);
            // $this->session->set_userdata('auth', true);
            // $this->session->set_userdata('codigo', $campos['USUCEDULA']);
            $this->session->setId($data[0]['USUCEDULA']);
            $this->session->setUsername($data[0]['USUNOMBRE'] . " " . $data[0]['USUAPELLIDO']);
            $this->session->setAuth(true);
            return array("msg" => "", "success" => true);
        } else {
            return array("msg" => "Usuario y/o contraseña están errados.", "success" => false);
        }
    }

    public function logout($url = '/')
    {
        $this->session->sess_destroy();
        if ($url !== false) {
            redirect($url, "refresh");
        }
    }

    public function getUsuario()
    {
        return $this->session->userdata("usuario");
        //Funcion para obetener usuario
    }
}
