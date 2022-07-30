<?php

defined('BASEPATH') or exit('No direct script access allowed');

if (!function_exists('permisosModulos')) {
  function permisosModulos($opcion)
  {
    $CI = &get_instance();
    if ($CI->session->getId() != "") {
      $codigo = strtoupper($CI->session->getId());
      if ($codigo != null || $codigo != "undefined" || $codigo != "") {
        $sql = sprintf(
          "SELECT DISTINCT COUNT(*) AS CAN 
        FROM suc_usuarios U 
          INNER JOIN suc_roles R ON (R.ROLCOD=U.ROLCOD)
          INNER JOIN suc_per_rol PR ON (PR.PEROLROL=R.ROLCOD)
          INNER JOIN suc_permisos P ON (P.PERCOD=PR.PEROLPER)
        WHERE U.USUCEDULA='%s'
          AND P.PEROPCION='%s'
            AND PR.PEROLESTADO=1",
          trim($codigo),
          trim(strtoupper($opcion))
        );
        $resultado = $CI->db->query($sql);
        $resultado = $resultado->result_array();
        if (intval($resultado[0]['CAN']) > 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

if (!function_exists('obtenerCodUsuario')) {
  function obtenerCodUsuario($cedula)
  {
    $CI = &get_instance();
    $sql = sprintf(
      "SELECT U.USUCOD FROM suc_usuarios U WHERE U.USUCEDULA = '$cedula'"
    );
    $resultado = $CI->db->query($sql);
    $resultado = $resultado->result_array();
    return (count($resultado) > 0) ? $resultado[0]['USUCOD'] : false;
  }
}
