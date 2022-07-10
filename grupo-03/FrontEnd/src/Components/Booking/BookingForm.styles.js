import styled from "styled-components";
import {StyledIconBase} from "@styled-icons/styled-icon"



export const Form = styled.form`
    background: linear-gradient( #EBEBEE 65%, #D4D4D7 35% ) ;
    padding-bottom: 40px;
    display: flex;
    flex-wrap: wrap;
    @media (min-width: 1280px){
        padding: 0 2.5% 40px 1%;       
    }
    h2{
        font-size: 20px;
        @media (min-width: 768px){
            font-size: 24px;       
        }
    }
`

export const FieldsetData = styled.fieldset`
    border: none;
    width: 100%;
    @media (min-width: 1280px){
        width: 70%       
    }
`

export const CalendarWrapper = styled.section`
    //height: 430px;
    height: auto;
    //background-color: #EBEBEE;
    position: relative;
    padding: 30px 2.5%;
    h2{
        margin-bottom: 15px;
    }

`


export const Time = styled.div`
    padding: 5px 2.5% 15px 2.5%;
    position: relative;
    @media (min-width: 1280px){
        padding: 0px 2.5% 15px 2.5%;       
    }
`

export const TimeWrapper = styled.div`
    padding: 20px 15px;
    background-color: #FFF;
    margin-top: 15px;
    border-radius: 8px;
    box-shadow: 0px 4px 4px 0px #00000040;
    div{
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        font-weight:500;
        align-items: flex-start;
        //margin-top: 5px;
        margin-bottom: 25px;
        ${StyledIconBase}{                
            width: 25px;                
        }
        p{
            width: calc(100% - 30px);
            font-size: 14px;
        }
    }
    label{
        font-size: 12px;
        font-weight: 500;
        display: block;
    }
    select{
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        width: 100%;
        height: 40px;
        border: none;
        padding: 0 1em;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;  
        color: #BEBEBE;
        margin-top: 10px;
        @media (min-width: 768px){
            width: 50%        
        }
        @media (min-width: 1280px){
            width: 50%        
        }
    }
    option{
        color: #383B58;
        height: 20px;
        
        &:first-child{
            color: #BEBEBE;
        }
    }
    
`

export const FieldsetSummary = styled.fieldset`
    margin: 30px 2.5% 0 2.5%;
    border: none;
    background-color: #FFF;
    border-radius: 8px;
    box-shadow: 0px 4px 4px 0px #00000040;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    @media (min-width: 1280px){
        width: 30%;
        margin: 78px 0 15px 0;        
        height: auto;
        align-items:flex-start
    }
    h2{
        padding: 30px 15px 12px 15px;
        width: 100%;
        @media (min-width: 768px){
            padding: 20px 15px 12px 20px;
        }
        @media (min-width: 1280px){
            padding: 20px 20px 15px 20px;
        }
    }
    h3{
        font-size: 20px;
        @media (min-width: 768px){
            font-size: 24px;
        }

    }
`

export const ImageWrapper = styled.div`
    width: 100%;
    height: 270px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;    
    img{
        width: 100%;
        //width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center; 
    }
    @media (min-width: 768px){
        width: calc(50% - 10px);
        margin-left: 20px;
        height:311px
    }
    @media (min-width: 1280px){
        width: 100%;
        margin-left: 0;
        height: 428px;
        
    }

`

export const SummaryWrapper = styled.div`
    width: 100%;
    padding: 15px;
    position: relative;
    @media (min-width: 768px){
        width: calc(50% - 10px);
        padding: 20px;
        padding-top: 0px;
    }     
    @media (min-width: 1280px){
        width: 100%;
        padding: 20px;
    } 
    p{
        font-size: 14px;        
    }
    div{
        &:first-child{
            p{
                font-family: 'Quicksand',sans-serif;                
                text-transform: uppercase;
                font-weight: 700;
                opacity: 0.5;            
            }
            h3{
                font-size: 20px;
                font-weight: 700;
            }
        }
        &:nth-child(2){
            margin: 15px 0;
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
            font-weight:500;
            align-items: flex-start;            
            ${StyledIconBase}{
                
                width: 20px;                
            }
            p{
                width: calc(100% - 25px)
            }
            @media (min-width: 1280px){
                margin: 20px 0 40px 0;
                
            } 
        }
    }    
    input[type=date]{
        border: none;
        font-family: 'Roboto', sans-serif;
        font-weight:700;        
        font-size: 15px;
        color: #4F4F50;
    }
    input[type=date]::-webkit-inner-spin-button,
    input[type=date]::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
    }
`

export const CheckBlock = styled.div`
    display: flex;
    justify-content: space-between;
    border: solid #BEBEBE 1px;
    border-left: none;
    border-right: none;
    padding-top: 20px;
    padding-bottom: 10px;    
    label{
        font-size: 16px;
        font-weight:700;
        color: #4F4F50
    }
    @media (min-width: 1280px){
        padding-bottom: 20px;                 
    } 
`

export const CheckInDiv = styled(CheckBlock)`

`

export const CheckOutDiv = styled(CheckBlock)`
    border-top: none;
    margin-bottom: 45px;

    @media (min-width: 768px){
        margin-bottom: 45px;                 
    } 

`

export const Button = styled.button`
    width: 100%;    
    padding: 15px 0;
    border: none;
    background-color: #1DBEB4;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    color: #FFF;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    cursor: pointer;
    transition: all 0.3s ease; 
    &:hover{
        background-color: #44D8CA;
    }
`

export const GeneralBlockError = styled.p`
    font-size: 12px !important;
    position: absolute;    
    border-radius: 5px;
    padding: 8px 20px 6px 35px;
    ${StyledIconBase}{
        position: absolute;                
        height: 20px; 
        left: 12px;
        bottom: 3.5px;
    }
    /* @media (min-width: 768px){
        bottom : 80px;                 
    }     */
`

export const InfoDates = styled(GeneralBlockError)`
    color: #4F4F50;
    bottom: 70px;    
    background-color: #FFF9E9;
    @media (min-width: 768px){
        bottom : 74px;                 
    }  
    
`
export const ErrorDates = styled(GeneralBlockError)`
    color: #B00720;
    bottom: 70px;    
    background-color: #FFE5E5;
    @media (min-width: 768px){
        bottom : 74px;                 
    } 
`

export const ErrorTime = styled(GeneralBlockError)`    
    bottom: 0;
    color: #B00720;
    background-color: #FFE5E5;
`

export const ErrorRangeDates = styled(GeneralBlockError)`
    bottom: 20px;
    left: calc(2.5% + 15px);
    color: #B00720;
    background-color: #FFE5E5;    

`
export const ErrorBooking = styled(GeneralBlockError)`    
    bottom: -30px;
    width: calc(100% - 40px);
    padding: 8px 20px 6px 40px;
    //width: 100%;
    color: #B00720;
    background-color: #FFE5E5;
    ${StyledIconBase}{                        
        
        left: 12px;
        bottom: 10px;
    }
`