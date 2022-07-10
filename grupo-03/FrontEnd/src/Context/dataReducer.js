

const initialState = {
    urlProducts : "http://ec2-18-233-111-51.compute-1.amazonaws.com/products",
    city: "",
    category: "",    
    categoryBox: [],
    selectedDays: {
        startDate: "",
        endDate: ""
    },
    isLogged: sessionStorage.getItem("user") ? true : false,
    isAccessDenied: false,
    isErrorBookign: false,      
    userData: JSON.parse(sessionStorage.getItem("dataUser")),
    features: null,
    newProductData: {
        general :{
            Name: '',
            category: '',
            address: '',
            city: '',
            descriptionTitle:'',
            description:''
        },        
        features: [],
        images: [],
        policy: {
            norms: '',
            healthAndSecurity: '',
            cancellationPolicy: ''
        }
    }
}

const types = {
    allProducts : "All products",
    productsCity : "products by city",
    productsCategory: "products by category",   
    searchByDates: "products by range dates", 
    searchByDatesAndCity: "products by range dates and city", 
    categoryContanier: "container for printing styles in category",   
    dateRange: "selected days in calendar",
    accessDenied: "User needs to login for booking",
    logged: "User is logged",
    errorBooking: "Ocurred an error while submit booking",
    userCredentials: "User credentials" ,
    featureProduct: "features to create product",
    addInfoProdcut: "add info for creating product",
    addFeature: "add feature for creating product",
    removeFeature: "remove features for creating products",
    addImages: "add images for creating product",
    removeImages: "remove images for creating products",
    addPolicies: "add policies for creating product"
}

const dataReducer=(state, action,)=>{
    switch (action.type) {

        //case types.allProducts:               
            //return initialState;    

        case types.allProducts:               
            return{
                ...state,
                urlProducts : "http://ec2-18-233-111-51.compute-1.amazonaws.com/products",
                city: "",
                category: "",    
                categoryBox: [],
                selectedDays: {
                    startDate: "",
                    endDate: ""
                },
                isLogged: sessionStorage.getItem("user") ? true : false,
            };        

        case types.productsCity:
            return{  
                ...state,                             
                urlProducts: "http://ec2-18-233-111-51.compute-1.amazonaws.com/products?city=",
                city: action.payload,
                category: "",                 
                categoryBox: [],                 
            }
            
        case types.productsCategory:
            return{
                ...state,
                urlProducts: "http://ec2-18-233-111-51.compute-1.amazonaws.com/products?category=",
                city: "",
                category: action.payload                 
            }
        
        case types.categoryContanier:
            return{
                ...state,
                categoryBox: [...state.categoryBox, action.payload]                
            }   
        case types.searchByDates:
            return{
                ...state,
                urlProducts : `http://ec2-18-233-111-51.compute-1.amazonaws.com/products/?checkIn=${action.payload.startDate}&checkOut=${action.payload.endDate}`,
                selectedDays: action.payload,
                category: "",                 
                categoryBox: [],
            }
        case types.searchByDatesAndCity:
            return{
                ...state,
                urlProducts : `http://ec2-18-233-111-51.compute-1.amazonaws.com/products/?checkIn=${action.payload.startDate}&checkOut=${action.payload.endDate}&name=${action.payload.city}`,
                //urlProducts : `hola`,
                selectedDays: action.payload,
                //city: action.payload,
                category: "",                 
                categoryBox: [],
            }

        case types.dateRange:
            return{
                ...state,
                selectedDays: action.payload
            }
        
        case types.accessDenied:
            return{
                ...state,
                isAccessDenied: action.payload
            }

        case types.logged:
            return{
                ...state,
                isLogged: true
            }

        case types.errorBooking:
            return{
                ...state,
                isErrorBookign: true
            }

        case types.userCredentials:
            return{
                ...state,
                userData: action.payload,
                isLogged: true
            }    
        
        case types.featureProduct:
            return{
                ...state,
                features: action.payload,
            }

        case types.addInfoProdcut:
            return{
                ...state,
                newProductData: {
                    ...state.newProductData,
                    //general :  [...state.newProductData.general, action.payload]
                    general :  action.payload
                }   
            }

        case types.addPolicies:
            return{
                ...state,
                newProductData: {
                    ...state.newProductData,                    
                    policy :  action.payload
                }   
            }            
        
        case types.addFeature:
            return{
                ...state,
                newProductData: {
                    ...state.newProductData,
                    features :  [...state.newProductData.features, action.payload]
                }                                                
            } 
        // case types.removeFeature:
        //     return{
        //         ...state,
        //         newProductFeatures: action.payload                            
        //     } 
        case types.removeFeature:
            return{
                ...state,
                newProductData: {
                    ...state.newProductData,
                    features :  action.payload
                }                             
            } 
        case types.addImages:
            return{
                ...state,
                newProductData: {
                    ...state.newProductData,                    
                    images: [...state.newProductData.images, action.payload]
                }                                                
            } 
        case types.removeImages:
            return{
                ...state,
                newProductData: {
                    ...state.newProductData,
                    images :  action.payload
                }                             
            } 
        
            
            
        default:
            return state
    }
}

export {initialState, types};
export default dataReducer;