CREATE TABLE IF NOT EXISTS `digitalbooking`.`cities` (
  `id` VARCHAR(36) NOT NULL,
  `name` VARCHAR(45) NULL,
  `province` VARCHAR(45) NULL,
  `country` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;