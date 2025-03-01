import { addDoc, collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "./config/firebase"; 
import { useEffect, useState } from "react";

function App() {

  const [itemList, setItemList] = useState([]);
  const [newItemTitulo, setNewItemTitulo] = useState('');
  const [updateName, setUpdateName] = useState('');
  const [newItemDescripcion, setNewItemDescripcion] = useState(0);
  const [newItemPrecio, setNewItemPrecio] = useState(0);
  const [newItemImagen, setNewItemImagen] = useState('');

  const itemsCollectionRef = collection(db, 'items');
  
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

  const onSubmitItem = async () =>{
    await addDoc(itemsCollectionRef, {
        titulo: newItemTitulo,
        descripcion: newItemDescripcion,
        precio: newItemPrecio,
        imagen: newItemImagen
    });

    getItemsList();
  }

  const onDeleteItem =async(id) => {
    const itemDoc = doc(db, "items", id)
    await deleteDoc(itemDoc);
    getItemsList();
  }

  const updatedItemNombre = async(id) =>{
    const itemDoc = doc(db,"items", id);
    await updateDoc(itemDoc, {titulo: updateName});
    
  }

  return (
    <div className="App">

      <div>
        <h2>Nuevo producto</h2>
        <imput placeholder="Titulo" onChange={(e)=>setNewItemTitulo(e.target.value)}/>
        <imput placeholder="Descripcion" onChange={(e)=>setNewItemDescripcion(e.target.value)}/>
        <imput placeholder="precio" onChange={(e)=>setNewItemPrecio(Number(e.target.value))}/>
        <imput placeholder="URL imagen" onChange={(e)=>setNewItemImagen(e.target.value)}/>
        <button onClick={ onSubmitItem }>Guardar</button>
      </div>

      <div>
        {itemList.map(item =>(
          <div key={item.id}>  
            <h2>{item.title}</h2>
            <p>{item.description}</p>          
            <p>{item.price}</p>
            <img src={item.image}/>
            <button onClick={ ()=>onDeleteItem(item.id) }>Borrar</button>
            <imput placeholder="Nuevo nombre" onChange={(e) => setUpdateName(e.target.value)}/>
            <button onClick={()=>updatedItemNombre(item.id)}>Modificar</button>
          </div>
        ))}
      </div> 

    </div>
  );
}

export default App;
