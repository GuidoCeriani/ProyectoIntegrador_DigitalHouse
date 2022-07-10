import React from "react";
import {Star} from "@styled-icons/material-rounded/"
import { StarIconsWrapper } from "./Rate.styles";


const Rate = ()=>{
    return(
        <StarIconsWrapper>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </StarIconsWrapper>
    )
}

export default Rate