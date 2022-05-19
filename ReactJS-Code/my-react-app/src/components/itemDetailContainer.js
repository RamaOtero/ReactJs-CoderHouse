import React, { useEffect, useState } from "react";
import ItemDetail from './ItemDetail';
import { traerProducto } from './productos';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    useEffect(() =>{
        traerProducto()
            .then((res) => {
                setProduct(res);
            })
            .catch((error) => console.error(error));
    } , []);

    return (
        <div>
            <ItemDetail product={product} />
        </div>
    )




};

export default ItemDetailContainer;