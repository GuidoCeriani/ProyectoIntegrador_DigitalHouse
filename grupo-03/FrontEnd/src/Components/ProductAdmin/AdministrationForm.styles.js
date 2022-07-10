import styled from "styled-components";

export const Form = styled.form`
    padding: 0;
    margin: 0 2.5%;  
    border-radius: 8px;    
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;    
    fieldset{
        border: none;
        background-color: #FFF
    }
    h3{        
        font-size: 16px;
        font-weight: 700;
        color: #383B58;
        margin-bottom: 20px;  
    }
    @media (min-width: 768px) {
        padding: 2% 1.5%;
        margin: 0 2.5% 2.5%;
        border: 1px solid #DFE4EA;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background-color: #FFF;
    }
    @media (min-width: 1280px) {
        padding: 1% 1.5%;
        //margin: 0 2.5% 2.5%;
        //border: 1px solid #DFE4EA;
        //box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        //background-color: #FFF;
    }

`

export const Button = styled.button`
    width: calc(100% - 15px);
    height: 50px;
    color: #FFF;
    background-color: #1DBEB4;
    border: none;  
    align-self: center ;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;  
    transition: all 0.3s ease; 
    &:hover{
        background-color: #44D8CA;
    }
    @media (min-width: 768px) {
        width: 370px;
        margin: 20px 0;
    }
    

`