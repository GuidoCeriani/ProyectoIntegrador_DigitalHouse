package com.dh.digitalbooking.service;

import com.dh.digitalbooking.exception.ReserveNotFoundException;
import com.dh.digitalbooking.model.Reserve;
import com.dh.digitalbooking.model.User;
import com.dh.digitalbooking.repository.ReserveRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ReserveService {

    private final ReserveRepository reserveRepository;
    private final ProductService productService;

    @Autowired
    public ReserveService(ReserveRepository reserveRepository, ProductService productService) {
        this.reserveRepository = reserveRepository;
        this.productService = productService;
    }

    Logger logger = LogManager.getLogger(ReserveService.class);

    public Reserve addReserve(Reserve reserve) {
        List<Reserve> reservationsByProduct = findReservesByProduct (reserve.getProduct().getId ());
        if (reservationsByProduct.size() > 0) {
            for (Reserve reserve1 : reservationsByProduct) {
                if (reserve1.getCheckIn ().equals(reserve.getCheckIn ()) && reserve1.getCheckOut ().equals(reserve.getCheckOut ())) {
                    throw new ReserveNotFoundException("Can not reserve for product id " + reserve.getProduct().getId() + " in this dates ->  checkIn: " + reserve.getCheckIn () + " checkOut: " + reserve.getCheckOut ());
                }
            }
         }

        User user = getUser();
        reserve.setUser(User.builder().id(user.getId()).build());
        return reserveRepository.save(reserve);
    }

    public List<Reserve> reservesList() {
        return reserveRepository.findAll();
    }


    public List<Reserve> reservesListByUser() {
        User user = getUser();
        return reserveRepository.findByUserId(user.getId());
    }

    public List<Reserve> reservesListByUser(UUID id) {
        return reserveRepository.findByUserId(id);
    }

    public Reserve findReserveById(UUID id) {
        logger.info("Looking for reserve id: " + id);
        return reserveRepository.findById(id)
                                .orElseThrow(() -> new ReserveNotFoundException("Reserve not found for id " + id));
    }


    public List<Reserve> findReservesByProduct (UUID productid) {
        return reserveRepository.findByProductId(productid);
    }



    public void deleteReserve(UUID id) throws ReserveNotFoundException {

        if (findReserveById(id) != null) {
            reserveRepository.deleteById(id);
            logger.info("Reserve id " + id + " deleted");
        } else {
            throw new ReserveNotFoundException("Reserve not found for id " + id);
        }
    }
//TODO
    private User getUser() {
        return (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

}


