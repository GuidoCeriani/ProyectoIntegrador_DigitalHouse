import React, { useState, useContext, useEffect } from "react";
import {Card,LabelTextArea,GeneralInfo,Description,Input,LabelDescription} from './AdministrationStyle.js'
import { DataContext } from "../../Context/DataProvider.js";
import { types } from "../../Context/dataReducer.js";

const Administration = ({categories,cities}) => {

    const[state, dispatch] = useContext(DataContext)
    const {newProductData} = state
    //addInfoProdcut

    const [info, setInfo] = useState(
        {
            propertyName: "",
            category: "",
            address: "",
            city: "",
            description: "",
            descriptionTitle : ""
        }
    )
    
    const handleChange = (e) =>{
        setInfo(
        {...info,
        [e.target.name]: e.target.value
        });
    }

    useEffect(()=>{
        dispatch({
            type: types.addInfoProdcut,
            payload: info
        })
    },[dispatch,info])

    

    return (        
        <Card>
            <GeneralInfo>
                
                <LabelTextArea>Nombre de la propiedad
                    <Input 
                        onChange={handleChange} 
                        value={info.propertyName} 
                        required
                        type='text' 
                        name='propertyName'
                        placeholder='Nombre de la propiedad'
                        autoComplete="off"
                        >
                    </Input>                    
                </LabelTextArea> 
                <LabelTextArea>Categoría
                    {/* <select 
                        onChange={handleChange} 
                        required
                        type='select' 
                        name='category' > 
                            <option value="" disabled selected hidden>Categorías</option>
                            <option value="" disabled selected hidden>Categorías</option>
                            {categories.map((item)=>{
                                return(
                                    <option key={item.id} value={item.id}>{item.title}</option>
                                )})}
                    </select>                     */}
                    <select 
                        onChange={handleChange} 
                        required
                        type='select' 
                        name='category'                        
                        value={info.category ? info.category : "default"}> 
                            <option value="default" disabled hidden>Categorías</option>
                            {/* <option value="" disabled selected hidden>Categorías</option> */}
                            {categories.map((item)=>{
                                return(
                                    <option key={item.id} value={item.id}>{item.title}</option>
                                )})}
                    </select>                    
                </LabelTextArea>
                <LabelTextArea>Dirección
                    <Input 
                        onChange={handleChange} 
                        value={info.address} 
                        required
                        type='text' 
                        name='address'
                        placeholder='Dirección'
                        autoComplete="off"
                        >
                    </Input>                
                </LabelTextArea>   
                <LabelTextArea >Ciudad
                    {/* <select 
                        onChange={handleChange} 
                        required
                        type='select' 
                        name='city' 
                        placeholder='Ciudad'> 
                            <option value="" disabled selected hidden >Ciudad</option>
                            {cities.map((item)=>{
                                return(
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )})}
                    </select> */}
                    <select 
                        onChange={handleChange} 
                        required
                        type='select' 
                        name='city' 
                        value={info.city ? info.city : "default"}
                        //placeholder='Ciudad'
                        > 
                            
                            <option value="default" disabled hidden >Ciudad</option>
                            {cities.map((item)=>{
                                return(
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )})}
                    </select>
                </LabelTextArea>

            </GeneralInfo>  
            <Description>
                <LabelDescription>Título descripción
                    <Input 
                        onChange={handleChange} 
                        value={info.descriptionTitle} 
                        required
                        type='text' 
                        name='descriptionTitle'
                        placeholder='Titulo de la descripción'
                        autoComplete="off"
                        >
                    </Input>                
                </LabelDescription>                   
                <LabelDescription>Descripción
                        <textarea  onChange={handleChange} 
                            value={info.description} 
                            //rows="4" 
                            //cols="50" 
                            placeholder="Escribir aquí" 
                            required
                            type='text' 
                            name='description'>
                        </textarea >
                </LabelDescription>                                
            </Description>         
            
            
        </Card>
        // </form>
        // </Container>
    );
}

export default Administration;