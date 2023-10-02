import AddToCart from "../AddToCart/AddToCart";
import Rating from "../Rating/Rating";
function ProductCard (props){
    return (
        <div className="ProductCards">
            <h3> {props.product.title}</h3>
            <h5>{props.product.price.value}</h5>
            <AddToCart cart={props.cart} increaseQuantity = {props.increaseQuantity} product = {props.product} decreasedQuantity = {props.decreasedQuantity}/>
            <Rating rating={props.product.rating.value} maxRating={5} />
        </div>

    )
}

export default ProductCard