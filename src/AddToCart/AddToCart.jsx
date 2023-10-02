function AddToCart({cart, increaseQuantity, product,decreasedQuantity}) {
    function addQuantity() {
        increaseQuantity(product);
    }
    function removeQuantity(){
        decreasedQuantity(product);
    }

    var quantity = cart[product.id] ? cart[product.id].quantity : 0;
    if (quantity > 0) {
        return (
            <div>
                <button onClick={addQuantity}>+</button>
                <span>{quantity}</span>
                <button onClick={removeQuantity}>-</button>
            </div>
        )
    } else {
        return (<div>
                <button onClick={addQuantity}>Add To Cart</button>
            </div>
        )
    }
}

export default AddToCart