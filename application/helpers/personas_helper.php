<?php
defined('BASEPATH') or exit('No direct script access allowed');

if (!function_exists('buscarCodPersona')) {

    function buscarCodPersona($datosPersona)
    {
        $CI = &get_instance();
        $arrayDatosPersona = explode(" - ", $datosPersona);
        $identificacion = $arrayDatosPersona[0];
        $sql = sprintf("SELECT PERCOD FROM suc_personas WHERE PERIDENTIFICACION='%s'", strtoupper(trim($identificacion)));
        $result = $CI->db->query($sql);
        $resultado = $result->result_array();
        $result->free_result();
        return (count($resultado) > 0) ? trim($resultado[0]['PERCOD']) : false;
    }
}

if (!function_exists('buscarEstadoPersona')) {

    function buscarEstadoPersona($datosPersona)
    {
        $CI = &get_instance();
        $arrayDatosPersona = explode(" - ", $datosPersona);
        $identificacion = $arrayDatosPersona[0];
        $sql = sprintf("SELECT PERESTADO FROM suc_personas WHERE PERIDENTIFICACION='%s'", strtoupper(trim($identificacion)));
        $result = $CI->db->query($sql);
        $resultado = $result->result_array();
        $result->free_result();
        return ($resultado[0]['PERESTADO'] == 1) ? true : false;
    }
}
