package com.dh.digitalbooking.application.mapper;

import com.dh.digitalbooking.application.dto.ImageDTO;
import com.dh.digitalbooking.model.Image;
import com.dh.digitalbooking.model.Product;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ImageMapper {

    public Image toEntity(ImageDTO imageDTO) {
        return new Image(imageDTO.getId(),
                         imageDTO.getTitle(),
                         imageDTO.getUrl()
              , new Product(imageDTO.getProductDTO().getId())
        );
    }

    public ImageDTO toDTO(Image image) {
        return new ImageDTO(image.getId(),
                            image.getTitle(),
                            image.getUrl(),
                            null
        );
    }

    public List<ImageDTO> toImageDTOList(List<Image> imageList) {
        return imageList.stream().map(this::toDTO).collect(Collectors.toList());
    }

    public List<Image> toImageList(List<ImageDTO> imageDTOList) {
        return imageDTOList.stream().map(this::toEntity).collect(Collectors.toList());
    }
}
