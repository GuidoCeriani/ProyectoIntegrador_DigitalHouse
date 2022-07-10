import { useState,useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "../SpecificProduct/Calendar";
import { Place, CheckCircleOutline, Error } from "@styled-icons/material-rounded";
import Rate from "../Rate/Rate";
import { Form, FieldsetData, FieldsetSummary,CalendarWrapper, Time, ImageWrapper, SummaryWrapper, CheckInDiv, CheckOutDiv, Button, TimeWrapper, InfoDates, ErrorDates, ErrorTime, ErrorRangeDates, ErrorBooking} from "./BookingForm.styles";
import { Data, Card } from "./RegistrationFormStyle";
import { DataContext } from "../../Context/DataProvider";
import {Buffer} from 'buffer';
import { types } from "../../Context/dataReducer";



const BookingForm = ({blockedRangeDates,isNotAllowedDates, userName,userSurname,UserEmail, imageUrl, imageTitle, category, title, place, checkIn, checkOut, idProduct}) => {
  
    const navigate = useNavigate()
    const [city, setCity] = useState('')
    const [errorDates, setErrorDates] = useState(false)
    const [formDatesError, setFormDatesError] = useState(false)
    const [formTimeError, setFormTimeError] = useState(false)
    const [errorBooking, setErrorBooking] = useState(false)
    const [time, setTime] = useState("")     
    
    const [state, dispatch] = useContext(DataContext)
    const {userData} = state
    

    const handleCity = (e) =>{
        setCity(e.target.value);
    }

    const handleTime=(e)=>{
      setTime(e.target.value)
      if(e.target.value !== ""){
        setFormTimeError(false)
      }        
    }

    useEffect(()=>{
      if(checkIn === "Fecha inválida" || checkOut === "Fecha inválida"){
        setErrorDates(true)
      }
      else{
        setErrorDates(false)
        setFormDatesError(false)
      }
      
    },[checkIn,checkOut,errorDates])

    const handleSubmit =(e) =>{      
      e.preventDefault()
      if(errorDates){setFormDatesError(true)}      
      if(!formDatesError){setErrorDates(false)}    
      if(time === ""){
        setFormTimeError(true)
      }       
      
      
      if(!errorDates && !formDatesError && time !== "" && !isNotAllowedDates){  
          const dataBooking ={
            checkIn : checkIn,
            checkOut : checkOut,            
            productId : idProduct,
            userId : userData.id,
            token: userData.jwt
          }

          console.log(dataBooking);
          fetch('http://ec2-18-233-111-51.compute-1.amazonaws.com/reservations',{
            method: 'POST',
            headers: new Headers({
              
              'Content-Type' : 'application/json',
              'Accept' : 'application/json',
              //"Authorization" : 'Basic ' + btoa(`user : 123`),
              //authorization : 'Basic ' + Buffer.from(`user:123`).toString('base64'),              
              authorization : 'Bearer ' + dataBooking.token,              
            }),
            body: JSON.stringify(dataBooking)
          })
          .then(response => {
            console.log(response.status)
            switch(response.status){
              case 201:                
                navigate("/success");  
                dispatch({
                  type: types.dateRange,
                  payload:   {
                    startDate: "",
                    endDate: ""
                 }
                })              
                break;
              default:
                setErrorBooking(true)
                break;                
            }
            response.text()
            console.log(response);
          })
          
          .then(data => console.log(data)) 

          sessionStorage.removeItem("checkIn")
          sessionStorage.removeItem("checkOut")
          localStorage.removeItem("rangeDates")
          
      }  
    }

    


  return (
    <Form onSubmit={(e)=>handleSubmit(e)}>
      <FieldsetData>
        <Data>
          <h2>Completá tus datos</h2> 
            <Card>
              <div>
                <label htmlFor="name">Nombre</label>
                <input
                  disabled
                  type="text"
                  name="name"
                  value={userData.name}
                ></input>
              </div>
              <div>
                <label htmlFor="surname">Apellido</label>
                <input
                  disabled
                  type="text"
                  name="surname"
                  value={userData.surname}
                ></input>
              </div>
              <div>
                <label htmlFor="email">Correo electrónico</label>
                <input
                  disabled
                  type="email"
                  name="email"
                  value={userData.email}
                ></input>
              </div>
              <div>
                <label htmlFor="city">Ciudad</label>
                <input
                  onChange={(e)=>handleCity(e)}
                  value={city}                  
                  type="text"
                  className="city"
                  name="city"
                  placeholder={userData.city ? userData.city : "Ciudad"}
                  autoComplete="off"
                ></input>
              </div>
            </Card>         
        </Data>
        <CalendarWrapper>
          <h2>Seleccioná tu fecha de reserva</h2>
          <Calendar            
            isInteractiveCalendar={true}
            rangeDates={blockedRangeDates}                       
          />
          {isNotAllowedDates ? <ErrorRangeDates><Error/>Error, el rango de fechas no debe contener días no disponibles</ErrorRangeDates> : null}
        </CalendarWrapper>
        <Time>
          <h2>Tu horario de llegada</h2>          
          <TimeWrapper>
            <div>
                <CheckCircleOutline/>
                <p>Tu habitación va a estar lista para el check-in entre las 10:00 AM y las 11:00 PM</p>
            </div>
            <label htmlFor="time">Indicá tu horario estimado de llegada </label>
            <select name="time" value={time? time : "default"} onChange={(e)=> handleTime(e)} required>                
                <option value="default" disabled>Seleccionar hora de llegada</option>
                <option value="1">01:00 a.m.</option>
                <option value="2">02:00 a.m.</option>
                <option value="3">03:00 a.m.</option>
                <option value="4">04:00 a.m.</option>
                <option value="5">05:00 a.m.</option>
                <option value="6">06:00 a.m.</option>
                <option value="7">07:00 a.m.</option>
                <option value="8">08:00 a.m.</option>
                <option value="9">09:00 a.m.</option>
                <option value="10">10:00 a.m.</option>
                <option value="11">11:00 a.m.</option>
                <option value="12">12:00 a.m.</option>
                <option value="13">01:00 p.m.</option>
                <option value="14">02:00 p.m.</option>
                <option value="15">03:00 p.m.</option>
                <option value="16">04:00 p.m.</option>
                <option value="17">05:00 p.m.</option>
                <option value="18">06:00 p.m.</option>
                <option value="19">07:00 p.m.</option>
                <option value="20">08:00 p.m.</option>
                <option value="21">09:00 a.m.</option>
                <option value="22">10:00 p.m.</option>
                <option value="23">11:00 p.m.</option>
                <option value="0">12:00 a.m.</option>
            </select>
            {formTimeError && <ErrorTime><Error/>Debes seleccionar una hora</ErrorTime>}
          </TimeWrapper>
        </Time>
      </FieldsetData>
      <FieldsetSummary>
        <h2>Detalle de la reserva</h2>
        <ImageWrapper>
          <img src={imageUrl} alt={imageTitle}></img>
        </ImageWrapper>
        <SummaryWrapper>
          <div>
            <p>{category}</p>
            <h3>{title}</h3>
            <Rate />
          </div>
          <div>
            <Place />
            <p>{place}</p>
          </div>
          <CheckInDiv>
            <label htmlFor="check_in">Check In</label>
            <input name="check_in" readOnly  defaultValue={checkIn} type="date" />
          </CheckInDiv>
          <CheckOutDiv>
            <label htmlFor="check_out">Check Out</label>
            <input name="check_out" readOnly  defaultValue={checkOut} type="date" />
          </CheckOutDiv>
          {formDatesError  && <ErrorDates><Error/>Error, debes seleccionar un rango de fechas</ErrorDates>}
          {errorDates && !formDatesError?  <InfoDates><Error/>Selecciona un rango de fechas</InfoDates>: null}
          {errorBooking && <ErrorBooking><Error/>Lamentablemente la reserva no ha podido realizarse. Por favor, intente más tarde</ErrorBooking>}
          <Button type="submit">Confirmar reserva</Button>
        </SummaryWrapper>
      </FieldsetSummary>
    </Form>
  );
};

export default BookingForm;
