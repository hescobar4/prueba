<?php

defined('BASEPATH') OR exit('No direct script access allowed');

if (!function_exists('sql_anti_injection')) {

    function sql_anti_injection($inp) {
        if (is_array($inp)) return array_map(__METHOD__, $inp);

        if ($inp != null && trim($inp) != '' && is_string($inp)) {
            return str_replace(array(
                '\\', "\0", "\n", "\r", "'", '"', "=", "&", "*",
                "@", "[", "]", "{", "}", "^", ":", "!", "/", ">", "<",
                "(", ")", "%", "+", "?", ";", "~", "|"
                    ),
                    array(
                '\\\\', '\\0', '\\n', '\\r', "", '\\"', '\\=', "\\&", "\\*",
                "\\@", "\\[", "\\]", "\\{", "\\}", "\\^", "\\:", "\\!", "\\/", "\\>",
                "\\<",
                "\\(", "\\)", "\\%", "\\+", "\\?", "\\;", "\\~", "\\|"
                    ), $inp);
        }

        return trim($inp);
    }

}

if (!function_exists('sql_anti_injection_plan')) {

    function sql_anti_injection_plan($inp) {
        if (is_array($inp)) return array_map(__METHOD__, $inp);

        if ($inp != null && trim($inp) != '' && is_string($inp)) {
            return str_replace(array(
                '\\', "\0", "\n", "\r", "'", '"'
                    ),
                    array(
                '', '', '', '', "", ''
                    ), $inp);
        }

        return trim($inp);
    }

}

if (!function_exists('sql_uniq_id')) {

    function sql_uniq_id() {
        return substr(md5(uniqid(rand(), true)), 0, 13);
    }

}

if (!function_exists('sql_utf8')) {

    function sql_utf8($string) {
        $string = trim($string);

        $string = str_replace(
                array('á', 'à', 'ä', 'â', 'ª', 'Á', 'À', 'Â', 'Ä'),
                array('a', 'a', 'a', 'a', 'a', 'A', 'A', 'A', 'A'), $string
        );

        $string = str_replace(
                array('é', 'è', 'ë', 'ê', 'É', 'È', 'Ê', 'Ë'),
                array('e', 'e', 'e', 'e', 'E', 'E', 'E', 'E'), $string
        );

        $string = str_replace(
                array('í', 'ì', 'ï', 'î', 'Í', 'Ì', 'Ï', 'Î'),
                array('i', 'i', 'i', 'i', 'I', 'I', 'I', 'I'), $string
        );

        $string = str_replace(
                array('ó', 'ò', 'ö', 'ô', 'Ó', 'Ò', 'Ö', 'Ô'),
                array('o', 'o', 'o', 'o', 'O', 'O', 'O', 'O'), $string
        );

        $string = str_replace(
                array('ú', 'ù', 'ü', 'û', 'Ú', 'Ù', 'Û', 'Ü'),
                array('u', 'u', 'u', 'u', 'U', 'U', 'U', 'U'), $string
        );

        $string = str_replace(
                array('ñ', 'Ñ', 'ç', 'Ç'), array('n', 'N', 'c', 'C',), $string
        );
        return $string;
    }

}

if (!function_exists('is_empty')) {

    function is_empty($text) {
        if ($text == null) {
            return true;
        }
        if (is_string($text) || is_numeric($text)) {
            if (trim($text) == '') {
                return true;
            }
        }
        if(is_array($text)) {
            if(count($text) == 0) {
                return true;
            }
        }
        return false;
    }

}


if (!function_exists('utf8_html')) {

    function utf8_html($string) {
        $string = sql_anti_injection_plan(trim($string));

        $string = str_replace(
                array('á', 'à', 'ä', 'â', 'ª', 'Á', 'À', 'Â', 'Ä'),
                array('&#225;', '&#224;', '&#228;', '&#226;', '&#170;', '&#193;',
            '&#192;', '&#194;', '&#195;'), $string
        );

        $string = str_replace(
                array('é', 'è', 'ë', 'ê', 'É', 'È', 'Ê', 'Ë'),
                array('&#233;', '&#232;', '&#235;', '&#234;', '&#201;', '&#200;',
            '&#202;', '&#203;'), $string
        );

        $string = str_replace(
                array('í', 'ì', 'ï', 'î', 'Í', 'Ì', 'Ï', 'Î'),
                array('&#237;', '&#236;', '&#239;', '&#238;', '&#205;', '&#204;',
            '&#207;', '&#206;'), $string
        );

        $string = str_replace(
                array('ó', 'ò', 'ö', 'ô', 'Ó', 'Ò', 'Ö', 'Ô'),
                array('&#243;', '&#242;', '&#246;', '&#244;', '&#211;', '&#210;',
            '&#214;', '&#212;'), $string
        );

        $string = str_replace(
                array('ú', 'ù', 'ü', 'û', 'Ú', 'Ù', 'Û', 'Ü'),
                array('&#250;', '&#249;', '&#2520;', '&#251;', '&#218;', '&#217;',
            '&#220;', '&#219;'), $string
        );

        $string = str_replace(
                array('ñ', 'Ñ', 'ç', 'Ç'),
                array('&#241;', '&#209;', '&#231;', '&Ccedil;'), $string
        );
        return $string;
    }

}

