<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Session
{

    public function __construct()
    {
        session_start();
    }

    public function setId($id)
    {
        $_SESSION['id'] = $id;
    }
    public function getId()
    {
        if (isset($_SESSION['id'])) return $_SESSION['id'];
        return NULL;
    }

    public function setUsername($username)
    {
        $_SESSION['username'] = $username;
    }
    public function getUsername()
    {
        if (isset($_SESSION['username'])) return $_SESSION['username'];
        return NULL;
    }

    public function setAuth($auth)
    {
        $_SESSION['auth'] = $auth;
    }
    public function getAuth()
    {
        if (isset($_SESSION['auth'])) return $_SESSION['auth'];
        return NULL;
    }

    public function isAutenticated()
    {
        return $_SESSION['auth'] === true;
    }

    public function sess_destroy()
    {
        session_destroy();
    }
}
