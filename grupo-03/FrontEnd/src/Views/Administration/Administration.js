import React, { useEffect,useState, useContext } from "react";
//import AdministrationForm from "../../Components/Administration/Administration.jsx";
import { Header, Policy } from "../../Components/SpecificProduct/SpecificProduct";
import { useNavigate } from "react-router-dom"; 
import { Main } from "./ProductAdmin.styles.js"
import AdministrationForm from "../../Components/ProductAdmin/AdministrationForm.jsx";
import { DataContext } from "../../Context/DataProvider";

const Administration =()=>{
    const navigate = useNavigate()
    const [state, dispatch] = useContext(DataContext)
    const {userData} = state

    const verifyAccess = ()=>{
        if(userData === null){
            navigate("/home")
        }
        if(userData !== null) {
            if(userData.role.name !=="ROLE_ADMIN"){
                navigate("/home")
            }
        }
        return
    }
   
    verifyAccess()

    return(
        <Main>
            <Header
                isAdminHeader={true}
                title={"Administración"}
            />
            <h2>Crear propiedad</h2>
            <AdministrationForm/>
        </Main>
    )
}

export default Administration;