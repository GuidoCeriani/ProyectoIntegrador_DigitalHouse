import React, { useState, useContext} from "react";
import {  Link, useNavigate } from "react-router-dom";
import eye from "../../Assets/Images/eye.svg";
import {Container, Sesion, ButtonSubmit, Card, User, Boxes, Registry, Eye, Div, WrongCredentials, InvalidHTTP, Empty} from "./loginStyle.js";
import { DataContext } from "../../Context/DataProvider.js";
import { types } from "../../Context/dataReducer.js";
import { Error } from "@styled-icons/material-rounded";


const FormApp = () =>{
    const [err, setErr] = useState(false);
    const [empty, setEmpty] = useState(false);
    const [errors, setErrors] = useState('');
    const [logged, setLogged] = useState(false);
    const [verify, setVerify] = useState(false);
    const [passwordType, setPasswordType] = useState("password");
    const [httpStatusCode, setHttpStatusCode] = useState();
    const [user, setUser] = useState({
        email: "",
        pass: ""
    });

    const [state, dispatch] = useContext(DataContext)
    const navigate = useNavigate()

    const handleChange = (e) =>{
            setUser(
            {...user,
            [e.target.name]: e.target.value
            })}

    const togglePassword =()=>{
        if(passwordType==="password"){
            setPasswordType("text")
        return;
        }
        setPasswordType("password")
        }

    const validation = () => {
        let isValid = true;
        if (verify){
            setVerify(false);
            if(!user.email){
                isValid = false;
                setEmpty(true);
            }
            if(!user.pass){
                isValid = false;
                setEmpty(true);
            }
            }
                return isValid;
        }

    
    const submitHandler = async(e) => {
        e.preventDefault();
        if (validation()){
            setEmpty(false);
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',
                authorization : 'Bearer ' },      
                body: JSON.stringify({ 
                    email : user.email,
                    password : user.pass
                })
            };

            const response = await fetch('http://ec2-18-233-111-51.compute-1.amazonaws.com/authenticate', requestOptions)
            console.log(response) 
            if (response.status === 400){
                setErr(true)
                setErrors('')
            }
            else if (response.status !== 400){
                setErr(false)
            }
            if(response.status !== 200 && response.status !== 400){
                setErrors("Lamentablemente no ha podido iniciar sesión. Por favor intente más tarde")
            }
                
            const data = await response.json();
            console.log(data);
            sessionStorage.setItem("user", data.jwt);
            //sessionStorage.setItem("name", data.name);
            //sessionStorage.setItem("surname", data.surname);
            sessionStorage.setItem("dataUser", JSON.stringify(data))
            setEmpty(false);
            setErr(false);
            setErrors("");
            setLogged(true);
            dispatch({
                    type: types.userCredentials,
                    payload : JSON.parse(sessionStorage.getItem("dataUser"))                                          
            })
            if(sessionStorage.getItem('user') && state.isAccessDenied){
                const idProduct = localStorage.getItem('id')
                navigate(`/products/${idProduct}/booking`)
            }
            if(sessionStorage.getItem('user') && !state.isAccessDenied){
                navigate("/")
            }
        } else {
            setErr(true);
            setLogged(false);
        }       
    }
    
        return(
            <Container>
            <Sesion>Iniciar sesión</Sesion>
            {errors && !empty && !logged? <InvalidHTTP><Error/>{errors}</InvalidHTTP> : null}
            {err && !empty && !logged? <WrongCredentials><Error/>Por favor vuelva a intentarlo, sus credenciales son inválidas</WrongCredentials> : null}
            {empty && !logged? <Empty><Error/>Por favor complete todos los campos</Empty> : null}
                <form onSubmit={(e)=>submitHandler(e)}>
                    <Card>
                    <span>
                        <User>Correo Electronico</User>
                        <Boxes onChange={handleChange} value={user.email}
                            type="text" name="email"
                        />
                    </span>
                    <Div>
                        <User>Contraseña</User>
                        <Boxes onChange={handleChange} value={user.pass}
                            type={passwordType} name="pass"/>                     
                        <Eye onClick={togglePassword} src={eye}></Eye>
                    </Div>
                    <span>
                        <ButtonSubmit onClick={() => setVerify(true)}
                        type = "submit">Ingresar</ButtonSubmit>
                    </span>
                    <span>
                        <Registry>¿Aún no tenes cuenta?</Registry>
                        <Registry><Link to= "/register" >Registrate</Link></Registry>
                    </span>
                    </Card>
                    {/* {logged?
                    <Navigate to="/"/> : null} */}
                </form>
        </Container>
        )
}


export default FormApp;