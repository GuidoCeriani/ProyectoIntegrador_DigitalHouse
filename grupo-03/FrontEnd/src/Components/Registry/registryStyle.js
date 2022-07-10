import styled from "styled-components";
import {StyledIconBase} from "@styled-icons/styled-icon"

export const Container = styled.div`
    text-align: center;
    background-color: rgba(196,196,196,0.1);
    height: 100vh;
    width: 100vw;
    `

export const Card = styled.div`
    width: 300px;
    margin: auto;
    margin-top: 2em;
    height: 100%;
    @media (min-width: 768px) {
        Width: 346px;
    }
    @media (min-width: 1280px) {
        width: 448px;
    }
`

export const Sesion = styled.h2`
    margin: auto;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #1DBEB4;
    padding-top: 5em;
    @media (min-width: 768px) {
        Width: 346px;
        padding-top: 8em;
    }
    @media (min-width: 1280px) {
        padding-top: 9em;
    }
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
    margin-top: 1em;
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
        height: 40px;
    }
`

export const User = styled.p`
    text-align: left;
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
    font-family: 'Roboto', sans-serif;
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
export const BoxesNames = styled.input`
    Width: 300px;
    Height: 40px;
    border-radius: 5px;
    Blend: Pass through;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    border: none;
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #383B58;
    padding-left: 1em;
    @media (min-width: 768px) {
        Width: 346px;
    }
    @media (min-width: 1280px) {
        margin: 0px;
        Width: 218px;
        height: 40px;
    }
`

export const BoxesWrong = styled.input`
    Width: 300px;
    Height: 40px;
    border-radius: 5px;
    Blend: Pass through;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    border: none;
    background: #FFE1E1;
    border: 1px solid #FF0000;
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
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

export const BoxesWrongNames = styled.input`
    Width: 300px;
    Height: 40px;
    border-radius: 5px;
    Blend: Pass through;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    border: none;
    background: #FFE1E1;
    border: 1px solid #FF0000;
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #383B58;
    padding-left: 1em;
    @media (min-width: 768px) {
        Width: 346px;
    }
    @media (min-width: 1280px) {
        display: inline;
        Width: 218px;
        height: 40px;
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

export const Error2 = styled.p`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #FF0000;
    margin-top: 0.5em;
    text-align: right;
    `

export const Names = styled.div`
@media (min-width: 1280px) {
    display: flex;
    text-align: left;
    flex-wrap: nowrap;
    justify-content: space-between;
}
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

export const WrongEmail = styled.div`
    position: relative;
    width: 250px;
    margin-top: -9em;
    margin-bottom: 5.5em;
    margin-left: auto; 
    margin-right: auto;
    padding-top: 0.6em;
    color: #B00720;
    background-color: #FFE5E5;
    align-items: center;
    justify-content:center;
    font-size: 16px;    
    height: 60px;
    border-radius: 8px;    
    ${StyledIconBase}{
        width: 40px;
        margin-right: 10px;
    }
`