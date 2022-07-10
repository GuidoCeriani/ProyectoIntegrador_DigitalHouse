import styled from "styled-components";

export const Main = styled.main`
    width: 100%;    
    margin-top: 95px;   
    margin-bottom: 58px;
    background-color:#FFF;
    h2{
        //styleName: B- Heading 2;
        //font-family: Roboto;
        padding: 5% 2.5%;
        font-size: 20px;
        font-weight: 700;
        color:#383B58;
        background-color:#EEEEF1;
        @media (min-width: 768px) {
            background-color: none;   
            font-size: 24px;
            padding: 5% 3% 2.5%;
        }
        @media (min-width: 1280px) {            
            padding: 3% 2.5% 1.5%;
        }
        
    }
    @media (min-width: 768px) {
        background-color:#EEEEF1;   
    }
        
    
`