import { collection, getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../config/firebase";
import "./Cards.css";

function DetalleProducto(){

    

    /*const producto = listaProductos.find((producto)=>producto.id ==productoId);*/
/*
    const {productoId} = useParams();
    const [producto, setProducto] = useState();

    const getItemsList = async () =>{

        const productoRef = doc(db, "productos", productoId); 
        const productoSnap = await getDoc(productoRef);
        setProducto({ id: productoSnap.id, ...productoSnap.data() });
        console.log(productoSnap)
    }
    
    getItemsList();*/

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

    
    
    console.log(producto)

    if (!producto) return;

    return (
        <div className="detalle">
            <h2>{producto.title}</h2>
            <div className="galeria producto">
                <article className="card-producto">
                    <img src={producto.image} alt= {producto.description}/>
                    <p>$ {producto.price}</p>
                    <Link to={`/category/${producto.category}`}>Volver</Link>
                </article>                
            </div>       
        </div>
    )
}

export default DetalleProducto;