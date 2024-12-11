-- สร้างตาราง Categories (หมวดหมู่)
CREATE TABLE categories (
    category_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- สร้างตาราง Suppliers (ซัพพลายเออร์)
CREATE TABLE suppliers (
    supplier_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    contact_info TEXT
);

-- สร้างตาราง Products (สินค้า)
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2),
    quantity_in_stock INT,
    category_id INT,
    supplier_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(category_id),
    FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id)
);

-- สร้างตาราง Transactions (ธุรกรรม)
CREATE TABLE transactions (
    transaction_id INT PRIMARY KEY,
    transaction_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    product_id INT,
    quantity INT,
    transaction_type ENUM('sale', 'restock'),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);
