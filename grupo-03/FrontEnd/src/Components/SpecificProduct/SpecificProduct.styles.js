import styled from "styled-components";
import {StyledIconBase} from "@styled-icons/styled-icon"
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';


export const HeaderWrapper = styled.section`
    padding: 12px 2.5%;
    background-color: #545776;
    color: #FFF;
    display: flex;
    justify-content: space-between;
    margin-top: -4px;
    //box-shadow: 0px 4px 4px 0px #00000040;
    h1{
        font-size: 24px;
    }
    p{
        text-transform: uppercase;
        font-size: 14px;
        font-family: 'Quicksand', sans-serif;         
    }
    ${StyledIconBase}{
        width: 30px;
        cursor: pointer;
        transition: all 100ms ease;
        &:hover{
            //width: 35px;
            transform: scale(110%)
        }
    }
    @media (min-width: 768px){
        margin-top: 0;
        box-shadow: none;
    }

`

export const LocationWrapper = styled.section`
    padding: 15px 2.5%;
    background-color: #EBEBEE;    
    box-shadow: inset 0px 12px 10px -12px #00000090;
    display: flex;
    align-items: center;
    @media (min-width: 768px){
        box-shadow: none;
    }
    
`

export const LocationCity = styled.div`
    width: calc(100% - 150px);
    display: flex;
    
    padding-right: 10px;
    ${StyledIconBase}{
        align-self: baseline;
        width: 40px;
        margin-right: 10px;
        color: #545776;
        @media (min-width: 768px){
            width: 20px;
        }
    }
    p{
        font-weight: 500;
        
    } ;
`

export const Score = styled.div`
    width: 150px;
    height:36px;
    text-align:right;
    font-weight: 700;
    display: flex;
    justify-content: flex-end;
    color: #545776;
    >p{
        padding: 6px 12px;
        background-color:#545776 ;
        display: inline-block;
        margin-left: 10px;
        border-radius: 10px;
        font-size: 20px;
        color: #FFF;
    };
`

export const DescriptionWrapper = styled.section`
    margin: 30px 2.5% 0 2.5%;
    p{
        font-size: 14px;
        margin-top: 15px;
        color: #545776;
        font-weight: 500;
        @media (min-width: 768px){
            margin-top: 30px;
            font-size: 14px;
        }
    }
`

export const FeaturesWrapper = styled.section`
    margin-top: 30px ;
    h2{
        margin: 0 2.5% 10px 2.5%;
    }
    div{
        border-top: 1px solid #1DBEB4;
        padding: 15px 2.5% 0 2.5%;
        ${StyledIconBase}{
        color: #1DBEB4;
        margin-right:10px
        }
        li{
            width: 47%;
            margin-bottom: 15px;
            font-weight: 500;
            color: #545776;
            @media (min-width: 768px){
                margin-bottom: 30px;
            }
            @media (min-width: 1280px){
                width:25%;
            }
        }
        @media (min-width: 768px){
            padding-top: 30px;
        }
    }
`

// export const CalendarWrapper = styled.section`
//     //height: 430px;
//     height: auto;
//     background-color: #EBEBEE;
//     padding: 30px 2.5%;

// `



export const PolicyWrapper = styled.section`
    margin-top: 30px; 
    //border-top: 1px solid #1DBEB4;   
    h2{
        margin: 0 2.5% 10px 2.5%;
    }  

`

export const Policies = styled.div`
    padding: 15px 2.5% 0 2.5%;
    border-top: 1px solid #1DBEB4;
    display: flex;
    flex-wrap: wrap;
    gap: 2%;
    div{        
        margin-bottom: 20px; 
        width:100%;
        @media (min-width: 768px){
            width:45%;
            margin-bottom: 10px;
        }
        @media (min-width: 1280px){
            width:23%;            
        }
    }    
    li{
        list-style: none;            
    }
    li, p {
        margin: 20px 0;
        color:#545776;
        font-weight: 500;
    }    
    @media (min-width: 768px){
        padding-top: 30px;
    }

`

