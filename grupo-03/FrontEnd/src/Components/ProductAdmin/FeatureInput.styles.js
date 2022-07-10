import styled from "styled-components";
import {StyledIconBase} from "@styled-icons/styled-icon"
import { LabelTextArea } from "../Administration/AdministrationStyle";




export const FeatureInputWrapper = styled.div`
    display: flex;    
    position: relative; 
    background-color: #F9F9F9;
    padding: 15px;
    justify-content: space-between; 
    align-items:center;  
    border-radius: 5px;
    margin-bottom:20px ;
    @media (min-width: 768px) {
        margin: 15px;
    }
    @media (min-width: 1280px) {
        padding: 30px;
    }
`

export const LabelImage = styled(LabelTextArea)`
    position: relative;
    @media (min-width: 768px) {
        width:100%;
        margin-bottom: 15px;
    }
    @media (min-width: 1280px) {
        width: 68%;
    }
`

export const InputWrapper = styled.div`
    width:85%;
    @media (min-width: 768px) {
        width:92%;
    }
    @media (min-width: 1280px) {
        display: flex;
        width:95%;
        justify-content:space-between
    }
`

export const Iconprinted = styled.div`
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;    
    color: #383B58;
    
    div{
        display: flex;
        align-items: center;
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        width: 100%;
        height: 40px;
        border: none;
        padding-left: 1em;  
        margin-top: 7px;
        background-color:#FFF;
        p{
            color: ${(props) => props.feature !== "" ? "#383B58" : "#BEBEBE" } ;
        }
    }
    ${StyledIconBase}{
        height: 20px;  
        margin-right: 5px ;
    }    
    @media (min-width: 1280px) {
        width: 30%;
    }
`

export const UlIconList = styled.ul` 
    position: absolute;
    top: 59px;
    list-style: none;
    background-color: #FFF;
    width:100%;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    border-radius: 0 0 5px 5px;
    z-index: 1;
    //padding: 0px 12px;
    
    li{
        //display: inline-block;  
        padding: 15px 12px; 
        font-size: 12px ;
        border-bottom: 1px solid #EEEEF1;
        color: gray;
        cursor:pointer;
        &:hover{
            background-color: #F9F9F9;
        }
        @media(min-width: 768px){
            font-size: 14px;
        }
        ${StyledIconBase}{
        height: 20px;
        margin-right: 5px;                
        }       
    } 
`

export const stylesButton = styled.button`
    width: 40px;
    //height: 40px;
    border: none;
    
    //line-height:0px;
    border-radius:5px;
    color: #FFF;
    transition: all 0.2s ease;
    cursor: pointer
`

export const ButtonAdd = styled(stylesButton)`
    background-color: #1DBEB4;
    font-size: 35px;
    &:hover{
        background-color: #44D8CA;
    }
    
`

export const ButtonRemove = styled(stylesButton)`
    background-color: #545776;
    font-size: 18px;
    font-weight: 600;
    height:40px;    
    &:hover{
        background-color: #72758E;
    }
`