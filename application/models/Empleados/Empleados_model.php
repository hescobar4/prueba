<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Empleados_model extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
    }

    public function cargarArea($codArea)
    {
        if ($codArea == 0) {
            $sql = sprintf("SELECT A.id, A.nombre FROM areas A");
        } else {
            $sql = sprintf("SELECT A.id, A.nombre FROM areas A WHERE A.id <> %s", $codArea);
        }
        $result = $this->db->query($sql);
        $resultado = $result->result_array();
        $result->free_result();
        $this->db->close();
        return $resultado;
    }

    public function cargarRoles($codEmpleado)
    {
        if ($codEmpleado == 0) {
            $sql = sprintf("SELECT R.id , R.nombre FROM roles R");
            $result = $this->db->query($sql);
            $resultado = $result->result_array();
            $result->free_result();
            $this->db->close();
            return $resultado;
        } else {
            //Consultada de roles de un empleado y roles guardar en el sistema que no pertenecen al empleado
            $sqlRolesEmpleado = sprintf("SELECT R.id , R.nombre 
                            FROM roles R
                                INNER JOIN empleado_rol ER ON (ER.rol_id=R.id)
                            WHERE ER.empleado_id = $codEmpleado");
            $result = $this->db->query($sqlRolesEmpleado);
            $resultadoRolesEmpleado = $result->result_array();
            $result->free_result();

            $sql = sprintf("SELECT R.id , R.nombre FROM roles R");
            $result = $this->db->query($sql);
            $resultadoRoles = $result->result_array();
            $result->free_result();
            $this->db->close();
            return array("rolesEmpleado" => $resultadoRolesEmpleado, "roles" => $resultadoRoles);
        }
    }

    public function guardarEmpleado($datosFormulario, $datosRoles)
    {
        //Validacion de datos lado del Servidor
        if (trim($datosFormulario['textNombre']) == "" || trim($datosFormulario['textNombre']) == null) {
            $this->db->close();
            return array("msg" => "Por favor, complete el campo Nombre.", "success" => "false");
        }
        if (trim($datosFormulario['textEmail']) == "" || trim($datosFormulario['textEmail']) == null) {
            $this->db->close();
            return array("msg" => "Por favor, complete el campo Correo eletrónico.", "success" => "false");
        }
        if (trim($datosFormulario['textDescripcion']) == "" || trim($datosFormulario['textDescripcion']) == null) {
            $this->db->close();
            return array("msg" => "Por favor, complete el campo Descripción.", "success" => "false");
        }
        if (trim($datosFormulario['radioSexo']) == "" || trim($datosFormulario['radioSexo']) == null) {
            $this->db->close();
            return array("msg" => "Por favor, complete el campo Sexo.", "success" => "false");
        }
        if (trim($datosFormulario['sArea']) == "" || trim($datosFormulario['sArea']) == null) {
            $this->db->close();
            return array("msg" => "Por favor, complete el campo Area.", "success" => "false");
        }
        if (count($datosRoles) <= 0) {
            $this->db->close();
            return array("msg" => "Por favor, seleccione al menos 1 Rol.", "success" => "false");
        }

        //Si el codigoEmpleado es 0 el sistema intentara ingresar un nuevo Empleado si no, el sistema editara un Empleado
        if ($datosFormulario['codigoEmpleado'] == 0) {
            //Validar si existe un empleado con el mimos Nombre y Correo electronico
            $sqlValidaExiste = sprintf(
                "SELECT E.id 
                FROM empleado E
                WHERE E.nombre = '%s'
                    AND E.email = '%s'
                    AND E.sexo = '%s'
                    AND E.area_id = %s",
                trim(strtoupper($datosFormulario['textNombre'])),
                trim($datosFormulario['textEmail']),
                ($datosFormulario['radioSexo'] == 1) ? "M" : "F",
                $datosFormulario['sArea']
            );
            $result = $this->db->query($sqlValidaExiste);
            $resultadoValidaExiste = $result->result_array();
            $result->free_result();
            if (count($resultadoValidaExiste) > 0) {
                $this->db->close();
                return array("msg" => "Ya existe un Empleado con el mismo Nombre y Correo.", "success" => false);
            } else {
                $this->db->trans_begin();
                $sqlInsertarEmpleado = sprintf(
                    "INSERT INTO `empleado`(
                    `nombre`, 
                    `email`, 
                    `sexo`, 
                    `area_id`, 
                    `boletin`, 
                    `descripcion`) VALUES (
                        '%s',
                        '%s',
                        '%s',
                        %s,
                        %s,
                        '%s'
                    )",
                    trim(strtoupper($datosFormulario['textNombre'])),
                    trim($datosFormulario['textEmail']),
                    ($datosFormulario['radioSexo'] == 1) ? "M" : "F",
                    $datosFormulario['sArea'],
                    ($datosFormulario['checkBoletin'] == 0) ? 0 : 1,
                    trim($datosFormulario['textDescripcion'])
                );
                $this->db->query($sqlInsertarEmpleado);

                $sqlConsultaCodEmpleado = sprintf(
                    "SELECT E.id 
                        FROM empleado E
                        WHERE E.nombre = '%s'
                            AND E.email = '%s'
                            AND E.sexo = '%s'
                            AND E.area_id = %s",
                    trim(strtoupper($datosFormulario['textNombre'])),
                    trim($datosFormulario['textEmail']),
                    ($datosFormulario['radioSexo'] == 1) ? "M" : "F",
                    $datosFormulario['sArea']
                );
                $result = $this->db->query($sqlConsultaCodEmpleado);
                $resultadoConsultaCodEmpleado = $result->result_array();
                $result->free_result();
                if (count($resultadoConsultaCodEmpleado) > 0) {
                    for ($i = 0; $i < count($datosRoles); $i++) {
                        $sqlInsertaRol = sprintf(
                            "INSERT INTO `empleado_rol`(
                                `empleado_id`, 
                                `rol_id`) VALUES (
                                    %s,
                                    %s
                                )",
                            $resultadoConsultaCodEmpleado[0]['id'],
                            $datosRoles[$i]
                        );
                        $this->db->query($sqlInsertaRol);
                    }
                }
                if ($this->db->trans_status() === FALSE) {
                    $this->db->trans_rollback();
                    return array(
                        "success" => false,
                        "msg" => "Error interno, contacte al departamento de sistemas"
                    );
                }
                $this->db->trans_commit();
                $this->db->close();
                return array(
                    "success" => true,
                    "msg" => "Empleado ingresado correctamente."
                );
            }
        } else {
            $this->db->trans_begin();
            $sqlActualiza = sprintf(
                "UPDATE `empleado` SET 
                `nombre`='%s',
                `email`='%s',
                `sexo`='%s',
                `area_id`=%s,
                `boletin`=%s,
                `descripcion`='%s' 
            WHERE id=%s",
                trim(strtoupper($datosFormulario['textNombre'])),
                trim($datosFormulario['textEmail']),
                ($datosFormulario['radioSexo'] == 1) ? "M" : "F",
                $datosFormulario['sArea'],
                ($datosFormulario['checkBoletin'] == 0) ? 0 : 1,
                trim($datosFormulario['textDescripcion']),
                $datosFormulario['codigoEmpleado']
            );
            $this->db->query($sqlActualiza);

            $sqlEliminaRoles = sprintf("DELETE FROM `empleado_rol` WHERE empleado_id=%s", $datosFormulario['codigoEmpleado']);
            $this->db->query($sqlEliminaRoles);

            for ($i = 0; $i < count($datosRoles); $i++) {
                $sqlInsertaRol = sprintf(
                    "INSERT INTO `empleado_rol`(
                            `empleado_id`, 
                            `rol_id`) VALUES (
                                %s,
                                %s
                            )",
                    $datosFormulario['codigoEmpleado'],
                    $datosRoles[$i]
                );
                $this->db->query($sqlInsertaRol);
            }
            if ($this->db->trans_status() === FALSE) {
                $this->db->trans_rollback();
                return array(
                    "success" => false,
                    "msg" => "Error interno, contacte al departamento de sistemas"
                );
            }
            $this->db->trans_commit();
            $this->db->close();
            return array(
                "success" => true,
                "msg" => "Información actualizada correctamente."
            );
        }
    }

    public function cargarEmpleados()
    {
        $sql = sprintf('SELECT E.id, E.nombre, E.email, A.id AS areaCod, A.nombre AS areaNombre, E.sexo, E.boletin, E.descripcion,
        CASE 
            WHEN E.sexo = "M" THEN "Masculino"
            WHEN E.sexo = "F" THEN "Femenino"
        END 
        AS descripcionSexo,
        CASE 
            WHEN E.boletin = 1 THEN "Si"
            WHEN E.boletin = 0 THEN "No"
        END 
        AS descripcionBoletin 
        FROM empleado E
            INNER JOIN areas A ON (A.id=E.area_id)');
        $result = $this->db->query($sql);
        $resultado = $result->result_array();
        $result->free_result();
        return $resultado;
    }

    public function eliminarEmpleado($codEmpleado)
    {
        $this->db->trans_begin();

        $sqlEliminaRoles = sprintf("DELETE FROM `empleado_rol` WHERE empleado_id=%s", $codEmpleado);
        $this->db->query($sqlEliminaRoles);

        $sqlEliminaRoles = sprintf("DELETE FROM `empleado` WHERE id=%s", $codEmpleado);
        $this->db->query($sqlEliminaRoles);

        if ($this->db->trans_status() === FALSE) {
            $this->db->trans_rollback();
            return array(
                "success" => false,
                "msg" => "Error interno, contacte al departamento de sistemas"
            );
        }

        $this->db->trans_commit();
        $this->db->close();
        return array(
            "success" => true,
            "msg" => "Empleado eliminado correctamente."
        );
    }
}
