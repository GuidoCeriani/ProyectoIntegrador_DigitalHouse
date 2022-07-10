import React, { useState } from "react";
import {Container, Card} from '../RegistrationForm/RegistrationFormStyle.js'


const Registration = () => {

    const [city, setCity] = useState('')

    const handleChange = (e) =>{
        setCity(e.target.value);
    }

    return (
        <Container>
        <h2>Completá tus datos</h2>
        <form>
            <Card>
            <div>
                    <label htmlFor ='name'>Nombre</label>
                    <input onChange={handleChange} disabled
                    type='text' name='name'></input>
            </div>
            <div>
                    <label htmlFor ='surname'>Apellido</label>
                    <input onChange={handleChange} disabled
                    type='text' name='surname'></input>
            </div>
            <div>
                    <label htmlFor ='email'>Correo electrónico</label>
                    <input onChange={handleChange} disabled
                    type='email' name='email'></input>
            </div>
            <div>
                    <label htmlFor ='city'>Ciudad</label>
                    <input onChange={handleChange} value={city} required
                    type='text' className="city" name='city' placeholder="Ciudad"></input>
            </div>
            </Card>
        </form>
        </Container>
    );
}

export default Registration;