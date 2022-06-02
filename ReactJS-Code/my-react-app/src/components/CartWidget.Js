import { Component } from "react"
import Cart from "./Assets/cart.png"

class CartWidget extends Component {
    render(){
        return(
            <div className="carrito">
                <img src={Cart} alt="carticon" />
                <span className="carritoIcon">
                    4
                </span>
            </div>
        )
    }
}

export default CartWidget