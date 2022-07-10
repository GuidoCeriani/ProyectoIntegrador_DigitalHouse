import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../Context/DataProvider"
import { useNavigate } from "react-router-dom";
import { Main } from "./Booking.styles";
import { Header, Policy } from "../../Components/SpecificProduct/SpecificProduct";
//import moment from "moment";
import BookingForm from "../../Components/Booking/BookingForm";
import { types } from "../../Context/dataReducer";
import Moment from 'moment';
import { extendMoment } from 'moment-range';



const Booking =()=>{

    //const {id} = useParams()
    const [state, dispatch] = useContext(DataContext)
    const {selectedDays} = state
    const {userData} = state
    const [dataProduct, setDataProduct] = useState()
    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")  
    const [singleBlockedDays, setSingleBlockedDays] = useState([])  
    const [singleSelectedDays, setSingleSelectedDays] = useState([])  
    const [dateNotAllowed, setDateNotAllowed] = useState(false)
    const navigate = useNavigate()

    
    

    const moment = extendMoment(Moment);
    
    useEffect(() => {
        let infoProduct = JSON.parse(window.localStorage.getItem("product"))  
        setDataProduct(infoProduct)     
        let blockedDates = JSON.parse(window.localStorage.getItem("rangeDates"))   
        setSingleBlockedDays(blockedDates)             
        let startDate = JSON.parse(window.sessionStorage.getItem("checkIn"))     
        let endDate =JSON.parse(window.sessionStorage.getItem("checkOut"))
        setCheckIn(moment(startDate).format("YYYY-MM-DD"))
        setCheckOut(moment(endDate).format("YYYY-MM-DD")) 
    }, [dataProduct?.id,moment]); 

    
        
    useEffect(()=>{   
        
        let infoProduct = JSON.parse(window.localStorage.getItem("product"))          
        function checkUserData() {
            const userStorage = sessionStorage.getItem('user')
        
            if (!userStorage) {
                navigate(`/products/${infoProduct.id}`)
            }
        }        
        window.addEventListener('storage', checkUserData())  
    },[navigate])

    useEffect(()=>{
        dispatch({
            type: types.accessDenied,
            payload: false            
        })  
    },[dispatch])

    useEffect(()=>{        
        const dayOne = selectedDays.startDate ? selectedDays.startDate : checkIn
        const dayTwo = selectedDays.endDate ? selectedDays.endDate : checkOut
        const range = moment.range(dayOne,dayTwo) 
        setSingleSelectedDays(range)

       

    },[selectedDays.startDate,  selectedDays.endDate, checkIn, checkOut,moment])
    
    //console.log(singleSelectedDays);
    console.log(dataProduct);

    useEffect(()=>{
        const dayOne = selectedDays.startDate ? selectedDays.startDate : checkIn
        const dayTwo = selectedDays.endDate ? selectedDays.endDate : checkOut
        const range = moment.range(dayOne,dayTwo)      

        const isInside = singleBlockedDays?.some(day=> moment(day).within(range))
        if(isInside){
            setDateNotAllowed(true)            
        } 
        if(!isInside){
            setDateNotAllowed(false)           
        } 
    },[selectedDays.startDate,  selectedDays.endDate, checkIn, checkOut,moment, singleSelectedDays,singleBlockedDays,dateNotAllowed])

    

    const verifyCheckIn=()=>{
        
        if(selectedDays.startDate && !dateNotAllowed){
            return selectedDays.startDate
        }
        if(!selectedDays.startDate && !dateNotAllowed){
            return checkIn
        }
        if(dateNotAllowed){            
            return null            
        }
        
    }

    const verifyCheckOut=()=>{
        
        if(selectedDays.endDate && !dateNotAllowed){
            return selectedDays.endDate
        }
        if(!selectedDays.startendDate && !dateNotAllowed){
            return checkOut
        }
        if(dateNotAllowed){
            return null
        }
        
    }

    return(
        <Main>            
            <Header
                category={dataProduct?.category}
                title={dataProduct?.title}
                previousUrl={()=>navigate(`/products/${dataProduct?.id}`)}                
            />
            <BookingForm 
                blockedRangeDates={singleBlockedDays}
                isNotAllowedDates={dateNotAllowed}
                idProduct={dataProduct?.id}
                // userName={userData.name}
                // userSurname={userData.surname}
                // UserEmail={userData.email}                           
                imageUrl={dataProduct?.images[0]?.url}
                imageTitle={dataProduct?.title}
                category={dataProduct?.category}
                title={dataProduct?.title}
                place={`Dirección Dirección Dirección Dirección, ${dataProduct?.city.name}, ${dataProduct?.city.province}, ${dataProduct?.city.country}`} 
                checkIn={verifyCheckIn()}
                checkOut={verifyCheckOut()}   
            />
            
            <Policy
                rules={dataProduct?.policy.norms}
                security_and_health={dataProduct?.healthAndSecurity}
                cancellation={dataProduct?.policy.cancellationPolicy}
            />     
        </Main>
    )
}

export default Booking