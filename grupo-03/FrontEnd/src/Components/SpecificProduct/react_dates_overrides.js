import styled, {css} from "styled-components"

export const CalendarBlock = styled.div`
height: auto;
display: flex;  
//margin-top: 30px;
//gap: 30px;
flex-wrap:wrap;
align-items:center;
justify-content:space-between;
${(props)=>{
  switch (props.isInteractiveCalendar) {
    case true:
      return css `
      .CalendarMonth_table tbody tr td{
        //cursor: pointer !important
      }
      
      .CalendarDay__selected:hover {      
        //background: #1DBEB4;      
        //color: #fff;
      }
      .CalendarDay__hovered_span:hover,
      .CalendarDay__hovered_span {      
        //background: red;
        //background: #66e2da;
        //color: #fff
      }
      .CalendarDay__selected_span{
          &:hover{
            //background-color: #66e2da;
          }
      }
      .CalendarDay__selected{
        &:hover{
          //background-color: #66e2da;
        }
      }
      .DayPicker{
        width:100% !important;
        //background-color: #FFF;
        border-radius: 0 0 5px 5px;
        //box-shadow: 0px 4px 4px 0px #00000025;
        z-index: 0;
        @media (min-width: 1280px) {
          width: 100% !important;
          border-radius: 5px;
        }       
      }  
      `;
    default:
      return css `      
            
        .CalendarDay{
          &:hover{
            //background-color: #fff;
          }
        }  
        .CalendarDay__blocked_calendar:hover{          
            //background-color: #cacccd 
        }       
        .CalendarDay__selected{
          &:hover{
            //background-color: #1DBEB4;
          }
        }
        .CalendarDay__selected_span{
          &:hover{
            //background-color: #1DBEB4;
          }
        }
        .DayPicker{
        width:100% !important;
        //background-color: #FFF;
        border-radius: 0 0 5px 5px;
        //box-shadow: 0px 4px 4px 0px #00000025;
        z-index: 0;
        @media (min-width: 1280px) {
          width: 65.5% !important;
          border-radius: 5px;
        }       
      }  
      `;
  }
}}
  .CalendarMonth {      
      padding: 0px 0px !important;
  }

  .CalendarMonth_caption{      
      padding-bottom:45px
  }

  .CalendarDay {
      font-size: 12px;
      height: 5px

  }

  .CalendarMonth_table{
    width: 100%;
  }

  .CalendarMonth_table tbody tr {       
      height: 5px;
      td{          
          height: 5px;
          border: none;
          cursor: auto;        
      }
      td:hover{
          //background-color: #FFF;
      }
  }

  // Will edit everything selected including everything between a range of dates
  .CalendarDay__selected_span {
      //background: #1DBEB4; //background
      //color: white; //text
      //border: 1px solid $light-red; //default styles include a border
      height: 5px
    }
    
    // Will edit selected date or the endpoints of a range of dates
    .CalendarDay__selected {   
      //border-radius: 50% 0 0 50% ;
      //background:  #1DBEB4;
      //color: white;
    }
    
    // Will edit when hovered over. _span style also has this property
    /* .CalendarDay__selected:hover {
      //background: #44D8CA;
      background: #1DBEB4;
      //background: red;
      color: white;
    } */
    
    // Will edit when the second date (end date) in a range of dates
    // is not yet selected. Edits the dates between your mouse and said date
    /* .CalendarDay__hovered_span:hover,
    .CalendarDay__hovered_span {
      //background: none;
      background: #66e2da;
      color: #fff;
  } */  
  
  /* .DayPicker{
    width:100% !important;
    background-color: #FFF;
    border-radius: 0 0 5px 5px;
    box-shadow: 0px 4px 4px 0px #00000025;
    @media (min-width: 1280px) {
      //width: 65.5% !important;
      border-radius: 5px;
    }       
  }   */

  .DayPicker_transitionContainer{
    width: 100% !important;
    height: 340px !important;
  }

  .DayPicker >div >div{
    width: 100% !important;    
    padding: 0 15px;
    height: 360px;
    @media (min-width: 768px) {
      padding: 0;
    }
    @media (min-width: 1280px) {
      padding: 0 80px;
    }
    
  }  

  .CalendarMonthGrid{
    width: 100% !important;
    left: 0;
   
  }
  .CalendarMonthGrid_month__horizontal{
    width: 100%;
    padding: 0 30px;
    height: 320px;
    margin: 20px 0;
    &:nth-child(2){
      border:none;
      @media (min-width: 768px) {
        border-right: 1px solid #545776;
    }
    }
    @media (min-width: 768px) {
      width: 50%;
    }
  }

  .DayPicker__withBorder{

    box-shadow: 0px 4px 4px 0px #00000040;
  }


  
  .DayPicker_weekHeader{
    width: 100%;
    padding: 0 !important;
    top: 77px
  }

  .DayPicker_weekHeader{
    &:nth-child(1){
      left:0
    }
    &:nth-child(2){
      left: 0% !important;
      @media (min-width: 768px) {
        left: 50% !important;
    }
    }
    @media (min-width: 768px) {
      width: 50%;
    }
    
  }

  .DayPicker_weekHeaders__horizontal{
    margin-left: 0;
  }

  .DayPicker_weekHeader_ul{
    width: 100%;
    display: flex;
    justify-content:space-around;
    padding: 0 30px
  }

  .DayPicker_weekHeader_li{
    width: auto !important
  }

  

  .DayPickerNavigation_leftButton__horizontalDefault {
    left: 8%;
    &::before{
      content: "<";
    } 
    @media (min-width: 768px) {
      left:4%;
    } 
    @media (min-width: 1280px) {
      left:-35px;
    }
    
  }

  .DayPickerNavigation_rightButton__horizontalDefault{
    right: 8%;
    &:before{
      content: ">";
    }  
    @media (min-width: 768px) {
      right:4%;
    }  
    @media (min-width: 1280px) {
      right:-35px;
    }   
  }
  .DayPickerNavigation_leftButton__horizontalDefault, .DayPickerNavigation_rightButton__horizontalDefault{    
  }
  .DayPickerNavigation_button__horizontalDefault {
    position: absolute;    
    top: 30px;
    @media (min-width: 1280px) {
      top: 150px;
    }
  }
  .DayPickerNavigation_button__default {
    border: none;
    
    padding: 13px 15px;
    border-radius: 50%;
    color: #545776;
    font-family: 'Quicksand', sans-serif;  
    font-size: 20px;  
    font-weight:700;
    transition: background-color 0.3s ease; 
    @media (min-width: 1280px) {
      color: #FFF;
      background-color:#1DBEB4;      
      &:hover{
        background-color: #44D8CA;
      }
    }   
  }

  .DayPickerNavigation_svg__horizontal{
    fill: #FFF;
    display:none;  
  }
`

