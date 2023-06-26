USE `bobastic`;

INSERT INTO customer_list (Customer_Suki_ID, First_Name, Last_Name, Email, Address, Phone_Number, Points) 
VALUES 
	('BOBA_001', 'Dunn Dexter', 'Lahaylahay', 'ddl@gmail.com', 'Cebu City', '09987654321', '150'),
    ('BOBA_002', 'Eula Andrea', 'Cinco', 'eac@gmail.com', 'Cebu City',	'09678945321', '500'),
    ('BOBA_003', 'Leanne Gabrielle', 'Igot', 'lgi@gmail.com', 'Lapu-lapu City', '09123456789','250'),
    ('BOBA_004', 'Yzere Erika Joy', 'Gerzon', 'yejg@gmail.com', 'Samboan', '0967845693','200')
ON DUPLICATE KEY UPDATE
	First_Name = VALUES(First_name),
    Last_Name = VALUES(Last_name),
    Email = VALUES(Email),
    Address = VALUES(Address),
    Phone_Number = VALUES(Phone_Number),
    Points = VALUES(Points);

SELECT * FROM customer_list;