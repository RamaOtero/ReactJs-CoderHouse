import React, { useEffect, useState } from "react";
import ItemDetail from './ItemDetail';
import { traerProducto } from './productos';
import Counter from './itemCount';

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
            <Counter initial="1" stock="10" />
        </div>
    )




};

export default ItemDetailContainer;