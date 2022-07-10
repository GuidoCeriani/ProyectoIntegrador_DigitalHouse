import React, { useState, useContext } from "react";
import {Data} from "../../Data/Users.js";
import eye from "../../Assets/Images/eye.svg";
import { Navigate, Link } from "react-router-dom";
import { DataContext } from "../../Context/DataProvider.js"
import { types } from "../../Context/dataReducer.js";
import {Container, Sesion, ButtonSubmit, Card, User, Boxes, BoxesWrong, BoxesNames, BoxesWrongNames, Registry, Error2, Names, Div, Eye, WrongEmail} from "./registryStyle.js";
import { Error } from "@styled-icons/material-rounded";

const RegistryApp = () =>{
    const [info, setInfo] = useState(
        {
            name: "",
            surname: "",
            email: "",
            pass: "",
            passRepeat: ""
        }
    )
    const [state, dispatch] = useContext(DataContext)
    const [error, setError] = useState(false)
    const [errors, setErrors] = useState({})
    const [verify, setVerify] = useState(false)
    const [created, setCreated] = useState(false)
    const [passwordType, setPasswordType] = useState("password");

    const validation = () => {
        let errors = {};
        let isValid = true;
        if (verify){
                setVerify(false);
                if(!info.name){
                    isValid = false;
                    errors.name = "Este campo es obligatorio";
                 }
                 if(!info.surname){
                    isValid = false;
                    errors.surname = "Este campo es obligatorio";
                 }
                if(!info.email){
                    isValid = false;
                    errors.email = "Este campo es obligatorio";
                }
                if(info.email === Data.email){
                    isValid = false;
                    errors.email = "Ese email ya existe";
                }
                if(info.email !== "undefined" && !info.email === false){
                    let at = info.email.lastIndexOf('@');
                    let dot = info.email.lastIndexOf('.');
          
                    if (!(at < dot && at > 0 && info.email.indexOf('@@') === -1 && dot > 2 && (info.email.length - dot) > 2)) {
                       isValid = false;
                       errors.email = "Email inválido";
                     }
                }
                if(!info.pass){
                    isValid = false;
                    errors.pass = "Este campo es obligatorio";
                }
                if (info.pass.length < 6){
                    isValid = false;
                    errors.pass = "Debe tener mas de 6 carácteres";;
                    }
                if(!info.passRepeat){
                    isValid = false;
                    errors.passRepeat = "Este campo es obligatorio";
                }
                if(info.pass !== info.passRepeat){
                    isValid = false;
                    errors.passRepeat = "Las contraseñas deben ser iguales";
                }
        setErrors(errors);
        return isValid;
    }
}

const togglePassword =()=>{
    if(passwordType==="password"){
    setPasswordType("text")
    return;
    }
    setPasswordType("password")
    }

const handleChange = (e) =>{
    setInfo(
    {...info,
    [e.target.name]: e.target.value
    });
}

const handleSubmit = async(e) => {
    let errors = {};
    e.preventDefault();
        if(validation()){
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    name : info.name,
                    surname : info.surname,
                    email : info.email,
                    password : info.pass
                })
            };
            const response = await fetch('http://ec2-18-233-111-51.compute-1.amazonaws.com/users', requestOptions)
            console.log(response.status)
            if (response.status === 400){
                errors.email = "Ese email ya existe";
                return setErrors(errors);
            }
            if (response.status !== 400){
                setError(false)
            }
            const data = await response.json();
            sessionStorage.setItem("user", data.jwt)
            // sessionStorage.setItem("name", data.name);
            // sessionStorage.setItem("surname", data.surname);
            sessionStorage.setItem("dataUser", JSON.stringify(data))
            setCreated(true);
            // dispatch({
            //     type: types.userCredentials,
            //     payload : {
            //     userName: data.name,
            //     surName: data.surname
            //     }    
            // })
            dispatch({
                type: types.userCredentials,
                payload : JSON.parse(sessionStorage.getItem("dataUser"))                                          
        })
    }
}
    


return(
        <Container>
            <Sesion>Crear Cuenta</Sesion>
                <form onSubmit={handleSubmit}>
                <Card>
                    <Names>
                    <span>
                        <User>Nombre</User>
                        {!errors.name ?
                        <BoxesNames onChange={handleChange} value={info.name}
                        type="text" name="name"
                        /> 
                        : 
                        <span>
                        <BoxesWrongNames  onChange={handleChange} value={info.name}
                        type="text" name="name" />
                        <Error2>{errors.name}</Error2>
                        </span>
                        }
                    </span>
                    <span>
                        <User>Apellido</User>
                        {!errors.surname ?
                        <BoxesNames onChange={handleChange} value={info.surname}
                        type="text" name="surname"
                        /> 
                        : 
                        <span>
                        <BoxesWrongNames onChange={handleChange} value={info.surname}
                        type = "text" name="surname"/>
                        <Error2>{errors.surname}</Error2>
                        </span>
                        }
                    </span>
                    </Names>
                    <span>
                        <User>Correo Electronico</User>
                        {!errors.email ?
                        <Boxes onChange={handleChange} value={info.email}
                        type="text" name="email"
                        /> 
                        : 
                        <span>
                        <BoxesWrong onChange={handleChange} value={info.email}
                        type = "text" name="email"/>
                        <Error2>{errors.email}</Error2>
                        </span>
                        }
                    </span>
                    <span>
                        <User>Contraseña</User>
                        {!errors.pass ?
                        <Div>
                            <Boxes onChange={handleChange} value={info.pass}
                            type={passwordType} name="pass"
                            />
                            <Eye onClick={togglePassword} src={eye}></Eye>
                        </Div>
                        :
                        <Div>
                            <BoxesWrong onChange={handleChange} value={info.pass}
                            type={passwordType} name="pass"/>
                            <Eye onClick={togglePassword} src={eye}></Eye>
                            <Error2>{errors.pass}</Error2>
                        </Div>
                        
                        }
                    </span>
                    <span>
                        <User>Confirmar Contraseña</User>
                        {!errors.passRepeat ? 
                        <Boxes onChange={handleChange} value={info.passRepeat}
                        type="password" name="passRepeat"/>
                        : 
                        <span>
                        <BoxesWrong onChange={handleChange} value={info.passRepeat}
                        type="password" name="passRepeat"/>
                        <Error2>{errors.passRepeat}</Error2>
                        </span> 
                        } 
                    </span>
                    <span>
                        <ButtonSubmit onClick={ ()=> setVerify(true)}
                        type = "submit">Crear cuenta</ButtonSubmit>
                    </span>
                    <span>
                        <Registry>¿Ya tienes una cuenta?</Registry>
                        <Registry><Link to= "/login" >Iniciar sesión</Link></Registry>
                    </span>
                </Card>
                </form>
        {created ? <Navigate to="/"/> : null}
        </Container>
        )
                    }

export default RegistryApp;