<?php

if (!defined('BASEPATH')) exit('No direct script access allowed');

class Sesion extends CI_Controller
{

    private static $CI;

    public function __construct()
    {
    }

    public static function is_session()
    {
        $CI = &get_instance();
        $CI->config->load('urls');
        $urls_publicas = $CI->config->item('publicas');
        if (!in_array(uri_string(), $urls_publicas)) {
            if ($CI->session->getAuth() === NULL) {
                if (uri_string() !== "") {
                    if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
                        echo json_encode(array(
                            "success" => false,
                            "msg" => "La sesi&oacute;n se caduc&oacute;, por favor ingrese nuevamente.",
                            "session" => false
                        ));
                        exit;
                    } else {
                        redirect(base_url(), "refresh");
                    }
                }
            } else {
                if (uri_string() == "") {
                    redirect(base_url() . "Login", "refresh");
                }
            }
        }
    }
}
