import styled from "styled-components";


export const HeaderDB = styled.header`
    box-sizing: border-box;
    width: 100%;
    padding: 0 2.5%;    
    height: 93px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items:center;
    position: fixed;
    top: 0;
    background-color: #FFF;
    z-index: 3; 
    box-shadow: 0px 4px 4px 0px #00000040;   
    @media (min-width: 768px){
        flex-direction: row;
        box-shadow:none
    }   
`
export const LogoContainer = styled.div`
    z-index: -1;
`

export const MobileLogo = styled.img`
    width: 68px;
    cursor: pointer;
    @media (min-width: 1280px){
        display: none;
    }
`
export const DesktopLogo = styled.img`
    cursor: pointer;
    display: none;
    @media (min-width: 1280px){
        display: inline-block;
    }
`

export const ButtonContanier = styled.div`
display: none;
@media (min-width: 768px){
        display: flex;
        gap: 16px        
    }

`

export const Button = styled.button`    
    color: #1DBEB4;
    font-weight: 700;
    font-size: 16px;
    width: 164px;
    padding: 10px;
    border-radius: 5px;
    border: solid 1px #1DBEB4;
    background-color: #FFF;  
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover{        
        border: none;
        background-color: #1DBEB4;
        color: #FFF;
    }
    @media (min-width: 1280px){
        width: 206px;
    }  
`

export const Administration = styled.p`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: #545776;
    margin-right: 0.7em;
    padding-top: 1em;
    padding-right: 1em;
    cursor: pointer;
    border-right: 2px solid #1DBEB4;
`


