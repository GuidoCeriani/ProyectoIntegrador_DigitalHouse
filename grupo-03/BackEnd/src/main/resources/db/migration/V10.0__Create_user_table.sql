CREATE TABLE IF NOT EXISTS `digitalbooking`.`user` (
    `id` varchar(36) primary key,
    `password` varchar(255) not null,
    `email` varchar(255) not null,
    `rol_id` VARCHAR(36) NOT NULL,
    unique (email)
);