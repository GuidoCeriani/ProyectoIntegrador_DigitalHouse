import styled from "styled-components"
import {StyledIconBase} from "@styled-icons/styled-icon"

export const Section = styled.section`
    box-sizing:border-box;
    width: 100%;
    padding: 1.5% 2.5% 2% 2.5%;
    background-color:#383B58;
    color: #383B58;
    h2{
        color:#FFF;
        margin-bottom: 15px;
    }    
    @media (min-width: 768px){
        
        background-color: #EBEBEE;
        h2{
            color:#383B58
        } 
    }
`

export const ProductsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    width: 100%;
`

export const FeaturesIcons = styled.ul` 
    list-style:none;
    li{
        display: inline-block;
        ${StyledIconBase}{
        height: 20px;
        margin-right: 5px;
        }
        span{
            display: none;
        }
    }

`