export const Booking = styled.div`
  font-size:16px;
  width: 100%;
  font-weight: 700;
  color: #545776;  
  display: flex;  
  flex-wrap: wrap;
  gap: 20px;
  flex-direction:column;
  justify-content:space-between;
  margin-top:30px;
  P{
    width: 100%;
    @media (min-width: 768px) {
    width: 50%;
    } 
    @media (min-width: 1280px) {
    width: 100%;
    } 
  } 
  button{
    font-size:16px;
    width: 100%;
    background-color: #1DBEB4;
    color: #FFF;
    height:40px;
    border: none;
    border-radius: 5px;
    font-weight: 700; 
    transition: background-color 0.3s ease;   
    cursor: pointer;    
    &:hover{
      background-color: #21CFC3;
    }
    @media (min-width: 768px) {
    width: 50%;
    } 
    @media (min-width: 1280px) {
    width: 100%;
    } 
  }
  @media (min-width: 768px) {
    flex-direction:row;
    gap: 0px
  } 
  @media (min-width: 1280px) {
    border-radius: 8px;
    margin-top:0;
    width:32%;
    height: 150px;    
    background-color:#fff;
    padding: 15px;
    flex-direction:column;
    justify-content: center;
    gap: 20px;
    box-shadow: 0px 4px 4px 0px #00000025;
  } 
`

export const GalleryWrapperMobile = styled.section`
    img{
        width: 100%;
        object-fit: cover;
        height: 20em;
    }
`

export const GalleryWrapper = styled.section`
    display: flex;
    margin-right: 2.5%;
    text-align: center;
    width: 80%;
    padding-left: 15%;
    margin-top: 2%;
    img{
        border-radius: 15px;
        object-fit: cover;
        }
    p {
        position: absolute;
        bottom: 20px;
        right: 2%;
        color: grey;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        cursor: pointer;
        background-color: #fff;
        border-radius: 25px;
        width: 80px;
    }
`

export const Grid = styled.div` 
    display: grid;
    grid-template-columns: 50% 50%; 
    grid-template-rows: 50% 50%;
    grid-auto-flow: column; 
    grid-gap: 10px;
    width: 50%;
    margin-left: 10px;
    height: 38.3em;
    position: relative;
    align-content: center;
    margin-top: 5px;
    img{
        width: 100%;
        height: 100%;
        border-radius: 15px;
   }
`

export const Main = styled.section`
    width: 50%;
    height: 9%;
        img {
            width: 100%;
            height: 39em;
        }
    `

export const Gallery = styled.section`
    position: relative;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding-left: 19%;
    margin-top: -2%;
    background-color: white;
    border-radius: 15px;
    left: 11%;
    ${BsFillArrowLeftCircleFill}{
        width: 100px;
        height: 100px;}
    `

export const Wrapper = styled.section`
    position: relative;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 45%;
    height: 50%;
    left: 25%;
    z-index: 1;
    img {
        width: 100%;
        height: 100%;
        z-index: 1;
        object-fit: cover;
        border-radius: 15px;
    }
    button{
        position: absolute;
        top: 20px;
        right: 25px;
        background: none;
        color: #383B58;
        border: none;
        padding: 0;
        font-family: roboto, sans-serif;
        font-size: 16px;
        cursor: pointer;
        outline: inherit;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: white;
    }
    .alice-carousel__stage-item{
        height: 600px;
    }
    `

export const BigImg = styled.div`
    width: 80%;
    height: 50%;
    margin-left: 5px;
    margin-top: 8px;
    img{
        border-radius: 15px;
        height: 39em;
        object-fit: cover;
    }
`

export const SmallImg = styled.div`
    display: flex;
    height: 25%;
    width: 22.5%;
    img{
        width: 80%;
        height: 80%;
        margin: 8px;
        border-radius: 15px;
    }
`
export const DarkBackground = styled.div`
    width: 100vw;
    height: 100vh; 
    background-color: ${(props)=> props.isActive?  "rgba(56, 59, 88, 0.8)" : "rgba(0,0,0,0.0)"};
    position: fixed;
    top:0;
    left:0;    
    visibility: ${(props)=> props.isActive?  "auto" : "hidden"};    
    transition: all 0.3s ease-out;
    z-index: 1;
`

export const ArrowLeft = styled.div`
    position: absolute;
    width: 10%;
    top: 40%;
    left: -15%;
`

export const ArrowRight = styled.div`
    position: absolute;
    width: 10%;
    top: 40%;
    right: -15%;
`
