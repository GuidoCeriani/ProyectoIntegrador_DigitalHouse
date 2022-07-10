import { useState, useContext } from "react";
import { DataContext } from "../../Context/DataProvider";
import { types } from "../../Context/dataReducer";
import { findFeatureIcon } from "../Features/Features";
import { FeatureInputWrapper, UlIconList, Iconprinted, ButtonAdd,InputWrapper,LabelImage } from "./FeatureInput.styles";
import { Input } from "../Administration/AdministrationStyle";

const FeatureInput = () => {
    const [isIconsListActive, setIsIconsListActive] = useState(false)
    const [state, dispatch] = useContext(DataContext)    
    const {features} = state
    const {newProductData} = state
    const [iconSelected, setIconSelected] = useState("")   

    const printFeature = ()=>{

      const featureHandler=(feature)=>{
          setIconSelected(feature)
      }    

      return(
          <UlIconList>
              { features?.map((feature) => (
              <li
                key={feature.name} 
                onClick={()=>featureHandler(feature)}
              >{feature.name}
                                  
              </li>))}
          </UlIconList>           
      )        
  }  
    
    const saveFeatureHandler = (e)=>{
      e.preventDefault()     
      //setFeaturesToSend(iconSelected)
      dispatch({
        type: types.addFeature,
        payload: iconSelected
      })
      setIconSelected("")
    } 
   

  return (
    <FeatureInputWrapper>
      <InputWrapper>
        <LabelImage>
          Nombre
          <Input 
            name="name" 
            placeholder="Selecciona un atributo" 
            type="text" 
            autoComplete="off" 
            value={iconSelected?.name ? iconSelected?.name : ''}             
            onChange={() => setIsIconsListActive(!isIconsListActive)}          
            onClick={()=> setIsIconsListActive(!isIconsListActive)}
          />
          {isIconsListActive ? printFeature() : null}
        </LabelImage>
        <Iconprinted feature={iconSelected}>
          <p>Icono</p>        
          <div> 
            {findFeatureIcon(iconSelected?.name)}
            <p>{iconSelected?.name ? iconSelected?.name : 'Icono'}</p>          
          </div>
        </Iconprinted>
      </InputWrapper>
      
      <ButtonAdd onClick={(e)=>saveFeatureHandler(e)}>+</ButtonAdd>
    </FeatureInputWrapper>
  );
};

export default FeatureInput