package com.dh.digitalbooking.service;


import com.dh.digitalbooking.exception.PolicyNotFoundException;
import com.dh.digitalbooking.model.Policy;
import com.dh.digitalbooking.repository.PolicyRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class PolicyService {
   Logger logger = LogManager.getLogger (PolicyService.class);

   private final PolicyRepository policyRepository;

   @Autowired
   public PolicyService (PolicyRepository policyRepository) {
      this.policyRepository = policyRepository;
   }


   public List<Policy> policyList () {
      return policyRepository.findAll ();
   }

   public Policy findPolicyById (UUID id) {
      logger.info ("Looking for policy id: " + id);
      return policyRepository.findById (id).orElseThrow (() -> new PolicyNotFoundException ("Policy not found for id "
            + id));
   }

   public Policy addPolicy (Policy policy) {
      return policyRepository.save (policy);
   }

   public Policy updatePolicy (Policy policy) {
      findPolicyById (policy.getId ());
      return policyRepository.save (policy);
   }

   public void deletePolicy (UUID id) throws PolicyNotFoundException {
      if(!policyRepository.existsById (id)) {
         throw new PolicyNotFoundException ("Policy not found for id " + id);
      }
      policyRepository.deleteById (id);
   }
}
