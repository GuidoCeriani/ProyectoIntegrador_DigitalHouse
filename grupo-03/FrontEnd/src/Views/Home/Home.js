import React from "react";
import {Main} from "./Home.styles"
import Categories from "../../Components/Categories/Categories";
import Products from "../../Components/Products/Products";
import SearchBar from "../../Components/SearchBar/SearchBar";



const Home =()=>{
    
    
    return(

        <Main>
            <SearchBar/>
            <Categories/>        
            <Products/>
        </Main>           
        

    )
}

export default Home