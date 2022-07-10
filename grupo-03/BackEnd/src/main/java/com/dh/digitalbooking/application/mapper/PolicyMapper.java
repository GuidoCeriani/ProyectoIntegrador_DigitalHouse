package com.dh.digitalbooking.application.mapper;

import com.dh.digitalbooking.application.dto.PolicyDTO;
import com.dh.digitalbooking.model.Policy;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class PolicyMapper {

    public Policy toEntity(PolicyDTO policyDTO) {
        return new Policy(policyDTO.getId(),
                            policyDTO.getNorms(),
                            policyDTO.getHealthAndSecurity (),
                            policyDTO.getCancellationPolicy ());
    }

    public PolicyDTO toDTO(Policy policy) {
        return new PolicyDTO(policy.getId(),
                               policy.getNorms (),
                               policy.getHealthAndSecurity (),
                               policy.getCancellationPolicy ());
    }

    public List<PolicyDTO> toPolicyDTOList(List<Policy> policyList) {
        return policyList.stream().map(this::toDTO).collect(Collectors.toList());
    }
}
