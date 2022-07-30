<?php
defined('BASEPATH') or exit('No direct script access allowed');

$config['email'] = array(
    'activo' => 0,
    "to" => '',
    "cc" => '',
    'titulo' => '',
    'server' => 'ssl://smtp.googlemail.com',
    'port' => '465',
    'user' => 'hugoescobarandrade@gmail.com',
    'pass' => 'hugoes00',
    'smtp_crypto' => 'ssl',
    'protocol' => 'smtp',
    'mailtype' => 'html',
    'wordwrap' => TRUE,
    'charset' => 'utf-8'
);
