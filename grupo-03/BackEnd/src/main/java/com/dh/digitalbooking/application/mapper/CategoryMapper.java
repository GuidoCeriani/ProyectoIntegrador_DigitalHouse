package com.dh.digitalbooking.application.mapper;

import com.dh.digitalbooking.application.dto.CategoryDTO;
import com.dh.digitalbooking.model.Category;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CategoryMapper {

    public Category toEntity(CategoryDTO categoryDTO) {
        return new Category(categoryDTO.getId(),
                            categoryDTO.getTitle(),
                            categoryDTO.getQuantity(),
                            categoryDTO.getImage());
    }

    public CategoryDTO toDTO(Category category) {
        return new CategoryDTO(category.getId(),
                               category.getTitle(),
                               category.getQuantity(),
                               category.getImage());
    }

    public List<CategoryDTO> toCategoryDTOList(List<Category> categoryList) {
        return categoryList.stream().map(this::toDTO).collect(Collectors.toList());
    }
}
