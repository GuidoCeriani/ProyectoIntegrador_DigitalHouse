CREATE TABLE IF NOT EXISTS `digitalbooking`.`products_features` (
  `id` VARCHAR(36) PRIMARY KEY DEFAULT (uuid()),
  `products_id` VARCHAR(36) NOT NULL,
  `features_id` VARCHAR(36) NOT NULL,
  INDEX `fk_products_features_features_idx` (`features_id` ASC) VISIBLE,
  INDEX `fk_products_features_products_idx` (`products_id` ASC) VISIBLE,
  CONSTRAINT `fk_products_features_products`
    FOREIGN KEY (`products_id`)
    REFERENCES `digitalbooking`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_features_features`
    FOREIGN KEY (`features_id`)
    REFERENCES `digitalbooking`.`features` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;