-- MySQL dump 10.13  Distrib 8.0.31, for Linux (x86_64)
--
-- Host: localhost    Database: terraBattle
-- ------------------------------------------------------
-- Server version	8.0.31-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `characters`
--

DROP TABLE IF EXISTS `characters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `characters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(16) NOT NULL,
  `tier` varchar(2) NOT NULL,
  `weapon` varchar(8) DEFAULT NULL,
  `attribute` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `species` varchar(16) NOT NULL,
  `lambdaForm` int DEFAULT NULL,
  `originalForm` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `characters`
--

LOCK TABLES `characters` WRITE;
/*!40000 ALTER TABLE `characters` DISABLE KEYS */;
INSERT INTO `characters` VALUES (1,'36AIS','SS','Staff','Healing','Oxsecian',NULL,NULL),(2,'54B2','Z','Sword','null','Oxsecian',NULL,NULL),(3,'A\'merpact','A','Staff','Ice','Lizardfolk',4,NULL),(4,'A\'merpact ^','SS','Staff','Ice','Lizardfolk',NULL,3),(5,'A\'misandra','SS','Staff','Healing','Lizardfolk',6,NULL),(6,'A\'misandra ^','Z','Staff','Healing','Lizardfolk',NULL,5),(7,'Alika','S','Bow','Lightning','Human',8,NULL),(8,'Alika ^','Z','Sword','Lightning','Human',NULL,7),(9,'Amazora','B','Sword','Fire','Human',10,NULL),(10,'Amazora ^','Z','Sword','Fire','Human',NULL,9),(11,'Amimari','SS','Staff','Healing','Beastfolk',NULL,NULL),(12,'Amina','SS','Staff','Healing','Human',13,NULL),(13,'Amina ^','Z','Staff','Healing','Human',NULL,12),(14,'Andelucia','Z','Spear','Graviton','Beastfolk',15,NULL),(15,'Andelucia ^','Z','Spear','Graviton','Beastfolk',NULL,14),(16,'Annu','Z','Bow','Ice','Wild Beast',NULL,NULL),(17,'Arionne','Z','Staff','null','Human',NULL,NULL),(18,'Ashe','Z','Spear','Lunar','Human',NULL,NULL),(19,'Ba\'gunar','B','Sword','Lightning','Lizardfolk',20,NULL),(20,'Ba\'gunar ^','S','Sword','Photon','Lizardfolk',NULL,19),(21,'Bahamut','S','Staff','Fire','Dragon',22,NULL),(22,'Bahamut ^','Z','Staff','Fire','Dragon',NULL,21),(23,'Bahl','B','Sword','null','Human',24,NULL),(24,'Bahl ^','S','Sword','null','Human',NULL,23),(25,'Bajanna','SS','Spear','null','Beastfolk',NULL,NULL),(26,'Beau\'ne','Z','Sword','Photon','Lizardfolk',27,NULL),(27,'Beau\'ne ^','Z','Staff','Photon','Lizardfolk',NULL,26),(28,'Bonna','S','Staff','null','Beastfolk',29,NULL),(29,'Bonna ^','Z','Bow','null','Beastfolk',NULL,28),(30,'Burbaba','A','Bow','null','Beastfolk',31,NULL),(31,'Burbaba ^','SS','Sword','null','Beastfolk',NULL,30),(32,'Calista','S','Sword','null','Human',NULL,NULL),(33,'Camellia','SS','Spear','null','Human',34,NULL),(34,'Camellia ^','Z','Spear','null','Human',NULL,33),(35,'Captive Golem','S','Staff','null','Wild Beast',NULL,NULL),(36,'Chirol','Z','Staff','Graviton','Machine',NULL,NULL),(37,'Clara','SS','Spear','null','Human',38,NULL),(38,'Clara ^','Z','Spear','null','Human',NULL,37),(39,'Czekras','SS','Sword','Ice','Human',NULL,NULL),(40,'Daiana','A','Staff','Fire','Stonefolk',41,NULL),(41,'Daiana ^','Z','Staff','Fire','Stonefolk',NULL,40),(42,'Dahlia','Z','Sword','Lunar','Human',NULL,NULL),(43,'Djagos','Z','Staff','Fire','Human',NULL,NULL),(44,'Djugan','S','Spear','null','Human',45,NULL),(45,'Djugan ^','Z','Spear','null','Human',NULL,44),(46,'Dracorin','B','Bow','Lightning','Wild Beast',47,NULL),(47,'Dracorin ^','S','Bow','Lightning','Wild Beast',NULL,46),(48,'Echo','S','Staff','Remedy','Spirit',49,NULL),(49,'Echo ^','S','Staff','Remedy','Spirit',NULL,48),(50,'Edg\'low','Z','null','null','Lizardfolk',NULL,NULL),(51,'Eileen','A','Staff','Remedy','Human',52,NULL),(52,'Eileen ^','SS','Staff','Remedy','Human',NULL,51),(53,'Elga','Z','Sword','null','Wild Beast',NULL,NULL),(54,'Ella ^','Z','Staff','null','Human',NULL,NULL),(55,'Ellvern','S','Staff','Remedy','Human',56,NULL),(56,'Ellvern ^','Z','Staff','Remedy','Human',NULL,55),(57,'Engi','Z','Bow','null','Wild Beast',NULL,NULL),(58,'Feno','Z','Staff','Lunar','Oxsecian',59,NULL),(59,'Feno ^','Z','Staff','Lunar','Human',NULL,58),(60,'Gaiga','SS','Bow','Darkness','Beastfolk',NULL,58),(61,'Gatz','S','Sword','null','Human',62,NULL),(62,'Gatz ^','Z','Sword','null','Human',NULL,61),(63,'Gegonago','S','Staff','Remedy','Beastfolk',64,NULL),(64,'Gegonago ^','Z','Staff','Remedy','Beastfolk',63,NULL),(65,'Gigojago','B','Staff','Ice','Beastfolk',66,NULL),(66,'Gigojago ^','Z','Bow','null','Beastfolk',NULL,65),(67,'Ginny','Z','Bow','null','Beastfolk',68,NULL),(68,'Ginny ^','Z','Bow','null','Beastfolk',NULL,67),(69,'Grace','B','Bow','null','Human',70,NULL),(70,'Grace ^','S','Bow','null','Human',69,NULL),(71,'Gugba','SS','Sword','null','Beastfolk',NULL,NULL),(72,'Haggo','Z','Staff','Graviton','Beastfolk',NULL,NULL),(73,'Hakann','Z','Bow','Solar','Lizardfolk',NULL,NULL),(74,'Harold','A','Bow','null','Human',NULL,NULL),(75,'Haruhikari','Z','Staff','Healing','Human',NULL,NULL),(76,'Invincible','Z','Staff','null','Celestial',77,NULL),(77,'Invincible ^','Z','Staff','null','Celestial',NULL,77),(78,'Iskar','A','Bow','Photon','Wild Beast',NULL,NULL),(79,'Jade Dragon','A','Bow','Lightning','Dragon',NULL,NULL),(80,'Jag','SS','Staff','Fire','Wild Beast',NULL,NULL),(81,'Jaguna','B','Staff','Remedy','Beastfolk',82,NULL),(82,'Jaguna ^','Z','Spear','Remedy','Beastfolk',NULL,80);
/*!40000 ALTER TABLE `characters` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-15 12:39:07
