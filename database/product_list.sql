USE `bobastic`;

INSERT INTO product_list (Product_Code, Product_Name, Size, Cost) 
VALUES 
	('S-Cho', 'Chocolate', 'S', '45'),
    ('M-Cho', 'Chocolate', 'M', '55'),
    ('L-Cho', 'Chocolate', 'L', '65'),
	('S-Str', 'Strawberry', 'S', '45'),
    ('M-Str', 'Strawberry', 'M', '55'),
    ('L-Str', 'Strawberry', 'L', '65'),
    ('S-Mtc', 'Matcha', 'S', '45'),
    ('M-Mtc', 'Matcha', 'M', '55'),
	('L-Mtc', 'Matcha', 'L', '65'),
    ('S-Hkk', 'Hokkaido', 'S', '45'),
    ('M-Hkk', 'Hokkaido', 'M', '55'),
	('L-Hkk', 'Hokkaido', 'L', '65'),
    ('S-BlB', 'Blueberry', 'S', '45'),
    ('M-BlB', 'Blueberry', 'M', '55'),
	('L-BlB', 'Blueberry', 'L', '65'),
    ('S-DMc', 'Dark Mocha', 'S', '45'),
    ('M-DMc', 'Dark Mocha', 'M', '55'),
	('L-DMc', 'Dark Mocha', 'L', '65'),
    ('S-RV', 'Red Velvet', 'S', '45'),
    ('M-RV', 'Red Velvet', 'M', '55'),
	('L-RV', 'Red Velvet', 'L', '65'),
	('S-BS', 'Brown Sugar', 'S', '45'),
    ('M-BS', 'Brown Sugar', 'M', '55'),
	('L-BS', 'Brown Sugar', 'L', '65'),
    ('S-BS', 'Brown Sugar', 'S', '45'),
    ('CnDnsh', 'Cinn Danish', null, '115'),
    ('CB', 'Cinn Bun', null, '96'),
	('SR', 'Sausage Roll', null, '89'),
    ('FB', 'Flat Bread', null, '56'),
    ('TP', 'Tuna Pandesal', null, '45'),
    ('FBC', 'French Butter Croissantn', null, '135'),
	('MC', 'Macademia Cookie', null, '78'),
    ('ChDnt', 'Chocolate Donut', null, '50')
    
ON DUPLICATE KEY UPDATE
	Product_Code = VALUES(Product_Code),
    Product_Name = VALUES(Product_Name),
    Size = VALUES(Size),
    Cost = VALUES(Cost);

SELECT * FROM product_list;