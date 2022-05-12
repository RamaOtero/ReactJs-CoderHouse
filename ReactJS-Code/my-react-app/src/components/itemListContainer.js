import React from "react";
import { useEffect, useState } from "react";
import { prod } from './productos';
import ItemList from './itemList';

const ItemListContainer = ({greetings}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setTimeout (() => {
        const data = new Promise((resolve, reject) => {
            resolve(prod);
        });
        data.then((data) => {
            setItems(data);
        });
        data.catch((err) => {
            console.log(err);
        });
        data.finally(() => {
            setLoading(false)
        });
      }, 2000);
     }, []);

       return (
           <div>
               <h1> Galeria de Arte {greetings} </h1>
               <ItemList items={items} />
           </div>
       );
    }

export default ItemListContainer;