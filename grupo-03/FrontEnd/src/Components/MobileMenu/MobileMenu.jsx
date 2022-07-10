import React, {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import {MobileMenuDB, BugerIcon, CloseIcon, HeaderMenu, ContentMenu, SocialIconsWrapper, DarkBackground} from "./MobileMenu.styles"
import { Data } from "../../Data/Users.js";
import { DataContext } from "../../Context/DataProvider";

import { User, CardMobile, Circle, Close, Hr} from "../Header/headerStyle.js";

import {Facebook, Twitter, Instagram, LinkedinIn} from "@styled-icons/fa-brands"

const clear = () => {
    sessionStorage.clear();
    window.location.reload();
  };
  
  const MobileMenu =()=>{   
    const [state ,dispatch] = useContext(DataContext)
    const {userData} = state
    const navigate = useNavigate()


    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false)    

    return(
        <>
            {/* {isMobileMenuActive && <DarkBackground/>} */}
            <BugerIcon onClick={()=>setIsMobileMenuActive(true)}/>
            <DarkBackground isActive={isMobileMenuActive}/>
            <MobileMenuDB isActive={isMobileMenuActive}>
                <HeaderMenu>
                    <CloseIcon onClick={()=>setIsMobileMenuActive(false)}/>

                    {!sessionStorage.getItem("user") 
                    ? <h2>MENU</h2>
                    : <CardMobile>
                        <Circle>
                            {userData?.name.charAt(0)}
                            {userData?.surname.charAt(0)}
                        </Circle>
                        <User>
                            <h4>Hola, </h4>
                            <p>
                                {userData?.name} {userData?.surname}
                            </p>
                        </User>
                    </CardMobile>   
                    
                    }
                </HeaderMenu>
                <ContentMenu>
                    <ul>
                    {!sessionStorage.getItem("user") ? (
                        <>
                        <li onClick={() => {navigate("/register");setIsMobileMenuActive(false) }}>Crear Cuenta</li>
                        <li onClick={() => {navigate("/login");setIsMobileMenuActive(false)}}>Iniciar Sesión</li>
                        </>         
                    ) : null                        
                    }
                    </ul>
                    {sessionStorage.getItem("user") ? 
                    <>
                        <Close>¿Deseas <span onClick={clear}>cerrar sesión?</span></Close>
                        <Hr/> 
                    </>  
                    : null
                    }

                    <SocialIconsWrapper>
                        <Facebook/>
                        <LinkedinIn/>
                        <Twitter/>
                        <Instagram/>
                    </SocialIconsWrapper>
                </ContentMenu>      
            </MobileMenuDB>
        </>

    )
}

export default MobileMenu;