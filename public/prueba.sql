-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 31-07-2022 a las 01:55:37
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
-- Base de datos: `prueba`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `areas`
--

CREATE TABLE `areas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `areas`
--

INSERT INTO `areas` (`id`, `nombre`) VALUES
(1, 'Administrativa y Financiera'),
(2, 'Ingeniería'),
(5, 'Desarrollo de Negocio'),
(6, 'Proyectos'),
(7, 'Servicios'),
(8, 'Calidad');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado`
--

CREATE TABLE `empleado` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `sexo` char(1) NOT NULL,
  `area_id` int(11) NOT NULL,
  `boletin` int(11) DEFAULT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `empleado`
--

INSERT INTO `empleado` (`id`, `nombre`, `email`, `sexo`, `area_id`, `boletin`, `descripcion`) VALUES
(12, 'HUGO ARMANDO', 'hugoescobarandrade@gmail.com', 'M', 2, 1, 'Hola');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado_rol`
--

CREATE TABLE `empleado_rol` (
  `empleado_id` int(11) NOT NULL,
  `rol_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `empleado_rol`
--

INSERT INTO `empleado_rol` (`empleado_id`, `rol_id`) VALUES
(12, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `nombre`) VALUES
(1, 'Desarrollador'),
(2, 'Analista'),
(3, 'Tester'),
(4, 'Diseñador'),
(5, 'Profesional PMO'),
(6, 'Profesional de servicios'),
(7, 'Auxiliar administrativo'),
(8, 'Codirector');

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
(5, 'WEB_ELIMINAR'),
(6, 'WEB_VENTAS');

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
(1, 'Prueba', 'Prueba', '123', '', '', '202cb962ac59075b964b07152d234b70', 2, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `areas`
--
ALTER TABLE `areas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD PRIMARY KEY (`id`),
  ADD KEY `area_id` (`area_id`);

--
-- Indices de la tabla `empleado_rol`
--
ALTER TABLE `empleado_rol`
  ADD KEY `empleado_id` (`empleado_id`),
  ADD KEY `rol_id` (`rol_id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `suc_permisos`
--
ALTER TABLE `suc_permisos`
  ADD PRIMARY KEY (`PERCOD`);

--
-- Indices de la tabla `suc_per_rol`
--
ALTER TABLE `suc_per_rol`
  ADD PRIMARY KEY (`PEROLCOD`),
  ADD KEY `PEROLPER` (`PEROLPER`),
  ADD KEY `PEROLROL` (`PEROLROL`);

--
-- Indices de la tabla `suc_roles`
--
ALTER TABLE `suc_roles`
  ADD PRIMARY KEY (`ROLCOD`);

--
-- Indices de la tabla `suc_usuarios`
--
ALTER TABLE `suc_usuarios`
  ADD PRIMARY KEY (`USUCOD`),
  ADD KEY `ROLCOD` (`ROLCOD`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `areas`
--
ALTER TABLE `areas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `empleado`
--
ALTER TABLE `empleado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `suc_permisos`
--
ALTER TABLE `suc_permisos`
  MODIFY `PERCOD` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `suc_per_rol`
--
ALTER TABLE `suc_per_rol`
  MODIFY `PEROLCOD` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `suc_roles`
--
ALTER TABLE `suc_roles`
  MODIFY `ROLCOD` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `suc_usuarios`
--
ALTER TABLE `suc_usuarios`
  MODIFY `USUCOD` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD CONSTRAINT `empleado_ibfk_1` FOREIGN KEY (`area_id`) REFERENCES `areas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `empleado_rol`
--
ALTER TABLE `empleado_rol`
  ADD CONSTRAINT `empleado_rol_ibfk_1` FOREIGN KEY (`empleado_id`) REFERENCES `empleado` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `empleado_rol_ibfk_2` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
