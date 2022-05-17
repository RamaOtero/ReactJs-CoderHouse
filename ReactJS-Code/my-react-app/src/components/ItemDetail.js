import React from "react";
import '../App.css';

const ItemDetail = ({ product }) => {
    return (
        <div className="containerDetail">
            <div>
                <img src={product.img} alt={product.name} />
            </div>
            <div>
                <h3>{product.name}</h3>
                <h4>{product.price}</h4>
                <h5>{product.info}</h5>
            </div>
        </div>
    )
}

export default ItemDetail