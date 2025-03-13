import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Error from "./pages/Error";
import NavBar from "./components/NavBar";
import DetalleProducto from "./pages/DetalleProducto";
import Cart from "./pages/Cart";
import "./App.css"

function App() {
  return (
    
    <BrowserRouter>
      <NavBar/>
      <Routes> 
          <Route path="/" element={<Layout/>}/> 
          <Route path="/category/:categoryId" element={<Layout/>} /> 
          <Route path="/item/:productoId" element={<DetalleProducto/>}/>   
          <Route path="/item/itemDetails/:productoId" element={<Cart/>}/>  
          <Route path="*" element={<Error/>} />
      </Routes>      
    </BrowserRouter>

  );
}


export default App; 