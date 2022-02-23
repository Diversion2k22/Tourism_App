-- Adminer 4.8.1 MySQL 10.3.32-MariaDB-0ubuntu0.20.04.1 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `city`;
CREATE TABLE `city` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `city` (`id`, `name`) VALUES
(1,	'Kolkata');

DROP TABLE IF EXISTS `events`;
CREATE TABLE `events` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `spot_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `open_time` time NOT NULL,
  `close_time` time NOT NULL,
  `tags` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `spots`;
CREATE TABLE `spots` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `city_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `open_time` time NOT NULL,
  `close_time` time NOT NULL,
  `avg_time` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `tags` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `city_id` (`city_id`),
  CONSTRAINT `spots_ibfk_1` FOREIGN KEY (`city_id`) REFERENCES `city` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `spots` (`ID`, `city_id`, `name`, `open_time`, `close_time`, `avg_time`, `description`, `tags`) VALUES
(1,	1,	'Victoria Memorial',	'05:30:00',	'06:15:00',	'1-2 hours',	'',	''),
(2,	1,	'St. Paul\'s Cathedral Church',	'09:00:00',	'06:00:00',	'1 hour',	'',	''),
(3,	1,	'Princep Ghat',	'00:00:00',	'24:00:00',	'1 - 2 hours',	'',	''),
(7,	1,	'Belur Math',	'06:00:00',	'21:00:00',	'2 - 3 hours',	'',	''),
(8,	1,	'Howrah Bridge',	'00:00:00',	'24:00:00',	'1 - 2 hours',	'',	''),
(9,	1,	'Birla Planetarium',	'00:00:00',	'00:00:00',	'1-1.5 Hours',	'',	''),
(10,	1,	'Dakshineshwar Kali temple',	'06:00:00',	'20:30:00',	'2:00',	'',	'');

-- 2022-02-23 13:04:05
