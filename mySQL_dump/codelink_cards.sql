-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: codelink
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cards`
--

DROP TABLE IF EXISTS `cards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cards` (
  `id_cards` int NOT NULL AUTO_INCREMENT,
  `term` varchar(250) DEFAULT NULL,
  `definition` varchar(250) DEFAULT NULL,
  `Deck_id_deck` int(10) unsigned zerofill NOT NULL,
  `step` int DEFAULT '0',
  `due_date` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_cards`),
  KEY `fk_Cards_Deck_idx` (`Deck_id_deck`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cards`
--

LOCK TABLES `cards` WRITE;
/*!40000 ALTER TABLE `cards` DISABLE KEYS */;
INSERT INTO `cards` VALUES (1,'Integral','Area under the curve for function f(x).',0000000000,0,'2020-10-13 20:42:59'),(2,'Deritive','Rate of change of function with respect to x',0000000000,0,'2020-10-13 20:52:41'),(3,'Hello','Hello',0000000000,0,'2020-10-13 21:21:24'),(4,'Hello','Hello',0000000000,0,'2020-10-13 21:21:35'),(5,'Math','idk',0000000000,0,'2020-10-13 21:31:29'),(6,'English','Running',0000000000,1,'2020-10-14 02:34:12'),(7,'Science','100%',0000000001,0,'2020-10-14 02:45:23'),(8,'string',NULL,0000000009,0,'2020-10-14 14:46:26'),(9,'string','string',0000000009,0,'2020-10-14 14:46:48'),(10,'dd','d',0000000001,0,'2020-10-17 15:29:37'),(11,'dd','d',0000000001,0,'2020-10-17 15:29:40'),(12,'33','5',0000000001,0,'2020-10-17 16:00:24'),(13,'33','5',0000000001,0,'2020-10-17 16:49:34'),(14,'33','5',0000000001,0,'2020-10-17 16:49:34'),(15,'33','5',0000000001,0,'2020-10-17 16:49:38'),(16,'33','5',0000000001,0,'2020-10-17 16:49:38'),(17,'33','5',0000000001,0,'2020-10-17 16:49:38'),(18,'33','5',0000000001,0,'2020-10-17 16:49:40'),(19,'33','5',0000000001,0,'2020-10-17 16:49:40'),(20,'33','5',0000000001,0,'2020-10-17 16:49:40'),(21,'33','5',0000000001,0,'2020-10-17 16:49:41'),(22,'Algebra','The mathematics of working with variables',0000000011,0,'2020-10-17 19:55:10'),(23,'Bisect','Cut into two equal halves',0000000011,0,'2020-10-17 19:55:47'),(24,'Hexagon','A polygon with six sides',0000000011,0,'2020-10-17 19:56:35'),(25,'Mean','The average of a set of numbers',0000000011,0,'2020-10-17 19:57:17'),(26,'Injured','To be harmed by something',0000000012,0,'2020-10-17 19:58:21'),(27,'Sedentary','Not taking part in physical activity',0000000012,0,'2020-10-17 19:58:52'),(28,'Empathy','The ability to understand another person\'s feelings',0000000012,0,'2020-10-17 19:59:24'),(29,'Carbohydrates','Energy-giving nutrients including fiber, sugars, and starches',0000000012,0,'2020-10-17 20:00:50'),(30,'¡Bienvenido!','Welcome!',0000000013,0,'2020-10-17 20:01:38'),(31,'¿Cómo estás?','How are you?',0000000013,0,'2020-10-17 20:02:00'),(32,'Por favor','Please',0000000013,0,'2020-10-17 20:02:12'),(33,'No entiendo','I don’t understand!',0000000013,0,'2020-10-17 20:02:35'),(34,'¿Como te llamas?','What is your name?',0000000013,0,'2020-10-17 20:02:54'),(35,'¿Qué hora tienes?','What time is it?',0000000013,0,'2020-10-17 20:03:06');
/*!40000 ALTER TABLE `cards` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-17 21:01:52