if (!function_exists('utf8_html_decode')) {

    function utf8_html_decode($string) {
        $string = utf8_encode($string);
        $string = trim($string);

        $string = str_replace(
                array('&#225;', '&#224;', '&#228;', '&#226;', '&#170;', '&#193;',
            '&#192;', '&#194;', '&#195;'),
                array('á', 'à', 'ä', 'â', 'ª', 'Á', 'À', 'Â', 'Ä'), $string
        );

        $string = str_replace(
                array('&#233;', '&#232;', '&#235;', '&#234;', '&#201;', '&#200;',
            '&#202;', '&#203;'), array('é', 'è', 'ë', 'ê', 'É', 'È', 'Ê', 'Ë'),
                $string
        );

        $string = str_replace(
                array('&#237;', '&#236;', '&#239;', '&#238;', '&#205;', '&#204;',
            '&#207;', '&#206;'), array('í', 'ì', 'ï', 'î', 'Í', 'Ì', 'Ï', 'Î'),
                $string
        );

        $string = str_replace(
                array('&#243;', '&#242;', '&#246;', '&#244;', '&#211;', '&#210;',
            '&#214;', '&#212;'), array('ó', 'ò', 'ö', 'ô', 'Ó', 'Ò', 'Ö', 'Ô'),
                $string
        );

        $string = str_replace(
                array('&#250;', '&#249;', '&#2520;', '&#251;', '&#218;', '&#217;',
            '&#220;', '&#219;'), array('ú', 'ù', 'ü', 'û', 'Ú', 'Ù', 'Û', 'Ü'),
                $string
        );

        $string = str_replace(
                array('&#241;', '&#209;', '&#231;', '&Ccedil;'),
                array('ñ', 'Ñ', 'ç', 'Ç'), $string
        );
        return $string;
    }

}


if (!function_exists('fecha_actual')) {

    function fecha_actual() {
        date_default_timezone_set('America/Bogota');
        return date('m/d/y g:i a');
    }

}

if (!function_exists('fecha_actual2')) {

    function fecha_actual2() {
        date_default_timezone_set('America/Bogota');
        return date('m/d/y g:i:s a');
    }

}

if (!function_exists('fecha_actual3')) {

    function fecha_actual3() {
        date_default_timezone_set('America/Bogota');
        return date('d/m/Y g:i a');
    }

}

if (!function_exists('sql_mayuscula')) {

    function sql_mayuscula($text) {
        return trim(
                str_replace(
                        array(
            'á', 'é', 'í', 'ó', 'ú',
            'ä', 'ë', 'ï', 'ö', 'ü',
            'ñ'
                        ),
                        array(
            'Á', 'É', 'Í', 'Ó', 'Ó',
            'Ä', 'Ë', 'Ï', 'Ö', 'Ü',
            'Ñ'
                        ), strtoupper($text))
        );
    }

}


if (!function_exists('sql_minuscula')) {

    function sql_minuscula($text) {
        return trim(
                str_replace(
                        array(
            'Á', 'É', 'Í', 'Ó', 'Ó',
            'Ä', 'Ë', 'Ï', 'Ö', 'Ü',
            'Ñ'
                        ),
                        array(
            'á', 'é', 'í', 'ó', 'ú',
            'ä', 'ë', 'ï', 'ö', 'ü',
            'ñ'
                        ), strtolower($text))
        );
    }

}

if (!function_exists('eliminar_tildes')) {

    function eliminar_tildes($string) {
        $string = trim($string);
        $string = str_replace(
                array('á', 'à', 'ä', 'â', 'ª', 'Á', 'À', 'Â', 'Ä'),
                array('a', 'a', 'a', 'a', 'a', 'A', 'A', 'A', 'A'), $string
        );

        $string = str_replace(
                array('é', 'è', 'ë', 'ê', 'É', 'È', 'Ê', 'Ë'),
                array('e', 'e', 'e', 'e', 'E', 'E', 'E', 'E'), $string
        );

        $string = str_replace(
                array('í', 'ì', 'ï', 'î', 'Í', 'Ì', 'Ï', 'Î'),
                array('i', 'i', 'i', 'i', 'I', 'I', 'I', 'I'), $string
        );

        $string = str_replace(
                array('ó', 'ò', 'ö', 'ô', 'Ó', 'Ò', 'Ö', 'Ô'),
                array('o', 'o', 'o', 'o', 'O', 'O', 'O', 'O'), $string
        );

        $string = str_replace(
                array('ú', 'ù', 'ü', 'û', 'Ú', 'Ù', 'Û', 'Ü'),
                array('u', 'u', 'u', 'u', 'U', 'U', 'U', 'U'), $string
        );
        return $string;
    }

}
