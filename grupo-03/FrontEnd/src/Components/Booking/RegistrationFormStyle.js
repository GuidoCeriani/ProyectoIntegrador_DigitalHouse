import styled from "styled-components";



export const Data = styled.div`
    padding: 30px 2.5% 15px 2.5%;    
    text-align: left;
    //background-color: rgba(196,196,196,0.25);
    //height: 100vh;
    width: 100%;
    flex-direction: column;
    align-items: center;
    //padding-top: 35%;
    h2 {
        //margin-left: 3%;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #383B58;
    }
    @media (min-width: 768px) {
        //padding-top: 15%;
        h2 {
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 28px;
        }
    }
    @media (min-width: 1280px) {        
        padding: 30px 2.5% 0px 2.5%; 
    }
    `

export const Card = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-top: 15px;
    width: 100%;
    height: 23em;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    border: 1px solid #DFE4EA;
    background-color: #FFFFFF;
    padding: 1em;
    text-align: left;
    //margin-left: 3%;
    gap: 1em;
    label {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: #383B58;
        margin-bottom: 0.8em;
    }
    input {
        background-color: rgba(223, 228, 234, 0.4);
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
        
    }
    input[name=city]::placeholder{        
        color:#BEBEBE
    }
    .city {
        background-color: #FFFFFF;;
    }
    div {
        display: flex;
        flex-direction: column;
    }    
    @media (min-width: 768px) {
        //margin-top: 2%;
        padding-top: 2em;
        padding-left: 1.5em;
        padding-right: 1.5em;
        height: 15em;
        display: grid;
        grid-template-columns: 49% 49%;
        grid-template-rows: 5em 5em;
    }
`