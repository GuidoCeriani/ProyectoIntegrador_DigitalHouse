import { Wrapper,InputImages } from "./Images.tyles"
import { useState, useContext } from "react"
import { DataContext } from "../../Context/DataProvider"
import { types } from "../../Context/dataReducer"
import { ButtonAdd } from "./FeatureInput.styles";


const Images = ()=>{
    const [urlValue, setUrlValue] = useState('')
    const [state, dispatch] = useContext(DataContext)

    const urlValueHandler = (e)=>{
        setUrlValue(e.target.value)
    }

    const sendUrlValue = (e)=>{
        e.preventDefault()
        dispatch({
            type : types.addImages,
            payload: urlValue
        })
        setUrlValue('')
    }

    
    return(
        <Wrapper>
            <InputImages 
                type="text"
                placeholder="Insertar https://"
                value={urlValue ? urlValue : ''}
                name="image"
                autoComplete="off"
                onChange={(e)=>urlValueHandler(e)}
            />
            <ButtonAdd onClick={(e)=>sendUrlValue(e)}>+</ButtonAdd>
        </Wrapper>
    )
}

export default Images