DROP DATABASE `bobastic`;
CREATE DATABASE IF NOT EXISTS `bobastic`; 
USE `bobastic`;

CREATE TABLE IF NOT EXISTS `Customer_List` (
  `Customer_Suki_ID` char(100),
  `First_Name` char(50),
  `Last_Name` char(50),
  `Email` char(50),
  `Address` char(100),
  `Phone_Number` char(50),
  `Points` int,
  KEY `Primary Key` (`Customer_Suki_ID`)
);

CREATE TABLE IF NOT EXISTS `Order_List` (
  `Order_Number` char(50),
  `Product_Code` char(15),
  `Quantity` int,
  `Total_Cost` float,
  `Date` int,
  
  KEY `Primary Key` (`Order_Number`)
);

CREATE TABLE IF NOT EXISTS `Customer_Order` (
  `Customer_Suki_ID` char(100),
  `Order_Number` char(100),
  FOREIGN KEY (`Order_Number`) REFERENCES `Order_List`(`Order_Number`),
  FOREIGN KEY (`Customer_Suki_ID`) REFERENCES `Customer_List`(`Customer_Suki_ID`),
  KEY `Composite Key` (`Customer_Suki_ID`, `Order_Number`)
);

CREATE TABLE IF NOT EXISTS `Product_List` (
  `Product_Code` char(50),
  `Product_Name` char(100),
  `Size` char(10),
  `Cost` float,
  KEY `Primary Key` (`Product_Code`)
);


