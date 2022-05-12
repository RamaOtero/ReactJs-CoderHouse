import React from "react";

const Item = ({ item }) => {

    const { name, price, image} = item;
    return (
        <div className="item">
            <img src={image} alt={name} />
            <h5> {name} </h5>
            <p> {price} </p>
        </div>
    );
};

export default Item;