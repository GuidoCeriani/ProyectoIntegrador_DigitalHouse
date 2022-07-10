import styled from "styled-components";

export const Card = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 5% 15px 0 15px;
    width: auto;
    height: auto;
    //border: 1px solid #DFE4EA;
    background-color: #FFFFFF;
    //padding: 1em;
    text-align: left;
    //gap: 1em;
    font-family: 'Roboto', sans-serif;
    
    @media (min-width: 768px) {
        margin: 2% 15px;
    }
    @media (min-width: 1280px) {
        margin-top: 2%;
    }
`

export const Input = styled.input`
    background-color: #FFFFFF;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    width: 100%;
    height: 40px;
    border: none;
    padding:0 1em;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    margin-top: 7px;
    ::placeholder{
        color: #BEBEBE;
    }

`

export const GeneralInfo = styled.div`
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;    
    
    select {
        background-color: #FFFFFF;
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        width: 100%;
        height: 40px;
        border: none;
        padding:0 1em;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        margin-top: 7px;
        :invalid { 
            color: gray;
        }
    }
    option {
        background-color: #FFFFFF;
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        width: 100%;
        height: 40px;
        border: none;
        padding-left: 1em;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        margin-top: 7px;        
    }
    
    .city {
        background-color: #FFFFFF;
    }
    
`

export const Description = styled.div`

`

export const LabelTextArea = styled.label`
    width: 100%;
    display: inline-block;        
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #383B58;
    margin-bottom: 25px;
    
    @media (min-width: 768px){
        width: 48%;
        margin-bottom: 18px;
        :last-child{
        margin-bottom: 5px;
        }
    }
    
    textarea {
        background-color: #FFFFFF;
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        height: 80px;
        width: 100%;
        border: none;
        padding:0 1em;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        resize: none;
        padding-top: 0.5em;
        margin-top:7px;
        ::placeholder{
            color: #BEBEBE;            
        }
    }
    /* select {
        option[hidden]{         
                color:red
            
        }
    } */
`

export const LabelDescription = styled(LabelTextArea)`
    @media (min-width: 768px){
        width: 100%;
        //margin-bottom: 0.8em;
    }
`