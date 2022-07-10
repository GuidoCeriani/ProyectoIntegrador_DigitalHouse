import { useState, useContext,useEffect } from "react";
import { DataContext } from "../../Context/DataProvider";
import { types } from "../../Context/dataReducer";
//import { Input, LabelTextArea } from "../Administration/AdministrationStyle";
import { findFeatureIcon } from "../Features/Features";
import { FeatureInputWrapper, Iconprinted,InputWrapper,ButtonRemove,LabelImage  } from "./FeatureInput.styles";
import { InputFeature,IconprintedFeature } from "./FeaturePrinted.styles";

const FeaturePrinted = ({name, id}) => {
    
    const [state, dispatch] = useContext(DataContext)    
    const {newProductData} = state       
    const [boxFeatures, setBoxFeatures]= useState([])

    useEffect(()=>{    
      let feature =  newProductData.features   
      setBoxFeatures(feature)  
      
    },[newProductData])

    const removeFeatureHandler = (e)=>{
      e.preventDefault()        
      const index = (boxFeatures?.findIndex(obj => obj?.id === id))
      const deleteValue = [...boxFeatures]
      deleteValue.splice(index,1)
      setBoxFeatures(deleteValue)
      boxFeatures.splice(index,1)        
      dispatch({
          type: types.removeFeature,
          payload: boxFeatures
        })
  }  
   
  

  return (
    <FeatureInputWrapper>
      <InputWrapper>
        <LabelImage>
          Nombre
          <InputFeature 
            name="name"           
            type="text" 
            disabled           
            value={name}           
          />        
        </LabelImage>
        <IconprintedFeature>
          <p>Icono</p>        
          <div> 
            {findFeatureIcon(name)}
            <p>{name}</p>          
          </div>
        </IconprintedFeature>
      
      </InputWrapper>
     
      <ButtonRemove onClick={(e)=> removeFeatureHandler(e)}>X</ButtonRemove>
    </FeatureInputWrapper>
  );
};

export default FeaturePrinted