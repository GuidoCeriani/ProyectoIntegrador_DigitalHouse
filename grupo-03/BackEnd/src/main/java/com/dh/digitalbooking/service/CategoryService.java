package com.dh.digitalbooking.service;


import com.dh.digitalbooking.exception.CategoryNotFoundException;
import com.dh.digitalbooking.model.Category;
import com.dh.digitalbooking.repository.CategoryRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CategoryService {
    private final CategoryRepository categoryRepository;
    private final ProductService productService;
    @Autowired
    public CategoryService(CategoryRepository categoryRepository, ProductService productService) {
        this.categoryRepository = categoryRepository;
         this.productService = productService;
    }

    Logger logger = LogManager.getLogger(CategoryService.class);

    public List<Category> categoryList() {
        return categoryRepository.findAll();
    }

    public Category findCategoryById(UUID id) {
        logger.info("Looking for category id: " + id);
        return categoryRepository.findById(id)
                                 .orElseThrow(() -> new CategoryNotFoundException("Category not found for id " + id));
    }

    public Category addCategory(Category category) {
        return categoryRepository.save(category);
    //get id para retornar el id de la categoría. NO necesitariamos el mapper
    //traer el mapper para que retorne el id de la categoría
    }

    public Category updateCategory(Category category) {
        findCategoryById(category.getId());
        return categoryRepository.save(category);
    }

    public void deleteCategory(UUID id) throws CategoryNotFoundException {
        Category category = findCategoryById(id);  //TODO OPTIONAL
        if (category != null) {

            if (productService.findProductsByCategoryName (category.getTitle ()).isEmpty ()) {
                logger.info("Category id " + id + " deleted");
                categoryRepository.deleteById(id);
            } else {
                throw new CategoryNotFoundException("Cannot deleted this category, it is associated with a product. Category Id " + id);
            }
        } else {
            throw new CategoryNotFoundException("Category not found for id " + id);
        }
    }
}
