-- -----------------------------------------------------
-- Table `digitalbooking`.`policy`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `digitalbooking`.`policy` (
  `id` VARCHAR(36) NOT NULL,
  `norms` VARCHAR(200) NULL,
  `healthAndSecurity` VARCHAR(200) NULL,
  `cancellationPolicy` VARCHAR(200) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
