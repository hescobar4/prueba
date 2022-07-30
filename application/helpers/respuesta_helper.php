<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Respuesta
 *
 * @author jherrera
 *
 */
defined('BASEPATH') OR exit('No direct script access allowed');

//if (!function_exists('respuesta3')) {
//
//    /**
//     * Element
//     *
//     * Lets you determine whether an array index is set and whether it has a value.
//     * If the element is empty it returns NULL (or whatever you specify as the default value.)
//     *
//     * @param	string
//     * @param	array
//     * @param	mixed
//     * @return	mixed	depends on what the array contains
//     */
//    function respuesta3($success, $json = NULL, $total = 0, $error = NULL) {
//        return json_encode(Array(
//            "success" => $success,
//            "json" => $json,
//            "total" => $total,
//            "error" => $error
//        ));
//    }
//
//}

if (!function_exists('respuesta')) {

    /**
     * Element
     *
     * Lets you determine whether an array index is set and whether it has a value.
     * If the element is empty it returns NULL (or whatever you specify as the default value.)
     *
     * @param	string
     * @param	array
     * @param	mixed
     * @return	mixed	depends on what the array contains
     */
    function respuesta($success = true, $mensaje = false, $data = false, $total = false) {
        $retorno = array(
            "success" => $success
        );
        if ($data !== false) {
            $retorno["data"] = $data;
        }
        if ($mensaje !== false) {
            $retorno["msg"] = $mensaje;
        }
        if ($total !== false) {
            if (gettype($total) != "integer") {
                $total = intval($total);
            }
            $retorno["total"] = $total;
        }
        echo json_encode($retorno);
    }

}

if (!function_exists('base_url_index')) {


    function base_url_index() {
        echo base_url() . "index.php/";
       
    }

}
?>
