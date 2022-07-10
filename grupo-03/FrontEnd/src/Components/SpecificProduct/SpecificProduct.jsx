

import { HeaderWrapper, LocationWrapper, LocationCity, Score, GalleryWrapper, DarkBackground, ArrowLeft, ArrowRight, GalleryWrapperMobile, Wrapper, DescriptionWrapper, Grid, Main, FeaturesWrapper,  PolicyWrapper, Policies } from "./SpecificProduct.styles"
import React, { useState } from "react"
import Rate from "../Rate/Rate"
import { Place, ArrowBackIosNew } from "@styled-icons/material-rounded"
import "react-dates/lib/css/_datepicker.css";
import './slide.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import arrowL from "../../Assets/Images/arrowL.svg"
import arrowR from "../../Assets/Images/arrowR.svg"





export const Header = ({category,title,previousUrl,isAdminHeader})=>{    

    return(
        <HeaderWrapper>
            <div>
                {isAdminHeader ? null : <p>{category}</p>}                
                <h1>{title}</h1>
            </div>
            <ArrowBackIosNew onClick={previousUrl}/>
        </HeaderWrapper>                
    )
}

export const Location =({location})=>{
    return(
        <LocationWrapper>
            <LocationCity>
                <Place/>
                <p>{location}</p>
            </LocationCity>
            {/* <Score>
                <div>
                    <p>Muy bueno</p>
                    <Rate/>
                </div>
                <p>8</p>
            </Score> */}
        </LocationWrapper>
    )
}

export const GalleryMobile = ({images}) => {
    return (
        <GalleryWrapperMobile >
            <AliceCarousel 
                mouseTracking
                autoPlay={true}
                autoPlayInterval={3000}
                disableButtonsControls={true}
                infinite={true}
                autoPlayStrategy={'all'}
                responsive={responsive}
                fadeOutAnimation={true}
                mouseDragEnabled={true}
                >
                    {images?.map((img, index) => {
                        return (
                                <img src={img.url} key={index} onDragStart={handleDragStart} alt="" role="presentation" />
                                
                                )
                    })}
            </AliceCarousel>
        </GalleryWrapperMobile>
    )
};


const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
};

const handleDragStart = (e) => e.preventDefault();


export const GalleryDesktop = ({images}) => {
    //console.log(images)
    const [isGalleryActive, setIsGalleryActive] = useState(false)        
        

        return (
            <>
        <DarkBackground isActive={isGalleryActive}/>
        {isGalleryActive ? 
            <Wrapper>
                <AliceCarousel 
                mouseTracking
                responsive={responsive}
                fadeOutAnimation={true}
                mouseDragEnabled={true}
                renderPrevButton={() => {
                    return <ArrowLeft><img src={arrowL} alt="arrow left"></img></ArrowLeft>
                  }}
                  renderNextButton={() => {
                    return <ArrowRight><img src={arrowR} alt="arrow right"></img></ArrowRight>
                  }}
                >
                {images?.map((img, index) => {
                    return (
                            <img src={img.url} key={index} onDragStart={handleDragStart} alt="" role="presentation" />
                    )
                })}
                </AliceCarousel>
                    <button onClick={() => setIsGalleryActive(false)}>X</button>
            </Wrapper>
        : null}
        <GalleryWrapper >
            <Main>
                <img src={images[0]?.url} alt="" className="image"/>
            </Main>
            <Grid>
                <img src={images[1]?.url} alt="" className="image"/>
                <img src={images[2]?.url} alt="" className="image"/>
                <img src={images[3]?.url} alt="" className="image"/>
                <img src={images[4]?.url} alt="" className="image"/>
                <p onClick={() => setIsGalleryActive(true)}>Ver más</p>
            </Grid>
        </GalleryWrapper>
        </>
    )
};

export const Description=({descriptionTitle, description})=>{
    return(
        <DescriptionWrapper>
            <h2>{descriptionTitle}</h2>
            <p>{description}</p>
        </DescriptionWrapper>
    )
}

export const Features=({features})=>{
    return(
        <FeaturesWrapper>
            <h2>¿Qué ofrece este lugar?</h2>
            <div>
                {features}
            </div>
        </FeaturesWrapper>
    )
}



export const Policy=({rules,security_and_health, cancellation})=>{
    return(
        <PolicyWrapper>
            <h2>Qué tienes que saber</h2>
            <Policies>
                <div>
                    <h3>Normas de la casa</h3>
                    <p>
                        {rules}
                    </p>
                </div>
                <div>
                <h3>Salud y seguridad</h3>
                    <p>
                        {security_and_health}
                    </p>
                </div>
                <div>
                <h3>Política de cancelación</h3>
                    <p>{cancellation}</p>

                </div>
            </Policies>
        </PolicyWrapper>
    )
}