<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Usuarios_model extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
    }

    public function cargarRol()
    {
        if (permisosModulos('WEB_ADMIN')) {
            $sql = sprintf("SELECT ROLCOD, ROLDETALLE FROM suc_roles");
            $result = $this->db->query($sql);
            $resultado = $result->result_array();
            $result->free_result();
            $retorno = array();
            foreach ($resultado as $key) {
                array_push($retorno, array(
                    "ROLCOD" => $key['ROLCOD'],
                    "ROLDETALLE" => $key['ROLDETALLE']
                ));
            }
            $this->db->close();
            return $retorno;
        } else {
            $this->db->close();
            return array("msg" => "Usted no tiene permiso para realizar esta acción.", "success" => false);
        }
    }

    public function cargarRolDiferente($codRol)
    {
        if (permisosModulos('WEB_ADMIN')) {
            $sql = sprintf("SELECT ROLCOD, ROLDETALLE FROM suc_roles WHERE ROLCOD<>$codRol");
            $result = $this->db->query($sql);
            $resultado = $result->result_array();
            $result->free_result();
            $retorno = array();
            foreach ($resultado as $key) {
                array_push($retorno, array(
                    "ROLCOD" => $key['ROLCOD'],
                    "ROLDETALLE" => $key['ROLDETALLE']
                ));
            }
            $this->db->close();
            return $retorno;
        } else {
            return array("msg" => "Usted no tiene permiso para realizar esta acción.", "success" => false);
        }
    }

    public function editarRol($datos)
    {
        if (permisosModulos('WEB_ADMIN')) {
            if (count($datos) > 0) {
                $sql = sprintf(
                    "UPDATE `suc_roles` 
                SET `ROLDETALLE`= '%s' 
                WHERE ROLCOD = %s",
                    strtoupper(
                        trim(
                            $datos['nombreRolEditar']
                        )
                    ),
                    $datos['codRolEditar']
                );
                $result = $this->db->query($sql);
                $this->db->close();
                if ($result) {
                    return array("msg" => "información procesada correctamente.", "success" => true);
                } else {
                    return array("msg" => "Ocurrio un problema al procesar la información, intente nuevamente.", "success" => false);
                }
            }
            return array("msg" => "Ocurrio un problema al procesar la información, intente nuevamente.", "success" => false);
        } else {
            $this->db->close();
            return array("msg" => "Usted no tiene permiso para realizar esta acción.", "success" => false);
        }
    }

    public function eliminarRol($codRol)
    {
        if (permisosModulos('WEB_ADMIN')) {
            $sql = sprintf("DELETE FROM `suc_roles` WHERE ROLCOD = %s", $codRol);
            $result = $this->db->query($sql);
            $this->db->close();
            if ($result) {
                return array("msg" => "información procesada correctamente.", "success" => true);
            } else {
                return array("msg" => "Ocurrio un problema al procesar la información, intente nuevamente.", "success" => false);
            }
        } else {
            $this->db->close();
            return array("msg" => "Usted no tiene permiso para realizar esta acción.", "success" => false);
        }
    }

    public function cargarPermisosSeleccion($codRol)
    {
        if (permisosModulos('WEB_ADMIN')) {
            $sql = sprintf("SELECT P.PERCOD, P.PEROPCION 
                        FROM suc_permisos P
                        WHERE P.PERCOD NOT IN(SELECT R.PEROLPER
                                             FROM suc_per_rol R 
                                             	INNER JOIN suc_roles RR ON (RR.ROLCOD=R.PEROLROL)
                     WHERE RR.ROLCOD=$codRol)");
            $result = $this->db->query($sql);
            $resultado = $result->result_array();
            $result->free_result();
            $retorno = array();
            foreach ($resultado as $key) {
                array_push($retorno, array(
                    "PERCOD" => $key['PERCOD'],
                    "PEROPCION" => $key['PEROPCION']
                ));
            }
            $this->db->close();
            return $retorno;
        } else {
            return array("msg" => "Usted no tiene permiso para realizar esta acción.", "success" => false);
        }
    }

    public function insertarUsuario($datos)
    {
        if (permisosModulos('WEB_ADMIN')) {
            $sqlValidaUsuario = sprintf("SELECT USUCOD FROM suc_usuarios WHERE USUCEDULA='%s'", trim($datos['cedula']));
            $result = $this->db->query($sqlValidaUsuario);
            $resultadoValidaUsuario = $result->result_array();
            $result->free_result();
            if (count($resultadoValidaUsuario) > 0) {
                return array("msg" => "Este nombre de Usuario ya se encuentra en Sistema", "success" => false);
            }

            $sqlInserta = sprintf(
                "INSERT INTO `suc_usuarios`(
            `USUNOMBRE`,
            `USUAPELLIDO`,
            `USUCEDULA`,
            `USUEMAIL`,
            `USUTELEFONO`,
            `USUPASSWORD`,
            `USUESTADO`,
            `ROLCOD`
            ) VALUES (
                '%s',
                '%s',
                '%s',
                '%s',
                '%s',
                '%s',
                %s,
                %s
            )",
                strtoupper(
                    trim($datos['nombre'])
                ),
                strtoupper(
                    trim($datos['apellido'])
                ),
                trim($datos['cedula']),
                trim($datos['email']),
                trim($datos['telefono']),
                md5('123'),
                1,
                $datos['rol']
            );
            $result = $this->db->query($sqlInserta);
            $this->db->close();
            if ($result) {
                return array("msg" => "información procesada correctamente.", "success" => true);
            } else {
                return array("msg" => "Ocurrio un problema al procesar la información, intente nuevamente.", "success" => false);
            }
        } else {
            $this->db->close();
            return array("msg" => "Usted no tiene permiso para realizar esta acción.", "success" => false);
        }
    }

    public function cargarDatosUsuarios($codigo)
    {
        $sql = sprintf("SELECT USUCOD, USUNOMBRE, USUAPELLIDO, USUCEDUlA, USUEMAIL, USUTELEFONO, USUESTADO
                        FROM suc_usuarios 
                        WHERE USUCEDULA='$codigo'");
        $result = $this->db->query($sql);
        $resultado = $result->result_array();
        $result->free_result();
        $retorno = array();
        foreach ($resultado as $key) {
            array_push($retorno, array(
                "USUCOD" => $key['USUCOD'],
                "USUNOMBRE" => $key['USUNOMBRE'],
                "USUAPELLIDO" => $key['USUAPELLIDO'],
                "USUCEDUlA" => $key['USUCEDUlA'],
                "USUEMAIL" => $key['USUEMAIL'],
                "USUTELEFONO" => $key['USUTELEFONO'],
                "USUESTADO" => $key['USUESTADO'],
            ));
        }
        $this->db->close();
        return $retorno;
    }

    public function actualizarUsuario($datos)
    {
        $sql = sprintf(
            "UPDATE suc_usuarios SET 
                                USUNOMBRE='%s', 
                                USUAPELLIDO='%s', 
                                USUEMAIL='%s',
                                USUTELEFONO='%s'
                                WHERE USUCOD=%s",
            strtoupper(trim($datos['nombre'])),
            strtoupper(trim($datos['apellido'])),
            trim($datos['email']),
            trim($datos['telefono']),
            $datos['cod']
        );
        $result = $this->db->query($sql);
        $this->db->close();
        if ($result) {
            return array("msg" => "información procesada correctamente, inicie nuevamente.", "success" => true);
        } else {
            return array("msg" => "Ocurrio un problema al procesar la información, intente nuevamente.", "success" => false);
        }
    }

    public function cambiarClave($datos, $codigo)
    {
        $sqlValidaClave = sprintf(
            "SELECT USUPASSWORD, USUCOD 
                                    FROM suc_usuarios 
                                    WHERE USUCEDULA='$codigo' 
                                        AND USUPASSWORD='%s'",
            md5(trim($datos['actual']))
        );
        $result = $this->db->query($sqlValidaClave);
        $resultadoValidaClave = $result->result_array();
        $result->free_result();
        if (count($resultadoValidaClave) > 0) {
            $sqlActualiza = sprintf(
                "UPDATE suc_usuarios SET USUPASSWORD='%s' WHERE USUCOD=%s",
                md5(trim($datos['nueva'])),
                $resultadoValidaClave[0]['USUCOD']
            );
            $result = $this->db->query($sqlActualiza);
            if ($result) {
                return array("msg" => "información procesada correctamente.", "success" => true);
            } else {
                return array("msg" => "Ocurrio un problema al procesar la información, intente nuevamente.", "success" => false);
            }
        } else {
            return array("msg" => "La contrase&ntilde;a actual no coincide con la registrada en sistema", "success" => false);
        }
    }

    public function buscarUsuario($datos)
    {
        if (permisosModulos('WEB_ADMIN')) {
            $sql = sprintf(
                "SELECT USUCOD, USUNOMBRE, USUAPELLIDO, USUCEDUlA, USUEMAIL, USUTELEFONO 
                        FROM suc_usuarios 
                        WHERE USUCEDULA='%s'",
                trim($datos['cedula'])
            );
            $result = $this->db->query($sql);
            $resultado = $result->result_array();
            $result->free_result();
            $retorno = array();
            foreach ($resultado as $key) {
                array_push($retorno, array(
                    "USUCOD" => $key['USUCOD'],
                    "USUNOMBRE" => $key['USUNOMBRE'],
                    "USUAPELLIDO" => $key['USUAPELLIDO'],
                    "USUCEDUlA" => $key['USUCEDUlA'],
                    "USUEMAIL" => $key['USUEMAIL'],
                    "USUTELEFONO" => $key['USUTELEFONO']
                ));
            }
            $this->db->close();
            return $retorno;
        } else {
            return array("msg" => "Usted no tiene permiso para realizar esta acción.", "success" => false);
        }
    }

    public function restablacerClave($cod)
    {
        if (permisosModulos('WEB_ADMIN')) {
            $sql = sprintf(
                "UPDATE suc_usuarios SET USUPASSWORD='%s' WHERE USUCOD=%s",
                md5(trim('123')),
                $cod
            );
            $result = $this->db->query($sql);
            if ($result) {
                return array("msg" => "La contrase&ntilde;a del Usuario fue restablecida.", "success" => true);
            } else {
                return array("msg" => "Ocurrio un problema al procesar la información, intente nuevamente.", "success" => false);
            }
        } else {
            $this->db->close();
            return array("msg" => "Usted no tiene permiso para realizar esta acción.", "success" => false);
        }
    }

    public function insertarRol($datos)
    {
        if (permisosModulos('WEB_ADMIN')) {
            $sqlValidaRol = sprintf(
                "SELECT ROLCOD 
            FROM suc_roles 
            WHERE ROLDETALLE='%s'",
                strtoupper(trim($datos['nombreAgregarRol']))
            );
            $result = $this->db->query($sqlValidaRol);
            $resultadoValidaRol = $result->result_array();
            $result->free_result();
            if (count($resultadoValidaRol) > 0) {
                return array("msg" => "Este Rol ya se encuentra registrado", "success" => false);
            }

            $sqlInserta = sprintf(
                "INSERT INTO suc_roles(
                ROLDETALLE
            ) VALUES (
                '%s'
            )",
                strtoupper(
                    trim($datos['nombreAgregarRol'])
                )
            );
            $result = $this->db->query($sqlInserta);
            $this->db->close();
            if ($result) {
                return array("msg" => "información procesada correctamente.", "success" => true);
            } else {
                return array("msg" => "Ocurrio un problema al procesar la información, intente nuevamente.", "success" => false);
            }
        } else {
            $this->db->close();
            return array("msg" => "Usted no tiene permiso para realizar esta acción.", "success" => false);
        }
    }

    public function cargarPermisosRol($cod)
    {
        if (permisosModulos('WEB_ADMIN')) {
            $sql = sprintf("SELECT PR.PEROLCOD, P.PEROPCION, PR.PEROLROL
                        FROM suc_permisos P 
                        	INNER JOIN suc_per_rol PR ON PR.PEROLPER=P.PERCOD
                        WHERE PR.PEROLROL=$cod");
            $result = $this->db->query($sql);
            $resultado = $result->result_array();
            $result->free_result();
            $retorno = array();
            foreach ($resultado as $key) {
                array_push($retorno, array(
                    "PEROPCION" => $key['PEROPCION'],
                    "PEROLCOD" => $key['PEROLCOD'],
                    "ROL" => $cod
                ));
            }
            $this->db->close();
            return $retorno;
        } else {
            return array("msg" => "Usted no tiene permiso para realizar esta acción.", "success" => false);
        }
    }

    public function eliminarPermisoRol($cod)
    {
        if (permisosModulos('WEB_ADMIN')) {
            $sql = sprintf("DELETE FROM suc_per_rol WHERE PEROLCOD=$cod");
            $result = $this->db->query($sql);
            $this->db->close();
            if ($result) {
                return array("msg" => "información procesada correctamente.", "success" => true, "codRol" => $cod);
            } else {
                return array("msg" => "Ocurrio un problema al procesar la información, intente nuevamente.", "success" => false, "codRol" => $cod);
            }
        } else {
            $this->db->close();
            return array("msg" => "Usted no tiene permiso para realizar esta acción.", "success" => false);
        }
    }

    public function insertarPermisosRol($datos, $codRol)
    {
        if (permisosModulos('WEB_ADMIN')) {
            foreach ($datos as $key => $value) {
                if ($value != "" || $value != null) {
                    $sqlValidaPermiso = sprintf("SELECT PEROLROL FROM suc_per_rol WHERE PEROLPER=$value AND PEROLROL=$codRol");
                    $result = $this->db->query($sqlValidaPermiso);
                    $resultadoValidaPermiso = $result->result_array();
                    $result->free_result();
                    if (count($resultadoValidaPermiso) > 0) {
                    } else {
                        $sqlInserta = sprintf(
                            "INSERT INTO suc_per_rol(
                    PEROLPER,
                    PEROLROL,
                    PEROLESTADO
                    ) VALUES (
                        %s,
                        %s,
                        1
                    )",
                            $value,
                            $codRol
                        );
                        $result = $this->db->query($sqlInserta);
                    }
                }
            }
            $this->db->close();
            return array("msg" => "información procesada correctamente.", "success" => true, "codRol" => $codRol);
        } else {
            $this->db->close();
            return array("msg" => "Usted no tiene permiso para realizar esta acción.", "success" => false);
        }
    }

    public function cargarUsuarios()
    {
        if (permisosModulos('WEB_ADMIN')) {
            $sql = sprintf("SELECT U.USUCOD, U.USUNOMBRE, U.USUAPELLIDO, U.USUCEDULA, U.USUESTADO, U.ROLCOD, R.ROLDETALLE,
                        CASE 
                            WHEN U.USUESTADO = 1 THEN 'ACTIVO'
                            WHEN U.USUESTADO = 0 THEN 'INACTIVO'
                            ELSE 'NO DEFINIDO'
                        END AS ESTADOUSUARIO
                        FROM suc_usuarios U 
                            INNER JOIN suc_roles R ON (U.ROLCOD=R.ROLCOD)
                        WHERE USUESTADO IN (0,1)
                        ORDER BY U.USUESTADO DESC");
            $result = $this->db->query($sql);
            $resultado = $result->result_array();
            $result->free_result();
            $retorno = array();
            foreach ($resultado as $key) {
                array_push($retorno, array(
                    "USUCOD" => $key['USUCOD'],
                    "NOMBRE" => $key['USUNOMBRE'] . " " . $key["USUAPELLIDO"],
                    "USUCEDULA" => $key["USUCEDULA"],
                    "ROLCOD" => $key["ROLCOD"],
                    "ROLDETALLE" => $key["ROLDETALLE"],
                    "ESTADOUSUARIO" => $key["ESTADOUSUARIO"]
                ));
            }
            $this->db->close();
            return $retorno;
        } else {
            return array("msg" => "Usted no tiene permiso para realizar esta acción.", "success" => false);
        }
    }

    public function estadoUsuario($cod)
    {
        if (permisosModulos('WEB_ADMIN')) {
            $estado = 0;
            $sqlValiaEstado = sprintf("SELECT U.USUESTADO
                                        FROM suc_usuarios U 
                                        WHERE U.USUCOD=$cod");
            $result = $this->db->query($sqlValiaEstado);
            $resultadoValidaEstaddo = $result->result_array();
            $result->free_result();
            if ($resultadoValidaEstaddo[0]["USUESTADO"] == 0) {
                $estado = 1;
            }
            $sqlInserta = "UPDATE `suc_usuarios` SET `USUESTADO`= $estado WHERE USUCOD=$cod";
            $result = $this->db->query($sqlInserta);
            $this->db->close();
            if ($result) {
                return array("msg" => "información procesada correctamente.", "success" => true);
            } else {
                return array("msg" => "Ocurrio un problema al procesar la información, intente nuevamente.", "success" => false);
            }
        } else {
            $this->db->close();
            return array("msg" => "Usted no tiene permiso para realizar esta acción.", "success" => false);
        }
    }

    public function cambiarRol($datos)
    {
        if (permisosModulos('WEB_ADMIN')) {
            $sql = sprintf(
                "UPDATE suc_usuarios SET  
                                ROLCOD=%s
                                WHERE USUCOD=%s",
                $datos['sCambiarRol'],
                $datos['codEditarUsuario']
            );
            $result = $this->db->query($sql);
            $this->db->close();
            if ($result) {
                return array("msg" => "información procesada correctamente.", "success" => true);
            } else {
                return array("msg" => "Ocurrio un problema al procesar la información, intente nuevamente.", "success" => false);
            }
        } else {
            $this->db->close();
            return array("msg" => "Usted no tiene permiso para realizar esta acción.", "success" => false);
        }
    }

    public function cambiarUsuario($datos)
    {
        if (permisosModulos('WEB_ADMIN')) {
            $sqlValidarUsuario = sprintf(
                "SELECT USUCOD FROM suc_usuarios WHERE USUCEDULA='%s'",
                strtoupper(trim($datos['cambiarUsuarioCedula']))
            );
            $result = $this->db->query($sqlValidarUsuario);
            $resultadoValidaUsuario = $result->result_array();
            $result->free_result();
            if (count($resultadoValidaUsuario) > 0) {
                $this->db->close();
                return array("msg" => "Este nombre de Usuario ya se encuentra en Sistema", "success" => false);
            }

            $sql = sprintf(
                "UPDATE suc_usuarios SET  
                                USUCEDULA='%s'
                                WHERE USUCOD=%s",
                strtoupper(trim($datos['cambiarUsuarioCedula'])),
                $datos['codCambiarUsuario']
            );
            $result = $this->db->query($sql);
            $this->db->close();
            if ($result) {
                return array("msg" => "información procesada correctamente.", "success" => true);
            } else {
                return array("msg" => "Ocurrio un problema al procesar la información, intente nuevamente.", "success" => false);
            }
        } else {
            $this->db->close();
            return array("msg" => "Usted no tiene permiso para realizar esta acción.", "success" => false);
        }
    }
}
