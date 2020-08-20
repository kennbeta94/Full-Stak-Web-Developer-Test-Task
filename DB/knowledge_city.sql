-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 20-08-2020 a las 21:13:58
-- Versión del servidor: 10.4.10-MariaDB
-- Versión de PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `knowledge_city`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `api_users`
--

DROP TABLE IF EXISTS `api_users`;
CREATE TABLE IF NOT EXISTS `api_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(15) NOT NULL,
  `password` varchar(200) NOT NULL,
  `token` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `api_users`
--

INSERT INTO `api_users` (`id`, `user`, `password`, `token`) VALUES
(1, 'kennbeta94', '413c62838ec2b0c5a1f1f5088dbdf4f7b3dac5e94d278a67aeee673911c0edaca7e3966efc170df6110e0ca3e7af51fa240f48456502de36f748bd72496a4849', 'bdffb7f9256475a007fd38725197306c0f1352b22da1e768b022af4c6c240c74f9a6d629c235d45de1efeb3162ba511bab0fcea83d1be2c4651e06d50f5ef726');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `students`
--

DROP TABLE IF EXISTS `students`;
CREATE TABLE IF NOT EXISTS `students` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(15) NOT NULL,
  `name` varchar(50) NOT NULL,
  `group_name` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `students`
--

INSERT INTO `students` (`id`, `user`, `name`, `group_name`) VALUES
(1, 'kctest00202', 'Bernardo Santini', 'Default Group'),
(2, 'kctest00213', 'George Quebedo', 'Default Group'),
(3, 'kctest00208', 'Rob Shnneider', 'Default Group'),
(4, 'kctest00220', 'Terry Cruz', 'Default Group'),
(5, 'kctest00209', 'David Smith', 'Default Group'),
(6, 'kctest00215', 'Armando Beristain', 'Default Group'),
(7, 'kctest00235', 'Alberth Frank', 'Default Group'),
(8, 'kctest00223', 'Joseph Krin', 'Default Group'),
(9, 'kctest00218', 'Charles Kent', 'Default Group'),
(10, 'kctest00221', 'Simons Free', 'Default Group');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
