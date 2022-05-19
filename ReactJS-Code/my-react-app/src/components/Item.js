import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import { product } from './productos';

const Item = ({ item }) => {

    const { name, price, image} = item;
    return (
        <div className="item">
            <img src={image} alt={name} className="itemImg" />
            <h5> {name} </h5>
            <p> $ {price} </p>
            <Link to={`/item/${product.id}`}> 
            <button>Ver mas</button>
            </Link>
        </div>
    );
};

export default Item;