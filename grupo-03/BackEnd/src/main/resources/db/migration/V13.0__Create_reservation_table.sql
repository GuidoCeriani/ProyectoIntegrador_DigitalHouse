-- -----------------------------------------------------
-- Table `digitalbooking`.`reservation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `digitalbooking`.`reservation` (
  `id` VARCHAR(36) NOT NULL,
  `startTime` TIME NULL,
  `checkIn` DATE NULL,
  `checkOut` DATE NULL,
  `products_id` VARCHAR(36) NOT NULL,
  `user_id` VARCHAR(36) NOT NULL,
  PRIMARY KEY (`id`, `products_id`, `user_id`),
  INDEX `fk_reservation_products_idx` (`products_id` ASC) VISIBLE,
  INDEX `fk_reservation_user_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_reservation_products`
    FOREIGN KEY (`products_id`)
    REFERENCES `digitalbooking`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_reservation_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `digitalbooking`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;