function AddItemButton({quantity, setQuantity}){

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