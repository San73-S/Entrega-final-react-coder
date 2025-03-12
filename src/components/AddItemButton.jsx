import { useState } from "react";

function AddItemButton({initial, onAdd}){
    const [quantity, setQuantity] = useState(1);

    const incremento = () => {
        setQuantity(quantity + 1);
    };
    
    const decremento = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return(
        <div className="cant-button">
                <button onClick={decremento}>-</button>
                <p>{quantity}</p>
            <button onClick={incremento}>+</button>
        </div>  
    );
}

export default AddItemButton;