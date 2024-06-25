CREATE TABLE IF NOT EXISTS users (
    id SERIAL INTEGER PRIMARY KEY 
    name VARCHAR(255) NOT NULL
    email VARCHAR(255) NOT NULL
    password VARCHAR(255) NOT NULL
    created_at timestamp default CURRENT_TIMESTAMP
);

INSERT INTO users (name, email, password) VALUES 
('juan', 'admin@example.com', 'admin@example'),
('pedro', 'pedro@example.com', 'pedro@example'),
('maria', 'maria@example.com', 'maria@example');