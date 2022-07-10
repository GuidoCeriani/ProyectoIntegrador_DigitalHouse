import React,{useState,useEffect, useContext} from "react";
import {ProductsWrapper, Section} from "./Products.styles"
import ProductCard from "./ProductCard.jsx";
import PrintFeature  from "../Features/Features";
import {DataContext} from "../../Context/DataProvider"


const Products =()=>{    

    const [productList, setProductList] = useState([])

    const [state] = useContext(DataContext)
    const {urlProducts,city,category,selectedDays} = state
    

    useEffect(()=>{     
        const urlHandler =  ()=>{            
            if (city.length === 0 && category.length ===0){
                return urlProducts
            }
            else if(city.length > 0 && selectedDays.startDate === "" ){                
                return `${urlProducts}${city}`  
            }
            else if(city.length > 0 && selectedDays ){                
                return `${urlProducts}`  
            }
            else if(city.length < 0 && selectedDays.startDate !== "" ){                
                return `${urlProducts}`  
            }
            else if (category.length > 0){
                return `${urlProducts}${category}`
            }                     
        }

        const request = async()=>{            
            const fetching = await fetch(urlHandler())
            const response = await fetching.json()   
            response.sort((a,b)=> 0.5 - Math.random())         
            setProductList(response)
            console.log(fetching);           
        }   
        
        request()
    },[urlProducts,city,category,selectedDays])
    
    const printProductCards =()=>{
        
        return(
            
            productList && productList.map(product =>(     
                            
                <ProductCard  
                    id={product.id}              
                    img={product.imageDTOS[0]?.url}                   
                    title={product.title}
                    category={product.categoryDTO.title}
                    cityLocation={product.cityDTO.name}
                    features={<PrintFeature list={product.featureDTOS}/>}                                       
                    description={product.description}
                    key={product.id}                                        
                />      
                  
                       
            ))                
        )
        
    }

    return(
        <Section>
            <h2>Recomendaciones</h2>
            <ProductsWrapper>
                {printProductCards()}                
            </ProductsWrapper>
            
        </Section>
    )
}

export default Products