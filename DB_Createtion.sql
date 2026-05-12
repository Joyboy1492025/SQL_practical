CREATE DATABASE management_system;
GO

USE management_system;
GO

-- 1. Categories Table
CREATE TABLE Categories (
    CategoryID INT PRIMARY KEY IDENTITY(1,1),
    CategoryName VARCHAR(100) NOT NULL
);
GO

-- 2. Customers Table
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY IDENTITY(1,1),
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Email VARCHAR(100)
);
GO

-- 3. Ingredients Table
CREATE TABLE Ingredients (
    IngredientID INT PRIMARY KEY IDENTITY(1,1),
    IngredientName VARCHAR(100) NOT NULL,
    UnitOfMeasure VARCHAR(20),
    CurrentStock DECIMAL(10,2),
    CostPerUnit DECIMAL(10,2)
);
GO

-- 4. Products Table (References Categories)
CREATE TABLE Products (
    ProductID INT PRIMARY KEY IDENTITY(1,1),
    ProductName VARCHAR(100) NOT NULL,
    CategoryID INT FOREIGN KEY REFERENCES Categories(CategoryID),
    UnitPrice DECIMAL(10,2),
    IsGlutenFree BIT
);
GO

-- 5. Orders Table (References Customers)
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY IDENTITY(1,1),
    CustomerID INT FOREIGN KEY REFERENCES Customers(CustomerID),
    OrderDate DATETIME DEFAULT GETDATE(),
    TotalAmount DECIMAL(10,2),
    [Status] VARCHAR(20)
);
GO

-- 6. Recipes Table (Junction for Products and Ingredients)
CREATE TABLE Recipes (
    ProductID INT FOREIGN KEY REFERENCES Products(ProductID),
    IngredientID INT FOREIGN KEY REFERENCES Ingredients(IngredientID),
    QuantityRequired DECIMAL(10,2),
    PRIMARY KEY (ProductID, IngredientID)
);
GO

-- 7. OrderDetails Table (Junction for Orders and Products)
CREATE TABLE OrderDetails (
    OrderDetailID INT PRIMARY KEY IDENTITY(1,1),
    OrderID INT FOREIGN KEY REFERENCES Orders(OrderID),
    ProductID INT FOREIGN KEY REFERENCES Products(ProductID),
    Quantity INT,
    LineTotal DECIMAL(10,2)
);
GO

-- =============================================
-- 1. Categories (8 records)
-- =============================================
INSERT INTO Categories (CategoryName)
VALUES 
('Bread & Bakery'),
('Cakes & Pastries'),
('Cookies & Biscuits'),
('Beverages'),
('Sandwiches'),
('Salads'),
('Snacks'),
('Gluten-Free Specials');
GO

-- =============================================
-- 2. Customers (25 records)
-- =============================================
INSERT INTO Customers (FirstName, LastName, Email)
VALUES 
('Emma', 'Thompson', 'emma.t@email.com'),
('Liam', 'Garcia', 'liam.g@email.com'),
('Olivia', 'Martinez', 'olivia.m@email.com'),
('Noah', 'Patel', 'noah.p@email.com'),
('Ava', 'Kim', 'ava.k@email.com'),
('Sophia', 'Chen', 'sophia.c@email.com'),
('Isabella', 'Rodriguez', 'bella.r@email.com'),
('Lucas', 'Wang', 'lucas.w@email.com'),
('Mia', 'Anderson', 'mia.a@email.com'),
('Ethan', 'Singh', 'ethan.s@email.com'),
('Charlotte', 'Brown', 'charlotte.b@email.com'),
('Amelia', 'Taylor', 'amelia.t@email.com'),
('Harper', 'Wilson', 'harper.w@email.com'),
('Evelyn', 'Lee', 'evelyn.l@email.com'),
('Alexander', 'Kumar', 'alex.k@email.com'),
('James', 'Nguyen', 'james.n@email.com'),
('Benjamin', 'Lopez', 'ben.l@email.com'),
('Henry', 'Ahmed', 'henry.a@email.com'),
('Sebastian', 'Clark', 'sebastian.c@email.com'),
('Jack', 'Walker', 'jack.w@email.com'),
('Avery', 'Hall', 'avery.h@email.com'),
('Ella', 'Young', 'ella.y@email.com'),
('Scarlett', 'King', 'scarlett.k@email.com'),
('Grace', 'Wright', 'grace.w@email.com'),
('Chloe', 'Scott', 'chloe.s@email.com');
GO

