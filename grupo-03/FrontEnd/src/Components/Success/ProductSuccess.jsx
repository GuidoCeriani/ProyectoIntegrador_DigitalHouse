import React from 'react';
import Tick from '../../Assets/Images/tick.svg';
import {Container, Card, Text2} from './SuccessStyle.js'
import {Link} from "react-router-dom";

const ProductSuccess = () => {
    return (
        <Container>
            <Card>
                <img src={Tick} alt='tick'></img>
                <Text2>Tu propiedad se ha creado con con éxito</Text2>
                <Link to= "/home"><button>Volver</button></Link>
            </Card>
        </Container>
    )};

export default ProductSuccess;