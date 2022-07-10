import React from "react";
import {FooterDB, SocialIconsWrapper} from "./Footer.styles.js"
import {Facebook, Twitter, Instagram, LinkedinIn} from "@styled-icons/fa-brands"



const Footer =()=>{
    return(
        <FooterDB>
            <p>©2021 Digital Booking</p>
            <SocialIconsWrapper>
                <Facebook/>
                <LinkedinIn/>
                <Twitter/>
                <Instagram/>
            </SocialIconsWrapper>
        </FooterDB>     
    )
}

export default Footer