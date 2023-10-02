import './App.css';
import ProductList from "./ProductList/ProductList";
import {useState} from 'react'
function App() {
    const [cart, setCart] = useState({})
    console.log(cart);
    function increaseQuantity(product){
        const newCart = {...cart}
        if(!newCart[product.id]) {
            newCart[product.id] = {
                id: product.id,
                title: product.title,
                quantity: 1,
                price: product.price.value
            }
        }
        else{
            newCart[product.id].quantity +=1;
        }
        setCart(newCart);
        }
        function decreasedQuantity(product){
        const newCart = {...cart}
        if(newCart[product.id].quantity>0){
            newCart[product.id].quantity -=1;
        }
        else{
            delete newCart[product.id];
        }
        setCart((newCart))
        }
  return (
    <div className="App">
          <ProductList cart={cart} increaseQuantity = {increaseQuantity} decreasedQuantity = {decreasedQuantity} />
    </div>
  );
}

export default App;
