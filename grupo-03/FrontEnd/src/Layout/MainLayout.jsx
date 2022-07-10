import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import {Wrapper} from "./MainLayout.styles"

const MainLayout =({children})=>{
    return(
        <Wrapper>
            <Header/>
            {children}
            <Footer/>
        </Wrapper>
    )
}

export default MainLayout