DROP DATABASE IF EXISTS users_db;
CREATE DATABASE users_db;
USE users_db;

CREATE TABLE followers(
id INTEGER(10) auto_increment NOT NULL,
User_id INTEGER(10),
follower_id INTEGER(10)
);

