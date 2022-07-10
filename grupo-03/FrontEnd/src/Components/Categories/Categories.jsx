import React,{ useEffect,useState} from "react";
//import {dataCategories} from "../../Assets/Externals.js"
import CategoryCard from "./CategoryCard.jsx";
import {Section, CateroriesWrapper } from "./Categories.styles"


const Categories =()=>{

    const [categories,setCategories] = useState([])

    

    useEffect(()=>{
        const request = async()=>{
            const fetching = await fetch(`http://ec2-18-233-111-51.compute-1.amazonaws.com/categories`)                    
            const response = await fetching.json()  
            setCategories(response)    
        }
        request()
    },[])

    const lowercaseFirstLetter = (arg)=>{
        const toLowerCase = arg.charAt(0).toLowerCase()+arg.slice(1)   
        return toLowerCase 
    }

    
       
    
    
    
    const printCategoryCards = ()=>{
        return(
            categories?.map(category=>(                
                <CategoryCard                     
                    key={category.id}
                    url={category.image}
                    name={category.title}
                    quantitie={category.quantity}
                    LowercaseFirstLetter={lowercaseFirstLetter(category.title)}  
                    
                />
            ))
        )
    }

    

    return(
        <Section>
            <h2>Buscar por tipo de alojamiento</h2>
            <CateroriesWrapper>
                {printCategoryCards()}                
            </CateroriesWrapper>
        </Section>
    )
}

export default Categories