-- =============================================
-- 3. Ingredients (35 records)
-- =============================================
INSERT INTO Ingredients (IngredientName, UnitOfMeasure, CurrentStock, CostPerUnit)
VALUES 
('All-Purpose Flour', 'kg', 450.50, 1.85),
('Whole Wheat Flour', 'kg', 320.75, 2.10),
('Gluten-Free Flour Blend', 'kg', 180.25, 4.50),
('White Sugar', 'kg', 280.00, 1.40),
('Brown Sugar', 'kg', 95.50, 1.65),
('Butter', 'kg', 120.30, 5.20),
('Eggs', 'dozen', 85.00, 3.80),
('Milk', 'liter', 240.00, 1.10),
('Yeast', 'kg', 45.80, 8.90),
('Baking Powder', 'kg', 60.25, 4.20),
('Salt', 'kg', 150.00, 0.65),
('Vanilla Extract', 'liter', 12.50, 18.00),
('Cocoa Powder', 'kg', 55.75, 6.80),
('Dark Chocolate', 'kg', 80.40, 9.50),
('Almonds', 'kg', 65.20, 12.00),
('Walnuts', 'kg', 40.80, 14.50),
('Raisins', 'kg', 75.60, 5.90),
('Olive Oil', 'liter', 90.00, 7.20),
('Lettuce', 'kg', 35.40, 2.80),
('Tomato', 'kg', 120.00, 3.10),
('Chicken Breast', 'kg', 85.50, 8.90),
('Tuna', 'can', 200.00, 2.50),
('Mayonnaise', 'liter', 45.00, 4.80),
('Cheese', 'kg', 110.75, 9.20),
('Ham', 'kg', 55.30, 11.00),
('Coffee Beans', 'kg', 28.50, 15.00),
('Tea Leaves', 'kg', 18.75, 12.50),
('Oats', 'kg', 95.00, 2.40),
('Honey', 'liter', 25.80, 14.00),
('Cinnamon', 'kg', 12.40, 18.50),
('Strawberries', 'kg', 45.60, 6.80),
('Blueberries', 'kg', 32.90, 9.50),
('Lemon', 'kg', 60.00, 3.20),
('Garlic', 'kg', 80.00, 2.90),
('Onion', 'kg', 110.00, 1.75);
GO

-- =============================================
-- 4. Products (20 records)
-- =============================================
INSERT INTO Products (ProductName, CategoryID, UnitPrice, IsGlutenFree)
VALUES 
('Sourdough Bread', 1, 4.99, 0),
('Baguette', 1, 3.49, 0),
('Whole Wheat Loaf', 1, 4.75, 0),
('Chocolate Cake', 2, 24.99, 0),
('Vanilla Cupcakes', 2, 3.99, 0),
('Almond Croissant', 2, 4.50, 0),
('Chocolate Chip Cookies', 3, 2.49, 0),
('Oatmeal Raisin Cookies', 3, 2.69, 0),
('Iced Latte', 4, 5.49, 1),
('Americano', 4, 4.29, 1),
('Chicken Sandwich', 5, 8.99, 0),
('Turkey Club', 5, 9.49, 0),
('Caesar Salad', 6, 7.99, 1),
('Greek Salad', 6, 8.49, 1),
('Energy Bar', 7, 2.99, 1),
('Trail Mix', 7, 3.49, 1),
('Gluten-Free Bread', 8, 5.99, 1),
('GF Chocolate Brownies', 8, 4.29, 1),
('GF Blueberry Muffin', 8, 3.79, 1),
('Matcha Latte', 4, 5.99, 1);
GO

