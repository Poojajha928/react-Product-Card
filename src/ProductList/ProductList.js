import ProductCard from "../ProductCard/ProductCard";
import {useEffect,useState} from "react";

function ProductList ({cart,increaseQuantity,decreasedQuantity}){
    const [isLoading, setIsLoading] = useState(true);
    const [allProduct, setAllProduct] = useState([]);
    useEffect(()=>{
        fetch('https://602fc537a1e9d20017af105e.mockapi.io/api/v1//products').then(function(response){
            return response.json()
        }).then(function(res){
            setAllProduct(res);
            setIsLoading(false);
        })
    })
    if(isLoading){
        return (
            <div className= "Loading">
                <img
                    alt = "Loading"
                     src = "/Images/VAyR.gif"
                />
            </div>
        )
    }else {
        return (
            <div className= "products">
                {allProduct.map(function(product){
                    return <ProductCard product = {product}
                                        cart = {cart}
                                        increaseQuantity = {increaseQuantity}
                                        decreasedQuantity = {decreasedQuantity}
                    ></ProductCard>
                })}
            </div>
        )
    }
}

export default ProductList