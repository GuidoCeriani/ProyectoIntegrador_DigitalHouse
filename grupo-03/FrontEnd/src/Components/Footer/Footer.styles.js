import styled from "styled-components"
import {StyledIconBase} from "@styled-icons/styled-icon"


export const FooterDB = styled.footer`
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding: 0 2.5%;
    box-sizing: border-box;
    width: 100%;
    background-color: #1DBEB4;
    height: 58px;
    position: fixed;
    bottom: 0;  
    z-index: 2 ;    
    p{
        font-size: 14px;
        color: #fff;
        font-weight: 700;
        padding: 0;
        margin: 0;
    }
`

export const SocialIconsWrapper = styled.div`  
    display: none;  
    ${StyledIconBase}{        
        width: 25px;
        margin-left: 30px;
        color: #fff;
    }
    @media (min-width: 768px) {
        display: inline-block;
    }
`