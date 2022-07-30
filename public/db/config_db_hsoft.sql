TRUNCATE TABLE suc_ventas_detalle;
TRUNCATE TABLE suc_ventas;
TRUNCATE TABLE suc_inventarios_detalle;
TRUNCATE TABLE suc_inventarios;
TRUNCATE TABLE suc_productos;
TRUNCATE TABLE suc_lab;
TRUNCATE TABLE suc_generos;
TRUNCATE TABLE suc_permisos;
TRUNCATE TABLE suc_per_rol;
TRUNCATE TABLE suc_roles;
TRUNCATE TABLE suc_tipos_documentos;
TRUNCATE TABLE suc_tipo_personas;
TRUNCATE TABLE suc_tipos_documentos;
TRUNCATE TABLE suc_tipos_documentos;
TRUNCATE TABLE suc_usuarios;

ALTER TABLE suc_ventas_detalle AUTO_INCREMENT=1;
ALTER TABLE suc_ventas AUTO_INCREMENT=1;
ALTER TABLE suc_inventarios_detalle AUTO_INCREMENT=1;
ALTER TABLE suc_inventarios AUTO_INCREMENT=1;
ALTER TABLE suc_productos AUTO_INCREMENT=1;
ALTER TABLE suc_lab AUTO_INCREMENT=1;
ALTER TABLE suc_generos AUTO_INCREMENT=1;
ALTER TABLE suc_permisos AUTO_INCREMENT=1;
ALTER TABLE suc_per_rol AUTO_INCREMENT=1;
ALTER TABLE suc_roles AUTO_INCREMENT=1;
ALTER TABLE suc_tipos_documentos AUTO_INCREMENT=1;
ALTER TABLE suc_tipo_personas AUTO_INCREMENT=1;
ALTER TABLE suc_tipos_documentos AUTO_INCREMENT=1;
ALTER TABLE suc_tipos_documentos AUTO_INCREMENT=1;
ALTER TABLE suc_usuarios AUTO_INCREMENT=1;

INSERT INTO `suc_generos` (`GENDETALLE`) VALUES
('INDEFINIDO'),
('FEMENINO'),
('MASCULINO');

INSERT INTO `suc_permisos` (`PEROPCION`) VALUES
('WEB_ADMIN'),
('WEB_INGRESAR'),
('WEB_ACTUALIZAR'),
('WEB_VISUALIZADOR'),
('WEB_ELIMINAR');
('WEB_VENTAS');

INSERT INTO `suc_roles` (`ROLDETALLE`) VALUES
('ADMIN'),
('USUARIO');

INSERT INTO `suc_per_rol` (`PEROLPER`, `PEROLROL`, `PEROLESTADO`) VALUES
(1, 1, 1);

INSERT INTO `suc_tipos_documentos` (`TIPDETALLE`) VALUES
('CEDULA'),
('EXTRANJERO');

INSERT INTO `suc_tipo_personas` (`TIPPERDETALLE`) VALUES
('CLIENTE'),
('EMPLEADO');

INSERT INTO `suc_usuarios` (`USUNOMBRE`, `USUAPELLIDO`, `USUCEDULA`, `USUEMAIL`, `USUTELEFONO`, `USUPASSWORD`, `USUESTADO`, `ROLCOD`) VALUES
('HUGO', 'ESCOBAR', '1140889031', 'hugoescobarandrade@gmail.com', '3164481251', '93c8930ab7ceb5da0128ce3ee90bd36d', 2, 1);


 