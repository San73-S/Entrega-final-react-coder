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
                                <p>${item.price}</p>
                                <button>Buy Now!</button>
                            </div>            
                        </div>
                    </Link> 
                );
                })} 
        </div>
    );
}

export default Layout;