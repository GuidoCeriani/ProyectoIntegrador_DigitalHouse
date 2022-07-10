CREATE TABLE IF NOT EXISTS `digitalbooking`.`images` (
  `id` VARCHAR(36) NOT NULL,
  `title` VARCHAR(45) NULL,
  `url` VARCHAR(255) NULL,
  `product_id` VARCHAR(36) NOT NULL,
  PRIMARY KEY (`id`, `product_id`),
  INDEX `fk_images_products_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk_images_products`
    FOREIGN KEY (`product_id`)
    REFERENCES `digitalbooking`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;