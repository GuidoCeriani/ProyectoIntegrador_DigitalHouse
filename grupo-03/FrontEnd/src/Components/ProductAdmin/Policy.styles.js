import styled from "styled-components";


export const PolicyWrapper = styled.div`
    color: #545776;
    margin: 15px 15px 0px;    
    div{
        width: 100%;
        @media (min-width: 768px){            
            margin-bottom: 18px;
            /* :last-child{
            margin-bottom: 5px;
            } */
    }
    }
    label{
        width: 100%;
        display: inline-block;
    }
    textarea{
        width:100%;
        resize: none;
        height: 80px;
        @media (min-width: 1280px) {        
            height: 150px;      
    }
    }
    h4{        
        font-family: Roboto;
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 8px;       
    }
    @media (min-width: 768px) {
        margin: 15px 15px;
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        padding: 15px;
    }
    @media (min-width: 1280px) {        
        //padding: 30px;
        display: flex;
        gap: 3%;
        padding: 30px 30px 5px ;
        margin: 15px 15px 30px;
    }

`