package com.dh.digitalbooking.service;


import com.dh.digitalbooking.exception.ImageNotFoundException;
import com.dh.digitalbooking.model.Image;
import com.dh.digitalbooking.repository.ImageRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ImageService {
    private final ImageRepository imageRepository;

    @Autowired
    public ImageService(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
    }

    Logger logger = LogManager.getLogger(ImageService.class);

    public Image addImage(Image image) {
        return imageRepository.save(image);
    }

    public Image updateImage(Image image) {
        findImageById(image.getId());
        return imageRepository.save(image);
    }

    public List<Image> imageList() {
        return imageRepository.findAll();
    }

    public Image findImageById(UUID id) {
        logger.info("Looking for image id: " + id);
        return imageRepository.findById(id)
                              .orElseThrow(() -> new ImageNotFoundException("Image not found for id " + id));
    }

    public void deleteImage(UUID id) throws ImageNotFoundException {

        if (findImageById(id) != null) {
            imageRepository.deleteById(id);
            logger.info("Image id " + id + " deleted");
        } else {
            throw new ImageNotFoundException("Image not found for id " + id);
        }
    }
}
