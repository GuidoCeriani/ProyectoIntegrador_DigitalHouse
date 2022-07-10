import "react-dates/initialize";
import './App.css';
import Home from './Views/Home/Home';
import Login from './Views/Login/Login';
import Registry from './Views/Registry/Registry';
import ProductPage from './Views/Product/Product';
import Success from './Views/Success/Success.js';
import GlobalStyles from './styles/global';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import MainLayout from './Layout/MainLayout';
import DataProvider from "./Context/DataProvider";
import Booking from "./Views/Booking/Booking"
import Administration from "./Views/Administration/Administration.js";
import moment from "moment/locale/es"
import ProductSuccess from "./Views/Success/ProductSuccess.js";



function App() {  
  return (
    <BrowserRouter>
      <DataProvider>
        <MainLayout>
          <Routes>
              <Route exact path="/" element={<Navigate replace to="/home"/> } />
              <Route exact path="/home" element={<Home/>} />   
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/register" element={<Registry/>}/>
              <Route exact path="/products/:id" element={<ProductPage/>}/>
              <Route exact path="/products/:id/booking" element={<Booking/>}/>              
              <Route exact path="/success" element={<Success/>}/>
              <Route exact path="/ProductSuccess" element={<ProductSuccess/>}/>
              <Route exact path="/Administration" element={<Administration/>}/>
          </Routes>
        </MainLayout>
        <GlobalStyles/>
        
      </DataProvider>
    </BrowserRouter>
    
  );
}

export default App;