-- =============================================
-- 5. Recipes (approx 55 entries)
-- =============================================
INSERT INTO Recipes (ProductID, IngredientID, QuantityRequired)
VALUES 
-- Sourdough Bread
(1,1,0.5),(1,7,0.08),(1,9,0.01),(1,11,0.01),
-- Baguette
(2,1,0.4),(2,7,0.06),(2,9,0.015),
-- Chocolate Cake
(4,1,0.3),(4,3,0.25),(4,5,0.1),(4,6,0.2),(4,7,4),(4,13,0.1),
-- Chocolate Chip Cookies
(7,1,0.2),(7,3,0.15),(7,6,0.15),(7,7,2),(7,14,0.1),
-- Iced Latte
(9,8,0.25),(9,27,0.02),
-- Chicken Sandwich
(11,21,0.15),(11,24,0.05),(11,19,0.05),(11,20,0.1),
-- Caesar Salad
(13,19,0.15),(13,20,0.1),(13,24,0.05),
-- Gluten-Free Bread
(17,3,0.5),(17,7,0.08),(17,9,0.01),
-- GF Chocolate Brownies
(18,3,0.25),(18,5,0.2),(18,6,0.18),(18,13,0.12),
-- And more...
(3,2,0.45),(3,7,0.07),
(5,1,0.15),(5,3,0.12),(5,6,0.08),(5,7,1),
(6,1,0.2),(6,6,0.1),(6,15,0.05),
(8,2,0.18),(8,3,0.1),(8,16,0.08),
(10,27,0.02),(10,8,0.2),
(12,21,0.12),(12,22,0.1),(12,24,0.06),
(14,19,0.12),(14,20,0.15),(14,33,0.05),
(15,28,0.1),(15,29,0.02),(15,30,0.01),
(16,15,0.1),(16,16,0.05),(16,17,0.08),
(19,3,0.2),(19,31,0.1),(19,7,1),
(20,27,0.02),(20,8,0.25),(20,31,0.05);
GO

-- =============================================
-- 6. Orders (20 records)
-- =============================================
INSERT INTO Orders (CustomerID, OrderDate, TotalAmount, [Status])
VALUES 
(1, DATEADD(day, -5, GETDATE()), 28.47, 'Completed'),
(3, DATEADD(day, -4, GETDATE()), 45.98, 'Completed'),
(5, DATEADD(day, -4, GETDATE()), 19.47, 'Completed'),
(2, DATEADD(day, -3, GETDATE()), 67.85, 'Processing'),
(8, DATEADD(day, -3, GETDATE()), 12.98, 'Completed'),
(12, DATEADD(day, -2, GETDATE()), 34.75, 'Completed'),
(15, DATEADD(day, -2, GETDATE()), 55.40, 'Completed'),
(7, DATEADD(day, -1, GETDATE()), 28.97, 'Processing'),
(19, DATEADD(day, -1, GETDATE()), 41.85, 'Completed'),
(4, GETDATE(), 22.48, 'Pending'),
(10, GETDATE(), 18.99, 'Pending'),
(6, DATEADD(day, -6, GETDATE()), 71.25, 'Completed'),
(9, DATEADD(day, -5, GETDATE()), 29.85, 'Completed'),
(11, DATEADD(day, -4, GETDATE()), 15.98, 'Completed'),
(14, DATEADD(day, -3, GETDATE()), 48.75, 'Processing'),
(18, DATEADD(day, -2, GETDATE()), 33.47, 'Completed'),
(20, DATEADD(day, -1, GETDATE()), 26.85, 'Completed'),
(22, GETDATE(), 39.98, 'Pending'),
(23, DATEADD(day, -7, GETDATE()), 52.40, 'Completed'),
(25, DATEADD(day, -6, GETDATE()), 17.98, 'Completed');
GO

-- =============================================
-- 7. OrderDetails (approx 45 records)
-- =============================================
INSERT INTO OrderDetails (OrderID, ProductID, Quantity, LineTotal)
VALUES 
(1,1,2,9.98),(1,7,3,7.47),(1,9,2,10.98),
(2,4,1,24.99),(2,13,1,7.99),(2,17,1,5.99),(2,20,1,5.99),
(3,8,4,10.76),(3,15,3,8.97),
(4,11,2,17.98),(4,18,2,8.58),(4,19,3,11.37),
(5,10,3,12.87),
(6,2,2,6.98),(6,5,4,15.96),(6,12,1,9.49),
(7,3,1,4.75),(7,6,2,9.00),(7,14,3,25.47),
(8,17,2,11.98),(8,18,4,17.16),
(9,1,3,14.97),(9,9,2,10.98),(9,16,2,6.98),
(10,7,5,12.45),(10,20,2,11.98),
(11,13,2,15.98),(11,15,1,2.99),
(12,4,2,49.98),(12,19,3,11.37),
(13,8,6,16.14),(13,10,2,8.58),
(14,5,4,15.96),
(15,11,3,26.97),(15,13,2,15.98),
(16,17,1,5.99),(16,18,3,12.87),(16,7,4,9.96),
(17,2,3,10.47),(17,12,2,18.98),
(18,9,3,16.47),(18,20,4,23.96),
(19,4,1,24.99),(19,14,1,8.49),(19,16,4,13.96),
(20,15,3,8.97),(20,19,2,7.58);
GO

