import React, { useState, useContext } from "react";
import { FeaturesIcons } from "./Features.styles";
import {Wifi, Pool, Kitchen,Tv,Air,Pets,DirectionsCar} from "@styled-icons/material-rounded/"
import { DataContext } from "../../Context/DataProvider";
import { types } from "../../Context/dataReducer";


const findFeatureIcon = (featureName) => {
  if (featureName === "Wifi") 
      return <Wifi />;
  else if (featureName === "Cocina") 
      return <Kitchen />;
  else if (featureName === "Televisor") 
      return <Tv />;
  else if (featureName === "Aire acondicionado") 
      return <Air />;
  else if (featureName === "Apto mascotas") 
      return <Pets />;
  else if (featureName === "Estacionamiento gratuito")
    return <DirectionsCar />;
  else if (featureName === "Pileta") 
      return <Pool />;
};

const PrintFeature = ({list, isInnerProduct, name}) => {  

  const [state, dispatch] = useContext(DataContext)
  const {features} = state 
  

  

  // const functionClic = (name, id)=>{    
  //   return(
  //     dispatch({
  //       type: types.featureProduct,
  //       payload: {
  //         name: name,
  //         id: id
  //       }
  //     })
  //   )      
  // }  

  

  return (
    <FeaturesIcons>
      {
      !isInnerProduct 
      ? list?.map((feature) => (
        <li
          key={feature.name} 
          //onClick={()=>functionClic(feature.name, feature.id)}
        >
          {findFeatureIcon(feature.name)}                   
        </li>
      ))       
      :
      list?.map((feature) => (
          <li key={feature.name}>
            {findFeatureIcon(feature.name)}
            <span>{feature.name}</span>         
          </li>
        ))
      }    
    </FeaturesIcons>
  );
};

export{findFeatureIcon}

export default PrintFeature