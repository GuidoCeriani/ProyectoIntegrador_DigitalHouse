import styled from "styled-components"
import {StyledIconBase} from "@styled-icons/styled-icon"

export const FeaturesIcons = styled.ul` 
    list-style:none;
    li{
        display: inline-block;   
        font-size: 12px ;
        @media(min-width: 768px){
            font-size: 14px;
        }
        ${StyledIconBase}{
        height: 20px;
        margin-right: 5px;                
        }       
    }

`