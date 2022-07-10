import {  DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import {  Button,  SelectionContainer,  Wrapper,  SearchLocation,  SearchBox,  SearchResultsList} from "./styles";
import React, { useEffect, useState } from "react";

//import cities from "../../Data/cities";
import useMedia from "../../hooks/useMedia";
import useKeyPress from "../../hooks/useKeyPress";
import { useContext } from "react";
import { DataContext } from "../../Context/DataProvider";
import { types } from "../../Context/dataReducer";
import moment from "moment";
//import moment from "moment";

const SearchBar = () => {

  const[ ,dispatch] = useContext(DataContext)
 
  //const {urlProducts} = state

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [focusedInput, setfocusedInput] = useState(); 
  const [citiesList, setCitiesList] = useState([])
  const [city, setCity] = useState("")
  const [citySuggestions, setCitySuggestions] = useState([])
  const [isCitySuggestionsActive, setIsCitySuggestionsActive] = useState(false)

  // ESTADOS NAVEGACION TECLADO
  const [selected, setSelected] = useState(undefined);
  const downPress = useKeyPress("ArrowDown");
  const upPress = useKeyPress("ArrowUp");
  const enterPress = useKeyPress("Enter");
  const [cursor, setCursor] = useState(0);
  const [hovered, setHovered] = useState(undefined);

  const isTablet = useMedia("(max-width: 1060px)");

  //PETICION DE CIUDADES DE LA API
  useEffect(()=>{
    const request = async()=>{
      const fetching = await fetch('http://ec2-18-233-111-51.compute-1.amazonaws.com/cities')
      const response = await fetching.json()
      setCitiesList(response)
    }
    request()
  },[])

  // NAVEGACION CON TECLADO POR LA LISTA DE CIUDADES

  useEffect(() => {
    if (citySuggestions.length && downPress) {
      setCursor(prevState =>
        prevState < citySuggestions.length - 1 ? prevState + 1 : prevState
      );
    }
  }, [downPress,citySuggestions]);

  useEffect(() => {
    if (citySuggestions.length && upPress) {
      setCursor(prevState => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [upPress,citySuggestions]);

  useEffect(() => {    
    if (citySuggestions.length && enterPress) {
      setSelected(citySuggestions[cursor]);
      setCity(selected?.name)  
      if(city === selected?.name){
        setCitySuggestions([])
        //setIsCitySuggestionsActive(false)
      }     
    }
    
  }, [cursor, enterPress,citySuggestions,selected,city]);

  useEffect(() => {
    if (citySuggestions.length && hovered) {
      setCursor(citySuggestions.indexOf(hovered));
    }
  }, [hovered,citySuggestions]);

  const cleanCitySuggestions=(e)=>{    
   if(e.key === "Enter"){
    e.preventDefault()
   }    
  }
  
  
  // FILTRO DE CIUDADES EN LA SUGERENCIA DE BUSQUEDA
  const onChangeHandler=(text)=>{
    let citiesFilter = []
    if(text.length > 0){
      citiesFilter = citiesList.filter(city=>{
        const regex = new RegExp(`${text}`,"gi")
        return city.name.match(regex)
      })
    }    
    setCitySuggestions(citiesFilter)
    setIsCitySuggestionsActive(true)
    setCity(text)
  }

  const onSuggestionHandler=(text)=>{
    setCity(text)
    setCitySuggestions([])
    //setIsCitySuggestionsActive(false)
  }

  const productHandler = (e)=>{
    e.preventDefault();    
    if(city && !startDate && !endDate ){
      dispatch({
        type: types.productsCity,
        payload: e.target.citySearched.value
      })    
      setCity('')  
    }

    if(!city && startDate && endDate ){
      dispatch({
        type: types.searchByDates,
        payload: {
          startDate: moment(startDate).format("YYYY-MM-DD"),
          endDate: moment(endDate).format("YYYY-MM-DD")
        }
      })       
    }
    if(city && startDate && endDate ){
      dispatch({
        type: types.searchByDatesAndCity,
        payload: {
          startDate: moment(startDate).format("YYYY-MM-DD"),
          endDate: moment(endDate).format("YYYY-MM-DD"),
          city: city
        }
      })       
    }
    
    if(startDate && endDate ){
      window.sessionStorage.setItem("checkIn",JSON.stringify(startDate))
      window.sessionStorage.setItem("checkOut",JSON.stringify(endDate))
    }    
  }   

  useEffect(()=>{
    if(citySuggestions.length > 0){
      setIsCitySuggestionsActive(true)
      }else{
      setIsCitySuggestionsActive(false)
      }
  },[citySuggestions])  
  

  return (
    <Wrapper>
      <h1>Busca ofertas en hoteles, casas y mucho más</h1>
      <SelectionContainer onSubmit={(e)=> productHandler(e)}>
        <SearchLocation>
          <SearchBox isSuggestionsActive={isCitySuggestionsActive}>  
            <svg
              width="18"
              height="26"
              viewBox="0 0 18 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12.35C8.14752 12.35 7.32995 12.0076 6.72716 11.3981C6.12436 10.7886 5.78571 9.96195 5.78571 9.1C5.78571 8.23805 6.12436 7.4114 6.72716 6.8019C7.32995 6.19241 8.14752 5.85 9 5.85C9.85248 5.85 10.67 6.19241 11.2728 6.8019C11.8756 7.4114 12.2143 8.23805 12.2143 9.1C12.2143 9.5268 12.1311 9.94941 11.9696 10.3437C11.8081 10.738 11.5713 11.0963 11.2728 11.3981C10.9744 11.6999 10.62 11.9393 10.2301 12.1026C9.84008 12.2659 9.42211 12.35 9 12.35ZM9 0C6.61305 0 4.32387 0.958747 2.63604 2.66533C0.948211 4.37191 0 6.68653 0 9.1C0 15.925 9 26 9 26C9 26 18 15.925 18 9.1C18 6.68653 17.0518 4.37191 15.364 2.66533C13.6761 0.958747 11.3869 0 9 0Z"
                fill="#545776"
              />
            </svg>         
            <input
              type="text"
              placeholder={"¿A dónde vamos?"}              
              onChange={(e) => {onChangeHandler(e.target.value); setCursor(0)}}
              value={city} 
              name="citySearched"  
              autoComplete="off"  
              //onKeyPress={(e)=>{e.key === "Enter" && e.preventDefault() && setCitySuggestions([])}}
              onKeyPress={(e)=>cleanCitySuggestions(e)}
            />
            
            {citySuggestions.length > 0
            
            ? <SearchResultsList>
                  {citySuggestions?.map((suggestion, index)=>(
                       <li 
                        key={suggestion.id} 
                        onClick={()=>{onSuggestionHandler(suggestion.name); setSelected(suggestion)}}
                        onMouseEnter={()=>setHovered(suggestion)}
                        onMouseLeave={()=>setHovered(undefined)}
                        style={{
                          //cursor: "pointer",
                          background: index === cursor ? "#ededed" : "white"
                        }}
                       
                        >
                          <svg
                            width="17"
                            height="23"
                            viewBox="0 0 17 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.5 5.175C9.30512 5.175 10.0773 5.4779 10.6466 6.01707C11.2159 6.55623 11.5357 7.2875 11.5357 8.05C11.5357 8.42755 11.4572 8.8014 11.3046 9.15022C11.1521 9.49903 10.9285 9.81596 10.6466 10.0829C10.3647 10.3499 10.03 10.5617 9.66172 10.7062C9.29341 10.8506 8.89866 10.925 8.5 10.925C7.69488 10.925 6.92273 10.6221 6.35343 10.0829C5.78412 9.54377 5.46429 8.8125 5.46429 8.05C5.46429 7.2875 5.78412 6.55623 6.35343 6.01707C6.92273 5.4779 7.69488 5.175 8.5 5.175ZM8.5 0C10.7543 0 12.9163 0.848122 14.5104 2.35779C16.1045 3.86746 17 5.91501 17 8.05C17 14.0875 8.5 23 8.5 23C8.5 23 0 14.0875 0 8.05C0 5.91501 0.895533 3.86746 2.48959 2.35779C4.08365 0.848122 6.24566 0 8.5 0ZM8.5 2.3C6.88976 2.3 5.34547 2.9058 4.20685 3.98414C3.06824 5.06247 2.42857 6.525 2.42857 8.05C2.42857 9.2 2.42857 11.5 8.5 19.2165C14.5714 11.5 14.5714 9.2 14.5714 8.05C14.5714 6.525 13.9318 5.06247 12.7931 3.98414C11.6545 2.9058 10.1102 2.3 8.5 2.3Z"
                              fill="#545776"
                            />
                          </svg>
                          <div>
                            <h4>{suggestion.name}</h4>
                            <p>{suggestion.country}</p>
                          </div>
                       </li>
                     )) }       
              </SearchResultsList>
            : null                
            }
          </SearchBox>
        </SearchLocation>

        <DateRangePicker
          startDatePlaceholderText="Check-in"
          endDatePlaceholderText="Check-out"
          startDate={startDate}
          startDateId="start-date"
          endDate={endDate}
          endDateId="end-date"
          numberOfMonths={isTablet?1:2}
          hideKeyboardShortcutsPanel={true}          
          customInputIcon={
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.8 2H18.7V0H16.5V2H5.5V0H3.3V2H2.2C0.99 2 0 2.9 0 4V20C0 21.1 0.99 22 2.2 22H19.8C21.01 22 22 21.1 22 20V4C22 2.9 21.01 2 19.8 2ZM19.8 20H2.2V7H19.8V20Z"
                fill="#A9ABBA"
              />
            </svg>
          }
          onDatesChange={({ startDate, endDate }) => {
            setStartDate(startDate);
            setEndDate(endDate);
          }}
          focusedInput={focusedInput}
          onFocusChange={(focusedInput) => setfocusedInput(focusedInput)}
        />
        <Button>Buscar</Button>
        {/* <Button onClick={()=> dispatch({type : types.productsCity})}>Buscar</Button> */}
      </SelectionContainer>
    </Wrapper>
  );
};

export default SearchBar;
