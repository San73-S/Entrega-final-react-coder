import { getDoc, doc } from "firebase/firestore";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import "./Cards.css";
import "./DetalleProducto.css"
import iconCerrar from '../assets/images/cerrar.png';
import AddItemButton from "../components/AddItemButton";


function DetalleProducto(){

    const [quantity, setQuantity] = useState(1);

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
                        <img src={producto.image} alt= {producto.title}/>                  
                    </div>

                    <div className="details">
                        <Link to={`/category/${producto.category}`}><img src={iconCerrar} alt="icono Cerrar" /></Link>
                        <h1>{producto.title}</h1>   
                        <AddItemButton quantity={quantity} setQuantity={setQuantity} />
                        <Link className="buttonBuy" to={`/item/itemDetails/${producto.id}`} state={{cantidad:quantity}}>
                            <p className="buyNow">Buy Now!</p>
                        </Link>                         
                    </div>

                </div>
                
                <div className="description">
                    <h2>Description Product</h2>
                    <p>{producto.description}</p>
                </div>

            </div>      
        </div>
    )
}

export default DetalleProducto;