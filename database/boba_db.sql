CREATE DATABASE IF NOT EXISTS `bobastic`; 
USE `bobastic`;

CREATE TABLE IF NOT EXISTS `Order_List` (
  `Order_Number` char(50),
  `Date` int,
  `Total_Cost` int,
  `Status` char(50),
  KEY `Primary Key` (`Order_Number`)
);
CREATE TABLE IF NOT EXISTS `Customer_List` (
  `Customer_Suki_ID` char(100),
  `First_Name` char(50),
  `Last_Name` char(50),
  `Email` char(50),
  `Address` char(100),
  `Phone_Number` int,
  `Points` int,
  KEY `Primary Key` (`Customer_Suki_ID`)
);

CREATE TABLE IF NOT EXISTS `Product_Image` (
  `Product_Name` char(100),
  KEY `Primary Key` (`Product_Name`)
);

CREATE TABLE IF NOT EXISTS `Product_List` (
  `Product_Code` char(50),
  `Product_Name` char(100),
  `Size` char(10),
  `Cost` float (3, 2),
  FOREIGN KEY (`Product_Name`) REFERENCES `Product_Image`(`Product_Name`),
  KEY `Primary Key` (`Product_Code`),
  KEY `Foreign Key` (`Product_Name`)
);

CREATE TABLE IF NOT EXISTS `Customer_Order` (
  `Customer_Suki_ID` char(100),
  `Product_Code` char(50),
  `Order_Number` char(100),
  `Quantity` int,
  FOREIGN KEY (`Order_Number`) REFERENCES `Order_List`(`Order_Number`),
  FOREIGN KEY (`Customer_Suki_ID`) REFERENCES `Customer_List`(`Customer_Suki_ID`),
  FOREIGN KEY (`Product_Code`) REFERENCES `Product_List`(`Product_Code`),
  KEY `Composite Key` (`Customer_Suki_ID`, `Product_Code`, `Order_Number`)
);


