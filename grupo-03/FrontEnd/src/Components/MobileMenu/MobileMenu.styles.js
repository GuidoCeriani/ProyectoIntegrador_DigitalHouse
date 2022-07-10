import styled from "styled-components"
import {Close} from "@styled-icons/material-rounded/"
import {Menu} from "@styled-icons/material-rounded/"
import {StyledIconBase} from "@styled-icons/styled-icon"


export const MobileMenuDB = styled.nav`
    box-sizing: border-box;
    position: absolute;
    //right: -2.5%;
    width: 303px;
    top: 0;    
    background-color: #FFF;
    height: 100vh;
    z-index: 100;    
    bottom: 0;          
    text-align: right;
    transition: all 0.3s ease-out;
    right: ${(props) => props.isActive? "0" : "-350px"}
`


export const BugerIcon = styled(Menu)`
    width: 30px;
    color: #545776;
    @media (min-width: 768px){
        display: none;
    }
`

export const HeaderMenu = styled.div`    
    background-color: #1DBEB4;
    height: 28%;
    position:relative;    
    h2{
     position: absolute ;
     bottom: 15px;
     right: 15px;
     margin-block-end: 0;
    }
`

export const CloseIcon = styled(Close)`
    width: 30px;
    color: #FFF;
    position: absolute;
    top: 15px;
    left: 15px;
`

export const ContentMenu = styled.div` 
    height: 70%; 
    display:flex;
    flex-direction: column;
    justify-content: space-between; 
    padding: 0 15px;  
    background-color: #FFF ;
    ul{
        list-style: none;
        font-size: 16px;
        font-weight: 700;
        padding-inline-start: 0px;
        li{
            padding: 20px 0;
            width: 100%;
            &:first-child{
            border-bottom: solid 1px #383B58;
            } 
            a{
                text-decoration: none;
                color: black;
            }       
        }
    } 
`

export const SocialIconsWrapper = styled.div`
    
    ${StyledIconBase}{        
        width: 25px;
        margin-left: 17px;
    }
`
export const DarkBackground = styled.div`
    width: 100vw;
    height: 100vh; 
    background-color: ${(props)=> props.isActive?  "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.0)"};
    position: fixed;
    top:0;
    left:0;    
    visibility: ${(props)=> props.isActive?  "auto" : "hidden"};    
    transition: all 0.3s ease-out;
    
`