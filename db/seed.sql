USE ecommerce_db;
--category
INSERT INTO Category
(name)
VALUES 
('High Heels'),
('Flats'),
('Flip Flops'),
('Loafers');

--product

INSERT INTO Product
(name, price, stock)

  VALUES
    ('Gucci', '6000', '100'),
    ('YSL', '2000', '22'),
    ('Givenchy', '3000', '50'),
    ('Versace', '13000, '39'');


--Tag

    INSERT INTO Tag
(name)
VALUES 
('-'),
('-'),
('-'),
('-');


--ProductTag

INSERT INTO Tag
(product id, tag id)
VALUES 
('-'),
('-'),
('-'),
('-');



  

