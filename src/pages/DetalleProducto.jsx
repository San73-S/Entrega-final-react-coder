import { collection, getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../config/firebase";
import "./Cards.css";
import "./DetalleProducto.css"
import iconCerrar from '../assets/images/cerrar.png';
import AddItemButton from "../components/AddItemButton";


function DetalleProducto(){

    const { productoId } = useParams();
    const [producto, setProducto] = useState();

    useEffect(() => {        

        const getItemsList = async () => {
        const productoRef = doc(db, "items", productoId);
        const productoSnap = await getDoc(productoRef);

        setProducto({ id: productoSnap.id, ...productoSnap.data() });
        };

        getItemsList();
    }, [productoId]);

    if (!producto) return;

    return (
        <div className="container-item">
            <div className="item-details">
                <div className="top-card">
                    <div className="card">
                        <img src={producto.image} alt= {producto.description}/>                  
                    </div>

                    <div className="details">
                        <Link to={`/category/${producto.category}`}><img src={iconCerrar} alt="icono Cerrar" /></Link>
                        <h1>{producto.title}</h1>                        
                        <p>$ {producto.price}</p>
                        <AddItemButton></AddItemButton>                                       
                        <button>Buy Now!</button>                        
                    </div>

                </div>
                
                <div class="description">
                    <h2>Description Product</h2>
                    <p>{producto.description}</p>
                </div>

            </div>      
        </div>
    )
}

export default DetalleProducto;