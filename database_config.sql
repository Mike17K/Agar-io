-- This solved the problem of miss connection
-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
-- flush privileges;
CREATE DATABASE agariodb;
USE agariodb;
CREATE TABLE game (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL
);
CREATE TABLE player (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    gameid INT,
    accesskey VARCHAR(20) NOT NULL,
    FOREIGN KEY (gameid) REFERENCES game(id)
);
CREATE TABLE mass (
    id INT PRIMARY KEY AUTO_INCREMENT,
    posx INT NOT NULL,
    posy INT NOT NULL,
    playerid INT,
    mass INT,
    FOREIGN KEY (playerid) REFERENCES player(id) ON DELETE CASCADE
);