import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import {Article, ImageWrapper, InfoWrapper, HeaderInfo, TitleAndCategory, Score, LocationInfo, FeaturesIconsWrapper,Button,FavoriteIcon,ReadMoreButton,ImgProduct,MainInfo,BoxContent,ButtonWrapper} from "./ProductCard.styles"
import {Place} from "@styled-icons/material-rounded/"
import Rate from "../Rate/Rate";

const ProductCard = ({img,title,category,cityLocation,description,features,id})=>{
    const navigate = useNavigate()
    const [isTextSliced, setisTextsliced] = useState(true)
    
    const ReadMorelessText = ({children})=>{
        const text = children;

        const calculateNumberToSlice=()=>{

            let number = 0;
    
            if(window.matchMedia("(min-width: 1280px)").matches){
                number = 100
            }
            else(
                number = 130
            )    
            return number  
        }   
        
        const result = isTextSliced ? text.slice(0,calculateNumberToSlice()) : text;        

        const toogleIsShow =()=>{
            setisTextsliced((!isTextSliced))
        }

        return(            
                <p>
                    {`${result}${isTextSliced ? "..." : ""}`}{'\u00A0'}
                    <ReadMoreButton onClick={()=>toogleIsShow()}>{isTextSliced ? "Ver más" : "Ver menos"}</ReadMoreButton>                    
                </p>    
        )
    }


    return(
        <Article isStaticHeight={isTextSliced}>            
            <ImageWrapper isStaticHeight={isTextSliced}>
                {/* <FavoriteIcon/> */}
                <ImgProduct src={img} alt={title} ></ImgProduct>                
            </ImageWrapper>
            <InfoWrapper>
                <MainInfo>
                    <HeaderInfo>
                        <TitleAndCategory>
                            <div>
                                <p>{category}</p>
                                {/* <Rate/> */}
                            </div>
                            <h3>{title}</h3>
                        </TitleAndCategory>
                        {/* <Score>
                            <p>8</p>
                            <p>Muy bueno</p>
                        </Score> */}
                    </HeaderInfo>
                    <LocationInfo>
                        <Place/>
                        {/* <p>{cityLocation}
                        {'\u00A0'}-{'\u00A0'}
                        </p>
                        <p onClick={()=>navigate("/")}>Mostrar en el mapa</p> */}
                        <p>{cityLocation}</p>
                    </LocationInfo>
                    <FeaturesIconsWrapper>                        
                        {features}
                    </FeaturesIconsWrapper>
                    <BoxContent isActive={isTextSliced}>
                    <ReadMorelessText>
                        {description}
                    </ReadMorelessText>

                    </BoxContent>
                                 
                </MainInfo>   
                <ButtonWrapper>
                    <Button onClick={()=>navigate(`/products/${id}`)}>Ver detalle</Button>                    
                </ButtonWrapper>                
            </InfoWrapper>            
        </Article>
        
    )
}

export default ProductCard;