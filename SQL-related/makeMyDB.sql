DROP DATABASE IF EXISTS tableDB;

CREATE DATABASE tableDB;
USE tableDB;

DROP TABLE IF EXISTS buyTBL, userTBL;
CREATE TABLE userTBL (
userID CHAR(8) NOT NULL PRIMARY KEY,
userName VARCHAR(10) NOT NULL,
birthYear INT NOT NULL,
addr CHAR(2) NOT NULL,
mobile1 CHAR(3) NULL,
mobile2 CHAR(8) NULL,
height SMALLINT NULL,
mDate DATE NULL);

CREATE TABLE buyTBL (
num INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
userID CHAR(8) NOT NULL,
prodName CHAR(6) NULL,
groupName CHAR(4) NULL,
price INT NOT NULL,
amount SMALLINT NOT NULL,
FOREIGN KEY(userID) REFERENCES userTBL(userID));