import styled from "styled-components";
import {StyledIconBase} from "@styled-icons/styled-icon"

export const Container = styled.div`
    text-align: center;
    margin: 0 auto;
    box-size: border-box;
    background-color: rgba(196,196,196,0.1);
    height: 100vh;
    width: 100vw;
    `;

export const Card = styled.div`
    margin-top: 6em;
    width: 300px;
    margin: auto;
    margin-top: 8em;
    @media (min-width: 768px) {
        Width: 346px;
        margin-top: 3em;
    }
    @media (min-width: 1280px) {
        width: 448px;
        margin-top: 2em;

`

export const Sesion = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #1DBEB4;
    padding-top: 5em;
    @media (min-width: 768px) {
        padding-top: 10em;
    }
    @media (min-width: 1280px) {
        padding-top: 12em;

    `

export const ButtonSubmit = styled.button`
    display: block;
    text-align: center;
    margin: 0 auto;
    background-color: #1DBEB4;
    border-radius: 5px;
    width: 305px;
    height: 40px;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    border: none;
    margin-top: 3em;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
    transition: all 0.2s ease-in-out;
    &:hover{        
        border: none;
        background-color: #FFFF;
        color: #1DBEB4;
    }
    @media (min-width: 768px) {
        Width: 346px;
    }
    @media (min-width: 1280px) {
        Width: 206px;
    }
`

export const User = styled.p`
    text-align: left;
    margin-right: 3em;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #383B58;
    width: 218px;
    height: 21px;
    margin-top: 1em;
    margin-bottom: 0.1em;
`

export const Boxes = styled.input`
    Width: 300px;
    Height: 40px;
    border-radius: 5px;
    Blend: Pass through;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    border: none;
    font-size: 12px;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #383B58;
    padding-left: 1em;
    @media (min-width: 768px) {
        Width: 346px;
    }
    @media (min-width: 1280px) {
        Width: 448px;
    }
`

export const Registry = styled.p`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #383B58;
    height: 31px;
    padding-top: 1.5em;
    display: inline-block;
    margin-left: 0.5em;
`

export const Error = styled.p`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    color: #FF0000;
    margin-top: 2em;
    `

export const Eye = styled.img`
    position: absolute;
    right: 0.5em;
    width: 24px;
    height: 19px;
    margin-top: 0.6em;
    `

export const Div = styled.div`
    position: relative;
`

export const WrongCredentials = styled.div`
    width: 450px;
    margin-left: auto; 
    margin-right: auto;
    margin-top: 2em;
    color: #B00720;
    background-color: #FFE5E5;
    align-items: center;
    justify-content:center;
    font-size: 16px;    
    height: 85px;
    border-radius: 8px;    
    ${StyledIconBase}{
        width: 40px;
        margin-right: 10px;
        margin-top: 12px;
    }
`

export const InvalidHTTP = styled.div`
    width: 600px;
    margin-left: auto; 
    margin-right: auto;
    margin-top: 2em;
    padding-top: 1em;
    color: #B00720;
    background-color: #FFE5E5;
    align-items: center;
    justify-content:center;
    font-size: 16px;    
    height: 65px;
    border-radius: 8px;    
    ${StyledIconBase}{
        width: 40px;
        margin-right: 10px;
    }
`

export const Empty = styled.div`
    width: 400px;
    margin-left: auto; 
    margin-right: auto;
    margin-top: 2em;
    padding-top: 1em;
    color: #B00720;
    background-color: #FFE5E5;
    align-items: center;
    justify-content:center;
    font-size: 16px;    
    height: 65px;
    border-radius: 8px;    
    ${StyledIconBase}{
        width: 40px;
        margin-right: 10px;
    }
`