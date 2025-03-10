import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Cards.css";

function Layout(){

    const [itemList, setItemList] = useState([]);
    const itemsCollectionRef = collection(db, 'items');

    const { categoryId } = useParams();
    const productosFiltrados = categoryId ? itemList.filter((producto) => producto.category === categoryId): itemList;


    const getItemsList = async () =>{
        const data = await getDocs(itemsCollectionRef);
    
        const filteredData = data.docs.map( doc =>{
        return{
            id: doc.id,
            ...doc.data()
        }
        });
        setItemList(filteredData);
    }
    
    useEffect(() =>{    
        getItemsList();
    },[])

    return(

        <div className="container-card">     
                {productosFiltrados.map((item) => {
                return(
                    <Link to={`/item/${item.id}`}> 
                        <div className="card" key={item.id}>
                            <img src={item.image}/>
                            <div className="card-details">
                                <p>{item.title}</p>
                                <p>{item.price}</p>
                                <button>Buy Now!</button>
                            </div>            
                        </div>
                    </Link> 
                );
                })} 
            </div>

        /*<div>
            {itemList.map(item =>(
            <div key={item.id}>  
                <h2>{item.title}</h2>
                <p>{item.description}</p>          
                <p>{item.price}</p>
                <img src={item.image}/>
            </div>
            ))}
        </div>

        <div className="container-card">
            
                {itemList.map(item =>(
                    <a href="#">
                        <div className="card" key={item.id}>
                            <img src={item.image}/>
                            <div className="card-details">
                                <p>{item.title}</p>
                                <p>{item.price}</p>
                                <button>Buy Now!</button>
                            </div>            
                        </div>
                    </a> 
                ))}            
        </div>  */ 
        
        /*
        <div className="container-card">
            
                {productosFiltrados.map(item =>(
                    <a href="#">
                        <div className="card" key={item.id}>
                            <img src={item.image}/>
                            <div className="card-details">
                                <p>{item.title}</p>
                                <p>{item.price}</p>
                                <button>Buy Now!</button>
                            </div>            
                        </div>
                    </a> 
                ))}            
        </div> 
        */

        /*<div>        
            <div className="container-card">     
                {productosFiltrados.map((item) => {
                return(
                <a href="#">
                        <div className="card" key={item.id}>
                            <img src={item.image}/>
                            <div className="card-details">
                                <p>{item.title}</p>
                                <p>{item.price}</p>
                                <button>Buy Now!</button>
                            </div>            
                        </div>
                    </a>
                );
                })} 
            </div>
            <footer>@Todos los derechos reservados 2025</footer>
        </div>*/
    );
}

export default Layout;