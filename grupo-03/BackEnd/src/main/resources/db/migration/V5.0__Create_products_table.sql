-- -----------------------------------------------------
-- Table `digitalbooking`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `digitalbooking`.`products` (
  `id` VARCHAR(36) NOT NULL,
  `title` VARCHAR(45) NULL,
  `description_title` VARCHAR(45) NULL,
  `description` VARCHAR(800) NULL,
  `address` VARCHAR(100) NULL,
  `availability` VARCHAR(45) NULL,
  `cities_id` VARCHAR(36) NOT NULL,
  `categories_id` VARCHAR(36) NOT NULL,
  `policy_id` VARCHAR(36) NOT NULL,
  PRIMARY KEY (`id`, `cities_id`, `categories_id`, `policy_id`),
  INDEX `fk_products_cities_idx` (`cities_id` ASC) VISIBLE,
  INDEX `fk_products_categories_idx` (`categories_id` ASC) VISIBLE,
  INDEX `fk_products_policy_idx` (`policy_id` ASC) VISIBLE,
  CONSTRAINT `fk_products_cities`
    FOREIGN KEY (`cities_id`)
    REFERENCES `digitalbooking`.`cities` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_categories`
    FOREIGN KEY (`categories_id`)
    REFERENCES `digitalbooking`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_policy`
    FOREIGN KEY (`policy_id`)
    REFERENCES `digitalbooking`.`policy` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;
