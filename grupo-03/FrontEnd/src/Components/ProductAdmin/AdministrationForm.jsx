import { useState,useEffect, useContext } from "react"
import { DataContext } from "../../Context/DataProvider"
import { types } from "../../Context/dataReducer"
//import PrintFeature from "../Features/Features"
import Administration from "../Administration/Administration"
import { Form, Button } from "./AdministrationForm.styles"
import FeaturePrinted from "./FeaturePrinted"
import FeatureInput from "./FeatureInput"
import Policy from "./Policy"
import Images from "./Images"
import ImagesPrinted from "./ImagesPrinted"
import { useNavigate } from "react-router"

const AdministrationForm = ()=>{

    
    const [state, dispatch] = useContext(DataContext)    
    const {newProductData} = state
    const {userData} = state
    const [categories,setCategories] = useState([])
    const [cities,setCities] = useState([])    
    const [boxFeatures, setBoxFeatures]= useState([])
    const [boxImages, setBoxImages]= useState([])
    const [response, setResponse] = useState()
    const navigate = useNavigate()

    let error = []
    
    

    useEffect(()=>{
        const request = async()=>{
            const fetching = await fetch(`http://ec2-18-233-111-51.compute-1.amazonaws.com/categories`)            
            const response = await fetching.json()  
            setCategories(response)    
        }
        request()
    },[])

    useEffect(()=>{
        const request = async()=>{
            const fetching = await fetch(`http://ec2-18-233-111-51.compute-1.amazonaws.com/cities`)            
            const response = await fetching.json()  
            setCities(response)    
        }
        request()
    },[])    

    useEffect(()=>{
        const request = async()=>{
            const fetching = await fetch('http://ec2-18-233-111-51.compute-1.amazonaws.com/features')
            const response = await fetching.json()
            dispatch({
                type: types.featureProduct,
                payload: response
            })            
        }
        request()
    },[dispatch])    

    useEffect(()=>{    
        let feature =  newProductData.features   
        setBoxFeatures(feature)  
        
    },[newProductData])

    useEffect(()=>{
        let images = newProductData.images
        setBoxImages(images)
    },[newProductData])
    

    const printFeatures=()=>{
        return(
            boxFeatures?.map(feature=>{                 
                return(
                    <FeaturePrinted
                        name={feature?.name}
                        key={feature}
                        id={feature?.id}                        
                     />
                )                                 
            })
        )        
    }

    const printImages=()=>{
        return(
            boxImages?.map(image=>{
                return(
                    <ImagesPrinted
                        urlImage={image}
                        key={image}
                    />
                )
            })
        )
    }

    

    const submitFormHandler = async(e)=>{
        e.preventDefault()

        let dataProduct = {
            title: newProductData.general.propertyName,
            description_title: newProductData.general.descriptionTitle,
            description: newProductData.general.description,
            address: newProductData.general.address,
            availability: "SI",
            cityDTO: { id: newProductData.general.city},
            categoryDTO: { id: newProductData.general.category},
            policyDTO: {
                    norms: newProductData.policy.norms,
                    healthAndSecurity: newProductData.policy.healthAndSecurity,
                    cancellationPolicy: newProductData.policy.cancellationPolicy
            },
            imageDTOS: [],
            featureDTOS: [],
            reserveDTOS: []        
        }

        let images = newProductData.images
        let features = newProductData.features

        // let bodyforImages = {
        //     title: "Imagen",
        //     url: "{{urlImage}}",
        //     productDTO: {"id": "{{idProduct}}"}
        // }
        
        console.log(dataProduct);
        console.log(images);
        console.log(features);

        const headers = new Headers({              
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',       
            authorization : 'Bearer ' + userData.jwt,              
        })


        const request = await fetch('http://ec2-18-233-111-51.compute-1.amazonaws.com/products',{
            method: 'POST',
            headers,
            body: JSON.stringify(dataProduct)
          })
        console.log(request.status);
        switch (request.status) {
            case 200:
                const data = await request.json();
                const idProduct = data?.id;
                console.log(idProduct);
                //POST features
                const postFeatures = async()=>{
                    for(const feature of features){
                        const request  = await fetch(`http://ec2-18-233-111-51.compute-1.amazonaws.com/products/${idProduct}/link/${feature?.id}`,{
                            method: 'PATCH',
                            headers
                          })
                        console.log('Respuesta features' + request.status);
                        switch (request.status) {
                            case 204:
                                console.log("features creadas con éxito");
                                break;                        
                            default:
                                error.push("error al crear producto")
                                break;
                        }
                        //const response = await request.text()
                        
                    }                  
                }
                postFeatures() 
                //POST images
                const postimages = async()=>{
                    for(const image of images){
                        const request  = await fetch(`http://ec2-18-233-111-51.compute-1.amazonaws.com/images`,{
                            method: 'POST',
                            headers,
                            body: JSON.stringify({
                                title: newProductData.general.propertyName,
                                url: image,
                                productDTO: {id : idProduct}
                            })
                          })
                        console.log('Respuesta images' + request.status);
                        switch (request.status) {
                            case 201:
                                console.log("imagenes creadas con éxito");
                                break;                        
                            default:
                                error.push("error al crear producto")
                                break;
                        }
                        //const response = await request.text()
                    }                  
                }
                postimages()
                
                break;               
        
            default:
                error.push("error al crear producto")
                break;
        }
       
        console.log(error);
        console.log(error.length);
        if(error.length === 0){
            navigate("/ProductSuccess")
        }
        
    }

    return(
        <Form onSubmit={(e)=>submitFormHandler(e)}>
            <fieldset>
                <Administration
                    categories={categories}
                    cities={cities}
                />
            </fieldset>
            <fieldset>
                <h3>Agregar atributos</h3>
                <FeatureInput/>
                {printFeatures()}
                 
            </fieldset>
            <fieldset>
                <h3>Políticas del producto</h3>
                <Policy/>
            </fieldset>
            <fieldset>
                <h3>Cargar imágenes</h3>
                <Images/>
                {printImages()}
                
            </fieldset>
            <Button type="submit">Crear</Button>

        </Form>
    )
}

export default AdministrationForm