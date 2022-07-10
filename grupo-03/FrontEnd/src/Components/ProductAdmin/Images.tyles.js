import styled from "styled-components";
import { Input } from "../Administration/AdministrationStyle"
import { FeatureInputWrapper } from "./FeatureInput.styles";

export const Wrapper = styled(FeatureInputWrapper)`
    @media (min-width: 768px) {
        margin: 15px;
        
    }
`

export const InputImages = styled(Input)`
    margin-top: 0;
    width: 85%;
    @media (min-width: 768px) {
        width: 92%;        
    }
    @media (min-width: 1280px) {
        width: 95%;        
    }
`