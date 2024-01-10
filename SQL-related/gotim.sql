CREATE TABLE userTBL
( usrName char(3) not null primary key,
 birthDate date not null,
 addr char(2) not null,
 mobile char(13)
 );

CREATE TABLE orderTBL
( bought char(5) not null,
 price int not null,
 count int not null,
 usrName char(3) not null,
 FOREIGN KEY (usrName) REFERENCES userTBL (usrName)
 );