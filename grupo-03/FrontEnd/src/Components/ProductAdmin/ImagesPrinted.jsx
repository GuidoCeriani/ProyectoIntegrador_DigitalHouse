import { Wrapper,InputImages } from "./Images.tyles"
import { useState, useContext, useEffect } from "react"
import { DataContext } from "../../Context/DataProvider"
import { types } from "../../Context/dataReducer"
import { ButtonRemove } from "./FeatureInput.styles"
import { InputImagesPrinted } from "./ImagesPrinted.styles"


const ImagesPrinted = ({urlImage})=>{
    
    const [state, dispatch] = useContext(DataContext)
    const {newProductData} = state
    const [urlbox, setUrlBox] = useState([])

    // const urlValueHandler = (e)=>{
    //     setUrlValue(e.target.value)
    // }

    useEffect(()=>{
        let images = newProductData.images
        setUrlBox(images)
    },[newProductData])

    const cancelUrlandler = (e)=>{
        e.preventDefault()
        const index = urlbox?.findIndex(url => url === urlImage)
        const deleteValue = [...urlbox]
        deleteValue.splice(index,1)
        setUrlBox(deleteValue)
        urlbox.splice(index,1)
        dispatch({
            type : types.removeImages,
            payload: urlbox
        })
    }

    
    return(
        <Wrapper>
            <InputImagesPrinted 
                type="text"                
                value={urlImage}
                name="image"
                disabled                
            />
            <ButtonRemove onClick={(e)=>cancelUrlandler(e)}>x</ButtonRemove>
        </Wrapper>
    )
}

export default ImagesPrinted