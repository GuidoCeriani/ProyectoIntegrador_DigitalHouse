import { Main } from "./ProductAdmin.styles"
import { Header } from "../../Components/SpecificProduct/SpecificProduct"
import ProductForm from "../../Components/ProductAdmin/ProductForm"

const ProductAdmin =()=>{
    return(
        <Main>
            <Header
                isAdminHeader={true}
                title={"Administración"}
            />
            <h2>Crear propiedad</h2>
            <ProductForm/>
        </Main>
    )
}

export default ProductAdmin