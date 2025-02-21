import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import { useEffect, useState } from "react";

function App() {

  const itemsCollectionRef = collection(db, 'items');
  const [itemList, setItemList] = useState([]);
  
  useEffect(() =>{
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
    getItemsList();
  },[])

  return (
    <div className="App">
      
      {itemList.map(item =>(
        <div key={item.id}>  
          <h2>{item.title}</h2>
          <p>{item.description}</p>          
          <p>{item.price}</p>
          <img src={item.image}/>
        </div>
      ))}

    </div>
  );
}

export default App;
