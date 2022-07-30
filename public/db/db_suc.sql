-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 23-06-2022 a las 00:13:43
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_suc`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suc_generos`
--

CREATE TABLE `suc_generos` (
  `GENCOD` smallint(6) NOT NULL,
  `GENDETALLE` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `suc_generos`
--

INSERT INTO `suc_generos` (`GENCOD`, `GENDETALLE`) VALUES
(1, 'INDEFINIDO'),
(2, 'FEMENINO'),
(3, 'MASCULINO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suc_inventarios`
--

CREATE TABLE `suc_inventarios` (
  `INVCOD` int(11) NOT NULL,
  `INVSALIDAS` int(11) NOT NULL DEFAULT '0',
  `INVENTRADAS` int(11) NOT NULL DEFAULT '0',
  `INVPROCOD` int(11) NOT NULL,
  `INVESTADO` smallint(6) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suc_inventarios_detalle`
--

CREATE TABLE `suc_inventarios_detalle` (
  `INVDETCOD` int(11) NOT NULL,
  `INVDETCANTIDADENT` int(11) NOT NULL,
  `INVDETCANTIDADSAL` int(11) NOT NULL,
  `INVDETVALORCOMPRA` decimal(10,0) NOT NULL,
  `INVDETVALORUNI` decimal(10,0) NOT NULL,
  `INVDETFECHA` date NOT NULL,
  `INVDETINVCOD` int(11) NOT NULL,
  `INVDETESTADO` smallint(6) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suc_lab`
--

CREATE TABLE `suc_lab` (
  `LABCOD` int(11) NOT NULL,
  `LABDETALLE` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `LABESTADO` smallint(6) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suc_permisos`
--

CREATE TABLE `suc_permisos` (
  `PERCOD` int(11) NOT NULL,
  `PEROPCION` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `suc_permisos`
--

INSERT INTO `suc_permisos` (`PERCOD`, `PEROPCION`) VALUES
(1, 'WEB_ADMIN'),
(2, 'WEB_INGRESAR'),
(3, 'WEB_ACTUALIZAR'),
(4, 'WEB_VISUALIZADOR'),
(5, 'WEB_ELIMINAR');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suc_personas`
--

CREATE TABLE `suc_personas` (
  `PERCOD` int(11) NOT NULL,
  `PERNOMBRES` varchar(50) NOT NULL,
  `PERAPELLIDOS` varchar(50) NOT NULL,
  `PERIDENTIFICACION` varchar(14) NOT NULL,
  `PERTIPOIDENTIFICACION` smallint(6) NOT NULL,
  `PERFECHANAC` date NOT NULL,
  `PERGENERO` smallint(6) NOT NULL,
  `PERTELEFONO` varchar(14) NOT NULL,
  `PERDIRECCION` varchar(50) NOT NULL,
  `PEREMAIL` varchar(50) NOT NULL,
  `PERTIPOPERSONA` smallint(6) NOT NULL,
  `PERESTADO` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suc_per_rol`
--

CREATE TABLE `suc_per_rol` (
  `PEROLCOD` int(11) NOT NULL,
  `PEROLPER` int(11) NOT NULL,
  `PEROLROL` int(11) NOT NULL,
  `PEROLESTADO` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `suc_per_rol`
--

INSERT INTO `suc_per_rol` (`PEROLCOD`, `PEROLPER`, `PEROLROL`, `PEROLESTADO`) VALUES
(1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suc_productos`
--

CREATE TABLE `suc_productos` (
  `PROCOD` int(11) NOT NULL,
  `PROCODIGODET` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `PRONOMBRE` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `PRODETALLE` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `PROLABCOD` int(11) NOT NULL,
  `PROESTADO` smallint(6) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suc_roles`
--

CREATE TABLE `suc_roles` (
  `ROLCOD` int(11) NOT NULL,
  `ROLDETALLE` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `suc_roles`
--

INSERT INTO `suc_roles` (`ROLCOD`, `ROLDETALLE`) VALUES
(1, 'ADMIN'),
(2, 'USUARIO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suc_tipos_documentos`
--

CREATE TABLE `suc_tipos_documentos` (
  `TIPCOD` smallint(6) NOT NULL,
  `TIPDETALLE` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `suc_tipos_documentos`
--

INSERT INTO `suc_tipos_documentos` (`TIPCOD`, `TIPDETALLE`) VALUES
(1, 'CEDULA'),
(2, 'EXTRANJERO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suc_tipo_personas`
--

CREATE TABLE `suc_tipo_personas` (
  `TIPPERCOD` smallint(6) NOT NULL,
  `TIPPERDETALLE` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `suc_tipo_personas`
--

INSERT INTO `suc_tipo_personas` (`TIPPERCOD`, `TIPPERDETALLE`) VALUES
(1, 'CLIENTE'),
(2, 'EMPLEADO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suc_usuarios`
--

CREATE TABLE `suc_usuarios` (
  `USUCOD` int(11) NOT NULL,
  `USUNOMBRE` varchar(60) NOT NULL,
  `USUAPELLIDO` varchar(60) NOT NULL,
  `USUCEDULA` varchar(20) NOT NULL,
  `USUEMAIL` varchar(50) NOT NULL,
  `USUTELEFONO` varchar(11) NOT NULL,
  `USUPASSWORD` varchar(100) NOT NULL,
  `USUESTADO` smallint(6) NOT NULL,
  `ROLCOD` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `suc_usuarios`
--

INSERT INTO `suc_usuarios` (`USUCOD`, `USUNOMBRE`, `USUAPELLIDO`, `USUCEDULA`, `USUEMAIL`, `USUTELEFONO`, `USUPASSWORD`, `USUESTADO`, `ROLCOD`) VALUES
(1, 'HUGO', 'ESCOBAR', '1140889031', 'hugoescobarandrade@gmail.com', '3164481251', '93c8930ab7ceb5da0128ce3ee90bd36d', 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suc_ventas`
--

CREATE TABLE `suc_ventas` (
  `VENCOD` int(11) NOT NULL,
  `VENFECHA` datetime NOT NULL,
  `VENREFERENCIA` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `VENNOMBRECLI` varchar(200) COLLATE utf8_spanish_ci DEFAULT NULL,
  `VENIDENTIFICACIONCLI` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `VENDIRECCION` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `VENMAIL` varchar(70) COLLATE utf8_spanish_ci DEFAULT NULL,
  `VENESTADO` smallint(6) NOT NULL DEFAULT '2',
  `VENESTADOPAGO` smallint(1) NOT NULL DEFAULT '0',
  `VENUSUCOD` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suc_ventas_detalle`
--

CREATE TABLE `suc_ventas_detalle` (
  `VENDETCOD` int(11) NOT NULL,
  `VENDETINVDETCOD` int(11) NOT NULL,
  `VENDETCANTIDAD` int(11) NOT NULL,
  `VENDETDESC` smallint(1) NOT NULL DEFAULT '0',
  `VENDETVALORDESC` smallint(2) NOT NULL DEFAULT '0',
  `VENDETVENCOD` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `suc_generos`
--
ALTER TABLE `suc_generos`
  ADD PRIMARY KEY (`GENCOD`);

--
-- Indices de la tabla `suc_inventarios`
--
ALTER TABLE `suc_inventarios`
  ADD PRIMARY KEY (`INVCOD`),
  ADD KEY `INVPROCOD` (`INVPROCOD`);

--
-- Indices de la tabla `suc_inventarios_detalle`
--
ALTER TABLE `suc_inventarios_detalle`
  ADD PRIMARY KEY (`INVDETCOD`),
  ADD KEY `INVDETINVCOD` (`INVDETINVCOD`);

--
-- Indices de la tabla `suc_lab`
--
ALTER TABLE `suc_lab`
  ADD PRIMARY KEY (`LABCOD`);

--
-- Indices de la tabla `suc_permisos`
--
ALTER TABLE `suc_permisos`
  ADD PRIMARY KEY (`PERCOD`);

--
-- Indices de la tabla `suc_personas`
--
ALTER TABLE `suc_personas`
  ADD PRIMARY KEY (`PERCOD`),
  ADD KEY `PERTIPOIDENTIFICACION` (`PERTIPOIDENTIFICACION`),
  ADD KEY `PERGENERO` (`PERGENERO`),
  ADD KEY `PERTIPOPERSONA` (`PERTIPOPERSONA`);

--
-- Indices de la tabla `suc_per_rol`
--
ALTER TABLE `suc_per_rol`
  ADD PRIMARY KEY (`PEROLCOD`),
  ADD KEY `PEROLPER` (`PEROLPER`),
  ADD KEY `PEROLROL` (`PEROLROL`);

--
-- Indices de la tabla `suc_productos`
--
ALTER TABLE `suc_productos`
  ADD PRIMARY KEY (`PROCOD`),
  ADD KEY `PROLABCOD` (`PROLABCOD`);

--
-- Indices de la tabla `suc_roles`
--
ALTER TABLE `suc_roles`
  ADD PRIMARY KEY (`ROLCOD`);

--
-- Indices de la tabla `suc_tipos_documentos`
--
ALTER TABLE `suc_tipos_documentos`
  ADD PRIMARY KEY (`TIPCOD`);

--
-- Indices de la tabla `suc_tipo_personas`
--
ALTER TABLE `suc_tipo_personas`
  ADD PRIMARY KEY (`TIPPERCOD`);

--
-- Indices de la tabla `suc_usuarios`
--
ALTER TABLE `suc_usuarios`
  ADD PRIMARY KEY (`USUCOD`),
  ADD KEY `ROLCOD` (`ROLCOD`);

--
-- Indices de la tabla `suc_ventas`
--
ALTER TABLE `suc_ventas`
  ADD PRIMARY KEY (`VENCOD`),
  ADD KEY `VENUSUCOD` (`VENUSUCOD`);

--
-- Indices de la tabla `suc_ventas_detalle`
--
ALTER TABLE `suc_ventas_detalle`
  ADD PRIMARY KEY (`VENDETCOD`),
  ADD KEY `VENDETINVDETCOD` (`VENDETINVDETCOD`),
  ADD KEY `VENDETVENCOD` (`VENDETVENCOD`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `suc_generos`
--
ALTER TABLE `suc_generos`
  MODIFY `GENCOD` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `suc_inventarios`
--
ALTER TABLE `suc_inventarios`
  MODIFY `INVCOD` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `suc_inventarios_detalle`
--
ALTER TABLE `suc_inventarios_detalle`
  MODIFY `INVDETCOD` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `suc_lab`
--
ALTER TABLE `suc_lab`
  MODIFY `LABCOD` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `suc_permisos`
--
ALTER TABLE `suc_permisos`
  MODIFY `PERCOD` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `suc_personas`
--
ALTER TABLE `suc_personas`
  MODIFY `PERCOD` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `suc_per_rol`
--
ALTER TABLE `suc_per_rol`
  MODIFY `PEROLCOD` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `suc_productos`
--
ALTER TABLE `suc_productos`
  MODIFY `PROCOD` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `suc_roles`
--
ALTER TABLE `suc_roles`
  MODIFY `ROLCOD` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `suc_tipos_documentos`
--
ALTER TABLE `suc_tipos_documentos`
  MODIFY `TIPCOD` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `suc_tipo_personas`
--
ALTER TABLE `suc_tipo_personas`
  MODIFY `TIPPERCOD` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `suc_usuarios`
--
ALTER TABLE `suc_usuarios`
  MODIFY `USUCOD` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `suc_ventas`
--
ALTER TABLE `suc_ventas`
  MODIFY `VENCOD` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `suc_ventas_detalle`
--
ALTER TABLE `suc_ventas_detalle`
  MODIFY `VENDETCOD` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `suc_inventarios`
--
ALTER TABLE `suc_inventarios`
  ADD CONSTRAINT `suc_inventarios_ibfk_1` FOREIGN KEY (`INVPROCOD`) REFERENCES `suc_productos` (`PROCOD`);

--
-- Filtros para la tabla `suc_inventarios_detalle`
--
ALTER TABLE `suc_inventarios_detalle`
  ADD CONSTRAINT `suc_inventarios_detalle_ibfk_1` FOREIGN KEY (`INVDETINVCOD`) REFERENCES `suc_inventarios` (`INVCOD`);

--
-- Filtros para la tabla `suc_personas`
--
ALTER TABLE `suc_personas`
  ADD CONSTRAINT `Suc_personas_ibfk_1` FOREIGN KEY (`PERTIPOIDENTIFICACION`) REFERENCES `suc_tipos_documentos` (`TIPCOD`),
  ADD CONSTRAINT `Suc_personas_ibfk_2` FOREIGN KEY (`PERGENERO`) REFERENCES `suc_generos` (`GENCOD`),
  ADD CONSTRAINT `Suc_personas_ibfk_3` FOREIGN KEY (`PERTIPOPERSONA`) REFERENCES `suc_tipo_personas` (`TIPPERCOD`);

--
-- Filtros para la tabla `suc_per_rol`
--
ALTER TABLE `suc_per_rol`
  ADD CONSTRAINT `Suc_per_rol_ibfk_1` FOREIGN KEY (`PEROLROL`) REFERENCES `suc_roles` (`ROLCOD`),
  ADD CONSTRAINT `Suc_per_rol_ibfk_2` FOREIGN KEY (`PEROLPER`) REFERENCES `suc_permisos` (`PERCOD`);

--
-- Filtros para la tabla `suc_usuarios`
--
ALTER TABLE `suc_usuarios`
  ADD CONSTRAINT `Suc_usuarios_ibfk_1` FOREIGN KEY (`ROLCOD`) REFERENCES `suc_roles` (`ROLCOD`);

--
-- Filtros para la tabla `suc_ventas`
--
ALTER TABLE `suc_ventas`
  ADD CONSTRAINT `suc_ventas_ibfk_1` FOREIGN KEY (`VENUSUCOD`) REFERENCES `suc_usuarios` (`USUCOD`);

--
-- Filtros para la tabla `suc_ventas_detalle`
--
ALTER TABLE `suc_ventas_detalle`
  ADD CONSTRAINT `suc_ventas_detalle_ibfk_1` FOREIGN KEY (`VENDETVENCOD`) REFERENCES `suc_ventas` (`VENCOD`),
  ADD CONSTRAINT `suc_ventas_detalle_ibfk_2` FOREIGN KEY (`VENDETINVDETCOD`) REFERENCES `suc_inventarios_detalle` (`INVDETCOD`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
