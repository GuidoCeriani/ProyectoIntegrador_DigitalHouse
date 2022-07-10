import styled, { css } from "styled-components"

export const Article = styled.article`
    width: 100%;
    height: 276px;
    margin-bottom: 20px;    
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 4px rgba(0,0,0,0.25);    
    cursor: pointer;
    
    
    ${(props) => {
        switch(props.isActive){
            case true:
                return css `
                ${ImageWrapper}{  
                    ::after{
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 10px;
                        background-color: #1DBEB4;
                        transition: ease-in-out 100ms;
                    }
                }
                `;
            default :
                return css `
                ${ImageWrapper}{
                    ::after{
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 0px;
                        background-color: #1DBEB4;
                        transition: ease-in-out 100ms;
                    }
                    
                    
                }
                `
        }
    }}



    @media (min-width: 768px){
        width: 48.5%;
    }
    @media (min-width: 1280px){
        width: 24%;
    };
    
    
`

export const ImageWrapper = styled.div`
position: relative;
    width: 100%;
    height: 206px;
    overflow: hidden;    
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: none;
    transition: all 100ms ease-in-out;
    img{        
        width: 100%;
        height: auto;
        object-fit: cover;
        object-position: center center; 
        transition: all 400ms ease-in-out;
        ${Article}:hover & {
            width: 110%;
            height: auto;
            transition: all 200ms ease-in-out;
        }
    }
`

export const InfoWrapper = styled.div`
    box-sizing: border-box;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;   
    padding: 0 15px ;
    h3{
        margin-block-start: 0;
        margin-block-end: 0;
        font-weight: 700;
    }
    p{
        margin-block-start: 0.2em;
        margin-block-end: 0;
        font-weight: 700;
        opacity: 0.6;
        font-size: 14px;
    }
`