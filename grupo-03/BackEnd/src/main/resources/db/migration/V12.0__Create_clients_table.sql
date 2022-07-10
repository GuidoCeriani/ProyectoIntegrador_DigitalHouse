CREATE TABLE IF NOT EXISTS `digitalbooking`.`clients` (
    id varchar(36) primary key,
    name varchar(255) not null,
    surname varchar(255) not null,
    city varchar(45) null,
    user_id varchar(36) not null
);