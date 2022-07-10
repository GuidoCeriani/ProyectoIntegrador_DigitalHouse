import { useState, useContext, useEffect } from "react";
import { DataContext } from "../../Context/DataProvider";
import { types } from "../../Context/dataReducer";
import { PolicyWrapper} from "./Policy.styles"
import { LabelTextArea } from "../Administration/AdministrationStyle";

const Policy = () => {

  const [state, dispatch] = useContext(DataContext)
  const {newProductData} = state

  const [policies, setPolicies] = useState({
    norms: '',
    healthAndSecurity: '',
    cancellationPolicy: ''
  })

  const policiesHandler = (e)=>{
    setPolicies(
      {...policies,
      [e.target.name]: e.target.value
    });
  }

  
  useEffect(()=>{
    dispatch({
      type: types.addPolicies,
      payload: policies
  })
  },[dispatch,policies])

  return (
    <PolicyWrapper>
      <div>
        <h4>Normas de la casa</h4>
        <LabelTextArea>
          Descripción
          <textarea 
            value={policies.norms}
            name="norms"
            //rows={10}
            onChange={(e)=>policiesHandler(e)}
            placeholder="Escriba aquí"
          />
        </LabelTextArea>
      </div>
      <div>
        <h4>Salud y seguridad</h4>
        <LabelTextArea>
          Descripción
          <textarea
           value={policies.healthAndSecurity}
           name="healthAndSecurity"
           //rows={10}   
           onChange={(e)=>policiesHandler(e)}  
           placeholder="Escriba aquí"
          />          
        </LabelTextArea>
      </div>
      <div>
        <h4>Política de cancelación</h4>
        <LabelTextArea>
          Descripción
          <textarea
           value={policies.cancellationPolicy}
           name="cancellationPolicy"
           //rows={10}  
           onChange={(e)=>policiesHandler(e)}
           placeholder="Escriba aquí"
          />
        </LabelTextArea>
      </div>
    </PolicyWrapper>
  );
};

export default Policy;
