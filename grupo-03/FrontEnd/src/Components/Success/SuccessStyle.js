import styled from "styled-components";

export const Text2 = styled.p`
    padding-top: 2em;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: flex-end;
    text-align: center;
    color: #383B58;
`

export const Text1 = styled.p`
    padding-top: 0.5em;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: flex-end;
    text-align: center;
    color: #383B58;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5em;
    width: 100vw;
    height: 100vh;
    background-color: rgba(196, 196, 196, 0.1);
    @media (min-width: 768px) {
        padding-top: 13em;
    }
    @media (min-width: 1280px) {
        padding-top: 0;
    }
    `
    
export const Card = styled.div`
    margin-top: 7em;
    padding-top: 3em;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    box-sizeing: border-box;
    width: 80%;
    height: 300px;
    background-color: #FFFFFF;
    border: 1px solid #DFE4EA;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    transition: all 0.2s ease-in-out;
    img {
        width: 78px;
        height: 74px;
        text-align: center;
    }
    h1 {
        padding-top: 1em;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: flex-end;
        text-align: center;
        color: #1DBEB4;
    }
    button {
        margin-top: 1.5em;
        background: #1DBEB4;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
        border-radius: 5px;
        color: #FFFFFF;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        border: none;
        width: 206px;
        height: 40px;
        transition: all 0.2s ease-in-out;
        &:hover{        
            border: none;
            background-color: #FFFF;
            color: #1DBEB4;
        }
    }
    @media (min-width: 1280px) {
        margin-top: 15em;
        width: 30%;
    }
    `
