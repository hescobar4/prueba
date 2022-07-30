<?php
defined('BASEPATH') or exit('No direct script access allowed');

$hook['post_controller_constructor'][] = array(
    'class'    => 'Sesion',
    'function' => 'is_session',
    'filename' => 'Sesion.php',
    'filepath' => 'hooks'
);
