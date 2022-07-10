import React from 'react';
import Tick from '../../Assets/Images/tick.svg';
import {Container, Card, Text1} from './SuccessStyle.js'
import {Link} from "react-router-dom";

const Success = () => {
    return (
        <Container>
            <Card>
                <img src={Tick} alt='tick'></img>
                <h1>¡Muchas gracias!</h1>
                <Text1>Su reserva se ha realizado con éxito</Text1>
                <Link to= "/home"><button>ok</button></Link>
            </Card>
        </Container>
    )};

export default Success;