import React,{useContext} from "react";
import FormApp from "../../Components/Login/FormLogin.jsx";
import { DataContext } from "../../Context/DataProvider.js";
import { Main, AccessDenied } from "./Login.syles.js";
import { Error } from "@styled-icons/material-rounded";


const Login =()=>{
    const [state, dispatch] = useContext(DataContext)
        
    return(
        <Main>  
            {state.isAccessDenied && <AccessDenied><Error/><p>Para realizar una reserva necesitas estar logueado</p></AccessDenied>}          
            <FormApp/>
        </Main>
    )
}

export default Login;