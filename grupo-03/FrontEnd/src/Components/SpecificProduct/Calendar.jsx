import React, {useState, useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {  DayPickerRangeController } from "react-dates";
import {CalendarBlock} from "./react_dates_overrides"
import { Booking } from "./SpecificProduct.styles"
import { DataContext } from "../../Context/DataProvider"
import { types } from "../../Context/dataReducer"
import moment from "moment"

const Calendar =({ id, rangeDates, product, isInteractiveCalendar = false}, refreshHandler)=>{

    const [state, dispatch] = useContext(DataContext)    
    const navigate = useNavigate() 

    const [checkIn, setCheckIn] = useState(null)
    const [checkOut, setCheckOut] = useState(null)      
    const defaultFocusedInput = "startDate";
    const [focusedInput, setFocusedInput] = useState(defaultFocusedInput)  
    const [refresh, setRefresh] = useState(false)
    

    let searchedMonth = Number(moment(checkIn).format("MM"))  
    let actualMonth = Number(moment().format("MM"))
    let calculatedMonth = searchedMonth - actualMonth   
    
    console.log(calculatedMonth);
      

    useEffect(()=>{        
        const check=()=>{
            setCheckIn(JSON.parse(window.sessionStorage.getItem('checkIn')))
            setCheckOut(JSON.parse(window.sessionStorage.getItem('checkOut')))            
        }      
        check()  
    },[]) 

    const handleNavigation = ()=>{
        localStorage.setItem("product", JSON.stringify(product))        
        localStorage.setItem("rangeDates", JSON.stringify(rangeDates))                        
        if(state.isLogged){            
            navigate(`/products/${id}/booking`)
        }
        else{
            dispatch({
                type: types.accessDenied,
                payload: true,
            })
            navigate(`/login`)
        }        
    }
   
   
    const isBlocked = (day) => {
         const notAvailableDates = rangeDates? rangeDates : null
        // if(notAvailableDates?.some(date => day.isSame(date), 'YYYY,MM,DD')){
        //     return true
        // }
        if(notAvailableDates?.some(date => day.isSame(moment(date).format('YYYY,MM,DD')))){
            return true
        }   
    }
    
    const refreshCalendar=()=>{
        setRefresh(!refresh)
    }  

    return(
       
        
            <CalendarBlock isInteractiveCalendar={isInteractiveCalendar}>   
                {isInteractiveCalendar ?                

                    calculatedMonth >= 0?
                    <>
                        <span/>
                        <DayPickerRangeController                             
                            isFocused={true}                
                            numberOfMonths={2} 
                            transitionDuration={0}
                            hideKeyboardShortcutsPanel={true} 
                            isOutsideRange={(day) => moment(day).isBefore(moment())}    
                            isDayBlocked={(day) => isBlocked(day)}
                            startDate={checkIn? moment(checkIn): null}
                            endDate={checkOut? moment(checkOut): null}     
                            focusedInput={focusedInput || defaultFocusedInput}
                            onDatesChange={({ startDate, endDate }) => {  
                                setCheckIn(startDate);
                                setCheckOut(endDate);
                                dispatch({
                                    type: types.dateRange,
                                    payload: {
                                      startDate: moment(startDate).format("YYYY-MM-DD"),
                                      endDate: moment(endDate).format("YYYY-MM-DD")
                                    }      
                                  })
                                window.sessionStorage.setItem("checkIn", JSON.stringify(startDate))
                                window.sessionStorage.setItem("checkOut", JSON.stringify(endDate))
                            }}                
                                           
                            onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
                            initialVisibleMonth={ () => moment().add(calculatedMonth, "months")}                            
                            onNextMonthClick={()=>refreshCalendar()}
                            onPrevMonthClick={()=>refreshCalendar()}  
                        /> 
                        </>

                        :
                        <DayPickerRangeController                             
                            isFocused={true}                
                            numberOfMonths={2} 
                            transitionDuration={0}
                            hideKeyboardShortcutsPanel={true}                              
                            startDate={null}
                            endDate={null}  
                            isOutsideRange={(day) => moment(day).isBefore(moment())}  
                            isDayBlocked={(date) => isBlocked(date)}     
                            focusedInput={focusedInput || defaultFocusedInput}
                            onDatesChange={({ startDate, endDate }) => {  
                                setCheckIn(startDate);
                                setCheckOut(endDate);
                                dispatch({
                                    type: types.dateRange,
                                    payload: {
                                      startDate: moment(startDate).format("YYYY-MM-DD"),
                                      endDate: moment(endDate).format("YYYY-MM-DD")
                                    }      
                                  })
                                window.sessionStorage.setItem("checkIn", JSON.stringify(startDate))
                                window.sessionStorage.setItem("checkOut", JSON.stringify(endDate))
                            }}              
                            onFocusChange={(focusedInput) => setFocusedInput(focusedInput)} 
                            onNextMonthClick={()=>refreshCalendar()}
                            onPrevMonthClick={()=>refreshCalendar()}                                             
                        /> 


                :   <>
                        <DayPickerRangeController
                            isFocused={true}                    
                            numberOfMonths={2}            
                            noBorder={true}
                            hideKeyboardShortcutsPanel={true}   
                            daySize={40} 
                            transitionDuration={0}    
                            isOutsideRange={(day) => moment(day).isBefore(moment())}   
                            isDayBlocked={(date) => isBlocked(date)}                    
                            startDate={checkIn? moment(checkIn): null}
                            endDate={checkOut? moment(checkOut): null}      
                            focusedInput={checkIn}
                            initialVisibleMonth={checkIn? ()=>moment(checkIn): null} 
                            onNextMonthClick={()=>refreshCalendar()}
                            onPrevMonthClick={()=>refreshCalendar()} 
                        />    

                        <Booking>
                            <p>Agregá tus fechas de viaje para obtener precios exactos</p>                    
                            {/* <button onClick={()=>{navigate(`/products/${id}/booking`);storageProduct()}}>Iniciar reserva</button> */}
                            <button onClick={()=>handleNavigation()}>Iniciar reserva</button>
                        </Booking>
                    </> 
                
                }        
                
                
            </CalendarBlock>           
        
    )
}

export default Calendar;