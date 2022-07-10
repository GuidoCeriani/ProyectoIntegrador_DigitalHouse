import styled from "styled-components";

export const User = styled.div`
    
    text-align: right;
    display: block;
    font-family: "Roboto", sans-serif;    
    width: 7em;    
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    margin-top: 10px;
    @media (min-width: 768px) {
        text-align: left;        
        margin-top: 0;
    }


    h4 {
        color: #FFFFFF;
        @media (min-width: 768px) {
            color: rgba(0, 0, 0, 0.5);
        }
    }
    p {
        color: #545776;
        @media (min-width: 768px) {
        color: #1DBEB4;
        }
    }
    `

export const Card = styled.div`
    text-align: right;
    position: relative;
    display: none;
    button {
        position: absolute;
        top: -10px;
        right: 0;
        background-color: Transparent;
        background-repeat:no-repeat;
        border: none;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        font-family: "Roboto", sans-serif;
        color: #383B58;
        z-index: 1;
        display: none;
        cursor: pointer;
        @media (min-width: 768px) {
            display: block;
            left: auto;
        }
    }
    @media (min-width: 768px) {
        display: flex;
        justify-content: center;
    }
`

export const CardMobile = styled.div`
text-align:right;
    position: absolute ;
    bottom: 15px;
    right: 15px;
`

export const Circle = styled.p`
    display: inline-block;
    width: 37px;
    height: 37px;
    border-radius: 50%;
    background-color: #383B58;
    right: 0.8em;
    color: #FFFFFF;
    font-family: 'Quicksand', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    padding-top: 0.3em;
    background-color: #FFFFFF;
    color: #545776;
    margin-top: -3.5em;
    @media (min-width: 768px) {        
        margin-top: 0px;
        background-color: #383B58;
        color: #FFFFFF;
        margin-right: 10px;
    }
    `

export const Close = styled.div`
    position: absolute;
    bottom: 6em;
    right: 1em;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-align: right;

    p {
        color: #383B58;
    }

    span {
        cursor: pointer;
        color: #1DBEB4;
    }
    `    
export const Hr = styled.hr`
    position: absolute;
    width: 93%;
    border: none;
    height: 1px;
    background-color: #545776;
    bottom: 4em;
    border: 1px solid #545776;
    `
