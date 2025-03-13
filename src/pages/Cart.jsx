import { getDoc, doc } from "firebase/firestore";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import iconCancelar from '../assets/images/cerrar.png';
import "./Cart.css";


function Cart(){

    const { productoId } = useParams();
    const [producto, setProducto] = useState();
    const location = useLocation();
    const cantidad = location.state?.cantidad || 1;

    useEffect(() => {        

        const getItemsList = async () => {
        const productoRef = doc(db, "items", productoId);
        const productoSnap = await getDoc(productoRef);

        setProducto({ id: productoSnap.id, ...productoSnap.data() });
        };

        getItemsList();
    }, [productoId]);

    if (!producto) return;

    console.log(producto);
    console.log("En cart" + cantidad);

    return(
        <div className="container-card cart">

            <div className="cart-top">
                <img className="cart-cancel" src={iconCancelar} alt="icono Cancelar" />
                <p className="cart-title">{producto.title}</p>                
            </div>            

            <div className="cart-item">
                <img src={producto.image} alt= {producto.title}/>                
                <p>Cantidad: {cantidad} und. </p>
                <p>Precio x und: ${producto.price}</p>
                <p>Total: $ { (parseInt(producto.price) * cantidad ) }</p>
            </div>

            <button className="cart-check">Checkout</button>     

        </div>
    )
};

export default Cart;