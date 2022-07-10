import styled from "styled-components"
import {StyledIconBase} from "@styled-icons/styled-icon"
import {Favorite} from "@styled-icons/material-rounded/"


export const Article = styled.article`
    width: 100%;
    background-color: #FFF;
    margin-bottom: 16px;
    font-size: 14px;
    font-weight: 500;
    box-shadow: 0 4px 4px rgba(0,0,0,0.25);
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;    
    @media (min-width: 768px) {
        height: ${props=> props.isStaticHeight ? "279px" : "auto"};
    }
    @media(min-width: 1280px){
        width: 49.3%;
        height: 283px;
    }
`

export const ImageWrapper = styled.div`
    position:relative;
    overflow: hidden;
    height: 249px;   
    width:100%; 
    @media (min-width: 768px){
        width: 48.5%;
        margin: 15px 0;
        border-radius: 0 10px 10px 0;
        height: ${(props)=> props.isStaticHeight ? "249px" : "auto"};       
    }
    @media (min-width: 1280px){
        margin: 0;
        border-radius: 0;
        height: 100%;
    }         
`

export const ImgProduct = styled.img`             
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;         
`

export const FavoriteIcon = styled(Favorite)`
    position: absolute;
    top: 15px;
    right: 15px;
    width: 25px;
    color: #FFF;
    box-shadow: (0px 2px 2px rgba(0, 0, 0, 0.1));
    transition: all 0.2s ease;
    cursor: pointer;
    &:hover{
        color:#F21313
    }
`

export const InfoWrapper = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding: 15px;
    @media (min-width: 768px){
        width: 48.5%;
        padding-left: 0;
    }
    @media (min-width: 1280px) {
        padding: 0;
        width: 51.5%;
    }
   
`
export const MainInfo = styled.div`
    position: relative;    
    @media (min-width: 1280px){
            height: 198px; 
            padding: 15px ;
        }   
`

export const HeaderInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin-bottom: 5px;
`
export const TitleAndCategory = styled.div`    
    div{
        display: flex;
        p{
        font-family: 'Quicksand', sans-serif;            
        margin-block-start:0;
        margin-block-end: 0.3em;
        margin-right: 10px;  
        text-transform: uppercase;
        font-weight: 700;
        opacity: 0.5;
        }    
    }
    h3{
        font-size: 24px;
        margin-bottom: 6px;
    }    
`

export const Score = styled.div`
    text-align: right;
    font-weight: 700;
    p{        
        margin-block-start:0;
        margin-block-end: 0.2em;
        &:first-child{
            color: #fff;
            display: inline-block;
            padding: 2px 12px;
            border-radius: 10px;
            background-color: #383B58;
            font-size:20px
        }
    }
`
export const LocationInfo = styled.div`
    margin: 8px 0;
    ${StyledIconBase}{
        height: 18px;
        margin-right: 5px;
    }
    p{
        display: inline-block;
        &:last-child{
            //color: #1DBEB4;
            text-transform: uppercase;
            /* cursor: pointer;
            transition: all 0.3s ease; 
            &:hover{
                color: #44D8CA;
            } */
        }
    }
`
export const FeaturesIconsWrapper = styled.div`    
    height: 20px;   
    display: none;
    margin-bottom: 31px;  
    @media (min-width: 768px){
        display: block
    }
    @media (min-width: 1280px){
        margin-bottom: 20px;
    } 
`

export const ButtonWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    @media (min-width: 1280px){        
        display: flex ;
        flex-direction: column;
        justify-content: center;
        height: 70px;
        background-color: #FFF;
        position: absolute;
        bottom: 0; 
        padding: 0 15px; 
    }   
`

export const Button = styled.button`
    width: 100%;
    height:40px;
    font-size: 16px;
    font-weight: 700;
    background-color: #1DBEB4;
    padding: 10px 0;
    color: #FFF;
    border: none;
    border-radius:5px; 
    cursor: pointer;  
    transition: all 0.3s ease; 
    &:hover{
        background-color: #44D8CA;
    }
`
export const ReadMoreButton = styled.span`
    color: #1DBEB4;
    cursor: pointer;
    transition: all 0.3s ease; 
    &:hover{
        color: #44D8CA;
    }
`

export const BoxContent = styled.div`
    margin-bottom: 15px;
    margin-top: 20px;
    @media (min-width: 768px){
        margin-top: 0px;
    };
    @media (min-width: 1280px){
        height:100%;
        position: absolute;             
        background-color: #FFF;  
        transition: all 0.3s ease; 
        top: ${(props)=> props.isActive? "145px" : "0"};
        z-index:0;         
        padding-right: 15px;
        padding-top: 15px;        
    }  
`

