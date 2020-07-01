import React from "react";
import {BrowserRouter} from 'react-router-dom';
// import Swal from "sweetalert2";
import Header from "./header";
import Main from "./main";
 import Footer from './footer';




function App() {
 


  return (
    <>
    <BrowserRouter> 
   <Header/> 
    <Main />
   <Footer/>

   </BrowserRouter>
    </>) ;
}

export default App;
