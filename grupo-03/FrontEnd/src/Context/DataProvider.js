import { createContext,useReducer } from "react"
import dataReducer,{initialState} from "./dataReducer";

const DataContext = createContext();

const DataProvider =({children})=>{


    const [state, dispatch] = useReducer(dataReducer, initialState)

    return(

        <DataContext.Provider value={[state, dispatch]}>
            {children}
        </DataContext.Provider>
    )


}

export {DataContext};
export default DataProvider;