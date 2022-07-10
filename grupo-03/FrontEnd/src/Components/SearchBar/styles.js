import styled from "styled-components";

export const Wrapper = styled.section`
  background: #545776;
  height: auto;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  padding: 24px;
  color: #ffffff; 
  h1{
    font-size:36px;
  }
  @media (max-width: 1153px){
    height: auto;
  }

  @media (max-width: 480px) {
      width: 100%;
      height: auto;
      background: #545776;
      font-size: 20px;
    
  }

  @media(min-width:415px) and (max-width:768px){
    width: 100%;
    font-size: 20px;
  }

  @media (max-width: 388px){
    height: auto;
  }
  * {
    font-family: inherit;
    font-weight: 500;
  }

  
  .DateRangePicker{
    width: 40%;
    @media (max-width: 768px) {      
      width: 100%;      
    }
  }

  .DateInput{
    text-align: left;
    width: 100px;
    display: flex;
    justify-content: center;
  }

  .DateInput_input{
    //width: auto;
    font-family:Roboto;
    font-size: 16px; 
  }

  .DateRangePickerInput {
    //width:420px;
    width: 100%;
    min-width: auto;
    border-radius: 5px;
    height: 40px;
    padding: 0px;
    display: flex;

    @media (max-width: 480px) {
      height: 40px;
      width: 100%;
      border-radius: 5px;
    }

    @media(min-width:415px) and (max-width:768px){
       width: 100%;
    }

    > * {
      height: 100%;
    }
    
    button{    
      margin: 0px;
      padding-right: 0px;
      @media (max-width: 480px){
        margin: 0px;
        padding-left: 7px;
        
      }
      svg {
      display: flex;
      align-items: center;
      margin-right: 10px;
      height: 100%;
    }
  }    

  .DayPicker_focusRegion{
    padding-bottom: 30px;
  }

  .DayPicker_transitionContainer{
    height: 320px !important;
  }

}

      
  .DateInput_input_1{
    padding: 0px;
    height: 36px;
    margin-top: 2px;
    
    @media (max-width: 480px){
      padding-top: 5px;
    }
  }
  .DateRangePickerInput_arrow {
    display: none;
    
  }
`;

export const Input = styled.input`
  height: 40px;
  width: auto;
  border-radius: 5px;
  border: none;
`;

export const Button = styled.button`
  background: #1dbeb4;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  width: 220px;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 700;
  height: 40px;
  cursor: pointer;
  transition: all 0.3s ease; 
  &:hover{
    background-color: #44D8CA;
  }
  @media(max-width:768px){
    width: 100%;
  }
  @media (max-width: 480px){
    height: 40px;
    width: 100%; 
  }  
`;

export const SelectionContainer = styled.form`
  width: 100%;
  display: flex;
  justify-content: column;
  margin-top: 15px;
  gap: 10px;
  padding: 0 9%;
  @media (max-width: 1280px){    
    padding: 0 5%;;
  }  
  @media (max-width: 768px){
    flex-direction: column;    
  }  
`;

export const SearchLocation = styled.div`
position: relative;
width:40%;
@media(max-width: 768px){
    width: 100%;
  }
`;
export const SearchBox = styled.div`
  position: relative;
  display: flex;
  background: #ffffff;
  align-items: center;  
  width:100%;
  min-width: auto;
  //border-radius: 5px;  
  height: 40px;  
  border-radius: ${(props)=>props.isSuggestionsActive ? " 5px 5px 0 0": "5px"};
  svg{
    width: auto;
    padding: 8px 10px;
    height: 100%;    
  } 

  @media(max-width: 480px){
    width: 100%;
  }

  @media(min-width:415px) and (max-width:768px){
    width: 100%;
  }
  
  input {
    width:100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    outline: none;
    font-weight: 500;
    font-size: 16px;

    @media (max-width: 480px) {
      width: 100%;
      border-radius: 5px;
    }
  }
  path {
    fill: #a9abba;
  }
`;

export const SearchResultsList = styled.ul`
position: absolute;
top: 40px;
list-style:none;
background-color: #FFF;
width: 100%;
z-index:1;
text-align: left;

border-radius: 0 0 5px 5px;
box-shadow: 0px 4px 4px 0px #00000040; 
cursor: pointer;

li{
  padding: 0 10px;
  height: 65px;  
  display: flex;
  flex-direction:row;
  align-items:center;
  border-bottom: 1px solid #1dbeb4;
  &:last-child{
    border-bottom: none
  }
  h4{
    font-size: 16px;
    color: black;
    font-weight: 700;
    line-height: 16px;
    margin-bottom: 5px;   
    }
  p{
    font-size: 14px;
    color: #545776;
    line-height: 14px;
  }
  svg {      
    width: 20px;
    padding:0;
    margin-right: 10px;
  }
}  
`;


